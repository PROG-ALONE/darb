;(function(){
  if(!window.FIGS) window.FIGS={};
  if(!window.FIG_SUBJ) window.FIG_SUBJ={};
  const DEFS = `<defs><marker id="figArrow_eng" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#555"/></marker></defs>`;
  const defsNow = window.FIG_DEFS || '';
  window.FIG_DEFS = defsNow.indexOf('figArrow_eng') >= 0 ? defsNow : defsNow + DEFS;
  window.FIGS['conditional_ladder'] = {
    title: 'الجمل الشرطية — Zero / First / Second / Third',
    teaches: 'ترتيب واقع الجملة الشرطية: دائمة ← محتملة ← خيالية ← فائتة.',
    subj: 'الإنكليزية', chapter: 'الوحدة 3',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><text x="150" y="18" text-anchor="middle" font-size="11" fill="#555">من الحقيقة إلى الماضي غير المحقق</text><rect x="20" y="30" width="260" height="30" rx="6" fill="#efe9dd" stroke="#8a8172" stroke-width="1"/><text x="150" y="48" text-anchor="middle" font-size="10" fill="#555">Zero: if + present → present</text><rect x="20" y="65" width="260" height="30" rx="6" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="1.5"/><text x="150" y="83" text-anchor="middle" font-size="10" fill="#1a5c3a">First: if + present → will + V</text><rect x="20" y="100" width="260" height="30" rx="6" fill="#faf0d4" stroke="#8a6d1f" stroke-width="1.5"/><text x="150" y="118" text-anchor="middle" font-size="10" fill="#8a6d1f">Second: if + past → would + V</text><rect x="20" y="135" width="260" height="30" rx="6" fill="#f6ddd6" stroke="#8a3020" stroke-width="1.5"/><text x="150" y="153" text-anchor="middle" font-size="10" fill="#8a3020">Third: if + had + pp → would have + pp</text></svg>`,
    parts:[{id:'p1',label:'السلّم',note:'أربعة درجات بترتيب الواقع.'}],
    steps:['ارسم أربعة مستطيلات متدرجة.', 'سمّ كل درجة.', 'اكتب القاعدة لكل منها.']
  };
  Object.keys(window.FIGS).forEach(k=>{if(!window.FIG_SUBJ[k]) window.FIG_SUBJ[k]=window.FIGS[k].subj||'';});
})();
