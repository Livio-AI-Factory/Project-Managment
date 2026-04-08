// ── Utility functions extracted from livio.html ──

export const fmtMoney = n => '$' + Number(n||0).toLocaleString();

export const fmtDate = d => {
  if(!d) return '—';
  try { return new Date(d+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}); }
  catch(e){ return d; }
};

export const fmtTime = t => {
  if(!t) return '—';
  const [h,m]=t.split(':').map(Number);
  return `${(h%12)||12}:${String(m).padStart(2,'0')} ${h>=12?'PM':'AM'}`;
};

export const uid = () => 'x'+Date.now().toString(36)+Math.random().toString(36).slice(2,6);

export const localDateStr = (d=new Date()) => {
  const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,'0'), dd=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${dd}`;
};

export const fmtBytes = b => b<1024?b+'B':b<1048576?(b/1024).toFixed(1)+'KB':(b/1048576).toFixed(1)+'MB';

export const fileIcon = n => ({pdf:'📄',dwg:'📐',dxf:'📐',png:'🖼',jpg:'🖼',jpeg:'🖼',xlsx:'📊',xls:'📊',docx:'📝',doc:'📝',zip:'🗜',rvt:'🏗',ifc:'🏗'}[n.split('.').pop().toLowerCase()]||'📎');

export const vEl = id => document.getElementById(id);
export const vVal = id => { const e=vEl(id); return e?e.value.trim():''; };

export const toast = (msg, d=2600) => {
  const t=vEl('toast');
  if(!t) return;
  t.textContent=msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),d);
};

export function statusBadge(s) {
  const cfg = {
    active:      {cls:'b-blue',  lbl:'Active'},
    inprogress:  {cls:'b-amber', lbl:'In Progress'},
    starting:    {cls:'b-teal',  lbl:'Starting'},
    hold:        {cls:'b-gray',  lbl:'On Hold'},
    caloshahold: {cls:'b-red',   lbl:'CalOSHA Hold'},
    complete:    {cls:'b-green', lbl:'Complete'},
    done:        {cls:'b-green', lbl:'Done'},
    upcoming:    {cls:'b-gray',  lbl:'Upcoming'},
    approved:    {cls:'b-green', lbl:'Approved'},
    review:      {cls:'b-blue',  lbl:'Under Review'},
    new:         {cls:'b-teal',  lbl:'New'},
    negotiating: {cls:'b-amber', lbl:'Negotiating'},
  };
  const c = cfg[s]||{cls:'b-gray',lbl:s};
  return `<span class="badge ${c.cls}">${c.lbl}</span>`;
}

export function pColor(s,p) {
  if(s==='complete'||s==='done') return 'var(--green-m)';
  if(s==='caloshahold') return 'var(--red-m)';
  if(s==='starting') return 'var(--teal-m)';
  return p>=70?'var(--blue-m)':'var(--amber-m)';
}
