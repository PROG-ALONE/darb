;(function(){
  if(!window.FIGS) window.FIGS={};
  if(!window.FIG_SUBJ) window.FIG_SUBJ={};
  const DEFS = `<defs><marker id="figArrow_arabic" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#555"/></marker></defs>`;
  const defsNow = window.FIG_DEFS || '';
  window.FIG_DEFS = defsNow.indexOf('figArrow_arabic') >= 0 ? defsNow : defsNow + DEFS;
  window.FIGS['noon_tanween'] = {
    title: 'أحكام النون الساكنة والتنوين',
    teaches: 'أربعة أحكام: إظهار، إدغام، إقلاب، إخفاء — حسب الحرف التالي.',
    subj: 'العربية', chapter: 'التجويد',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect x="130" y="40" width="40" height="36" rx="8" fill="#2f7d5b"/><text x="150" y="62" text-anchor="middle" fill="#fff" font-size="11" font-weight="700" font-family="system-ui">نون ساكنة</text><rect x="20" y="30" width="56" height="28" rx="6" fill="#d7ebe0"/><text x="48" y="49" text-anchor="middle" font-size="10" fill="#1a5c3a">الإظهار</text><rect x="180" y="30" width="56" height="28" rx="6" fill="#faf0d4"/><text x="208" y="49" text-anchor="middle" font-size="10" fill="#8a6d1f">الإدغام</text><rect x="20" y="152" width="56" height="28" rx="6" fill="#f6ddd6"/><text x="48" y="171" text-anchor="middle" font-size="10" fill="#8a3020">الإقلاب</text><rect x="180" y="152" width="56" height="28" rx="6" fill="#efe9dd"/><text x="208" y="171" text-anchor="middle" font-size="10" fill="#27231d">الإخفاء</text></svg>`,
    parts:[{id:'p1',label:'الأحكام الأربعة',note:'تقرر حسب الحرف بعد النون.'}],
    steps:['ارسم الصندوق المركزي.', 'أضف الأربعة فروع.', 'اكتب حروف كل حكم.']
  };
  window.FIGS['passive_voice'] = {
    title: 'المبني للمجهول',
    teaches: 'تحويل الفاعل إلى مفعول: be + V3 + by (اختياري).',
    subj: 'الإنكليزية', chapter: 'الوحدة 1',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect x="20" y="30" width="115" height="48" rx="8" fill="#2f7d5b"/><text x="77" y="56" text-anchor="middle" fill="#fff" font-size="11" font-weight="700" font-family="system-ui">The chef cooks</text><line x1="140" y1="78" x2="140" y2="112" stroke="#d8a53a" stroke-width="2" marker-end="url(#figArrow_arabic)"/><text x="155" y="94" text-anchor="start" font-size="11" fill="#d8a53a">be + V3</text><rect x="165" y="30" width="115" height="48" rx="8" fill="#faf0d4" stroke="#8a6d1f" stroke-width="2"/><text x="222" y="56" text-anchor="middle" fill="#8a6d1f" font-size="11" font-weight="700" font-family="system-ui">is cooked by</text></svg>`,
    parts:[{id:'p1',label:'التحويل',note:'الفاعل ينزل بعد by، والمفعول يصعد.'}],
    steps:['ارسم الجملة الفاعلية.', 'ارسم السهم و الصيغة.', 'اكتب الجملة المبنية للمجهول.']
  };
  Object.keys(window.FIGS).forEach(k=>{if(!window.FIG_SUBJ[k]) window.FIG_SUBJ[k]=window.FIGS[k].subj||'';});
})();
