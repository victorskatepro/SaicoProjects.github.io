"use client";

import { useEffect } from "react";

interface Props {
  onClose: () => void;
}

export default function CvModal({ onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "860px",
          height: "90vh",
          background: "#111",
          border: "1px solid #222",
          borderRadius: "20px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          animation: "fadeUp 0.3s ease",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "16px 20px",
            borderBottom: "1px solid #1e1e1e",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                background: "rgba(99,102,241,0.15)",
                border: "1px solid rgba(99,102,241,0.3)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#f0f0f0" }}>
                Victor Saico — Curriculum Vitae 2026
              </div>
              <div style={{ fontSize: "0.75rem", color: "#555" }}>cv_2026_vsaico.pdf</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <a
              href="/cv_2026_vsaico.pdf"
              download="cv_2026_vsaico.pdf"
              style={{
                padding: "8px 16px",
                background: "#6366f1",
                color: "white",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "0.8125rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download
            </a>
            <button
              onClick={onClose}
              style={{
                width: "32px",
                height: "32px",
                background: "transparent",
                border: "1px solid #333",
                borderRadius: "8px",
                cursor: "pointer",
                color: "#888",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
              }}
            >
              ×
            </button>
          </div>
        </div>

        {/* PDF embed */}
        <iframe
          src="/cv_2026_vsaico.pdf"
          style={{ flex: 1, border: "none", background: "#0a0a0a" }}
          title="Victor Saico CV"
        />
      </div>
    </div>
  );
}
