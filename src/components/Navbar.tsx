"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, tr } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#projects", label: tr.nav.projects },
    { href: "#about", label: tr.nav.about },
    { href: "#experience", label: tr.nav.experience },
    { href: "#skills", label: tr.nav.skills },
    { href: "#contact", label: tr.nav.contact },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #222" : "1px solid transparent",
      }}
    >
      <nav
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          style={{
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "#f0f0f0",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          VS
        </a>

        {/* Desktop links */}
        <div
          style={{ display: "flex", gap: "28px", alignItems: "center" }}
          className="hidden-mobile"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: "#888",
                textDecoration: "none",
                fontSize: "0.875rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#f0f0f0")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#888")
              }
            >
              {l.label}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            style={{
              padding: "5px 12px",
              background: "transparent",
              color: "#888",
              border: "1px solid #333",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "#f0f0f0";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#666";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "#888";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#333";
            }}
          >
            {lang === "en" ? "ES" : "EN"}
          </button>

          <a
            href="mailto:victor.saico@tecsup.edu.pe"
            style={{
              padding: "8px 18px",
              background: "#6366f1",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 600,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLAnchorElement).style.background = "#4f46e5")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLAnchorElement).style.background = "#6366f1")
            }
          >
            {tr.nav.hire}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#888",
            padding: "8px",
            display: "none",
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {menuOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(10,10,10,0.97)",
            borderTop: "1px solid #222",
            padding: "16px 24px",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: "#888",
                textDecoration: "none",
                padding: "12px 0",
                fontSize: "1rem",
                borderBottom: "1px solid #1a1a1a",
              }}
            >
              {l.label}
            </a>
          ))}
          <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              style={{
                flex: 1,
                padding: "12px",
                background: "transparent",
                color: "#888",
                border: "1px solid #333",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "0.9rem",
                fontWeight: 600,
              }}
            >
              {lang === "en" ? "Español" : "English"}
            </button>
            <a
              href="mailto:victor.saico@tecsup.edu.pe"
              style={{
                flex: 2,
                display: "block",
                padding: "12px",
                background: "#6366f1",
                color: "white",
                borderRadius: "8px",
                textDecoration: "none",
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              {tr.nav.hire}
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
