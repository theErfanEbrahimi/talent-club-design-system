/* Performance-review form screen: page toolbar + workspace, and the
   click-through wiring between the editor and the AI assistant. */

const START_TEXT = "علی همیشه در تحویل تسک‌ها تاخیر داره و به نظرم خیلی بی‌دقته. توی پروژه مهاجرت دیتابیس، مستندات فاز اول رو کامل ننوشت. باید بهتر بشه.";

function PerformanceReviewScreen() {
  const [text, setText] = useState(START_TEXT);
  const [aiOpen, setAiOpen] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);
  const [dismissed, setDismissed] = useState([]);
  const [role, setRole] = useState("peer");

  const flags = analyze(text, dismissed).flags;

  const openAi = () => {
    if (analyzed) { setAiOpen(true); return; }
    setAiOpen(true); setAnalyzing(true);
    setTimeout(() => { setAnalyzing(false); setAnalyzed(true); }, 1200);
  };
  const clean = (s) => s.replace(/ {2,}/g, " ").replace(/ ([.،])/g, (m, p) => p);
  const apply = (f) => { setText((t) => clean(t.split(f.excerpt).join(f.rewrite))); setDismissed((d) => [...d, f.id]); };
  const insert = (s) => setText((t) => { let x = t.replace(/\s+$/, ""); if (x && !/[.!؟]$/.test(x)) x += "."; return clean(x + s); });

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", background: "#fff", borderBottom: "1px solid var(--color-gray-100)" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 800, fontSize: 17 }}>
            <Icon name="chevron-right" size={18} strokeWidth={2.2} />
            <span>ارزیابی عملکرد همکار - نیم سال اول ۱۴۰۳</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--color-gray-500)", marginTop: 8 }}>
            <Icon name="info-circle" size={14} />
            <span>ثبت بازخورد برای علی رضایی · مهندس ارشد نرم‌افزار</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Button hierarchy="outline">ذخیره</Button>
          <Button hierarchy="contained">ثبت نهایی ارزیابی</Button>
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-start", gap: 24, padding: 24, background: "#fff" }}>
        {aiOpen ? <QuestionRail current={2} onExpand={() => setAiOpen(false)} /> : <QuestionList current={2} />}
        <AnswerEditor text={text} onText={setText} flags={flags} analyzed={analyzed} analyzing={analyzing} onAi={openAi} />
        {aiOpen && (
          <FeedbackAssistant
            text={text} dismissed={dismissed} analyzing={analyzing} role={role} setRole={setRole}
            onClose={() => setAiOpen(false)} onApply={apply} onInsert={insert}
            onReject={(id) => setDismissed((d) => [...d, id])} />
        )}
      </div>
    </>
  );
}

Object.assign(window, { PerformanceReviewScreen });
