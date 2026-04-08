import React from 'react';

export default function Topbar() {
  return (
    <div className="topbar">
      <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
        <button className="mob-menu-btn" id="mob-menu-btn" onClick={()=>window.toggleMobMenu?.()} style={{display:'none',background:'none',border:'none',cursor:'pointer',padding:'6px',color:'var(--navy)',fontSize:'22px',lineHeight:1}}>☰</button>
        <div className="tb-title" id="page-title">All Projects</div>
      </div>
      <div className="tb-right">
        <button className="btn btn-ghost btn-sm" onClick={()=>window.print()}>🖨 Print</button>
        <button className="btn btn-navy btn-sm" id="add-btn" onClick={()=>window.handleAdd?.()}>+ New Project</button>
      </div>
    </div>
  );
}
