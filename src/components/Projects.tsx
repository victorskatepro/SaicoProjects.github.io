"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Filter = "All" | "Featured" | "iOS" | "Android" | "Mobile" | "Web";

const filters: Filter[] = ["All", "Featured", "iOS", "Android", "Mobile", "Web"];

const projects = [
  {
    id: 1,
    title: "Money Exchange — Interbank",
    description:
      "Native Android currency exchange product. AES-256 encryption, MTLS-secured communications, real-time Azure-backed data processing. 100,000 active customers. $5M in annual profit.",
    tags: ["Android", "Kotlin", "Azure", "Security", "Fintech"],
    category: ["Featured", "Android"] as Filter[],
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
      "Latin America's leading food and delivery platform. Improved search, payment, and onboarding — reducing load time by 30%, lifting retention by 20%, boosting card conversion by 15%.",
    tags: ["Android", "Kotlin", "Jetpack Compose", "Clean Architecture"],
    category: ["Featured", "Android"] as Filter[],
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
    title: "Android Projects",
    description:
      "Enterprise Android applications with Kotlin, Clean Architecture, and SOLID principles. Fintech, logistics, and retail verticals with production-grade security.",
    tags: ["Android", "Kotlin", "MVVM", "Clean Architecture"],
    category: ["Android"] as Filter[],
    images: [
      "/images/android/android-2.jpg",
      "/images/android/android-3.png",
      "/images/android/android-5.png",
      "/images/android/android-6.png",
      "/images/android/android-7.png",
      "/images/android/android-8.png",
      "/images/android/android-9.png",
      "/images/android/android-11.jpg",
    ],
    accent: "#22c55e",
    metrics: [],
  },
  {
    id: 4,
    title: "iOS Projects",
    description:
      "Native iOS applications built with Swift and SwiftUI. Banking, productivity, and consumer-facing apps with native UX patterns and Apple platform best practices.",
    tags: ["iOS", "Swift", "SwiftUI", "Xcode"],
    category: ["iOS"] as Filter[],
    images: [
      "/images/ios/ios-1.jpeg",
      "/images/ios/ios-2.jpeg",
      "/images/ios/ios-3.jpeg",
      "/images/ios/ios-4.jpeg",
      "/images/ios/ios-5.jpeg",
      "/images/ios/ios-6.jpeg",
      "/images/ios/ios-7.jpeg",
      "/images/ios/ios-8.jpeg",
      "/images/ios/ios-9.jpeg",
      "/images/ios/ios-10.jpeg",
      "/images/ios/ios-11.jpeg",
      "/images/ios/ios-12.jpeg",
      "/images/ios/ios-13.jpeg",
      "/images/ios/ios-14.jpeg",
      "/images/ios/ios-15.jpeg",
      "/images/ios/ios-16.jpeg",
      "/images/ios/ios-17.jpeg",
      "/images/ios/ios-18.jpeg",
      "/images/ios/ios-19.jpeg",
    ],
    accent: "#06b6d4",
    metrics: [],
  },
  {
    id: 5,
    title: "Mobile Projects",
    description:
      "Cross-platform and hybrid mobile applications. E-commerce, logistics, location services, and enterprise tools — all production-grade architecture.",
    tags: ["React Native", "Flutter", "Mobile", "Cross-platform"],
    category: ["Mobile"] as Filter[],
    images: [
      "/images/movil/movil-a.jpg",
      "/images/movil/movil-b.jpg",
      "/images/movil/movil-c.jpg",
      "/images/movil/movil-d.jpg",
      "/images/movil/movil-e.jpg",
      "/images/movil/movil-f.jpg",
      "/images/movil/movil-g.jpg",
      "/images/movil/movil-h.jpg",
      "/images/movil/movil-i.jpg",
      "/images/movil/movil-j.jpg",
    ],
    accent: "#8b5cf6",
    metrics: [],
  },
  {
    id: 6,
    title: "Web & Infrastructure",
    description:
      "Full-stack web applications and DevOps infrastructure. CI/CD pipelines, Azure cloud deployments, and enterprise web solutions for banking and retail clients.",
    tags: ["JavaScript", "Angular", "Node.js", "Azure", "Docker", "CI/CD"],
    category: ["Web"] as Filter[],
    images: [
      "/images/web/web.jpeg",
      "/images/web/web-1.jpeg",
      "/images/web/web-2.jpeg",
      "/images/web/web-3.jpeg",
      "/images/web/web-4.PNG",
      "/images/web/web-5.PNG",
      "/images/web/web-6.PNG",
      "/images/web/web-7.PNG",
      "/images/web/web-8.PNG",
    ],
    accent: "#10b981",
    metrics: [],
  },
];

function PhoneFrameCard({ project }: { project: (typeof projects)[0] }) {
  const [idx, setIdx] = useState(0);
  const total = project.images.length;

  useEffect(() => {
    if (total <= 1) return;
    const t = setTimeout(() => setIdx((i) => (i + 1) % total), 3500);
    return () => clearTimeout(t);
  }, [idx, total]);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i - 1 + total) % total);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i + 1) % total);
  };

  const leftIdx = (idx - 1 + total) % total;
  const rightIdx = (idx + 1) % total;

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
      {/* 3-panel phone frame area */}
      <div
        style={{
          position: "relative",
          height: "240px",
          background: "#0a0a0a",
          overflow: "hidden",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          padding: "16px 8px",
        }}
      >
        {/* Left frame */}
        <div
          style={{
            width: "72px",
            height: "148px",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1.5px solid rgba(255,255,255,0.08)",
            opacity: 0.45,
            transform: "scale(0.92)",
            flexShrink: 0,
            position: "relative",
          }}
        >
          <Image
            src={`${BASE}${project.images[leftIdx]}`}
            alt={`${project.title} screenshot`}
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            unoptimized
          />
        </div>

        {/* Center frame */}
        <div
          style={{
            width: "100px",
            height: "196px",
            borderRadius: "16px",
            overflow: "hidden",
            border: "2px solid rgba(255,255,255,0.18)",
            flexShrink: 0,
            position: "relative",
            boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
          }}
        >
          <Image
            src={`${BASE}${project.images[idx]}`}
            alt={`${project.title} screenshot ${idx + 1}`}
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            unoptimized
          />
        </div>

        {/* Right frame */}
        <div
          style={{
            width: "72px",
            height: "148px",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1.5px solid rgba(255,255,255,0.08)",
            opacity: 0.45,
            transform: "scale(0.92)",
            flexShrink: 0,
            position: "relative",
          }}
        >
          <Image
            src={`${BASE}${project.images[rightIdx]}`}
            alt={`${project.title} screenshot`}
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            unoptimized
          />
        </div>

        {/* Prev button */}
        <button
          onClick={prev}
          style={{
            position: "absolute",
            left: "8px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            cursor: "pointer",
            color: "#fff",
            fontSize: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
          }}
        >
          ‹
        </button>
        {/* Next button */}
        <button
          onClick={next}
          style={{
            position: "absolute",
            right: "8px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            cursor: "pointer",
            color: "#fff",
            fontSize: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
          }}
        >
          ›
        </button>

        {/* Counter */}
        <div
          style={{
            position: "absolute",
            bottom: "8px",
            right: "10px",
            fontSize: "0.7rem",
            color: "rgba(255,255,255,0.5)",
            background: "rgba(0,0,0,0.4)",
            padding: "2px 7px",
            borderRadius: "100px",
          }}
        >
          {idx + 1}/{total}
        </div>
      </div>

      {/* Card body */}
      <CardBody project={project} />
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [idx, setIdx] = useState(0);
  const total = project.images.length;

  useEffect(() => {
    if (total <= 1) return;
    const t = setTimeout(() => setIdx((i) => (i + 1) % total), 3500);
    return () => clearTimeout(t);
  }, [idx, total]);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i - 1 + total) % total);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i + 1) % total);
  };

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
      <div
        style={{
          position: "relative",
          height: "220px",
          background: "#0a0a0a",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Image
          src={`${BASE}${project.images[idx]}`}
          alt={`${project.title} screenshot ${idx + 1}`}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          unoptimized
        />

        {total > 1 && (
          <>
            <button
              onClick={prev}
              style={{
                position: "absolute", left: "8px", top: "50%",
                transform: "translateY(-50%)", background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "50%", width: "30px", height: "30px",
                cursor: "pointer", color: "#fff", fontSize: "15px",
                display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1,
              }}
            >‹</button>
            <button
              onClick={next}
              style={{
                position: "absolute", right: "8px", top: "50%",
                transform: "translateY(-50%)", background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "50%", width: "30px", height: "30px",
                cursor: "pointer", color: "#fff", fontSize: "15px",
                display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1,
              }}
            >›</button>
            <div
              style={{
                position: "absolute", bottom: "8px", right: "10px",
                fontSize: "0.7rem", color: "rgba(255,255,255,0.5)",
                background: "rgba(0,0,0,0.4)", padding: "2px 7px", borderRadius: "100px",
              }}
            >
              {idx + 1}/{total}
            </div>
            {total <= 8 && (
              <div
                style={{
                  position: "absolute", bottom: "10px", left: "50%",
                  transform: "translateX(-50%)", display: "flex", gap: "5px",
                }}
              >
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                    style={{
                      width: "5px", height: "5px", borderRadius: "50%",
                      border: "none", cursor: "pointer", padding: 0,
                      background: i === idx ? "white" : "rgba(255,255,255,0.3)",
                      transition: "background 0.2s",
                    }}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <CardBody project={project} />
    </div>
  );
}

function CardBody({ project }: { project: (typeof projects)[0] }) {
  return (
    <div style={{ padding: "20px 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
      <h3
        style={{
          fontWeight: 700, fontSize: "1rem", color: "#f0f0f0", marginBottom: "10px",
        }}
      >
        {project.title}
      </h3>
      <p
        style={{
          fontSize: "0.875rem", color: "#666", lineHeight: 1.65,
          marginBottom: "16px", flex: 1,
        }}
      >
        {project.description}
      </p>
      {project.metrics.length > 0 && (
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "14px" }}>
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
              padding: "3px 9px", background: "#1a1a1a", color: "#555",
              borderRadius: "6px", fontSize: "0.75rem", border: "1px solid #222",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add("visible"); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category.includes(active));

  return (
    <section
      id="projects"
      ref={ref}
      className="section-fade"
      style={{ padding: "100px 24px", maxWidth: "1100px", margin: "0 auto" }}
    >
      <p style={{ color: "#6366f1", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px", textAlign: "center" }}>
        Projects
      </p>
      <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", textAlign: "center", marginBottom: "40px", color: "#f0f0f0" }}>
        Things I&apos;ve shipped
      </h2>

      <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "56px", flexWrap: "wrap" }}>
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

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
        {filtered.map((p) =>
          p.category.some((c) => ["iOS", "Android", "Mobile"].includes(c)) &&
          !p.category.includes("Featured") ? (
            <PhoneFrameCard key={p.id} project={p} />
          ) : (
            <ProjectCard key={p.id} project={p} />
          )
        )}
      </div>
    </section>
  );
}
