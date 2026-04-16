"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type Filter = "All" | "Featured" | "Mobile" | "Web";

const filters: Filter[] = ["All", "Featured", "Mobile", "Web"];

const projects = [
  {
    id: 1,
    title: "Money Exchange — Interbank",
    description:
      "Native Android currency exchange product integrated into Interbank's banking ecosystem. Handles high-volume transactions with AES-256 encryption, MTLS-secured communications, and real-time Azure-backed data processing. Used by 100,000 active customers. Generates $5M in annual profit.",
    tags: ["Android", "Kotlin", "Azure", "Security", "Fintech"],
    category: ["Featured", "Mobile"] as Filter[],
    images: [
      "/images/featured/MoneyExchange1.PNG",
      "/images/featured/MoneyExchange2.PNG",
      "/images/featured/MoneyExchange3.PNG",
    ],
    accent: "#6366f1",
    metrics: ["100k users", "$5M profit"],
  },
  {
    id: 2,
    title: "PedidosYa — Android App",
    description:
      "Contributed to one of Latin America's leading food and delivery platforms. Improved core user journeys — search, payment, onboarding — reducing load time by 30% and lifting both retention and card conversion. Built using Kotlin, Jetpack Compose, and a layered Clean Architecture.",
    tags: ["Android", "Kotlin", "Jetpack Compose", "Clean Architecture"],
    category: ["Featured", "Mobile"] as Filter[],
    images: [
      "/images/featured/PedidosYa1.PNG",
      "/images/featured/PedidosYa2.PNG",
      "/images/featured/PedidosYa3.PNG",
    ],
    accent: "#f97316",
    metrics: ["+20% retention", "+15% conversion", "-30% load time"],
  },
  {
    id: 3,
    title: "CI/CD & Mobile Infrastructure",
    description:
      "Designed and implemented GitFlow-based release management and CI/CD pipelines for mobile teams at Interbank. Reduced manual deployment overhead and standardized security controls across Android products.",
    tags: ["Azure DevOps", "Docker", "Kubernetes", "CI/CD", "GitFlow"],
    category: ["Web"] as Filter[],
    images: [
      "/images/web/web.jpeg",
      "/images/web/web-1.jpeg",
      "/images/web/web-2.jpeg",
    ],
    accent: "#06b6d4",
    metrics: ["Zero-downtime deploys"],
  },
  {
    id: 4,
    title: "Web Projects",
    description:
      "Full-stack web applications built with modern frameworks. Enterprise-grade solutions for banking, logistics, and retail clients.",
    tags: ["JavaScript", "Angular", "Node.js", "Python"],
    category: ["Web"] as Filter[],
    images: [
      "/images/web/web-3.jpeg",
      "/images/web/web-4.PNG",
      "/images/web/web-5.PNG",
    ],
    accent: "#10b981",
    metrics: [],
  },
  {
    id: 5,
    title: "Mobile Projects — Android & iOS",
    description:
      "Collection of Android and iOS applications across fintech, logistics, and enterprise verticals. Clean Architecture, SOLID principles, and production-grade security throughout.",
    tags: ["Android", "iOS", "Swift", "Kotlin"],
    category: ["Mobile"] as Filter[],
    images: [
      "/images/mobile/mobile-1.PNG",
      "/images/mobile/mobile-2.PNG",
      "/images/mobile/mobile-3.PNG",
    ],
    accent: "#8b5cf6",
    metrics: [],
  },
  {
    id: 6,
    title: "Academic Mobile Projects — TECSUP",
    description:
      "Real Android applications co-built as part of the mobile programming curriculum at TECSUP. Projects ranged from location-based services to payment-adjacent tools, all enforcing production-grade architecture patterns.",
    tags: ["Android", "Kotlin", "Education", "Clean Architecture"],
    category: ["Mobile"] as Filter[],
    images: [
      "/images/mobile/mobile-4.PNG",
      "/images/mobile/mobile-5.PNG",
      "/images/mobile/mobile-6.PNG",
    ],
    accent: "#f59e0b",
    metrics: [],
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [imgIdx, setImgIdx] = useState(0);

  return (
    <div
      style={{
        background: "#111",
        border: "1px solid #1e1e1e",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "border-color 0.2s, transform 0.2s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#333";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#1e1e1e";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      {/* Image area */}
      <div
        style={{
          position: "relative",
          height: "220px",
          background: "#0a0a0a",
          overflow: "hidden",
        }}
      >
        <Image
          src={project.images[imgIdx]}
          alt={project.title}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          unoptimized
        />
        {/* Image dots */}
        {project.images.length > 1 && (
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "6px",
            }}
          >
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setImgIdx(i);
                }}
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                  background: i === imgIdx ? "white" : "rgba(255,255,255,0.35)",
                  padding: 0,
                  transition: "background 0.2s",
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3
          style={{
            fontWeight: 700,
            fontSize: "1rem",
            color: "#f0f0f0",
            marginBottom: "10px",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: "0.875rem",
            color: "#666",
            lineHeight: 1.65,
            marginBottom: "16px",
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {project.metrics.length > 0 && (
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "16px",
            }}
          >
            {project.metrics.map((m) => (
              <span
                key={m}
                style={{
                  padding: "3px 10px",
                  background: `${project.accent}15`,
                  color: project.accent,
                  borderRadius: "100px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  border: `1px solid ${project.accent}30`,
                }}
              >
                {m}
              </span>
            ))}
          </div>
        )}

        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {project.tags.map((t) => (
            <span
              key={t}
              style={{
                padding: "3px 9px",
                background: "#1a1a1a",
                color: "#555",
                borderRadius: "6px",
                fontSize: "0.75rem",
                border: "1px solid #222",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current?.classList.add("visible");
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  return (
    <section
      id="projects"
      ref={ref}
      className="section-fade"
      style={{ padding: "100px 24px", maxWidth: "1100px", margin: "0 auto" }}
    >
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
        Projects
      </p>
      <h2
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          textAlign: "center",
          marginBottom: "40px",
          color: "#f0f0f0",
        }}
      >
        Things I&apos;ve shipped
      </h2>

      {/* Filter tabs */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          justifyContent: "center",
          marginBottom: "56px",
          flexWrap: "wrap",
        }}
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              padding: "8px 20px",
              borderRadius: "100px",
              border: "1px solid",
              borderColor: active === f ? "#6366f1" : "#222",
              background: active === f ? "rgba(99,102,241,0.15)" : "transparent",
              color: active === f ? "#a5b4fc" : "#666",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "24px",
        }}
      >
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
