const crypto = require('crypto');
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const db = require('../controllers/dbController');
const { sendEmailPayload } = require('../controllers/emailController');

const apiRouter = express.Router();
const pageRouter = express.Router();

const TOKEN_BYTES = 32;
const DEFAULT_EXPIRES_DAYS = 14;

function nowIso() {
  return new Date().toISOString();
}

function addDays(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString();
}

function tokenHash(token) {
  return crypto.createHash('sha256').update(String(token || '')).digest('hex');
}

function createToken() {
  return crypto.randomBytes(TOKEN_BYTES).toString('base64url');
}

function normalizeBase64Pdf(value) {
  const raw = String(value || '').trim();
  const match = raw.match(/^data:application\/pdf;base64,(.+)$/i);
  return match ? match[1] : raw;
}

function getPublicBaseUrl(req) {
  const configured = String(process.env.PUBLIC_APP_BASE_URL || process.env.APP_BASE_URL || '').trim();
  if (configured) return configured.replace(/\/+$/, '');

  const proto = req.headers['x-forwarded-proto'] || req.protocol || 'https';
  const host = req.headers['x-forwarded-host'] || req.get('host');
  return `${proto}://${host}`.replace(/\/+$/, '');
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeText(value, max = 5000) {
  return String(value || '').trim().slice(0, max);
}

function sanitizeSignatureDataUrl(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  if (!/^data:image\/png;base64,/i.test(raw)) return '';
  // Keep the signature image small enough for the JSON-backed app state.
  return raw.length <= 350000 ? raw : '';
}

function findSigningRequest(state, token) {
  const hash = tokenHash(token);
  return (state.signingRequests || []).find((item) => item.tokenHash === hash) || null;
}

function publicSigningRequest(item) {
  if (!item) return null;
  return {
    id: item.id,
    type: item.type,
    status: item.status,
    projectId: item.projectId,
    vendorId: item.vendorId || '',
    invoiceId: item.invoiceId || '',
    waiverType: item.waiverType || '',
    recipientName: item.recipientName,
    recipientEmail: item.recipientEmail,
    subject: item.subject,
    filename: item.originalPdf?.filename || item.filename || 'document.pdf',
    sentAt: item.sentAt,
    viewedAt: item.viewedAt || null,
    signedAt: item.signedAt || null,
    expiresAt: item.expiresAt
  };
}

function isExpired(item) {
  return item?.expiresAt && new Date(item.expiresAt).getTime() < Date.now();
}

function appendAudit(item, event, req, extra = {}) {
  if (!item.auditTrail) item.auditTrail = [];
  item.auditTrail.push({
    id: uuidv4(),
    event,
    at: nowIso(),
    ip: req.ip || req.headers['x-forwarded-for'] || '',
    userAgent: req.headers['user-agent'] || '',
    ...extra
  });
}

function wrapPdfLine(line, maxLen = 92) {
  const text = String(line || '');
  if (!text) return [''];
  if (text.length <= maxLen) return [text];

  const parts = [];
  let remaining = text;
  while (remaining.length > maxLen) {
    let splitAt = remaining.lastIndexOf(' ', maxLen);
    if (splitAt < 20) splitAt = maxLen;
    parts.push(remaining.slice(0, splitAt));
    remaining = remaining.slice(splitAt).trimStart();
  }
  parts.push(remaining);
  return parts;
}

function escapePdfText(value) {
  return String(value || '')
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');
}

function buildSimpleTextPdfBuffer(text) {
  const lines = String(text || '')
    .replace(/\r\n/g, '\n')
    .split('\n')
    .flatMap((line) => wrapPdfLine(line));

  const pageWidth = 612;
  const pageHeight = 792;
  const left = 40;
  const top = 752;
  const lineHeight = 12;
  const bottom = 40;
  const usableLines = Math.max(1, Math.floor((top - bottom) / lineHeight));
  const pages = [];

  for (let i = 0; i < lines.length; i += usableLines) {
    pages.push(lines.slice(i, i + usableLines));
  }
  if (!pages.length) pages.push(['']);

  const objects = [];
  objects.push('<< /Type /Catalog /Pages 2 0 R >>');
  objects.push(`<< /Type /Pages /Kids [${pages.map((_, idx) => `${3 + idx * 2} 0 R`).join(' ')}] /Count ${pages.length} >>`);

  pages.forEach((pageLines, idx) => {
    const pageObjectId = 3 + idx * 2;
    const contentObjectId = pageObjectId + 1;
    const streamLines = ['BT', '/F1 10 Tf', `${left} ${top} Td`, `${lineHeight} TL`];
    pageLines.forEach((line, lineIndex) => {
      streamLines.push(`(${escapePdfText(line)}) Tj`);
      if (lineIndex < pageLines.length - 1) streamLines.push('T*');
    });
    streamLines.push('ET');
    const stream = streamLines.join('\n');

    objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${3 + pages.length * 2} 0 R >> >> /Contents ${contentObjectId} 0 R >>`);
    objects.push(`<< /Length ${Buffer.byteLength(stream, 'utf8')} >>\nstream\n${stream}\nendstream`);
  });

  objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>');

  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  objects.forEach((objectBody, idx) => {
    offsets.push(Buffer.byteLength(pdf, 'utf8'));
    pdf += `${idx + 1} 0 obj\n${objectBody}\nendobj\n`;
  });

  const xrefOffset = Buffer.byteLength(pdf, 'utf8');
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += '0000000000 65535 f \n';
  for (let i = 1; i < offsets.length; i += 1) {
    pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return Buffer.from(pdf, 'utf8');
}

function buildCertificatePdf(item, signature) {
  const text = [
    'LIVIO BUILDING SYSTEMS',
    'Electronic Signature Certificate',
    '',
    `Document: ${item.subject || item.originalPdf?.filename || item.type}`,
    `Document Type: ${item.type}`,
    `Signing Request ID: ${item.id}`,
    `Project ID: ${item.projectId || ''}`,
    item.vendorId ? `Vendor Contract ID: ${item.vendorId}` : '',
    item.invoiceId ? `Invoice ID: ${item.invoiceId}` : '',
    item.waiverType ? `Lien Waiver Type: ${item.waiverType}` : '',
    '',
    `Signer Name: ${signature.typedName}`,
    `Signer Title: ${signature.title || ''}`,
    `Signer Email: ${item.recipientEmail}`,
    `Signed At: ${item.signedAt}`,
    `IP Address: ${signature.ip || ''}`,
    `User Agent: ${signature.userAgent || ''}`,
    `Drawn Signature Captured: ${signature.signatureDataUrl ? 'Yes' : 'No'}`,
    '',
    'Consent:',
    'The signer reviewed the electronic document and affirmatively agreed to sign electronically.',
    '',
    'Typed Signature:',
    signature.typedName,
    '',
    'Audit Trail:',
    ...(item.auditTrail || []).map((event) => `${event.at} - ${event.event} - ${event.ip || ''}`)
  ].filter((line) => line !== '').join('\n');

  return buildSimpleTextPdfBuffer(text).toString('base64');
}

function makeSignedFile(item) {
  return {
    id: uuidv4(),
    name: item.signedCertificate.filename,
    filename: item.signedCertificate.filename,
    size: Math.ceil(String(item.signedCertificate.content || '').length * 0.75),
    type: 'application/pdf',
    contentType: 'application/pdf',
    data: `data:application/pdf;base64,${item.signedCertificate.content}`,
    at: item.signedAt,
    signingRequestId: item.id,
    signedAt: item.signedAt,
    signedBy: item.signature?.typedName || item.recipientName || ''
  };
}

function applySignatureToProject(state, item) {
  const project = (state.projects || []).find((p) => p.id === item.projectId);
  if (!project) return;

  const signedFile = makeSignedFile(item);
  if (item.type === 'vendor_contract') {
    const vendor = (project.vendors || []).find((v) => v.id === item.vendorId);
    if (!vendor) return;
    vendor.status = 'signed';
    vendor.signedAt = item.signedAt;
    vendor.signedBy = item.signature?.typedName || item.recipientName || '';
    vendor.signatureName = item.signature?.typedName || item.recipientName || '';
    vendor.signatureTitle = item.signature?.title || '';
    vendor.signedMethod = 'secure-link';
    vendor.signingRequestId = item.id;
    vendor.files = [signedFile, ...(vendor.files || []).filter((file) => file.signingRequestId !== item.id)];
    return;
  }

  if (item.type === 'lien_waiver') {
    const invoice = (project.invoices || []).find((inv) => inv.id === item.invoiceId);
    if (!invoice) return;
    if (!invoice.lienSigned) invoice.lienSigned = [];
    invoice.lienSigned = [
      {
        id: uuidv4(),
        signingRequestId: item.id,
        type: item.waiverType || 'Lien Waiver',
        signedAt: item.signedAt,
        signedBy: item.signature?.typedName || item.recipientName || '',
        signedTitle: item.signature?.title || '',
        partialPaymentId: item.partialPaymentId || ''
      },
      ...invoice.lienSigned.filter((entry) => entry.signingRequestId !== item.id)
    ];
    invoice.lienFiles = [signedFile, ...(invoice.lienFiles || []).filter((file) => file.signingRequestId !== item.id)];
  }
}

function documentTitle(item) {
  if (item.type === 'lien_waiver') return item.waiverType ? `${item.waiverType} Lien Waiver` : 'Lien Waiver';
  return 'Vendor Contract';
}

function renderSigningPage(item, token) {
  const title = documentTitle(item);
  const disabled = item.status === 'signed' || isExpired(item);
  const statusText = item.status === 'signed'
    ? 'This document has already been signed.'
    : isExpired(item)
      ? 'This signing link has expired.'
      : 'Review the document, then sign below.';

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>${escapeHtml(title)} - Livio Signing</title>
  <style>
    body{margin:0;font-family:Arial,sans-serif;background:#f6f7f9;color:#1d2430}
    header{background:#0c1b2e;color:#fff;padding:18px 24px}
    main{max-width:1180px;margin:0 auto;padding:22px}
    .grid{display:grid;grid-template-columns:minmax(0,1fr) 390px;gap:18px}
    .panel{background:#fff;border:1px solid #d8dde6;border-radius:8px;box-shadow:0 8px 20px rgba(20,30,45,.06)}
    .doc{height:calc(100vh - 150px);min-height:560px;overflow:hidden}
    iframe{width:100%;height:100%;border:0;border-radius:8px}
    .form{padding:18px}
    label{display:block;font-size:11px;font-weight:700;text-transform:uppercase;color:#607086;margin:14px 0 5px}
    input{width:100%;box-sizing:border-box;padding:11px;border:1px solid #cbd3df;border-radius:6px;font-size:14px}
    .signature-box{border:1px solid #cbd3df;border-radius:7px;background:#fff;margin-top:6px;overflow:hidden}
    canvas{display:block;width:100%;height:150px;touch-action:none;background:linear-gradient(#fff,#fff),repeating-linear-gradient(0deg,transparent,transparent 35px,#f1f4f8 36px)}
    .sig-actions{display:flex;gap:8px;border-top:1px solid #edf0f5;padding:8px;background:#fafbfc}
    .sig-actions button{width:auto;flex:1;background:#eef5ff;color:#1a6bc4;border:1px solid #bfdbfe;padding:8px}
    .typed-preview{font-family:"Brush Script MT","Segoe Script",cursive;font-size:28px;color:#0c1b2e;padding:12px 14px;border:1px dashed #cbd3df;border-radius:7px;background:#fbfcfe;min-height:38px}
    .check{display:flex;gap:10px;align-items:flex-start;margin:16px 0;font-size:13px;line-height:1.45}
    .check input{width:auto;margin-top:2px}
    button{width:100%;padding:12px 14px;border:0;border-radius:6px;background:#1a6bc4;color:#fff;font-weight:700;cursor:pointer}
    button:disabled{background:#9aa8ba;cursor:not-allowed}
    .meta{font-size:12px;color:#607086;line-height:1.55;margin-top:8px}
    .status{padding:10px 12px;border-radius:6px;background:#eef5ff;color:#164c8a;font-size:13px;font-weight:700;margin-bottom:12px}
    .error{background:#fff1f1;color:#9d1c1c}
    @media(max-width:850px){.grid{grid-template-columns:1fr}.doc{height:60vh}}
  </style>
</head>
<body>
  <header>
    <div style="font-size:20px;font-weight:800">Livio Building Systems</div>
    <div style="font-size:13px;color:#a8c6e8;margin-top:2px">${escapeHtml(title)}</div>
  </header>
  <main>
    <div class="grid">
      <section class="panel doc">
        <iframe src="/api/signing/${encodeURIComponent(token)}/document" title="Document preview"></iframe>
      </section>
      <section class="panel form">
        <div id="status" class="status">${escapeHtml(statusText)}</div>
        <div style="font-size:18px;font-weight:800">${escapeHtml(title)}</div>
        <div class="meta">
          Recipient: ${escapeHtml(item.recipientName || item.recipientEmail)}<br/>
          Email: ${escapeHtml(item.recipientEmail)}<br/>
          Expires: ${escapeHtml(item.expiresAt ? new Date(item.expiresAt).toLocaleString() : '')}
        </div>
        <form id="signForm">
          <label for="typedName">Full Legal Name</label>
          <input id="typedName" name="typedName" autocomplete="name" required ${disabled ? 'disabled' : ''}/>
          <div class="typed-preview" id="typedPreview">Signature preview</div>
          <label for="title">Title</label>
          <input id="title" name="title" placeholder="Owner, Project Manager, Authorized Agent" ${disabled ? 'disabled' : ''}/>
          <label>Draw Signature</label>
          <div class="signature-box">
            <canvas id="signaturePad" width="700" height="260"></canvas>
            <div class="sig-actions">
              <button type="button" id="clearSignature" ${disabled ? 'disabled' : ''}>Clear</button>
              <button type="button" id="useTypedSignature" ${disabled ? 'disabled' : ''}>Use typed name</button>
            </div>
          </div>
          <div class="check">
            <input id="agreed" name="agreed" type="checkbox" required ${disabled ? 'disabled' : ''}/>
            <label for="agreed" style="margin:0;text-transform:none;font-size:13px;font-weight:600;color:#1d2430">I reviewed this document and agree to sign it electronically.</label>
          </div>
          <button type="submit" ${disabled ? 'disabled' : ''}>Sign Document</button>
        </form>
      </section>
    </div>
  </main>
  <script>
    const form=document.getElementById('signForm');
    const statusEl=document.getElementById('status');
    const typedNameEl=document.getElementById('typedName');
    const typedPreview=document.getElementById('typedPreview');
    const canvas=document.getElementById('signaturePad');
    const ctx=canvas.getContext('2d');
    let drawing=false;
    let hasDrawnSignature=false;

    function setupCanvas(){
      ctx.lineWidth=3;
      ctx.lineCap='round';
      ctx.lineJoin='round';
      ctx.strokeStyle='#0c1b2e';
    }
    function pointerPosition(event){
      const rect=canvas.getBoundingClientRect();
      const source=event.touches&&event.touches[0] ? event.touches[0] : event;
      return {
        x:(source.clientX-rect.left)*(canvas.width/rect.width),
        y:(source.clientY-rect.top)*(canvas.height/rect.height)
      };
    }
    function startDraw(event){
      if(${disabled ? 'true' : 'false'}) return;
      event.preventDefault();
      drawing=true;
      hasDrawnSignature=true;
      const pos=pointerPosition(event);
      ctx.beginPath();
      ctx.moveTo(pos.x,pos.y);
    }
    function draw(event){
      if(!drawing) return;
      event.preventDefault();
      const pos=pointerPosition(event);
      ctx.lineTo(pos.x,pos.y);
      ctx.stroke();
    }
    function stopDraw(){
      drawing=false;
    }
    function clearSignature(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      hasDrawnSignature=false;
    }
    function drawTypedSignature(){
      clearSignature();
      const name=(typedNameEl.value||'').trim();
      if(!name) return;
      ctx.font='54px "Brush Script MT", "Segoe Script", cursive';
      ctx.fillStyle='#0c1b2e';
      ctx.fillText(name,40,150);
      hasDrawnSignature=true;
    }
    function updateTypedPreview(){
      const name=(typedNameEl.value||'').trim();
      typedPreview.textContent=name||'Signature preview';
    }
    setupCanvas();
    typedNameEl.addEventListener('input',updateTypedPreview);
    canvas.addEventListener('mousedown',startDraw);
    canvas.addEventListener('mousemove',draw);
    window.addEventListener('mouseup',stopDraw);
    canvas.addEventListener('touchstart',startDraw,{passive:false});
    canvas.addEventListener('touchmove',draw,{passive:false});
    canvas.addEventListener('touchend',stopDraw);
    document.getElementById('clearSignature').addEventListener('click',clearSignature);
    document.getElementById('useTypedSignature').addEventListener('click',drawTypedSignature);

    form.addEventListener('submit',async(event)=>{
      event.preventDefault();
      if(!hasDrawnSignature){
        statusEl.className='status error';
        statusEl.textContent='Please draw your signature or click Use typed name.';
        return;
      }
      statusEl.className='status';
      statusEl.textContent='Submitting signature...';
      const body={
        typedName:document.getElementById('typedName').value,
        title:document.getElementById('title').value,
        agreed:document.getElementById('agreed').checked,
        signatureDataUrl:canvas.toDataURL('image/png')
      };
      try{
        const res=await fetch('/api/signing/${encodeURIComponent(token)}/sign',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(body)
        });
        const data=await res.json().catch(()=>({}));
        if(!res.ok) throw new Error(data.error||'Signature failed');
        statusEl.textContent='Signed successfully. You may close this page.';
        form.querySelectorAll('input,button').forEach(el=>el.disabled=true);
      }catch(err){
        statusEl.className='status error';
        statusEl.textContent=err.message||'Signature failed';
      }
    });
  </script>
</body>
</html>`;
}

apiRouter.post('/send', async (req, res) => {
  try {
    const body = req.body || {};
    const type = String(body.type || '').trim();
    if (!['vendor_contract', 'lien_waiver'].includes(type)) {
      return res.status(400).json({ error: 'type must be vendor_contract or lien_waiver' });
    }

    const recipientEmail = String(body.recipientEmail || body.to || '').trim();
    const recipientName = String(body.recipientName || '').trim();
    const projectId = String(body.projectId || '').trim();
    const attachment = body.attachment || {};
    const pdfContent = normalizeBase64Pdf(body.pdfBase64 || attachment.content);
    const filename = String(body.filename || attachment.filename || 'document.pdf').trim();
    const subject = sanitizeText(body.subject || (type === 'lien_waiver' ? 'Lien waiver for signature' : 'Contract for signature'), 300);
    const message = sanitizeText(body.message || '', 6000);

    if (!projectId) return res.status(400).json({ error: 'projectId is required' });
    if (!recipientEmail) return res.status(400).json({ error: 'recipientEmail is required' });
    if (!pdfContent) return res.status(400).json({ error: 'PDF attachment content is required' });
    if (type === 'vendor_contract' && !body.vendorId) return res.status(400).json({ error: 'vendorId is required for vendor contracts' });
    if (type === 'lien_waiver' && !body.invoiceId) return res.status(400).json({ error: 'invoiceId is required for lien waivers' });

    const state = await db.getAll();
    if (!state.signingRequests) state.signingRequests = [];

    const token = createToken();
    const baseUrl = getPublicBaseUrl(req);
    const signingUrl = `${baseUrl}/sign/${token}`;
    const item = {
      id: uuidv4(),
      tokenHash: tokenHash(token),
      type,
      status: 'sent',
      projectId,
      vendorId: String(body.vendorId || '').trim(),
      invoiceId: String(body.invoiceId || '').trim(),
      waiverType: String(body.waiverType || '').trim(),
      partialPaymentId: String(body.partialPaymentId || '').trim(),
      recipientName,
      recipientEmail,
      subject,
      message,
      originalPdf: {
        filename: filename.toLowerCase().endsWith('.pdf') ? filename : `${filename}.pdf`,
        contentType: 'application/pdf',
        content: pdfContent
      },
      sentAt: nowIso(),
      expiresAt: body.expiresAt || addDays(Number(body.expiresDays || DEFAULT_EXPIRES_DAYS)),
      auditTrail: []
    };
    appendAudit(item, 'sent', req, { recipientEmail });
    state.signingRequests.push(item);
    await db.saveAll(state);

    const emailMessage = [
      'ACTION REQUIRED: Review & digitally sign this document',
      '',
      signingUrl,
      '',
      message,
      '',
      'A PDF copy is attached for reference, but the signature must be completed using the secure link above.',
      'This link is unique to you. Please do not forward it.',
      '',
      'Thank you,',
      'Livio Building Systems'
    ].filter(Boolean).join('\n');

    await sendEmailPayload({
      to: recipientEmail,
      subject,
      message: emailMessage,
      attachments: [item.originalPdf],
      replyTo: process.env.EMAIL_REPLY_TO || 'ap@golivio.com',
      fromName: 'Livio Building Systems'
    });

    return res.json({
      ok: true,
      signingUrl,
      request: publicSigningRequest(item)
    });
  } catch (err) {
    console.error('Signing send error:', err);
    return res.status(500).json({ error: err.message || 'Could not send signing request' });
  }
});

apiRouter.get('/:token', async (req, res) => {
  const state = await db.getAll();
  const item = findSigningRequest(state, req.params.token);
  if (!item) return res.status(404).json({ error: 'Signing request not found' });
  return res.json(publicSigningRequest(item));
});

apiRouter.get('/:token/document', async (req, res) => {
  const state = await db.getAll();
  const item = findSigningRequest(state, req.params.token);
  if (!item) return res.status(404).send('Document not found');
  const pdf = item.originalPdf?.content;
  if (!pdf) return res.status(404).send('Document not found');
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `inline; filename="${item.originalPdf.filename || 'document.pdf'}"`);
  return res.send(Buffer.from(pdf, 'base64'));
});

apiRouter.post('/:token/sign', async (req, res) => {
  try {
    const typedName = sanitizeText(req.body?.typedName, 200);
    const title = sanitizeText(req.body?.title, 200);
    const signatureDataUrl = sanitizeSignatureDataUrl(req.body?.signatureDataUrl);
    const agreed = req.body?.agreed === true || req.body?.agreed === 'true';
    if (!typedName) return res.status(400).json({ error: 'Full legal name is required' });
    if (!agreed) return res.status(400).json({ error: 'Electronic signature consent is required' });
    if (!signatureDataUrl) return res.status(400).json({ error: 'Drawn signature is required' });

    const state = await db.getAll();
    const item = findSigningRequest(state, req.params.token);
    if (!item) return res.status(404).json({ error: 'Signing request not found' });
    if (item.status === 'signed') return res.status(409).json({ error: 'This document is already signed' });
    if (isExpired(item)) return res.status(410).json({ error: 'This signing link has expired' });

    item.status = 'signed';
    item.signedAt = nowIso();
    item.signature = {
      typedName,
      title,
      agreed: true,
      signatureDataUrl,
      ip: req.ip || req.headers['x-forwarded-for'] || '',
      userAgent: req.headers['user-agent'] || '',
      signedAt: item.signedAt
    };
    appendAudit(item, 'signed', req, { typedName, title });
    item.signedCertificate = {
      filename: `${String(item.originalPdf?.filename || item.type || 'document').replace(/\.pdf$/i, '')}-signature-certificate.pdf`,
      contentType: 'application/pdf',
      content: buildCertificatePdf(item, item.signature)
    };

    applySignatureToProject(state, item);
    await db.saveAll(state);

    return res.json({ ok: true, request: publicSigningRequest(item) });
  } catch (err) {
    console.error('Signing submit error:', err);
    return res.status(500).json({ error: err.message || 'Could not sign document' });
  }
});

pageRouter.get('/:token', async (req, res) => {
  const state = await db.getAll();
  const item = findSigningRequest(state, req.params.token);
  if (!item) return res.status(404).send('Signing request not found');
  if (!item.viewedAt && item.status === 'sent' && !isExpired(item)) {
    item.viewedAt = nowIso();
    item.status = 'viewed';
    appendAudit(item, 'viewed', req);
    await db.saveAll(state);
  }
  return res.send(renderSigningPage(item, req.params.token));
});

module.exports = {
  apiRouter,
  pageRouter
};
