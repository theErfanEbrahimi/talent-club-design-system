const { useState, useRef, useEffect } = React;
const { Button, IconButton, Avatar, Icon, Badge } = window.TalentClubDesignSystem_ae32ee;

const NAV = [
  { id: "okr", label: "فرم‌های OKR", icon: "file-text", chevron: true },
  { id: "perf", label: "ارزیابی عملکرد", icon: "clipboard-check" },
  { id: "learn", label: "آموزش", icon: "graduation-cap" },
  { id: "review", label: "مرور عملکرد", icon: "review-doc" },
  { id: "activity", label: "مرکز فعالیت", icon: "flag" },
  { id: "people", label: "همکاران", icon: "users" },
];

function Sidebar({ active, onNav }) {
  return (
    <aside style={{ width: "var(--app-sidebar-width)", flex: "none", background: "var(--app-sidebar-bg)", color: "#fff", display: "flex", flexDirection: "column", padding: "20px 12px", boxSizing: "border-box" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "4px 8px 26px" }}>
        <img src="../../assets/logo-horizontal-brand.svg" alt="تلنت‌کلاب" style={{ height: 26, filter: "brightness(0) invert(1)" }} />
      </div>
      {NAV.map((n) => {
        const on = n.id === active;
        return (
          <div key={n.id} onClick={() => onNav(n.id)}
            style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: "var(--app-sidebar-item-radius)", color: on ? "#fff" : "var(--app-sidebar-fg)", fontSize: 14, fontWeight: on ? 700 : 500, cursor: "pointer", marginBottom: 4, background: on ? "var(--app-sidebar-item-active-bg)" : "none" }}>
            <Icon name={n.icon} size={20} />
            <span>{n.label}</span>
            {n.chevron && <span style={{ marginInlineStart: "auto", opacity: 0.7, display: "flex" }}><Icon name="chevron-down" size={14} /></span>}
          </div>
        );
      })}
      <div style={{ marginTop: "auto", textAlign: "center", color: "var(--app-sidebar-footer-fg)", fontSize: 11, lineHeight: 1.9, paddingBottom: 8 }}>
        Digikala Digital HR.<br />Version 2.0
      </div>
    </aside>
  );
}

function Header({ user = "مسعود" }) {
  return (
    <header style={{ height: "var(--app-header-height)", flex: "none", background: "var(--app-header-bg)", borderBottom: "1px solid var(--app-header-border)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: 14 }}>
        <span>خوش آمدید، {user}</span><span>👋</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, color: "var(--text-secondary)" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 500, cursor: "pointer" }}>
          <span>فارسی</span><Icon name="chevron-down" size={14} />
        </span>
        <span style={{ display: "flex", cursor: "pointer" }}><Icon name="bell" size={20} /></span>
        <span style={{ width: 1, height: 24, background: "var(--color-gray-200)" }} />
        <span style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
          <Avatar name={user} /><Icon name="chevron-down" size={14} />
        </span>
      </div>
    </header>
  );
}

function AppShell({ active, onNav, children }) {
  return (
    <div dir="rtl" style={{ display: "flex", minHeight: "100vh", minWidth: 1380, background: "var(--surface-page)", fontFamily: "var(--font-sans)", color: "var(--text-primary)" }}>
      <Sidebar active={active} onNav={onNav} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <Header />
        {children}
      </div>
    </div>
  );
}

Object.assign(window, { AppShell, Sidebar, Header, NAV, useState, useRef, useEffect, Button, IconButton, Avatar, Icon, Badge });
