/* Question list (right rail) + collapsed number rail. Content from the live
   performance-review form, نیم سال اول ۱۴۰۳. */

const SECTIONS = [
  {
    title: "مهارت‌های رهبری و مدیریت", open: true,
    items: [
      { n: "۱.", state: "v", text: "در این نیم‌سال، کجاها و در چه سطحی در جهت انتظارات مشترک نردبانی (مشارکت شهروندی)..." },
      { n: "۲.", state: "g", text: "یک یا دو نمونه مشخص از عملکرد همکارت در این نیم‌سال را با ذکر موقعیت و نتیجه شرح بده..." },
      { n: "۳.", state: "n", text: "در نیم‌سال گذشته، کجاها تونستی -نسبت به قبل- رشد کنی و پیشرفت داشته باشی؟ کجاها خ..." },
      { n: "۴.", state: "n", text: "آیا درخواست بررسی ارتقا شغلی به سطح بالاتر در نردبان فنی توسط کمیته‌ی ارتقا شغلی دارید؟" },
    ],
  },
  { title: "مهارت‌های ارتباطی", items: [] },
  { title: "کار تیمی و همکاری", items: [] },
];

const CHECK_BG = { v: ["var(--color-violet-100)", "var(--color-violet-600)"], g: ["var(--color-success-100)", "var(--color-success-600)"], n: ["var(--color-gray-100)", "var(--color-gray-400)"] };

function QuestionList({ current = 2, onPick }) {
  return (
    <aside style={{ width: 300, flex: "none" }}>
      <h3 style={{ fontSize: 15, fontWeight: 800, margin: "0 0 16px" }}>فهرست سوالات</h3>
      {SECTIONS.map((s, si) => (
        <div key={s.title} style={{ background: "var(--color-gray-50)", borderRadius: 12, padding: "14px 16px", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 13.5, fontWeight: 700, color: "var(--color-gray-800)", cursor: "pointer" }}>
            <span>{s.title}</span>
            <Icon name={s.open ? "chevron-up" : "chevron-down"} size={16} />
          </div>
          {s.items.map((it, i) => {
            const on = si === 0 && i + 1 === current;
            const [bg, fg] = CHECK_BG[it.state];
            return (
              <div key={it.n} onClick={() => onPick && onPick(i + 1)}
                style={{ display: "flex", gap: 8, padding: "12px 0 0", fontSize: 12, lineHeight: 1.9, color: on ? "var(--color-violet-700)" : "var(--color-gray-600)", fontWeight: on ? 600 : 400, cursor: "pointer", alignItems: "flex-start" }}>
                <span style={{ width: 18, height: 18, borderRadius: "50%", flex: "none", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 3, background: bg, color: fg }}>
                  <Icon name="check" size={10} strokeWidth={2} />
                </span>
                <span style={{ fontWeight: 700, flex: "none" }}>{it.n}</span>
                <span>{it.text}</span>
              </div>
            );
          })}
        </div>
      ))}
    </aside>
  );
}

function QuestionRail({ current = 2, onExpand }) {
  return (
    <div title="نمایش فهرست سوالات" style={{ width: 52, flex: "none", background: "var(--color-gray-50)", borderRadius: 12, padding: "10px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      {["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸"].map((n, i) => (
        <button key={n} onClick={onExpand}
          style={{ width: 30, height: 30, borderRadius: "50%", border: 0, fontFamily: "inherit", fontSize: 12, fontWeight: 700, cursor: "pointer", boxShadow: "var(--shadow-sm)", background: i + 1 === current ? "var(--color-violet-600)" : "#fff", color: i + 1 === current ? "#fff" : "var(--color-gray-500)" }}>{n}</button>
      ))}
    </div>
  );
}

Object.assign(window, { QuestionList, QuestionRail });
