# UI kit — Talent Club HR app

High-fidelity recreation of the one product surface the provided sources actually
define: the **performance-review form** (`ارزیابی عملکرد همکار - نیم سال اول ۱۴۰۳`)
with the **AI feedback assistant** (`دستیار بازخورد`) panel.

Source of truth: `AI Feedback Assistant.dc.html` (design component source, read
line-by-line — not from screenshots) plus the reference screenshots in
`assets/screens/`. Every measurement, string and color here comes from that file.

## Files

| File | What |
| --- | --- |
| `index.html` | Interactive click-through. Sidebar nav switches sections; the review form is live. |
| `AppShell.jsx` | violet-950 sidebar (6 nav items) + white 64px header. |
| `QuestionList.jsx` | 300px question rail with 3 collapsible categories, and its collapsed 52px number rail. |
| `AnswerEditor.jsx` | Toolbar, highlight-backdrop textarea, word count, AI trigger, legend, prev/next. |
| `FeedbackAssistant.jsx` | 380px AI panel: role segmented control, score ring, STAR checklist, suggestion cards, evidence block. |
| `PerformanceReviewScreen.jsx` | Page toolbar + workspace; wires editor ↔ assistant. |

## What you can click

1. Press **بررسی با هوش مصنوعی** — the question list collapses to a number rail, the assistant slides in from the leading edge and shows a 1.2s shimmer/thinking state.
2. The assistant flags the seeded text for tone (`همیشه`), bias (`بی‌دقته`) and clarity (`باید بهتر بشه`); each flag highlights inline in the editor.
3. **اعمال پیشنهاد** rewrites the text in place — score ring, STAR checklist and flag count all recompute live.
4. **+ افزودن نمونه** on any unmet STAR item appends a concrete sentence; **درج در متن** in the evidence block does the same from a 1:1 note.
5. Switching the role segmented control (همکار / عضو تیمم / مدیرم / ذی‌نفع) changes the guidance tip and the evidence sources.

## Deliberately not built

Other sidebar destinations (فرم‌های OKR، آموزش، مرور عملکرد، مرکز فعالیت، همکاران)
render an explicit "not in this recreation" state. No source material describes
them, so inventing screens would misrepresent the product.
