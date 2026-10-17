;(function(){
  if(!window.FIGS) window.FIGS={};
  if(!window.FIG_SUBJ) window.FIG_SUBJ={};
  const DEFS = `<defs><marker id="figArrow_math" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#555"/></marker></defs>`;
  const defsNow = window.FIG_DEFS || '';
  window.FIG_DEFS = defsNow.indexOf('figArrow_math') >= 0 ? defsNow : defsNow + DEFS;
  window.FIGS['derivative_tangent'] = {
    title: 'تفسير هندسي للمشتق — المماس',
    teaches: 'المشتق عند نقطة = ميل المماس، ويوضح التزايد والتناقص.',
    subj: 'الرياضيات', chapter: 'الفصل الثالث — المشتق والتكامل',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><line x1="40" y1="160" x2="260" y2="160" stroke="#555" stroke-width="1.6" marker-end="url(#figArrow_math)"/><line x1="150" y1="180" x2="150" y2="20" stroke="#555" stroke-width="1.6" marker-end="url(#figArrow_math)"/><path d="M 60 140 C 100 140 120 60 180 60 C 220 60 240 140 260 140" fill="none" stroke="#2f7d5b" stroke-width="2.2"/><line x1="120" y1="90" x2="180" y2="50" stroke="#c0563f" stroke-width="2"/><circle cx="120" cy="90" r="4" fill="#c0563f"/></svg>`,
    parts:[{id:'p1',label:'نقطة المماس',note:'النقطة حيث ميل المماس = f\'(x₀).'}],
    steps:['ارسم المنحنى.', 'ضع نقطة على المنحنى.', 'ارسم خطًا مماسًا عندها.']
  };
  Object.keys(window.FIGS).forEach(k=>{if(!window.FIG_SUBJ[k]) window.FIG_SUBJ[k]=window.FIGS[k].subj||'';});
})();
