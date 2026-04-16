"use client";

import { useState } from "react";
import CvModal from "./CvModal";

export default function Hero() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
            animation: "fadeUp 0.8s ease forwards",
          }}
        >
          {/* Status badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              borderRadius: "100px",
              marginBottom: "32px",
              fontSize: "0.8125rem",
              color: "#a5b4fc",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                background: "#22c55e",
                borderRadius: "50%",
                animation: "pulse 2s infinite",
              }}
            />
            Open to Senior &amp; Lead roles
          </div>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: "24px",
              color: "#f0f0f0",
            }}
          >
            Victor Saico
            <br />
            <span className="gradient-text">Technical Lead</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.375rem)",
              color: "#888",
              maxWidth: "680px",
              margin: "0 auto 24px",
              lineHeight: 1.6,
            }}
          >
            Building fintech and mobile products used by thousands — and
            engineered to last.
          </p>

          <p style={{ fontSize: "1rem", color: "#666", marginBottom: "48px" }}>
            Technical Lead at Interbank · 8+ years shipping mobile apps that
            drive real revenue at scale.
          </p>

          {/* Metrics */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "48px",
              marginBottom: "56px",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "100k+", label: "Active Users" },
              { value: "$5M", label: "Annual Profit" },
              { value: "8+", label: "Years Experience" },
            ].map((m) => (
              <div key={m.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#f0f0f0",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {m.value}
                </div>
                <div style={{ fontSize: "0.8125rem", color: "#555", marginTop: "4px" }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "32px",
            }}
          >
            <a
              href="#projects"
              style={{
                padding: "14px 32px",
                background: "#6366f1",
                color: "white",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.9375rem",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.background = "#4f46e5";
                (e.target as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.background = "#6366f1";
                (e.target as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              View my work
            </a>

            <button
              onClick={() => setCvOpen(true)}
              style={{
                padding: "14px 32px",
                background: "transparent",
                color: "#f0f0f0",
                border: "1px solid #6366f1",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.9375rem",
                transition: "background 0.2s, transform 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(99,102,241,0.1)";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              View CV
            </button>

            <a
              href="#contact"
              style={{
                padding: "14px 32px",
                background: "transparent",
                color: "#f0f0f0",
                border: "1px solid #333",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.9375rem",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.borderColor = "#666";
                (e.target as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.borderColor = "#333";
                (e.target as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              Get in touch
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <a
              href="https://www.linkedin.com/in/victor-saico-justo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#555",
                textDecoration: "none",
                fontSize: "0.8125rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#a5b4fc")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#555")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/victorskatepro"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#555",
                textDecoration: "none",
                fontSize: "0.8125rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#a5b4fc")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#555")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#333",
            animation: "bounce 2s infinite",
          }}
        >
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
            <rect x="6.5" y="5" width="3" height="6" rx="1.5" fill="currentColor" />
          </svg>
        </div>

        <style>{`
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
          @keyframes bounce { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(6px); } }
        `}</style>
      </section>

      {cvOpen && <CvModal onClose={() => setCvOpen(false)} />}
    </>
  );
}
