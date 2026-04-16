"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("visible");
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="section-fade"
      style={{ padding: "100px 24px", maxWidth: "1100px", margin: "0 auto" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="about-grid"
      >
        <div>
          <p style={{ color: "#6366f1", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
            About
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "32px",
              color: "#f0f0f0",
            }}
          >
            Engineering for
            <br />
            real-world impact
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p style={{ color: "#888", lineHeight: 1.75, fontSize: "1rem" }}>
              I&apos;m a software engineer and technical lead based in Huancayo, Peru.
              Over eight years I&apos;ve taken mobile products from concept to production
              at fintech, logistics, and enterprise scale — owning architecture,
              delivery, and the people who build alongside me.
            </p>
            <p style={{ color: "#888", lineHeight: 1.75, fontSize: "1rem" }}>
              My work lives at the intersection of security and speed. I build
              Android-first experiences secured with AES-256 and SSL pinning,
              backed by cloud infrastructure on Azure, and deployed through
              automated pipelines I design myself. The app I currently lead
              generates $5M in profit and serves 100,000 active users.
            </p>
            <p style={{ color: "#888", lineHeight: 1.75, fontSize: "1rem" }}>
              I care about numbers that matter: retention rates, conversion lifts,
              load time cuts. I&apos;ve also spent time as a mobile programming
              professor at TECSUP — because clear thinking sharpens better code.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            {
              icon: "📍",
              label: "Location",
              value: "Huancayo, Peru",
            },
            {
              icon: "🏢",
              label: "Current Role",
              value: "Technical Lead @ Interbank",
            },
            {
              icon: "📱",
              label: "Specialization",
              value: "Android, iOS, Fintech",
            },
            {
              icon: "🎓",
              label: "Education",
              value: "TECSUP — Mobile Programming Professor",
            },
            {
              icon: "🌐",
              label: "Languages",
              value: "Spanish (native), English (professional)",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px 20px",
                background: "#111",
                border: "1px solid #1e1e1e",
                borderRadius: "12px",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor = "#333")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor = "#1e1e1e")
              }
            >
              <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: "0.75rem", color: "#555", marginBottom: "2px" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "0.9375rem", color: "#ccc" }}>
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
