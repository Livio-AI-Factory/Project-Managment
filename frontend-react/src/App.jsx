import React, { useEffect } from 'react';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import PageShell from './components/PageShell';
import { useApp } from './store/AppContext';
import { initGlobals } from './lib/globals';

export default function App() {
  const { loggedIn } = useApp();

  useEffect(() => {
    initGlobals();

    // Override doLogin to also update React state
    const origDoLogin = window.doLogin;
    // The legacy doLogin already manages the DOM (hides login-screen, etc.)
    // We don't need React state to track login — the legacy app handles it via DOM
    // Just ensure the globals are initialized.
  }, []);

  return (
    <>
      {/* Login screens — always rendered, hidden/shown by legacy JS */}
      <Login />

      {/* Mobile sidebar overlay */}
      <div className="sb-overlay" id="sb-overlay" onClick={()=>window.closeMobMenu?.()}></div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main app shell */}
      <div className="main" id="app-main">
        <Topbar />

        {/* Balance strip (payments page only) */}
        <div className="bal-strip" id="bal-strip">
          <div className="bal-item"><div className="bal-lbl">Contract</div><div className="bal-val" id="bs-c" style={{color:'#fff'}}>$0</div></div>
          <div className="bal-div"></div>
          <div className="bal-item"><div className="bal-lbl" style={{color:'#9FE1CB'}}>✓ Paid</div><div className="bal-val" id="bs-p" style={{color:'#9FE1CB'}}>$0</div></div>
          <div className="bal-div"></div>
          <div className="bal-item"><div className="bal-lbl" style={{color:'#F09595'}}>Balance Due</div><div className="bal-val" id="bs-b" style={{color:'#F09595'}}>$0</div></div>
          <div className="bal-div"></div>
          <div className="bal-prog-wrap">
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:'4px'}}>
              <span style={{fontSize:'9px',color:'#546882',textTransform:'uppercase',letterSpacing:'.5px'}}>Progress</span>
              <span style={{fontSize:'10px',fontWeight:700,color:'#fff'}} id="bs-pct">0%</span>
            </div>
            <div style={{height:'5px',background:'rgba(255,255,255,.1)',borderRadius:'3px',overflow:'hidden',width:'130px'}}>
              <div id="bs-bar" style={{height:'100%',width:'0%',background:'#9FE1CB',borderRadius:'3px',transition:'.5s'}}></div>
            </div>
          </div>
        </div>

        {/* All pages */}
        <PageShell />
      </div>

      {/* ══ MAIN MODAL ══ */}
      <div className="mo" id="mo" onClick={e=>{if(e.target===e.currentTarget)window.closeModal?.()}}>
        <div className="modal">
          <div className="modal-head"><span className="modal-title" id="modal-title">Add</span><button className="modal-x" onClick={()=>window.closeModal?.()}>✕</button></div>
          <div className="modal-body" id="modal-body"></div>
          <div className="modal-foot">
            <button className="btn btn-ghost btn-sm" onClick={()=>window.closeModal?.()}>Cancel</button>
            <button className="btn btn-navy btn-sm" onClick={()=>window.saveModal?.()}>Save</button>
          </div>
        </div>
      </div>

      {/* ══ TOAST ══ */}
      <div className="toast" id="toast"></div>

      {/* ══ VENDOR DIRECTORY MODAL ══ */}
      <div className="mo" id="mo-vdir">
        <div className="modal" style={{maxWidth:'580px'}}>
          <div className="modal-head"><span className="modal-title" id="vdir-modal-title">Add Vendor to Directory</span><button className="modal-x" onClick={()=>window.closeVDirModal?.()}>✕</button></div>
          <div className="modal-body" style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <input type="hidden" id="vdir-id"/>
            <div className="fg">
              <div className="fr" style={{margin:0}}><label className="fl">Contact Name *</label><input className="fi" id="vdir-name" placeholder="John Smith"/></div>
              <div className="fr" style={{margin:0}}><label className="fl">Company Name *</label><input className="fi" id="vdir-company" placeholder="ABC Plumbing Co."/></div>
            </div>
            <div className="fg">
              <div className="fr" style={{margin:0}}><label className="fl">Phone</label><input className="fi" id="vdir-phone" placeholder="+1 555 000 1234"/></div>
              <div className="fr" style={{margin:0}}><label className="fl">Email</label><input className="fi" id="vdir-email" placeholder="vendor@company.com"/></div>
            </div>
            <div className="fg">
              <div className="fr" style={{margin:0}}><label className="fl">Trade / Specialty</label><input className="fi" id="vdir-trade" placeholder="Plumbing, HVAC, Electrical…"/></div>
              <div className="fr" style={{margin:0}}><label className="fl">License Number</label><input className="fi" id="vdir-license" placeholder="LIC-1234567"/></div>
            </div>
            <div style={{borderTop:'1px solid var(--border)',paddingTop:'10px',fontSize:'10px',fontWeight:700,textTransform:'uppercase',letterSpacing:'.6px',color:'var(--muted)'}}>🏦 Payment / Banking Info</div>
            <div className="fg">
              <div className="fr" style={{margin:0}}><label className="fl">Bank Name</label><input className="fi" id="vdir-bank" placeholder="Chase Bank"/></div>
              <div className="fr" style={{margin:0}}><label className="fl">Account Type</label>
                <select className="fs" id="vdir-acct-type"><option value="">Select…</option><option>Checking</option><option>Savings</option><option>Business Checking</option></select>
              </div>
            </div>
            <div className="fg">
              <div className="fr" style={{margin:0}}><label className="fl">Account Number</label><input className="fi" id="vdir-acct" placeholder="Account number" type="text"/></div>
              <div className="fr" style={{margin:0}}><label className="fl">Routing Number</label><input className="fi" id="vdir-routing" placeholder="9-digit routing number" type="text"/></div>
            </div>
            <div className="fg">
              <div className="fr" style={{margin:0}}><label className="fl">Zelle (email / phone)</label><input className="fi" id="vdir-zelle" placeholder="Zelle email or phone"/></div>
              <div className="fr" style={{margin:0}}><label className="fl">Notes</label><input className="fi" id="vdir-notes" placeholder="Additional notes"/></div>
            </div>
          </div>
          <div className="modal-foot">
            <button className="btn btn-ghost" onClick={()=>window.closeVDirModal?.()}>Cancel</button>
            <button className="btn btn-navy" onClick={()=>window.saveVDir?.()}>Save →</button>
          </div>
        </div>
      </div>

      {/* ══ INVOICE PAYMENT MODAL ══ */}
      <div className="mo" id="mo-inv-payment">
        <div className="modal" style={{maxWidth:'480px'}}>
          <div className="modal-head"><span className="modal-title">Record Partial Payment</span><button className="modal-x" onClick={()=>window.closeInvPayment?.()}>✕</button></div>
          <div className="modal-body" style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <input type="hidden" id="invpay-inv-id"/>
            <div className="fg">
              <div className="fr" style={{margin:0}}><label className="fl">Payment Date *</label><input className="fi" id="invpay-date" type="date"/></div>
              <div className="fr" style={{margin:0}}><label className="fl">Amount *</label><input className="fi" id="invpay-amount" type="number" placeholder="0.00" min="0" step="0.01"/></div>
            </div>
            <div className="fr" style={{margin:0}}><label className="fl">Note</label><input className="fi" id="invpay-note" placeholder="e.g. Wire transfer, Check #1234"/></div>
            <div className="fr" style={{margin:0}}>
              <label className="fl">Proof of Payment (optional)</label>
              <input className="fi" id="invpay-proof" type="file" accept="image/*,.pdf" style={{padding:'4px'}}/>
            </div>
          </div>
          <div className="modal-foot">
            <button className="btn btn-ghost" onClick={()=>window.closeInvPayment?.()}>Cancel</button>
            <button className="btn btn-navy" onClick={()=>window.saveInvPayment?.()}>Record Payment →</button>
          </div>
        </div>
      </div>

      {/* ══ LIEN EMAIL MODAL ══ */}
      <div className="mo" id="mo-lien-email">
        <div className="modal" style={{maxWidth:'560px'}}>
          <div className="modal-head"><span className="modal-title" id="lien-email-title">Send Lien Waiver</span><button className="modal-x" onClick={()=>window.closeLienEmail?.()}>✕</button></div>
          <div className="modal-body" style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <input type="hidden" id="lien-email-invid"/>
            <input type="hidden" id="lien-email-type"/>
            <div className="fr" style={{margin:0}}><label className="fl">To (Vendor Email) *</label><input className="fi" id="lien-email-to" placeholder="vendor@company.com"/></div>
            <div className="fr" style={{margin:0}}><label className="fl">Subject</label><input className="fi" id="lien-email-subject"/></div>
            <div className="fr" style={{margin:0}}><label className="fl">Message Body</label><textarea className="fi" id="lien-email-body" rows="8" style={{resize:'vertical',fontSize:'12px',lineHeight:'1.5'}}></textarea></div>
            <div id="lien-email-status" style={{fontSize:'11px',color:'var(--muted)'}}></div>
          </div>
          <div className="modal-foot">
            <button className="btn btn-ghost" onClick={()=>window.closeLienEmail?.()}>Cancel</button>
            <button className="btn btn-navy" onClick={()=>window.sendLienEmail?.()}>✉ Send Lien Waiver →</button>
          </div>
        </div>
      </div>

      {/* ══ LEDGER EMAIL MODAL ══ */}
      <div className="mo" id="mo-ledger-email">
        <div className="modal" style={{maxWidth:'600px'}}>
          <div className="modal-head"><span className="modal-title" id="ledger-email-title">Send Payment Ledger</span><button className="modal-x" onClick={()=>window.closeLedgerEmail?.()}>✕</button></div>
          <div className="modal-body" style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <input type="hidden" id="ledger-email-type"/>
            <input type="hidden" id="ledger-email-ref"/>
            <div style={{background:'var(--blue-l)',border:'1px solid #B0D0F0',borderRadius:'7px',padding:'9px 12px',fontSize:'11px',color:'var(--blue)'}}>
              <strong>📒 Payment Ledger Email</strong> — Review and send the full ledger directly to the vendor.
            </div>
            <div className="fg">
              <div className="fr" style={{margin:0}}><label className="fl">To (Email) *</label><input className="fi" id="ledger-email-to" placeholder="vendor@company.com" type="email"/></div>
              <div className="fr" style={{margin:0}}><label className="fl">CC</label><input className="fi" id="ledger-email-cc" placeholder="cc@company.com (optional)" type="email"/></div>
            </div>
            <div className="fr" style={{margin:0}}><label className="fl">Subject</label><input className="fi" id="ledger-email-subject"/></div>
            <div className="fr" style={{margin:0}}><label className="fl">Message Body</label><textarea className="fi" id="ledger-email-body" rows="10" style={{resize:'vertical',fontSize:'12px',lineHeight:'1.6',fontFamily:'monospace'}}></textarea></div>
            <div id="ledger-email-status" style={{fontSize:'11px'}}></div>
          </div>
          <div className="modal-foot">
            <button className="btn btn-ghost" onClick={()=>window.closeLedgerEmail?.()}>Cancel</button>
            <button className="btn btn-ghost btn-sm" onClick={()=>window.copyLedgerToClipboard?.()} style={{marginRight:'auto'}}>📋 Copy Text</button>
            <button className="btn btn-navy" onClick={()=>window.sendLedgerEmail?.()}>📧 Send Ledger →</button>
          </div>
        </div>
      </div>

      {/* ══ CONTRACT EMAIL MODAL ══ */}
      <div className="mo" id="mo-contract-email">
        <div className="modal" style={{maxWidth:'560px'}}>
          <div className="modal-head"><span className="modal-title">Send Contract for Signing</span><button className="modal-x" onClick={()=>window.closeContractEmailModal?.()}>✕</button></div>
          <div className="modal-body" style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <input type="hidden" id="cemail-vid"/>
            <div className="fr" style={{margin:0}}><label className="fl">To (Recipient Email) *</label><input className="fi" id="cemail-to" placeholder="vendor@company.com"/></div>
            <div className="fr" style={{margin:0}}><label className="fl">Subject</label><input className="fi" id="cemail-subject" placeholder="Subject line"/></div>
            <div className="fr" style={{margin:0}}><label className="fl">Message Body</label><textarea className="fi" id="cemail-body" rows="6" style={{resize:'vertical',fontSize:'12px',lineHeight:'1.5'}}></textarea></div>
            <div id="cemail-status" style={{fontSize:'11px',color:'var(--muted)'}}></div>
          </div>
          <div className="modal-foot">
            <button className="btn btn-ghost" onClick={()=>window.closeContractEmailModal?.()}>Cancel</button>
            <button className="btn btn-navy" onClick={()=>window.sendContractEmailModal?.()}>✉ Send →</button>
          </div>
        </div>
      </div>
    </>
  );
}
