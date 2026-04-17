"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const accents = ["#6366f1", "#8b5cf6", "#06b6d4", "#6366f1", "#f59e0b", "#10b981"];
const currentFlags = [true, false, false, false, false, false];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const { tr } = useLanguage();
  const ex = tr.experience;
  const experiences = ex.items.map((item, i) => ({
    ...item,
    accent: accents[i],
    current: currentFlags[i],
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current?.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="section-fade"
      style={{
        padding: "100px 24px",
        background: "#080808",
        borderTop: "1px solid #111",
        borderBottom: "1px solid #111",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p
          style={{
            color: "#6366f1",
            fontSize: "0.8125rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          {ex.label}
        </p>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            textAlign: "center",
            marginBottom: "72px",
            color: "#f0f0f0",
          }}
        >
          {ex.heading}
        </h2>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              bottom: "0",
              width: "1px",
              background: "linear-gradient(to bottom, #6366f1, transparent)",
              marginLeft: "12px",
            }}
          />

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0" }}
          >
            {experiences.map((exp, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "32px",
                  paddingLeft: "40px",
                  paddingBottom: i < experiences.length - 1 ? "48px" : "0",
                  position: "relative",
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "6px",
                    top: "6px",
                    width: "13px",
                    height: "13px",
                    borderRadius: "50%",
                    background: exp.accent,
                    border: "2px solid #0a0a0a",
                    flexShrink: 0,
                  }}
                />

                <div
                  style={{
                    background: "#111",
                    border: "1px solid #1e1e1e",
                    borderRadius: "14px",
                    padding: "24px 28px",
                    flex: 1,
                    transition: "border-color 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#333";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#1e1e1e";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "16px",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontWeight: 700,
                          fontSize: "1.0625rem",
                          color: "#f0f0f0",
                          marginBottom: "4px",
                        }}
                      >
                        {exp.role}
                      </h3>
                      <span
                        style={{
                          fontSize: "0.875rem",
                          color: exp.accent,
                          fontWeight: 600,
                        }}
                      >
                        {exp.company}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      {exp.current && (
                        <span
                          style={{
                            padding: "3px 10px",
                            background: "rgba(34,197,94,0.1)",
                            color: "#22c55e",
                            borderRadius: "100px",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            border: "1px solid rgba(34,197,94,0.2)",
                          }}
                        >
                          {ex.current}
                        </span>
                      )}
                      {exp.period && (
                        <span style={{ fontSize: "0.8125rem", color: "#555" }}>
                          {exp.period}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {exp.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        style={{
                          display: "flex",
                          gap: "10px",
                          color: "#888",
                          fontSize: "0.9rem",
                          lineHeight: 1.65,
                          marginBottom: bi < exp.bullets.length - 1 ? "8px" : "0",
                        }}
                      >
                        <span style={{ color: exp.accent, flexShrink: 0, marginTop: "2px" }}>
                          ›
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
