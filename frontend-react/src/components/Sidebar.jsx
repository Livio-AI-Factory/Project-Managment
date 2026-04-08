import React from 'react';

export default function Sidebar() {
  return (
    <aside className="sb" id="sidebar">
      <div className="sb-top">
        <div className="sb-logo">Livio Building Systems</div>
        <div className="sb-sub">Construction Management</div>
      </div>
      <div className="sb-proj-box">
        <div className="sb-proj-lbl">Active Project</div>
        <button className="sb-proj-btn" onClick={()=>window.nav?.('projects')}>
          <span className="sb-proj-name" id="sb-proj">Select a project</span>
          <span style={{color:'#8AAAC8',fontSize:'11px'}}>⇄</span>
        </button>
      </div>
      <div className="sb-sec">Pages</div>
      <div className="sb-scroll">
        <ul className="sb-nav">
          <li data-page="projects"><a id="n-projects"   onClick={()=>window.nav?.('projects')}>  <span className="ic">🏠</span>All Projects     <span className="ct" id="ct-projects">0</span></a></li>
          <li data-page="dashboard"><a id="n-dashboard"  onClick={()=>window.nav?.('dashboard')}> <span className="ic">📊</span>Dashboard</a></li>
          <li data-page="works"><a id="n-works"      onClick={()=>window.nav?.('works')}>     <span className="ic">🏗</span>Works at Site    <span className="ct" id="ct-works">0</span></a></li>
          <li data-page="milestones"><a id="n-milestones" onClick={()=>window.nav?.('milestones')}><span className="ic">🏆</span>Milestones       <span className="ct" id="ct-ms">0</span></a></li>
          <li data-page="quotes"><a id="n-quotes"     onClick={()=>window.nav?.('quotes')}>    <span className="ic">💰</span>Quotes            <span className="ct" id="ct-q">0</span></a></li>
          <li data-page="plans"><a id="n-plans"      onClick={()=>window.nav?.('plans')}>     <span className="ic">📐</span>Plans &amp; Docs      <span className="ct" id="ct-plans">0</span></a></li>
          <li data-page="inspections"><a id="n-inspections" onClick={()=>window.nav?.('inspections')}><span className="ic">🔍</span>Inspections      <span className="ct" id="ct-ins">0</span></a></li>
          <li data-page="vendor-directory"><a id="n-vendor-directory" onClick={()=>window.nav?.('vendor-directory')}><span className="ic">📋</span>Vendor Directory</a></li>
          <li data-page="vendors"><a id="n-vendors"    onClick={()=>window.nav?.('vendors')}>   <span className="ic">🤝</span>Vendor Contracts   <span className="ct" id="ct-ven">0</span></a></li>
          <li data-page="invoices"><a id="n-invoices"   onClick={()=>window.nav?.('invoices')}>  <span className="ic">🧾</span>Invoices           <span className="ct" id="ct-inv">0</span></a></li>
          <li data-page="payments"><a id="n-payments"   onClick={()=>window.nav?.('payments')}>  <span className="ic">💳</span>Payments          <span className="ct" id="ct-pay">0</span></a></li>
          <li data-page="checklist"><a id="n-checklist"  onClick={()=>window.nav?.('checklist')}> <span className="ic">☑</span>Checklist          <span className="ct" id="ct-chk">0</span></a></li>
          <li data-page="qaqc"><a id="n-qaqc"      onClick={()=>window.nav?.('qaqc')}>      <span className="ic">🔍</span>QA/QC              <span className="ct" id="ct-qaqc">0</span></a></li>
          <li data-page="compliance"><a id="n-compliance" onClick={()=>window.nav?.('compliance')}><span className="ic">✅</span>Compliance</a></li>
          <li data-page="export"><a id="n-export"     onClick={()=>window.nav?.('export')}>    <span className="ic">📥</span>Export</a></li>
          <li data-page="momentum"><a id="n-momentum"   onClick={()=>window.nav?.('momentum')}>  <span className="ic">⚡</span>Momentum</a></li>
          <li data-page="daily-tracker"><a id="n-daily-tracker" onClick={()=>window.nav?.('daily-tracker')}><span className="ic">📅</span>Daily Tracker</a></li>
          <li data-page="client-contract"><a id="n-client-contract" onClick={()=>window.nav?.('client-contract')}><span className="ic">📄</span>Client Contract</a></li>
          <li data-page="client-invoice"><a id="n-client-invoice" onClick={()=>window.nav?.('client-invoice')}><span className="ic">🧾</span>Client Invoice</a></li>
          <li data-page="settings"><a id="n-settings" onClick={()=>window.nav?.('settings')}><span className="ic">⚙</span>Settings</a></li>
        </ul>
        <div className="sb-sec">CA Codes</div>
        <div className="sb-codes" style={{display:'flex',flexWrap:'wrap',gap:'4px',padding:'0 14px 12px'}}>
          <span className="badge2" style={{background:'var(--blue-l)',color:'var(--blue)'}}>CBC 2022</span>
          <span className="badge2" style={{background:'var(--green-l)',color:'var(--green)'}}>CALGreen</span>
          <span className="badge2" style={{background:'var(--amber-l)',color:'var(--amber)'}}>Title 24</span>
          <span className="badge2" style={{background:'var(--purple-l)',color:'var(--purple)'}}>CEQA</span>
          <span className="badge2" style={{background:'var(--red-l)',color:'var(--red)'}}>CalOSHA</span>
          <span className="badge2" style={{background:'var(--teal-l)',color:'var(--teal)'}}>Seismic D</span>
        </div>
        <div className="sb-foot" id="sb-foot">No project selected</div>
      </div>
      {/* Logout */}
      <div style={{padding:'10px 12px',borderTop:'1px solid rgba(255,255,255,.12)',flexShrink:0}}>
        <div id="sb-user-label" style={{fontSize:'9px',color:'#8AAAC8',marginBottom:'7px',textAlign:'center',letterSpacing:'.3px'}}></div>
        <div style={{display:'flex',gap:'6px'}}>
          <button onClick={()=>window.showManageUsers?.()} title="Manage Users"
            style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',gap:'5px',padding:'8px 6px',background:'rgba(255,255,255,.07)',border:'1px solid rgba(255,255,255,.12)',borderRadius:'7px',color:'#8AAAC8',fontSize:'10px',fontWeight:600,cursor:'pointer',transition:'all .2s'}}
            onMouseOver={e=>{e.currentTarget.style.background='rgba(255,255,255,.14)';e.currentTarget.style.color='#fff';}}
            onMouseOut={e=>{e.currentTarget.style.background='rgba(255,255,255,.07)';e.currentTarget.style.color='#8AAAC8';}}>
            👥 Users
          </button>
          <button onClick={()=>window.doLogout?.()}
            style={{flex:2,display:'flex',alignItems:'center',justifyContent:'center',gap:'6px',padding:'8px',background:'rgba(155,31,31,.18)',border:'1px solid rgba(155,31,31,.3)',borderRadius:'7px',color:'#F09595',fontSize:'11px',fontWeight:700,cursor:'pointer',transition:'all .2s'}}
            onMouseOver={e=>e.currentTarget.style.background='rgba(155,31,31,.38)'}
            onMouseOut={e=>e.currentTarget.style.background='rgba(155,31,31,.18)'}>
            ⏻ Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
}
