// ── Email Controller — Nodemailer ─────────────────────────────
// Sends emails directly from the server using SMTP (Gmail, Outlook, etc.)
// No third-party browser SDKs needed.

const nodemailer = require('nodemailer');

/** Build transporter from .env or request-supplied config */
function buildTransporter(cfg) {
  // cfg can override .env defaults (for per-request SMTP settings)
  return nodemailer.createTransport({
    host:   cfg.host   || process.env.SMTP_HOST   || 'smtp.gmail.com',
    port:   Number(cfg.port || process.env.SMTP_PORT || 587),
    secure: cfg.secure !== undefined ? cfg.secure : (process.env.SMTP_SECURE === 'true'),
    auth: {
      user: cfg.user || process.env.SMTP_USER,
      pass: cfg.pass || process.env.SMTP_PASS
    },
    tls: { rejectUnauthorized: false }
  });
}

/**
 * Send an email.
 * Body: { to, cc, subject, message, fromName, replyTo, smtpOverride? }
 */
async function sendEmail(req, res) {
  try {
    const { to, cc, subject, message, fromName, replyTo, smtpOverride } = req.body;

    if (!to)      return res.status(400).json({ error: 'Recipient email (to) is required' });
    if (!subject) return res.status(400).json({ error: 'Subject is required' });
    if (!message) return res.status(400).json({ error: 'Message body is required' });

    const smtpUser = (smtpOverride?.user) || process.env.SMTP_USER;
    if (!smtpUser) return res.status(500).json({ error: 'SMTP not configured — set SMTP_USER and SMTP_PASS in backend/.env' });

    const transporter = buildTransporter(smtpOverride || {});

    const fromAddress = `${fromName || process.env.EMAIL_FROM_NAME || 'Livio Building Systems'} <${process.env.EMAIL_FROM_ADDRESS || smtpUser}>`;

    const mailOptions = {
      from:     fromAddress,
      to:       to,
      cc:       cc || undefined,
      replyTo:  replyTo || undefined,
      subject:  subject,
      text:     message,
      // Also send as basic HTML (preserves line breaks)
      html:     `<pre style="font-family:Arial,sans-serif;font-size:13px;white-space:pre-wrap;line-height:1.7">${escapeHtml(message)}</pre>`
    };

    const info = await transporter.sendMail(mailOptions);

    return res.json({
      ok:        true,
      messageId: info.messageId,
      accepted:  info.accepted,
      message:   'Email sent successfully to ' + to
    });

  } catch (err) {
    console.error('Email send error:', err);
    return res.status(500).json({
      error:   err.message || 'Failed to send email',
      details: err.response || null
    });
  }
}

/**
 * Verify SMTP credentials without sending.
 * Body: { smtpOverride? }
 */
async function verifySmtp(req, res) {
  try {
    const { smtpOverride } = req.body || {};
    const transporter = buildTransporter(smtpOverride || {});
    await transporter.verify();
    return res.json({ ok: true, message: 'SMTP connection verified successfully' });
  } catch (err) {
    return res.status(400).json({ ok: false, error: err.message });
  }
}

function escapeHtml(str) {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

module.exports = { sendEmail, verifySmtp };
