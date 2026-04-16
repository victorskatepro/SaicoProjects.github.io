"use client";

export default function Hero() {
  return (
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
          background:
            "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
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
          Open to Senior & Lead roles
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

        <p
          style={{
            fontSize: "1rem",
            color: "#666",
            marginBottom: "48px",
          }}
        >
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
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
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
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#444",
          animation: "bounce 2s infinite",
        }}
      >
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
          <rect x="6.5" y="5" width="3" height="6" rx="1.5" fill="currentColor" style={{ animation: "scroll-dot 2s infinite" }} />
        </svg>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
