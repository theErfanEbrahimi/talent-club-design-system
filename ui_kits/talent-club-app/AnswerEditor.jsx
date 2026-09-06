/* Answer editor: toolbar, highlight backdrop under a transparent textarea,
   word count, AI trigger, legend, prev/next. */

const TOOLBAR = [
  ["image"], "|", ["list"], "|", ["align-right", true], ["align-center"], ["align-left"], "|", ["bold"], ["link"],
];

const MARK = {
  tone: { background: "var(--mark-tone-bg)", boxShadow: "0 2px 0 var(--mark-tone-rule)" },
  bias: { background: "var(--mark-bias-bg)", boxShadow: "0 2px 0 var(--mark-bias-rule)" },
  clarity: { background: "var(--mark-clarity-bg)", boxShadow: "0 2px 0 var(--mark-clarity-rule)" },
};

const faDigits = (n) => String(n).replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);

function Highlights({ text, flags, scrollRef }) {
  const marks = flags.map((f) => { const i = text.indexOf(f.excerpt); return i < 0 ? null : { i, j: i + f.excerpt.length, k: f.kind }; })
    .filter(Boolean).sort((a, b) => a.i - b.i);
  const kids = []; let p = 0;
  for (const m of marks) {
    if (m.i < p) continue;
    if (m.i > p) kids.push(text.slice(p, m.i));
    kids.push(<mark key={m.i + m.k} style={{ borderRadius: 3, padding: "2px 0", color: "inherit", ...MARK[m.k] }}>{text.slice(m.i, m.j)}</mark>);
    p = m.j;
  }
  kids.push(text.slice(p));
  return (
    <div ref={scrollRef} aria-hidden style={{ position: "absolute", inset: 0, color: "var(--color-gray-900)", overflow: "hidden", pointerEvents: "none", fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: "var(--editor-line-height)", padding: "16px 20px", boxSizing: "border-box", whiteSpace: "pre-wrap", overflowWrap: "break-word" }}>{kids}</div>
  );
}

function AnswerEditor({ text, onText, flags, analyzed, analyzing, onAi }) {
  const back = useRef(null);
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  return (
    <main style={{ flex: 1, minWidth: 420 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <span style={{ fontSize: 14, fontWeight: 700 }}>سوال ۲ / ۸</span>
        <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "var(--text-link)", cursor: "pointer" }}>
          <Icon name="help-circle" size={15} /><span>راهنمای پاسخ به سوال</span>
        </span>
      </div>
      <p style={{ fontSize: 15, lineHeight: 2, fontWeight: 500, color: "var(--color-gray-900)", margin: "0 0 16px" }}>
        یک یا دو نمونه مشخص از عملکرد علی در این نیم‌سال را شرح بده؛ موقعیت، رفتار مشاهده‌شده، تاثیر آن و پیشنهادت برای قدم بعدی را بنویس.
      </p>
      <div style={{ border: "1px solid var(--editor-border)", borderRadius: 12, background: "#fff", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 2, padding: "8px 10px", borderBottom: "1px solid var(--color-gray-100)" }}>
          {TOOLBAR.map((t, i) => t === "|"
            ? <span key={i} style={{ width: 1, height: 20, background: "var(--color-gray-100)", margin: "0 8px" }} />
            : <IconButton key={i} label={t[0]} active={!!t[1]}><Icon name={t[0]} size={17} /></IconButton>)}
        </div>
        <div style={{ position: "relative" }}>
          <Highlights text={text} flags={analyzed ? flags : []} scrollRef={back} />
          <textarea value={text} onChange={(e) => onText(e.target.value)} spellCheck={false} dir="rtl"
            onScroll={(e) => { if (back.current) back.current.scrollTop = e.target.scrollTop; }}
            placeholder="لطفا توضیحات خود را بنویسید..."
            style={{ position: "relative", display: "block", width: "100%", height: 330, border: 0, outline: "none", resize: "vertical", background: "transparent", color: "transparent", caretColor: "var(--color-gray-900)", zIndex: 1, margin: 0, fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: "var(--editor-line-height)", padding: "16px 20px", boxSizing: "border-box" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", borderTop: "1px solid var(--color-gray-100)", background: "var(--color-gray-25)" }}>
          <Button hierarchy="ai" size="sm" style={{ padding: "10px 18px", fontSize: 14, borderRadius: 10, fontWeight: 700 }}
            disabled={analyzing || !text.trim()} onClick={onAi} iconLeft={<Icon name="sparkle" size={16} />}>
            {analyzed ? "باز کردن دستیار بازخورد" : "بررسی با هوش مصنوعی"}
          </Button>
          <span style={{ fontSize: 11.5, color: "var(--color-gray-400)" }}>{faDigits(words)} کلمه</span>
        </div>
      </div>
      {analyzed && flags.length > 0 && (
        <div style={{ display: "flex", gap: 16, marginTop: 12, fontSize: 11, color: "var(--color-gray-500)", alignItems: "center" }}>
          <span style={{ fontWeight: 700 }}>نشانه‌گذاری متن:</span>
          {[["لحن", "warning"], ["سوگیری", "error"], ["شفافیت", "violet"]].map(([l, c]) => (
            <span key={l} style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ width: 10, height: 10, borderRadius: 3, background: `var(--color-${c}-200)` }} /><span>{l}</span>
            </span>
          ))}
        </div>
      )}
      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 24, alignItems: "center" }}>
        <Button hierarchy="text1" iconLeft={<Icon name="arrow-right" size={16} />}>قبلی</Button>
        <Button hierarchy="pale" size="lg" iconRight={<Icon name="arrow-left" size={16} />}>بعدی</Button>
      </div>
    </main>
  );
}

Object.assign(window, { AnswerEditor, faDigits });
