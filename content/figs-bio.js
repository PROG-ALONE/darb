;(function(){
  if(!window.FIGS) window.FIGS={};
  if(!window.FIG_SUBJ) window.FIG_SUBJ={};
  const DEFS = `<defs><marker id="figArrow_bio" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#555"/></marker></defs>`;
  const defsNow = window.FIG_DEFS || '';
  window.FIG_DEFS = defsNow.indexOf('figArrow_bio') >= 0 ? defsNow : defsNow + DEFS;
  window.FIGS['mendel_first'] = {
    title: 'قانون مندل الأول — مربع بانيت Aa × Aa',
    teaches: 'قانون فصل الأزواج الوراثية: كل فرد يحمل زوجًا من الأليل، وينفصل عند التكوين الحر للأمشاج.',
    subj: 'الأحياء',
    chapter: 'الفصل الأول — الوراثة',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="مربع بانيت مندل"><rect x="30" y="30" width="115" height="48" rx="8" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="2"/><text x="87" y="56" text-anchor="middle" fill="#1a5c3a" font-weight="700" font-family="system-ui">الأب Aa × الأم Aa</text><text x="87" y="72" text-anchor="middle" fill="#555" font-size="10" font-family="system-ui">البويضات A / a</text><rect x="100" y="90" width="50" height="40" rx="4" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="2"/><text x="125" y="112" text-anchor="middle" fill="#1a5c3a" font-weight="700" font-family="system-ui">AA</text><rect x="150" y="90" width="50" height="40" rx="4" fill="#efe9dd" stroke="#8a3020" stroke-width="2"/><text x="175" y="112" text-anchor="middle" fill="#8a3020" font-weight="700" font-family="system-ui">Aa</text><rect x="100" y="130" width="50" height="40" rx="4" fill="#efe9dd" stroke="#8a3020" stroke-width="2"/><text x="125" y="152" text-anchor="middle" fill="#8a3020" font-weight="700" font-family="system-ui">Aa</text><rect x="150" y="130" width="50" height="40" rx="4" fill="#faf0d4" stroke="#8a6d1f" stroke-width="2"/><text x="175" y="152" text-anchor="middle" fill="#8a6d1f" font-weight="700" font-family="system-ui">aa</text><text x="150" y="186" text-anchor="middle" font-size="11" fill="#555" font-family="system-ui">1:2:1  (3 سائد : 1 متنحي)</text></svg>`,
    parts: [{id:'p1',label:'الأم والأب',note:'كل منهما يحمل Aa — زوج وراثي متغاير.'},{id:'p2',label:'المربعات',note:'نتائج التزاوج — 1 AA : 2 Aa : 1 aa.'}],
    steps: ['ارسم زوج الأبوين Aa.', 'قسم إلى أربع خلايا.', 'اكتب النسب 1:2:1.']
  };
  window.FIGS['bacterial_fission'] = {
    title: 'الانشطار الثنائي — تكاثر لا جنسي',
    teaches: 'البكتيريا تتكاثر بانقسام ثنائي: تكرار DNA، تخصر الخلية، انقسام إلى خليتين متطابقتين.',
    subj: 'الأحياء',
    chapter: 'الفصل الرابع — الميكروبيولوجيا',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="الانشطار الثنائي"><ellipse cx="70" cy="60" rx="30" ry="20" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="2"/><ellipse cx="230" cy="60" rx="30" ry="20" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="2"/><ellipse cx="150" cy="140" rx="30" ry="20" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="2"/><ellipse cx="150" cy="170" rx="30" ry="20" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="2"/><text x="70" y="110" text-anchor="middle" font-size="10" fill="#555">خلية أصلية</text><text x="230" y="110" text-anchor="middle" font-size="10" fill="#555">خلية ابن</text><text x="150" y="120" text-anchor="middle" font-size="10" fill="#555">تخصر</text><line x1="100" y1="60" x2="200" y2="60" stroke="#555" stroke-width="2" marker-end="url(#figArrow_bio)"/><line x1="150" y1="80" x2="150" y2="120" stroke="#555" stroke-width="2" marker-end="url(#figArrow_bio)"/></svg>`,
    parts: [{id:'p1',label:'الخلية الأصلية',note:'تتضاعف DNA ثم تتخصر.'}],
    steps: ['ارسم خلية مستطيلة.', 'اقسمها إلى خليتين.', 'سمّ التخصر والانقسام.']
  };
  Object.keys(window.FIGS).forEach(k => { if(!window.FIG_SUBJ[k]) window.FIG_SUBJ[k] = window.FIGS[k].subj || ''; });
})();
