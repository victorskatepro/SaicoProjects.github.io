"use client";

import { useEffect, useRef } from "react";

const categories = [
  {
    name: "Mobile Development",
    icon: "📱",
    accent: "#6366f1",
    skills: ["Kotlin", "Java", "Swift", "Android SDK", "Jetpack Compose"],
  },
  {
    name: "Web & Backend",
    icon: "🌐",
    accent: "#06b6d4",
    skills: ["JavaScript", "Python", "Angular", "Node.js"],
  },
  {
    name: "Cloud & DevOps",
    icon: "☁️",
    accent: "#8b5cf6",
    skills: ["Azure", "Redis", "Cosmos DB", "Docker", "Kubernetes", "CI/CD", "GitFlow"],
  },
  {
    name: "Security",
    icon: "🔐",
    accent: "#f59e0b",
    skills: ["AES-256", "SSL Pinning", "MTLS", "JWT", "DexGuard", "IxGuard"],
  },
  {
    name: "Practices & Methods",
    icon: "⚡",
    accent: "#10b981",
    skills: ["SOLID", "Clean Architecture", "SCRUM", "Code Review", "Technical Leadership"],
  },
];

export default function TechStack() {
  const ref = useRef<HTMLElement>(null);

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
      id="skills"
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
          Skills
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
          What I work with
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.name}
              style={{
                background: "#111",
                border: "1px solid #1e1e1e",
                borderRadius: "16px",
                padding: "28px",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#333";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#1e1e1e";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: `${cat.accent}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.25rem",
                    border: `1px solid ${cat.accent}25`,
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    color: "#f0f0f0",
                  }}
                >
                  {cat.name}
                </h3>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "5px 12px",
                      background: "#1a1a1a",
                      color: "#bbb",
                      borderRadius: "8px",
                      fontSize: "0.8125rem",
                      border: "1px solid #222",
                      fontWeight: 500,
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.color = cat.accent;
                      (e.currentTarget as HTMLSpanElement).style.borderColor = `${cat.accent}40`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.color = "#bbb";
                      (e.currentTarget as HTMLSpanElement).style.borderColor = "#222";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
