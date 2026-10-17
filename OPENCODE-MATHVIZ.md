# OPENCODE-MATHVIZ.md
## مهمة opencode: الرسوم التفاعلية للمعادلات

---

## الفكرة

الطالب يُدخل قيم المعادلة بالأسهم ▲▼ فيرسم الشكل فوراً.  
مثال: يُدخل a=2, b=-3, c=1 → القطع المكافئ يتغير لحظياً.

---

## قواعد صارمة

```
1. JavaScript نقي فقط — لا Chart.js، لا D3، لا Plotly، لا أي مكتبة
2. الرسم على <canvas> أو SVG محسوب بـ JS
3. كل ملف HTML مستقل (standalone) — يعمل بدون أي ملف خارجي
4. لا اتصال بالإنترنت — كل شيء inline
5. يعمل على موبايل (touch + mouse)
6. الإدخال بطريقتين: حقل نص + سهمَي ▲▼
7. يعمل كـ <iframe srcdoc> أو <iframe src="data:..."> — تأكد بالتجربة
8. لا window.parent أو window.top
```

---

## ألوان النظام (استخدمها)

```css
--bg: #f4f1ea
--ink: #27231d
--muted: #8a8172
--acc: #2f7d5b    (أخضر — المنحنى الرئيسي)
--card: #fff
--line: #e4ded2
--bad: #c0563f    (أحمر — المنحنى الثانوي، التنبيهات)
--soft: #efe9dd
--gold: #d8a53a   (ذهبي — الزوايا، المعلومات)
```

---

## بنية كل ملف (نموذج)

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>اسم الرسم</title>
<style>
:root{--bg:#f4f1ea;--ink:#27231d;--muted:#8a8172;--acc:#2f7d5b;
      --soft:#efe9dd;--line:#e4ded2;--card:#fff;--bad:#c0563f}
*{box-sizing:border-box}
body{font-family:system-ui,sans-serif;background:var(--bg);
     color:var(--ink);margin:0;padding:12px}
.eq{text-align:center;font-size:15px;font-weight:700;color:var(--acc);margin:0 0 10px}
canvas{display:block;margin:0 auto;border-radius:12px;
       background:var(--card);border:1px solid var(--line)}
.ctrl{display:flex;justify-content:center;gap:12px;margin:10px 0;flex-wrap:wrap}
.param{display:flex;align-items:center;gap:4px;background:var(--card);
       border:1px solid var(--line);border-radius:10px;padding:4px 8px}
.param label{font-size:13px;font-weight:700;color:var(--acc);min-width:16px;text-align:center}
.param input{width:58px;border:1px solid var(--line);border-radius:6px;
             padding:4px;font-size:13px;text-align:center;font-family:inherit}
.param button{min-width:32px;min-height:32px;border:0;border-radius:6px;
              background:var(--soft);cursor:pointer;font-size:14px;font-family:inherit}
.info{display:flex;justify-content:center;gap:16px;flex-wrap:wrap;
      font-size:12.5px;color:var(--muted);margin-top:8px;padding:0 8px}
.info b{color:var(--ink)}
</style>
</head>
<body>
<div class="eq" id="eqLabel">…</div>
<canvas id="cv" width="320" height="260"></canvas>
<div class="ctrl">
  <!-- عناصر الإدخال -->
</div>
<div class="info" id="infoBar">
  <!-- معلومات محسوبة -->
</div>
<script>
// JS كامل inline
const P = { /* المعاملات */ };
function adj(k,d){ P[k]=Math.round((P[k]+d)*100)/100; syncInputs(); draw(); }
function syncInputs(){ /* تحديث حقول النص */ }
function draw(){ /* رسم الكنفاس */ }
// إضافة مستمعات للحقول
draw();
</script>
</body>
</html>
```

---

## قائمة الملفات المطلوبة

### math-viz/ (رياضيات + فيزياء)

**1. parabola.html — القطع المكافئ**
```
المعاملات: a, b, c (خطوة 0.5 لـ a، 1 لـ b,c)
حدود: a ∈ [-5,5] ≠ 0
الرسم: المنحنى + محور التماثل منقّط + نقطة الرأس بلون --bad
المعلومات: الرأس (h,k)، محور التماثل x=h، اتجاه الفتح
المعادلة المعروضة: y = ax² + bx + c تتحدث بالقيم الحقيقية
```

**2. ellipse.html — القطع الناقص**
```
المعاملات: a (نصف المحور الأكبر)، b (الأصغر)، h, k (المركز)
حدود: a,b ∈ [0.5,8]، a ≥ b
الرسم: القطع الناقص + البؤرتان (نقطتان بـ --bad) + محورا الارتكاز منقّطان
المعلومات: c = √(a²-b²)، البؤرتان (h±c, k)
المعادلة: (x-h)²/a² + (y-k)²/b² = 1
```

**3. hyperbola.html — القطع الزائد**
```
المعاملات: a, b، h, k، نوع (أفقي/رأسي) — زر toggle
حدود: a,b ∈ [0.5,6]
الرسم: فرعا القطع + المقاربتان منقّطتان (بلون --bad) + البؤرتان
المعلومات: c = √(a²+b²)، معادلات المقاربات
```

**4. circle.html — الدائرة**
```
المعاملات: h, k (المركز)، r (النصف قطر)
خطوة r = 0.5، h,k = 1
الرسم: الدائرة + المركز + نقطة على المحيط + r بسهم
المعادلة: (x-h)² + (y-k)² = r²
```

**5. complex_plane.html — المستوى المركّب**
```
المعاملات: a (حقيقي)، b (تخيلي)
خطوة = 0.5
الرسم: المحوران + متجه z + مثلث المكوّنين a و bi منقّطان + زاوية θ
المعلومات: |z| = √(a²+b²)، arg(z) بالدرجات والراديان
المعادلة المعروضة: z = a + bi
```

**6. derivative_tangent.html — المشتق والمماس**
```
المعاملات: a₃, a₂, a₁, a₀ لكثيرة الحدود + x₀ (نقطة المماس)
خطوة a = 0.5، x₀ = 0.5
الرسم: المنحنى (--acc) + خط المماس (--bad) + النقطة
المعلومات: f(x₀)، f'(x₀)، معادلة المماس: y = mx + n
```

**7. capacitor.html — المتسعة**
```
المعاملات: V (الجهد 1-100V)، d (المسافة 0.001-0.1 م)، εr (1-100)، A (0.001-1 م²)
الرسم: لوحان متوازيان + خطوط المجال الأفقية + تسميات + المسافة d
المعلومات: C = ε₀εr·A/d، Q = CV، E = V/d
وحدات: F, C, V/m — اعرضها بصيغة علمية (1.2×10⁻⁹)
```

**8. rc_circuit.html — دائرة RC**
```
المعاملات: R (Ω)، C (μF)، V₀ (V)
الرسم: منحنى الشحن (--acc) + منحنى التفريغ (--bad) على نفس الكنفاس
محور x = الوقت (بوحدات τ)، محور y = الجهد
المعلومات: τ = RC، V عند t=τ (63.2%)، t=2τ (86.5%)، t=5τ (99.3%)
```

**9. optics_lens.html — العدسة المحدبة**
```
المعاملات: f (البعد البؤري 1-20 cm)، do (مسافة الجسم 1-40 cm)
الرسم: العدسة (رأسي) + الأشعة الثلاثة + الصورة
- الصورة حقيقية → (--bad)، وهمية → (--acc) بخط منقّط
المعلومات: 1/di = 1/f - 1/do، m = -di/do، نوع الصورة
```

**10. projectile.html — الرمي المائل**
```
المعاملات: v₀ (1-50 m/s)، θ (5-85 درجة)، g=9.8 (ثابت)
الرسم: المسار الكامل (قوس) + نقطة الذروة بدائرة + السهم الابتدائي
المعلومات: H_max، X_max، T (وقت الطيران)
الأسهم: vx و vy عند نقطة الإطلاق
```

**11. wave_interference.html — التداخل الموجي**
```
المعاملات: A₁, A₂ (السعة 0.1-2)، λ₁ (الطول الموجي 1-4)، φ (فرق الطور 0-360°)
الرسم: الموجة 1 (--acc) + الموجة 2 (--bad) + المحصّلة (--ink غامق)
المعلومات: بنّاء أم هدام (بناءً على φ)، السعة الكلية
```

---

## ملف الفهرس (mathviz-index.json)

```json
{
  "generated": "2026-10-17",
  "total": 11,
  "items": [
    {
      "key": "parabola",
      "title": "القطع المكافئ",
      "subj": "الرياضيات",
      "chapter": "الفصل الثاني — القطوع المخروطية",
      "file": "math-viz/parabola.html",
      "params": ["a","b","c"],
      "description": "y = ax² + bx + c مع الرأس ومحور التماثل"
    },
    {
      "key": "capacitor",
      "title": "المتسعة",
      "subj": "الفيزياء",
      "chapter": "الفصل الأول — المجال الكهربائي",
      "file": "math-viz/capacitor.html",
      "params": ["V","d","epsilon_r","A"],
      "description": "حساب C وQ وE مع تصور اللوحين والمجال"
    }
  ]
}
```

---

## كيف يستخدمها Claude لاحقاً

Claude يقرأ كل ملف HTML ويضع محتواه في `content/mathviz.js` هكذا:
```js
window.MATHVIZ = {};
window.MATHVIZ['parabola'] = `<!DOCTYPE html>…</html>`;
// …
```

ثم في محتوى الدرس يُكتب:
```js
{ t: 'mathviz', k: 'parabola' }
```

وفي index.html يُعرض كـ iframe:
```js
function mathvizHTML(k) {
  const src = window.MATHVIZ && window.MATHVIZ[k];
  if(!src) return '';
  return `<div class="mathviz-wrap" style="margin:12px 0">
    <iframe srcdoc="${src.replace(/"/g,'&quot;')}"
            style="width:100%;height:420px;border:0;border-radius:12px"
            sandbox="allow-scripts"></iframe>
  </div>`;
}
```

لذلك كل ملف يجب أن يعمل بشكل كامل داخل iframe بدون أي مصدر خارجي.

---

## التحقق الذاتي

```bash
# تحقق أن لا روابط خارجية
for f in math-viz/*.html; do
  if grep -qE 'src="https?:|href="https?:|url\(https?:' "$f"; then
    echo "ERROR external link: $f"
  else
    echo "OK: $f"
  fi
done

# تحقق الحجم
for f in math-viz/*.html; do
  size=$(wc -c < "$f")
  echo "$(basename $f): ${size} bytes"
done

# تحقق فهرس JSON
node -e "
const idx = JSON.parse(require('fs').readFileSync('math-viz/mathviz-index.json'));
const files = require('fs').readdirSync('math-viz').filter(f=>f.endsWith('.html'));
const keys = idx.items.map(i=>i.key+'.html');
const missing = keys.filter(k=>!files.includes(k));
if(missing.length) console.error('MISSING:', missing);
else console.log('OK: all', idx.items.length, 'files present');
"
```
