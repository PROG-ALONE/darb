;(function(){
  if(!window.FIGS) window.FIGS={};
  if(!window.FIG_SUBJ) window.FIG_SUBJ={};
  const DEFS = `<defs><marker id="figArrow_chem" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#555"/></marker></defs>`;
  const defsNow = window.FIG_DEFS || '';
  window.FIG_DEFS = defsNow.indexOf('figArrow_chem') >= 0 ? defsNow : defsNow + DEFS;
  window.FIGS['reaction_energy'] = {
    title: 'منحنى طاقة التفاعل',
    teaches: 'طاقة التنشيط Ea، حالة الانتقال، ΔH — إما طارد أو ماص.',
    subj: 'الكيمياء', chapter: 'الفصل الأول — الحركية والاتزان',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><path d="M 60 160 Q 120 160 140 110 T 180 130 T 220 90" fill="none" stroke="#2f7d5b" stroke-width="2.2"/><rect x="70" y="130" width="20" height="24" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="2"/><rect x="210" y="80" width="20" height="40" fill="#efe9dd" stroke="#8a3020" stroke-width="2"/><text x="150" y="186" text-anchor="middle" font-size="10" fill="#555">ΔH = E_products − E_reactants</text></svg>`,
    parts:[{id:'p1',label:'طاقة التنشيط',note:'الطاقة اللازمة لبدء التفاعل.'}],
    steps:['ارسم منحنى صاعد ثم هابط.','سمّ طاقة التنشيط Ea.','حدد ΔH.']
  };
  Object.keys(window.FIGS).forEach(k=>{if(!window.FIG_SUBJ[k]) window.FIG_SUBJ[k]=window.FIGS[k].subj||'';});
})();
