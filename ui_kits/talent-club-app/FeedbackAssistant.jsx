/* دستیار بازخورد — the AI feedback assistant panel.
   Rules, checklist and score model are the product's own (STAR model). */

const RULES = [
  { id: "abs", kind: "tone", label: "لحن — ادعای مطلق",
    note: "کلمه‌های مطلق مثل «همیشه» بازخورد را غیرمنصفانه جلوه می‌دهند. به دفعات و بازه زمانی مشخص اشاره کن.",
    find: /علی همیشه در تحویل تسک‌ها تاخیر داره/,
    fix: () => "در سه اسپرینت گذشته، دو تسک اصلی علی با ۲ تا ۳ روز تاخیر تحویل شد" },
  { id: "judg", kind: "bias", label: "سوگیری — قضاوت شخصیتی",
    note: "«بی‌دقت» برچسب شخصیتی است، نه توصیف رفتار. رفتار قابل مشاهده و مصداق آن را بنویس (پرهیز از اثر شاخ/هاله).",
    find: /و به نظرم خیلی بی‌دقته/,
    fix: () => "و در دو PR اخیر چند خطای قابل پیشگیری در جزئیات کار دیده شد" },
  { id: "vague", kind: "clarity", label: "شفافیت — غیرعملیاتی",
    note: "«باید بهتر بشه» مشخص نمی‌کند چه چیزی، چقدر و چطور. یک اقدام مشخص و قابل پیگیری پیشنهاد بده.",
    find: /باید بهتر بشه\.?/,
    fix: () => "پیشنهاد می‌کنم برای هر تحویل، چک‌لیست کوتاه مستندسازی تعریف کند و در جلسه ۱:۱ بعدی پیشرفت آن را مرور کنیم." },
];

const CHECKS = [
  { id: "context", label: "موقعیت و زمینه", hint: "کجا و چه زمانی اتفاق افتاد؟", re: /(پروژه|اسپرینت|جلسه|نیم‌سال|خرداد|تیر|هفته)/, ins: " برای نمونه، این موضوع را در اسپرینت پایانی خرداد و در پروژه مهاجرت دیتابیس دیدم.", pts: 14 },
  { id: "behavior", label: "رفتار مشاهده‌شده", hint: "چه کاری انجام شد یا نشد؟", re: /(تحویل|ننوشت|مستندات|تاخیر|کد|ارائه)/, ins: " رفتاری که مشاهده کردم: مستندات فاز اول ناقص تحویل شد.", pts: 14 },
  { id: "impact", label: "تاثیر و نتیجه", hint: "چه اثری روی تیم یا کار داشت؟", re: /(باعث شد|منجر|بلاک|عقب افتاد|عقب بیفتد|نتیجه|تاثیر)/, ins: " این موضوع باعث شد تست نهایی اسپرینت دو روز عقب بیفتد و تیم QA بلاک بماند.", pts: 18 },
  { id: "action", label: "اقدام بعدی", hint: "قدم بعدی مشخص چیست؟", re: /(پیشنهاد می‌کنم|چک‌لیست|مرور کنیم|قدم بعدی|پیگیری)/, ins: " پیشنهاد می‌کنم برای هر تحویل چک‌لیست مستندسازی تعریف کند و در جلسه ۱:۱ بعدی آن را مرور کنیم.", pts: 14 },
];

const ROLES = {
  peer: { l: "همکار", tip: "بازخورد همتا: فقط روی همکاری‌هایی که خودت مستقیم تجربه کردی نظر بده، نه شنیده‌ها.", src: ["بازخورد قبلی شما (اسفند ۱۴۰۲)", "چک‌این مشترک پروژه"] },
  report: { l: "عضو تیمم", tip: "به‌عنوان مدیر او: انتظار شفاف و مسیر رشد مشخص کن و از مقایسه با دیگران پرهیز کن.", src: ["هدف Q2: بهبود کیفیت تحویل", "یادداشت ۱:۱ (۲۰ خرداد)"] },
  manager: { l: "مدیرم", tip: "بازخورد رو به بالا: روی تاثیر تصمیم‌ها بر تیم تمرکز کن؛ مشخص و محترمانه بنویس.", src: ["اهداف تیم در نیم‌سال اول", "جلسات هم‌راستایی تیم"] },
  stakeholder: { l: "ذی‌نفع", tip: "به‌عنوان ذی‌نفع: روی خروجی‌ها و تحویل‌ها نظر بده، نه رفتارهای روزمره‌ای که نمی‌بینی.", src: ["چک‌این‌های پروژه مهاجرت دیتابیس", "گزارش تحویل‌های Q2"] },
};

const KCHIP = {
  tone: { background: "var(--color-warning-50)", color: "var(--color-warning-700)" },
  bias: { background: "var(--color-error-50)", color: "var(--color-error-700)" },
  clarity: { background: "var(--color-violet-50)", color: "var(--color-violet-700)" },
};

function analyze(text, dismissed) {
  const flags = [];
  for (const r of RULES) {
    if (dismissed.includes(r.id)) continue;
    const m = text.match(r.find);
    if (m && m[0].trim()) flags.push({ id: r.id, kind: r.kind, label: r.label, note: r.note, excerpt: m[0].trim(), rewrite: r.fix() });
  }
  const checklist = CHECKS.map((c) => ({ ...c, done: c.re.test(text) }));
  let score = 25;
  checklist.forEach((c) => { if (c.done) score += c.pts; });
  if (/[0-9۰-۹٪%]/.test(text)) score += 8;
  flags.forEach((f) => { score -= f.kind === "bias" ? 12 : f.kind === "tone" ? 8 : 6; });
  return { flags, checklist, score: Math.max(5, Math.min(98, score)) };
}

const SectionHead = ({ children, count, color }) => (
  <span style={{ fontSize: 12, fontWeight: 800, color: color || "var(--color-gray-500)", margin: "4px 0 0", display: "flex", alignItems: "center", gap: 8 }}>
    <span>{children}</span>
    {count != null && <span style={{ background: "var(--color-violet-100)", color: "var(--color-violet-700)", borderRadius: 999, padding: "1px 8px", fontSize: 10.5, fontWeight: 700 }}>{count}</span>}
  </span>
);

function ScoreRing({ score }) {
  const lvl = score < 40 ? ["error", "نیاز به بهبود"] : score < 70 ? ["warning", "قابل قبول"] : score < 85 ? ["blue", "خوب"] : ["success", "عالی"];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: 14, border: "1px solid var(--color-gray-100)", borderRadius: 12, background: "var(--color-gray-25)" }}>
      <div style={{ position: "relative", width: 76, height: 76, flex: "none" }}>
        <svg width="76" height="76" viewBox="0 0 76 76">
          <circle cx="38" cy="38" r="32" fill="none" strokeWidth="7" stroke="var(--color-gray-100)" />
          <circle cx="38" cy="38" r="32" fill="none" strokeWidth="7" strokeLinecap="round"
            stroke={`var(--color-${lvl[0]}-500)`}
            style={{ strokeDasharray: 201, strokeDashoffset: 201 * (1 - score / 100), transform: "rotate(-90deg)", transformOrigin: "center", transition: "stroke-dashoffset .3s, stroke .3s" }} />
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 21, fontWeight: 800 }}>{faDigits(score)}</div>
      </div>
      <div>
        <p style={{ fontSize: 12, color: "var(--color-gray-500)", margin: "0 0 6px" }}>امتیاز کیفیت بازخورد (از ۱۰۰)</p>
        <span style={{ display: "inline-flex", padding: "2px 10px", borderRadius: 999, fontSize: 11.5, fontWeight: 700, background: `var(--color-${lvl[0]}-50)`, color: `var(--color-${lvl[0]}-700)` }}>{lvl[1]}</span>
      </div>
    </div>
  );
}

function Suggestion({ f, onAccept, onReject }) {
  return (
    <div style={{ border: "1px solid var(--color-gray-100)", borderRadius: 12, padding: 12, display: "flex", flexDirection: "column", gap: 8, boxShadow: "var(--shadow-xs)" }}>
      <span style={{ fontSize: 10.5, fontWeight: 800, padding: "2px 9px", borderRadius: 999, alignSelf: "flex-start", ...KCHIP[f.kind] }}>{f.label}</span>
      <p style={{ fontSize: 11.5, lineHeight: 1.9, color: "var(--color-gray-600)", margin: 0 }}>{f.note}</p>
      <div style={{ fontSize: 11.5, lineHeight: 1.9, background: "var(--color-gray-50)", borderRight: "3px solid var(--color-gray-300)", padding: "6px 10px", borderRadius: 6, color: "var(--color-gray-500)" }}>«{f.excerpt}»</div>
      <div style={{ fontSize: 12, lineHeight: 2, background: "var(--color-violet-25)", border: "1px dashed var(--color-violet-300)", padding: "8px 12px", borderRadius: 8, color: "var(--color-violet-900)" }}>
        <span style={{ fontSize: 10, fontWeight: 800, color: "var(--color-violet-500)", display: "block", marginBottom: 2 }}>پیشنهاد جایگزین</span>
        <span>{f.rewrite}</span>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Button size="sm" onClick={onAccept}>اعمال پیشنهاد</Button>
        <Button size="sm" hierarchy="outline">ویرایش</Button>
        <button onClick={onReject} style={{ border: 0, background: "none", color: "var(--color-gray-400)", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", padding: "6px 8px" }}>رد پیشنهاد</button>
      </div>
    </div>
  );
}

function FeedbackAssistant({ text, dismissed, analyzing, role, setRole, onClose, onApply, onReject, onInsert }) {
  const { flags, checklist, score } = analyze(text, dismissed);
  const done = checklist.filter((c) => c.done).length;
  return (
    <aside style={{ width: 380, flex: "none", border: "1px solid var(--ai-border)", borderRadius: "var(--panel-radius)", background: "#fff", position: "sticky", top: 24, maxHeight: "calc(100vh - 48px)", display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: "var(--shadow-lg)", animation: "tc-panel-in var(--duration-base) var(--ease-default)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "14px 16px", borderBottom: "1px solid var(--color-violet-100)", background: "var(--ai-surface)", flex: "none" }}>
        <Icon name="sparkle" size={18} color="var(--color-violet-600)" />
        <span style={{ fontSize: 14.5, fontWeight: 800, color: "var(--ai-fg-strong)" }}>دستیار بازخورد</span>
        <Badge text="آزمایشی" size="sm" type="pill color" color="primary" />
        <span style={{ marginInlineStart: "auto" }}><IconButton label="بستن" tone="muted" size="sm" onClick={onClose}><Icon name="x" size={16} /></IconButton></span>
      </div>
      <div style={{ flex: 1, overflow: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        {analyzing ? (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--color-violet-700)", fontSize: 12.5, fontWeight: 700, padding: "6px 0" }}>
              <span style={{ display: "flex", animation: "tc-spin var(--duration-spin) linear infinite" }}><Icon name="sparkle" size={16} color="currentColor" /></span>
              <span>در حال بررسی بازخورد بر اساس مدل STAR...</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "8px 0" }}>
              {["55%", "100%", "82%", "38%", "70%"].map((w, i) => (
                <div key={i} style={{ height: 12, width: w, borderRadius: 6, background: "linear-gradient(90deg,var(--color-gray-100),var(--color-gray-50),var(--color-gray-100))", backgroundSize: "200% 100%", animation: "tc-shimmer var(--duration-shimmer) infinite" }} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <SectionHead>نقش شما نسبت به علی</SectionHead>
              <div style={{ display: "flex", background: "var(--color-gray-50)", border: "1px solid var(--color-gray-100)", borderRadius: 10, padding: 3, gap: 2 }}>
                {Object.entries(ROLES).map(([k, v]) => (
                  <button key={k} onClick={() => setRole(k)}
                    style={{ flex: 1, textAlign: "center", padding: "7px 2px", borderRadius: 8, fontSize: 11.5, fontWeight: 700, cursor: "pointer", border: 0, fontFamily: "inherit", background: k === role ? "#fff" : "none", color: k === role ? "var(--color-violet-700)" : "var(--color-gray-500)", boxShadow: k === role ? "var(--shadow-sm)" : "none" }}>{v.l}</button>
                ))}
              </div>
              <div style={{ fontSize: 11.5, lineHeight: 2, color: "var(--color-violet-800)", background: "var(--color-violet-50)", borderRadius: 8, padding: "8px 12px", display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ flex: "none", marginTop: 4 }}><Icon name="lightbulb" size={14} /></span>
                <span>{ROLES[role].tip}</span>
              </div>
            </div>

            <ScoreRing score={score} />

            <div>
              <SectionHead count={`${faDigits(done)} / ۴`}>ساختار بازخورد (مدل STAR)</SectionHead>
              {checklist.map((c) => (
                <div key={c.id} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "7px 0" }}>
                  <span style={{ width: 20, height: 20, borderRadius: "50%", border: "1.5px solid " + (c.done ? "var(--color-success-500)" : "var(--color-gray-300)"), background: c.done ? "var(--color-success-500)" : "transparent", flex: "none", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", boxSizing: "border-box", marginTop: 2 }}>
                    {c.done && <Icon name="check" size={10} />}
                  </span>
                  <span>
                    <span style={{ fontSize: 12.5, fontWeight: 700, color: "var(--color-gray-800)", display: "block" }}>{c.label}</span>
                    <span style={{ fontSize: 11, color: "var(--color-gray-400)", display: "block", marginTop: 1 }}>{c.hint}</span>
                  </span>
                  {!c.done && (
                    <span style={{ marginInlineStart: "auto", flex: "none" }}>
                      <button onClick={() => onInsert(c.ins)} style={{ border: 0, color: "var(--color-violet-700)", fontSize: 11.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 4, padding: "4px 8px", borderRadius: 6, background: "var(--color-violet-50)" }}>+ افزودن نمونه</button>
                    </span>
                  )}
                </div>
              ))}
            </div>

            <SectionHead count={faDigits(flags.length)}>پیشنهادهای بهبود</SectionHead>
            {flags.length === 0 ? (
              <div style={{ display: "flex", alignItems: "center", gap: 10, background: "var(--color-success-50)", color: "var(--color-success-700)", fontSize: 12, fontWeight: 600, borderRadius: 10, padding: "10px 12px" }}>
                <Icon name="check-circle" size={18} /><span>موردی برای بهبود پیدا نشد. بازخورد آماده ثبت است.</span>
              </div>
            ) : flags.map((f) => (
              <Suggestion key={f.id} f={f} onAccept={() => onApply(f)} onReject={() => onReject(f.id)} />
            ))}

            <div style={{ border: "1px solid var(--color-blue-100)", background: "var(--color-blue-25)", borderRadius: 12, padding: 12, display: "flex", flexDirection: "column", gap: 8 }}>
              <SectionHead color="var(--color-blue-700)">شواهد مرتبط</SectionHead>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {ROLES[role].src.map((s) => (
                  <span key={s} style={{ fontSize: 10.5, fontWeight: 700, background: "#fff", border: "1px solid var(--color-blue-200)", color: "var(--color-blue-700)", padding: "2px 9px", borderRadius: 999 }}>{s}</span>
                ))}
              </div>
              <p style={{ fontSize: 11.5, lineHeight: 2, color: "var(--color-gray-700)", margin: 0 }}>
                بر اساس یادداشت جلسه ۱:۱ (۲۰ خرداد)، درباره تکمیل مستندات فاز اول توافق شده بود. اشاره به این توافق، بازخورد را مستند و منصفانه‌تر می‌کند.
              </p>
              <div><Button size="sm" hierarchy="outline" onClick={() => onInsert(" طبق توافق جلسه ۱:۱ بیستم خرداد، قرار بود مستندات فاز اول تا پایان اسپرینت تکمیل شود.")}>درج در متن</Button></div>
            </div>

            <div style={{ fontSize: 10.5, color: "var(--color-gray-400)", textAlign: "center", lineHeight: 1.9, padding: "4px 0 2px" }}>
              پیشنهادهای هوش مصنوعی ممکن است دقیق نباشند؛ تصمیم نهایی همیشه با شماست.
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

Object.assign(window, { FeedbackAssistant, analyze, ROLES });
