import React, { useState, useEffect, useRef } from "react";

const P = {
  name: "Abhishek Mishra",
  title: "Software Engineer",
  loc: "Noida, Uttar Pradesh, India",
  email: "abhishekmofficial12@gmail.com",
  phone: "+91 7800-7660-04",
  linkedin: "https://linkedin.com/in/abhishekmishra-it",
  github: "https://github.com/AbhishekMishra-IT",
  summary:
    "Results-driven developer with 5+ years of experience building scalable, high-performance cross-platform mobile and web applications. Specialized in B2B/B2C solutions with offline-first architecture, real-time data sync, and pixel-perfect UI delivery.",
  exp: [
    {
      co: "Oceanstep Client Centric India Pvt Ltd",
      role: "React Native Developer",
      period: "Mar 2025 – Present",
      current: true,
      hl: [
        "Developing B2B & B2C mobile apps for Android and iOS with online/offline data sync",
        "Architecting offline-first solutions using SQLite & AsyncStorage",
        "Managing app deployments on Google Play Store & Apple App Store",
        "Leading client requirement analysis and delivering business-aligned features",
      ],
    },
    {
      co: "Chetu India Pvt Ltd",
      role: "Software Engineer",
      period: "Dec 2022 – Mar 2025",
      hl: [
        "Led cross-platform mobile app development ensuring high performance & responsiveness",
        "Integrated RESTful APIs and third-party services for seamless data flow",
        "Mentored junior developers and drove code quality through reviews",
        "Optimized application performance and managed state with Redux & Context API",
      ],
    },
    {
      co: "iPangram Digital Solutions LLP",
      role: "React Native Developer",
      period: "Jan 2021 – Dec 2022",
      hl: [
        "Built and maintained production-grade React Native apps with clean architecture",
        "Implemented pixel-perfect UIs with smooth animations and transitions",
        "Worked with native modules and integrated third-party APIs",
        "Collaborated with cross-functional teams using Jira, Slack & GitHub",
      ],
    },
  ],
  projects: [
    {
      name: "Pettopia",
      tag: "Social Network for Pet Lovers",
      desc: "A feature-rich social media platform for pet owners — think Instagram, but for pets. Users can share photos, follow other pet profiles, like & comment, and discover pet communities.",
      tech: ["React Native", "Redux", "REST APIs", "Firebase", "TypeScript"],
      color: "#f97316",
      icon: "\u{1F43E}",
      feat: [
        "Photo/Video Feed",
        "Follow & Discover",
        "Real-time Notifications",
        "Profile Management",
        "Community Groups",
      ],
    },
    {
      name: "Food Delivery App",
      tag: "On-Demand Food Ordering",
      desc: "A full-featured food delivery application enabling users to browse restaurants, place orders, track deliveries in real-time, and manage payments seamlessly.",
      tech: ["React Native", "Redux", "Google Maps", "REST APIs", "SQLite"],
      color: "#ef4444",
      icon: "\u{1F355}",
      feat: [
        "Restaurant Discovery",
        "Real-time Tracking",
        "Payment Gateway",
        "Ratings & Reviews",
        "Cart Management",
      ],
    },
    {
      name: "Ride Booking App",
      tag: "Smart Ride-Hailing Solution",
      desc: "A ride booking application with real-time driver tracking, fare estimation, multiple ride options, and seamless payment integration.",
      tech: ["React Native", "TypeScript", "Maps SDK", "WebSocket", "Redux"],
      color: "#3b82f6",
      icon: "\u{1F697}",
      feat: [
        "Live Driver Tracking",
        "Fare Estimation",
        "Multiple Ride Types",
        "In-app Payments",
        "Ride History",
      ],
    },
    {
      name: "B2B Field Sales & Orders",
      tag: "Sales Force Automation (SFA)",
      desc: "A high-performance SFA mobile app to streamline field sales operations, appointment management, and order processing — fully functional in both online and offline environments.",
      tech: [
        "React Native",
        "TypeScript",
        "Redux",
        "SQLite",
        "Leaflet Maps",
        ".NET APIs",
      ],
      color: "#10b981",
      icon: "\u{1F4CA}",
      feat: [
        "Offline-First Architecture",
        "Visit Lifecycle Tracking",
        "Order Booking System",
        "Data Sync Engine",
        "Map Integration",
      ],
    },
  ],
  skills: {
    Languages: ["JavaScript (ES6+)", "TypeScript", "SQL"],
    "Mobile & Web": ["React Native", "React.js", "Flutter", "Expo"],
    "State & Data": ["Redux", "MobX", "Context API", "GraphQL", "REST APIs"],
    Database: ["SQLite", "MongoDB", "AsyncStorage"],
    "DevOps & Tools": ["Git", "GitHub", "Jest", "Detox", "npm", "Yarn"],
    Design: ["Figma", "Adobe XD", "Sketch"],
    "Emerging Tech": ["Generative AI", "Prompt Engineering", "LLM Integration"],
  },
  edu: [
    { yr: "2020", deg: "Master's in Computer Application" },
    { yr: "2017", deg: "Bachelor of Science" },
  ],
};

const LinkedInIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const GitHubIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);
const EmailIcon = ({ size = 20, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 4L12 13 2 4" />
  </svg>
);
const PhoneIcon = ({ size = 20, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);
const ExternalIcon = ({ size = 14, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const DownloadIcon = ({ size = 18, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const GlowMesh = () => {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    let w,
      h,
      particles = [],
      raf;
    const resize = () => {
      w = c.width = c.parentElement.offsetWidth;
      h = c.height = c.parentElement.offsetHeight;
    };
    resize();
    for (let i = 0; i < 60; i++)
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
      });
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99,102,241,0.25)";
        ctx.fill();
        particles.slice(i + 1).forEach((q) => {
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(99,102,241,${0.08 * (1 - d / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    />
  );
};

const CursorGlow = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e) => {
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
      el.style.opacity = "1";
    };
    const leave = () => {
      el.style.opacity = "0";
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);
  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        width: 500,
        height: 500,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0,
        background:
          "radial-gradient(circle,rgba(99,102,241,0.06) 0%,transparent 70%)",
        transform: "translate(-50%,-50%)",
        transition: "opacity 0.3s",
      }}
    />
  );
};

const Section = ({ id, children }) => (
  <section id={id} style={{ padding: "100px 0", position: "relative" }}>
    {children}
  </section>
);

const SectionLabel = ({ children }) => (
  <div style={{ textAlign: "center", marginBottom: 8 }}>
    <span
      style={{
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        background: "linear-gradient(135deg,#6366f1,#a855f7)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </span>
  </div>
);

const SectionTitle = ({ children, light }) => (
  <div style={{ marginBottom: 56, textAlign: "center" }}>
    <h2
      style={{
        fontSize: 40,
        fontWeight: 800,
        letterSpacing: "-0.03em",
        color: light ? "#fff" : "#0f172a",
        margin: 0,
        lineHeight: 1.2,
      }}
    >
      {children}
    </h2>
  </div>
);

const GlassCard = ({
  children,
  style = {},
  hover,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{
      background: hover ? "rgba(99,102,241,0.04)" : "rgba(255,255,255,0.6)",
      backdropFilter: "blur(12px)",
      border:
        "1px solid " +
        (hover ? "rgba(99,102,241,0.2)" : "rgba(226,232,240,0.8)"),
      borderRadius: 20,
      transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
      transform: hover ? "translateY(-6px)" : "none",
      boxShadow: hover
        ? "0 20px 60px rgba(99,102,241,0.12)"
        : "0 4px 20px rgba(0,0,0,0.03)",
      ...style,
    }}
  >
    {children}
  </div>
);

export default function Portfolio() {
  const [active, setActive] = useState("hero");
  const [hp, setHp] = useState(null);
  const [hs, setHs] = useState(null);

  const nav = [
    { id: "hero", l: "Home" },
    { id: "about", l: "About" },
    { id: "experience", l: "Experience" },
    { id: "projects", l: "Projects" },
    { id: "skills", l: "Skills" },
    { id: "contact", l: "Contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      const secs = nav
        .map((n) => document.getElementById(n.id))
        .filter(Boolean);
      let cur = "hero";
      secs.forEach((s) => {
        if (s.getBoundingClientRect().top <= 140) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        fontFamily: "'Inter','SF Pro Display','Segoe UI',system-ui,sans-serif",
        color: "#0f172a",
        background: "#fafbff",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <CursorGlow />
      <style>{`*{margin:0;padding:0;box-sizing:border-box}body{margin:0;padding:0}@keyframes scrollBounce{0%,100%{transform:translateY(0);opacity:.4}50%{transform:translateY(4px);opacity:1}}`}</style>

      {/* NAV */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(250,251,255,0.7)",
          backdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid rgba(226,232,240,0.5)",
          padding: "0 32px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              style={{
                background:
                  active === n.id
                    ? "linear-gradient(135deg,#6366f1,#a855f7)"
                    : "transparent",
                color: active === n.id ? "#fff" : "#64748b",
                border: "none",
                borderRadius: 10,
                padding: "7px 16px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              {n.l}
            </button>
          ))}
          <div
            style={{
              width: 1,
              height: 24,
              background: "#e2e8f0",
              margin: "0 8px",
            }}
          />
          <a
            href={P.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#64748b",
              display: "flex",
              padding: 6,
              borderRadius: 8,
            }}
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href={P.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#64748b",
              display: "flex",
              padding: 6,
              borderRadius: 8,
            }}
          >
            <GitHubIcon size={18} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        style={{
          minHeight: "94vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(160deg,#0a0f1e 0%,#131832 40%,#1a1040 100%)",
          position: "relative",
          overflow: "hidden",
          padding: "60px 24px",
        }}
      >
        <GlowMesh />
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(99,102,241,0.12) 0%,transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            left: "-10%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(168,85,247,0.1) 0%,transparent 60%)",
          }}
        />

        <div
          style={{
            textAlign: "center",
            position: "relative",
            zIndex: 2,
            maxWidth: 760,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 20px",
              borderRadius: 50,
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.2)",
              color: "#a5b4fc",
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 32,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 8px #22c55e",
              }}
            />
            Open to Opportunities
          </div>

          <h1
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: "#fff",
              margin: "0 0 8px",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            Hi, I'm{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#818cf8,#c084fc,#f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Abhishek
            </span>
          </h1>
          <p
            style={{
              fontSize: 20,
              color: "#94a3b8",
              margin: "16px auto 0",
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: 580,
            }}
          >
            Software Engineer specializing in{" "}
            <strong style={{ color: "#e2e8f0" }}>
              React Native & React.js
            </strong>{" "}
            — building high-performance mobile & web experiences that users
            love.
          </p>

          <div
            style={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              marginTop: 48,
              background: "rgba(255,255,255,0.03)",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.06)",
              overflow: "hidden",
              maxWidth: 480,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {[
              { n: "5+", l: "Years Experience" },
              { n: "10+", l: "Apps Shipped" },
              { n: "3", l: "Companies" },
            ].map((s, i) => (
              <div
                key={s.l}
                style={{
                  flex: 1,
                  padding: "24px 16px",
                  textAlign: "center",
                  borderRight:
                    i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    background: "linear-gradient(135deg,#818cf8,#c084fc)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#64748b",
                    fontWeight: 500,
                    marginTop: 4,
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              marginTop: 40,
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => scrollTo("projects")}
              style={{
                background: "linear-gradient(135deg,#6366f1,#a855f7)",
                color: "#fff",
                border: "none",
                borderRadius: 14,
                padding: "16px 36px",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 8px 32px rgba(99,102,241,0.35)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              View My Work <ExternalIcon size={14} color="#fff" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "#e2e8f0",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 14,
                padding: "16px 36px",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <DownloadIcon size={16} color="#a5b4fc" />
              Resume
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            {[
              {
                icon: <LinkedInIcon size={18} color="#a5b4fc" />,
                href: P.linkedin,
                label: "LinkedIn",
              },
              {
                icon: <GitHubIcon size={18} color="#a5b4fc" />,
                href: P.github,
                label: "GitHub",
              },
              {
                icon: <EmailIcon size={18} color="#a5b4fc" />,
                href: "mailto:" + P.email,
                label: "Email",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  textDecoration: "none",
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: 11,
              color: "#475569",
              letterSpacing: "0.1em",
              fontWeight: 500,
            }}
          >
            SCROLL
          </span>
          <div
            style={{
              width: 20,
              height: 32,
              borderRadius: 10,
              border: "1.5px solid rgba(255,255,255,0.15)",
              display: "flex",
              justifyContent: "center",
              paddingTop: 6,
            }}
          >
            <div
              style={{
                width: 3,
                height: 8,
                borderRadius: 2,
                background: "#6366f1",
                animation: "scrollBounce 1.5s ease infinite",
              }}
            />
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        {/* ABOUT */}
        <Section id="about">
          <SectionLabel>Who I Am</SectionLabel>
          <SectionTitle>About Me</SectionTitle>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: 56,
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.85,
                  color: "#475569",
                  margin: 0,
                }}
              >
                {P.summary}
              </p>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.85,
                  color: "#475569",
                  marginTop: 16,
                }}
              >
                I specialize in building end-to-end mobile solutions — from
                offline-first architectures with SQLite to seamless app store
                deployments. I thrive in cross-functional teams and love
                mentoring fellow developers.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  marginTop: 28,
                  flexWrap: "wrap",
                }}
              >
                {[
                  "React Native",
                  "TypeScript",
                  "Redux",
                  "Offline-First",
                  "REST APIs",
                  "Flutter",
                ].map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "7px 18px",
                      borderRadius: 10,
                      fontSize: 13,
                      fontWeight: 600,
                      background:
                        "linear-gradient(135deg,rgba(99,102,241,0.08),rgba(168,85,247,0.08))",
                      color: "#6366f1",
                      border: "1px solid rgba(99,102,241,0.12)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {[
                {
                  icon: "\u{1F4F1}",
                  title: "Mobile Dev",
                  desc: "iOS & Android apps",
                },
                { icon: "\u{1F310}", title: "Web Dev", desc: "React.js SPAs" },
                {
                  icon: "\u{1F4E1}",
                  title: "Offline-First",
                  desc: "SQLite + Data Sync",
                },
                {
                  icon: "\u{1F680}",
                  title: "Performance",
                  desc: "Speed & Optimization",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: "#fff",
                    borderRadius: 18,
                    padding: 24,
                    boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                    border: "1px solid #f1f5f9",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 10 }}>
                    {card.icon}
                  </div>
                  <div
                    style={{ fontWeight: 700, fontSize: 14, color: "#0f172a" }}
                  >
                    {card.title}
                  </div>
                  <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>
                    {card.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience">
          <SectionLabel>Career Path</SectionLabel>
          <SectionTitle>Work Experience</SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {P.exp.map((e, i) => (
              <GlassCard key={i} style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      width: 4,
                      background: e.current
                        ? "linear-gradient(180deg,#6366f1,#a855f7)"
                        : "#e2e8f0",
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ padding: 32, flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        gap: 12,
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            margin: 0,
                            fontSize: 20,
                            fontWeight: 800,
                            color: "#0f172a",
                          }}
                        >
                          {e.role}
                        </h3>
                        <p
                          style={{
                            margin: "6px 0 0",
                            fontSize: 15,
                            color: "#6366f1",
                            fontWeight: 600,
                          }}
                        >
                          {e.co}
                        </p>
                      </div>
                      <span
                        style={{
                          padding: "6px 16px",
                          borderRadius: 10,
                          fontSize: 12,
                          fontWeight: 700,
                          background: e.current
                            ? "linear-gradient(135deg,#6366f1,#a855f7)"
                            : "#f1f5f9",
                          color: e.current ? "#fff" : "#64748b",
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        {e.current && (
                          <span
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: "#22c55e",
                            }}
                          />
                        )}
                        {e.period}
                      </span>
                    </div>
                    <div
                      style={{
                        marginTop: 20,
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 10,
                      }}
                    >
                      {e.hl.map((h, j) => (
                        <div
                          key={j}
                          style={{
                            display: "flex",
                            gap: 10,
                            alignItems: "flex-start",
                          }}
                        >
                          <span
                            style={{
                              color: "#a855f7",
                              fontSize: 16,
                              lineHeight: "22px",
                            }}
                          >
                            {"\u203A"}
                          </span>
                          <span
                            style={{
                              fontSize: 14,
                              color: "#475569",
                              lineHeight: 1.6,
                            }}
                          >
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects">
          <SectionLabel>Portfolio</SectionLabel>
          <SectionTitle>Featured Projects</SectionTitle>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          >
            {P.projects.map((p, i) => (
              <div
                key={i}
                onMouseEnter={() => setHp(i)}
                onMouseLeave={() => setHp(null)}
                style={{
                  borderRadius: 22,
                  overflow: "hidden",
                  background: "#fff",
                  border:
                    "1px solid " + (hp === i ? p.color + "35" : "#e2e8f0"),
                  transform: hp === i ? "translateY(-8px) scale(1.01)" : "none",
                  boxShadow:
                    hp === i
                      ? "0 24px 60px " + p.color + "18"
                      : "0 4px 16px rgba(0,0,0,0.03)",
                  transition: "all 0.45s cubic-bezier(0.4,0,0.2,1)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    height: hp === i ? 8 : 5,
                    background:
                      "linear-gradient(90deg, " +
                      p.color +
                      ", " +
                      p.color +
                      "88)",
                    transition: "height 0.3s",
                  }}
                />
                <div style={{ padding: 28 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      marginBottom: 14,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 28,
                        width: 56,
                        height: 56,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: p.color + "10",
                        borderRadius: 16,
                        border: "1px solid " + p.color + "15",
                      }}
                    >
                      {p.icon}
                    </span>
                    <div>
                      <h3 style={{ margin: 0, fontSize: 19, fontWeight: 800 }}>
                        {p.name}
                      </h3>
                      <p
                        style={{
                          margin: "2px 0 0",
                          fontSize: 12,
                          color: p.color,
                          fontWeight: 700,
                        }}
                      >
                        {p.tag}
                      </p>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#64748b",
                      lineHeight: 1.7,
                      margin: "0 0 16px",
                    }}
                  >
                    {p.desc}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: 16,
                    }}
                  >
                    {p.feat.map((f) => (
                      <span
                        key={f}
                        style={{
                          fontSize: 11,
                          padding: "4px 10px",
                          borderRadius: 8,
                          background: "#f8fafc",
                          color: "#475569",
                          fontWeight: 500,
                          border: "1px solid #f1f5f9",
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <div
                    style={{
                      borderTop: "1px solid #f1f5f9",
                      paddingTop: 14,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                    }}
                  >
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 11,
                          padding: "5px 12px",
                          borderRadius: 8,
                          background: p.color + "08",
                          color: p.color,
                          fontWeight: 700,
                          border: "1px solid " + p.color + "15",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills">
          <SectionLabel>Expertise</SectionLabel>
          <SectionTitle>Tech Stack</SectionTitle>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 20,
            }}
          >
            {Object.entries(P.skills).map(([cat, items], i) => {
              const colors = [
                "#6366f1",
                "#a855f7",
                "#ec4899",
                "#10b981",
                "#f97316",
                "#06b6d4",
                "#ef4444",
              ];
              const c = colors[i % colors.length];
              return (
                <GlassCard
                  key={cat}
                  hover={hs === i}
                  onMouseEnter={() => setHs(i)}
                  onMouseLeave={() => setHs(null)}
                  style={{ padding: 24 }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 4,
                        height: 20,
                        borderRadius: 2,
                        background:
                          "linear-gradient(180deg," + c + "," + c + "66)",
                      }}
                    />
                    <h4
                      style={{
                        margin: 0,
                        fontSize: 13,
                        fontWeight: 800,
                        color: c,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {cat}
                    </h4>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {items.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: 13,
                          padding: "6px 14px",
                          borderRadius: 10,
                          background: "#f8fafc",
                          color: "#334155",
                          fontWeight: 500,
                          border: "1px solid #e2e8f0",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education">
          <SectionLabel>Background</SectionLabel>
          <SectionTitle>Education</SectionTitle>
          <div style={{ display: "flex", gap: 24, justifyContent: "center" }}>
            {P.edu.map((e, i) => (
              <GlassCard
                key={i}
                style={{ padding: 32, textAlign: "center", minWidth: 240 }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg,#6366f1,#a855f7)",
                    marginBottom: 16,
                    fontSize: 24,
                  }}
                >
                  {"\u{1F393}"}
                </div>
                <h4
                  style={{
                    margin: "0 0 6px",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#0f172a",
                  }}
                >
                  {e.deg}
                </h4>
                <p
                  style={{
                    margin: 0,
                    color: "#6366f1",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  {e.yr}
                </p>
              </GlassCard>
            ))}
          </div>
        </Section>
      </div>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          background: "linear-gradient(160deg,#0a0f1e,#131832,#1a1040)",
          padding: "100px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-30%",
            right: "-15%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(99,102,241,0.08) 0%,transparent 60%)",
          }}
        />
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <SectionLabel>Get In Touch</SectionLabel>
          <SectionTitle light>Let's Build Something Great</SectionTitle>
          <p
            style={{
              color: "#94a3b8",
              fontSize: 17,
              lineHeight: 1.8,
              marginBottom: 48,
              maxWidth: 500,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            {[
              {
                icon: <EmailIcon size={22} color="#818cf8" />,
                label: "Email",
                value: P.email,
                href: "mailto:" + P.email,
              },
              {
                icon: <PhoneIcon size={22} color="#818cf8" />,
                label: "Phone",
                value: P.phone,
                href: "tel:" + P.phone.replace(/[^+\d]/g, ""),
              },
              {
                icon: <LinkedInIcon size={22} color="#818cf8" />,
                label: "LinkedIn",
                value: "Connect with me",
                href: P.linkedin,
              },
              {
                icon: <GitHubIcon size={22} color="#818cf8" />,
                label: "GitHub",
                value: "View my code",
                href: P.github,
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={
                  c.label === "LinkedIn" || c.label === "GitHub"
                    ? "_blank"
                    : undefined
                }
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "20px 24px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#e2e8f0",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: "rgba(99,102,241,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </div>
                <div style={{ textAlign: "left", minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#64748b",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 14,
                      marginTop: 2,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {c.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div
            style={{
              marginTop: 64,
              paddingTop: 32,
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 24,
            }}
          >
            <div style={{ display: "flex", gap: 12 }}>
              {[
                {
                  icon: <LinkedInIcon size={16} color="#64748b" />,
                  href: P.linkedin,
                },
                {
                  icon: <GitHubIcon size={16} color="#64748b" />,
                  href: P.github,
                },
                {
                  icon: <EmailIcon size={16} color="#64748b" />,
                  href: "mailto:" + P.email,
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    textDecoration: "none",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div
              style={{
                width: 1,
                height: 20,
                background: "rgba(255,255,255,0.08)",
              }}
            />
            <p style={{ color: "#475569", fontSize: 13, margin: 0 }}>
              {"\u00A9"} {new Date().getFullYear()} Abhishek Mishra
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
