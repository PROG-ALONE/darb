/* رسوم الأحياء (ف2: الأنسجة) — السادس العلمي — دَرْب
   المصدر: نص درس الأنسجة في المنهج الرسمي (content/biology-12-c2.js). لا اختراع.
   Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>
   Claude-Session: https://claude.ai/code/session_013czApRdXyjjK5Z8jPDfMLv */
;(function(){
  var DEFS = '<defs><marker id="figArrow_bio2" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#6f6758"/></marker></defs>';
  window.FIG_DEFS = (window.FIG_DEFS||'').indexOf('figArrow_bio2')>=0 ? window.FIG_DEFS : (window.FIG_DEFS||'')+DEFS;
  var S='الأحياء';
  var ADD={};

  /* تعريف النسيج ومستويات التنظيم — التدرّج من اليمين (خلية) إلى اليسار (كائن) موافقةً لاتجاه القراءة */
  ADD['fig_b12c2t1']={
    title:'النسيج ومستويات التنظيم',
    teaches:'النسيج مجموعة خلايا متماثلة (مع مادة بين خلوية) تخصّصت لوظيفة واحدة، وهو حلقة بين الخلية والعضو والكائن.',
    subj:S, chapter:'الفصل الثاني — الأنسجة',
    svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180" role="img" aria-label="مستويات التنظيم">'
      +'<text x="160" y="18" text-anchor="middle" font-family="system-ui,Arial,sans-serif" font-size="12" fill="#2f7d5b" font-weight="700">من الخلية إلى الكائن الحي</text>'
      /* خلية (يمين) */
      +'<g><circle cx="276" cy="80" r="7" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="1.5"/><circle cx="292" cy="72" r="7" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="1.5"/><circle cx="288" cy="90" r="7" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="1.5"/></g>'
      +'<text x="284" y="118" text-anchor="middle" font-family="system-ui,Arial,sans-serif" font-size="11" fill="#27231d" font-weight="700">خلايا متماثلة</text>'
      /* سهم */
      +'<line x1="256" y1="80" x2="214" y2="80" stroke="#6f6758" stroke-width="1.6" marker-end="url(#figArrow_bio2)"/>'
      /* نسيج */
      +'<rect x="150" y="60" width="60" height="40" rx="8" fill="#2f7d5b"/><text x="180" y="85" text-anchor="middle" font-family="system-ui,Arial,sans-serif" font-size="12" fill="#fff" font-weight="700">نسيج</text>'
      +'<line x1="150" y1="80" x2="120" y2="80" stroke="#6f6758" stroke-width="1.6" marker-end="url(#figArrow_bio2)"/>'
      /* عضو */
      +'<rect x="64" y="62" width="52" height="36" rx="8" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="1.5"/><text x="90" y="85" text-anchor="middle" font-family="system-ui,Arial,sans-serif" font-size="12" fill="#1a5c3a" font-weight="700">عضو</text>'
      +'<line x1="64" y1="80" x2="40" y2="80" stroke="#6f6758" stroke-width="1.6" marker-end="url(#figArrow_bio2)"/>'
      /* كائن */
      +'<rect x="4" y="62" width="32" height="36" rx="8" fill="#faf0d4" stroke="#8a6d1f" stroke-width="1.5"/><text x="20" y="79" text-anchor="middle" font-family="system-ui,Arial,sans-serif" font-size="9.5" fill="#8a6d1f" font-weight="700">كائن</text><text x="20" y="92" text-anchor="middle" font-family="system-ui,Arial,sans-serif" font-size="9.5" fill="#8a6d1f" font-weight="700">حيّ</text>'
      +'<text x="160" y="150" text-anchor="middle" font-family="system-ui,Arial,sans-serif" font-size="10" fill="#6f6758">خلايا متماثلة + مادة بين خلوية ← تخصّص لوظيفة واحدة</text>'
      +'<text x="160" y="168" text-anchor="middle" font-family="system-ui,Arial,sans-serif" font-size="9.5" fill="#8a8172">علم الأنسجة = Histology</text>'
      +'</svg>',
    parts:[
      {id:'p1',label:'الخلايا المتماثلة',note:'وحدات متشابهة تتجمّع معًا.'},
      {id:'p2',label:'النسيج',note:'خلايا متخصّصة + مادة بين خلوية لوظيفة واحدة.'},
      {id:'p3',label:'العضو والكائن',note:'أنسجة تتعاون في عضو، وأعضاء تبني الكائن.'}
    ],
    steps:['ابدأ بخلايا متماثلة.','تخصّصها معًا يكوّن نسيجًا.','الأنسجة تبني الأعضاء، والأعضاء تبني الكائن الحي.']};

  /* الأنسجة النباتية الأربعة */
  ADD['fig_b12c2t2']={
    title:'الأنسجة النباتية الأربعة',
    teaches:'جسم النبات الراقي من أربعة أنسجة: المرستيمية (تنقسم فتنمو)، والأساس (يبني ويخزّن)، والبشرة (تحمي)، والوعائي (ينقل ويسند).',
    subj:S, chapter:'الفصل الثاني — الأنسجة',
    svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="الأنسجة النباتية">'
      +'<rect x="110" y="10" width="100" height="30" rx="8" fill="#2f7d5b"/><text x="160" y="30" text-anchor="middle" font-family="system-ui,Arial,sans-serif" font-size="12" fill="#fff" font-weight="700">أنسجة النبات</text>'
      +'<line x1="140" y1="40" x2="55" y2="66" stroke="#6f6758" stroke-width="1.4" marker-end="url(#figArrow_bio2)"/>'
      +'<line x1="150" y1="40" x2="128" y2="66" stroke="#6f6758" stroke-width="1.4" marker-end="url(#figArrow_bio2)"/>'
      +'<line x1="170" y1="40" x2="192" y2="66" stroke="#6f6758" stroke-width="1.4" marker-end="url(#figArrow_bio2)"/>'
      +'<line x1="180" y1="40" x2="265" y2="66" stroke="#6f6758" stroke-width="1.4" marker-end="url(#figArrow_bio2)"/>'
      +'<g font-family="system-ui,Arial,sans-serif">'
      +'<rect x="8" y="68" width="78" height="58" rx="8" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="1.5"/><text x="47" y="90" text-anchor="middle" font-size="11" fill="#1a5c3a" font-weight="700">المرستيمية</text><text x="47" y="108" text-anchor="middle" font-size="9.5" fill="#1a5c3a">تنقسم فينمو</text><text x="47" y="120" text-anchor="middle" font-size="9.5" fill="#1a5c3a">النبات</text>'
      +'<rect x="92" y="68" width="70" height="58" rx="8" fill="#e8f0da" stroke="#5c7a1a" stroke-width="1.5"/><text x="127" y="90" text-anchor="middle" font-size="11" fill="#4d6613" font-weight="700">الأساس</text><text x="127" y="108" text-anchor="middle" font-size="9.5" fill="#4d6613">يبني</text><text x="127" y="120" text-anchor="middle" font-size="9.5" fill="#4d6613">ويخزّن</text>'
      +'<rect x="168" y="68" width="66" height="58" rx="8" fill="#faf0d4" stroke="#8a6d1f" stroke-width="1.5"/><text x="201" y="90" text-anchor="middle" font-size="11" fill="#8a6d1f" font-weight="700">البشرة</text><text x="201" y="108" text-anchor="middle" font-size="9.5" fill="#8a6d1f">تحمي</text><text x="201" y="120" text-anchor="middle" font-size="9.5" fill="#8a6d1f">السطح</text>'
      +'<rect x="240" y="68" width="72" height="58" rx="8" fill="#f6ddd6" stroke="#8a3020" stroke-width="1.5"/><text x="276" y="90" text-anchor="middle" font-size="11" fill="#8a3020" font-weight="700">الوعائي</text><text x="276" y="108" text-anchor="middle" font-size="9.5" fill="#8a3020">ينقل</text><text x="276" y="120" text-anchor="middle" font-size="9.5" fill="#8a3020">ويسند</text>'
      +'</g>'
      +'<text x="160" y="150" text-anchor="middle" font-family="system-ui,Arial,sans-serif" font-size="10" fill="#6f6758">المرستيمية: قمية · بينية · جانبية</text>'
      +'<text x="160" y="170" text-anchor="middle" font-family="system-ui,Arial,sans-serif" font-size="9.5" fill="#8a8172">نمو النبات يبدأ من الأنسجة المرستيمية</text>'
      +'</svg>',
    parts:[
      {id:'p1',label:'المرستيمية',note:'خلايا تنقسم فينمو النبات (قمية وبينية وجانبية).'},
      {id:'p2',label:'الأساس',note:'يبني الجسم ويخزّن الغذاء.'},
      {id:'p3',label:'البشرة والوعائي',note:'البشرة تحمي، والوعائي ينقل الماء والغذاء ويسند.'}
    ],
    steps:['النبات الراقي من أربعة أنسجة.','المرستيمية تنقسم فتنمو، والأساس يبني ويخزّن.','البشرة تحمي، والوعائي ينقل ويسند.']};

  /* الأنسجة الحيوانية الأربعة */
  ADD['fig_b12c2t3']={
    title:'الأنسجة الحيوانية الأربعة',
    teaches:'جسم الحيوان من أربعة أنسجة أساسية: ظهاري يغطّي، وضام يربط ويسند، وعضلي يحرّك، وعصبي ينقل الإشارات.',
    subj:S, chapter:'الفصل الثاني — الأنسجة',
    svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="الأنسجة الحيوانية">'
      +'<rect x="108" y="10" width="104" height="30" rx="8" fill="#c0563f"/><text x="160" y="30" text-anchor="middle" font-family="system-ui,Arial,sans-serif" font-size="12" fill="#fff" font-weight="700">أنسجة الحيوان</text>'
      +'<line x1="140" y1="40" x2="55" y2="66" stroke="#6f6758" stroke-width="1.4" marker-end="url(#figArrow_bio2)"/>'
      +'<line x1="150" y1="40" x2="128" y2="66" stroke="#6f6758" stroke-width="1.4" marker-end="url(#figArrow_bio2)"/>'
      +'<line x1="170" y1="40" x2="192" y2="66" stroke="#6f6758" stroke-width="1.4" marker-end="url(#figArrow_bio2)"/>'
      +'<line x1="180" y1="40" x2="265" y2="66" stroke="#6f6758" stroke-width="1.4" marker-end="url(#figArrow_bio2)"/>'
      +'<g font-family="system-ui,Arial,sans-serif">'
      +'<rect x="8" y="68" width="78" height="58" rx="8" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="1.5"/><text x="47" y="90" text-anchor="middle" font-size="11" fill="#1a5c3a" font-weight="700">الظهاري</text><text x="47" y="108" text-anchor="middle" font-size="9.5" fill="#1a5c3a">يغطّي</text><text x="47" y="120" text-anchor="middle" font-size="9.5" fill="#1a5c3a">ويبطّن</text>'
      +'<rect x="92" y="68" width="70" height="58" rx="8" fill="#faf0d4" stroke="#8a6d1f" stroke-width="1.5"/><text x="127" y="90" text-anchor="middle" font-size="11" fill="#8a6d1f" font-weight="700">الضام</text><text x="127" y="108" text-anchor="middle" font-size="9.5" fill="#8a6d1f">يربط</text><text x="127" y="120" text-anchor="middle" font-size="9.5" fill="#8a6d1f">ويسند</text>'
      +'<rect x="168" y="68" width="66" height="58" rx="8" fill="#f6ddd6" stroke="#8a3020" stroke-width="1.5"/><text x="201" y="90" text-anchor="middle" font-size="11" fill="#8a3020" font-weight="700">العضلي</text><text x="201" y="108" text-anchor="middle" font-size="9.5" fill="#8a3020">يحرّك</text><text x="201" y="120" text-anchor="middle" font-size="9.5" fill="#8a3020">الجسم</text>'
      +'<rect x="240" y="68" width="72" height="58" rx="8" fill="#e6e0f0" stroke="#5a3d8a" stroke-width="1.5"/><text x="276" y="90" text-anchor="middle" font-size="11" fill="#5a3d8a" font-weight="700">العصبي</text><text x="276" y="108" text-anchor="middle" font-size="9.5" fill="#5a3d8a">ينقل</text><text x="276" y="120" text-anchor="middle" font-size="9.5" fill="#5a3d8a">الإشارات</text>'
      +'</g>'
      +'<text x="160" y="152" text-anchor="middle" font-family="system-ui,Arial,sans-serif" font-size="10" fill="#6f6758">الظهاري: بسيط (صف واحد) أو مطبّق (طبقات)</text>'
      +'<text x="160" y="170" text-anchor="middle" font-family="system-ui,Arial,sans-serif" font-size="9.5" fill="#8a8172">كل عضو مبنيّ من هذه الأنسجة الأربعة</text>'
      +'</svg>',
    parts:[
      {id:'p1',label:'الظهاري',note:'يغطّي الجسم ويبطّن التجاويف ويكوّن الغدد.'},
      {id:'p2',label:'الضام والعضلي',note:'الضام يربط ويسند، والعضلي يحرّك الجسم.'},
      {id:'p3',label:'العصبي',note:'ينقل الإشارات العصبية في الجسم.'}
    ],
    steps:['جسم الحيوان من أربعة أنسجة أساسية.','الظهاري يغطّي، والضام يربط ويسند.','العضلي يحرّك، والعصبي ينقل الإشارات.']};

  window.FIGS     = Object.assign({}, window.FIGS, ADD);
  var SUBJ={}; Object.keys(ADD).forEach(function(k){ SUBJ[k]=S; });
  window.FIG_SUBJ = Object.assign({}, window.FIG_SUBJ, SUBJ);
})();
