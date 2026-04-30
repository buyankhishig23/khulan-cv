"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observerRef.current?.observe(el);
    });

    document.querySelectorAll(".hero .fade-in, .hero-left, .hero-right").forEach((el) => {
      el.classList.add("visible");
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .fade-in {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-left, .hero-right {
          opacity: 1;
          transform: none;
        }
      `}</style>

      {/* Scroll progress bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "2px",
          width: `${scrollProgress}%`,
          background: "linear-gradient(to right, var(--accent), var(--accent2))",
          zIndex: 200,
          transition: "width 0.1s",
        }}
      />

      {/* Nav */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: "20px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(to bottom, rgba(8,8,16,0.95) 0%, transparent 100%)",
        backdropFilter: "blur(12px)",
      }}>
        <a href="#hero" style={{
          fontFamily: "var(--font-space-mono), monospace",
          fontSize: "13px",
          color: "var(--accent)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          textDecoration: "none",
        }}>Танилцуулга</a>
        <ul style={{ display: "flex", gap: "36px", listStyle: "none" }}>
          {[
            { href: "#about", label: "Миний тухай" },
            { href: "#experience", label: "Туршлага" },
            { href: "#skills", label: "Ур чадвар" },
            { href: "#education", label: "Боловсрол" },
            { href: "#awards", label: "Шагнал" },
          ].map((link) => (
            <li key={link.href}>
              <a href={link.href} style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--muted)",
                textDecoration: "none",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              >{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <section id="hero" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-left hero-right" style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          padding: "120px 80px 80px",
          gap: "80px",
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
        }}>
          {/* Scanline */}
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "2px",
            background: "linear-gradient(to right, transparent, var(--accent), transparent)",
            opacity: 0.3,
            animation: "scanline 4s ease-in-out infinite",
            pointerEvents: "none",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--accent)",
              border: "1px solid rgba(64,220,200,0.25)",
              padding: "6px 14px",
              width: "fit-content",
            }}>
              <span style={{
                width: "6px", height: "6px",
                background: "var(--accent)",
                borderRadius: "50%",
                animation: "pulse 2s ease-in-out infinite",
                flexShrink: 0,
              }} />
              Санхүү · Хүний Нөөц
            </div>

            <h1 style={{
              fontSize: "clamp(48px, 6vw, 88px)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}>
              <span style={{
                display: "block",
                background: "linear-gradient(135deg, #e2e2f0 0%, var(--accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Мөнхбат</span>
              <span style={{
                display: "block",
                background: "linear-gradient(135deg, #e2e2f0 0%, var(--accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Хулан</span>
            </h1>

            <p style={{ fontSize: "18px", color: "var(--muted)", fontWeight: 300, letterSpacing: "0.02em", lineHeight: 1.6 }}>
              <strong style={{ color: "var(--text)", fontWeight: 500 }}>Зээлийн эргэн төлөлтийн менежер</strong> — Тус Финтек ББСБ<br />
              Санхүү болон хүний нөөцийн чиглэлд туршлагатай мэргэжилтэн
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px" }}>
              {["hulanm765@gmail.com", "+976 9561 9882"].map((item) => (
                <div key={item} style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  fontFamily: "var(--font-space-mono), monospace",
                  fontSize: "12px", color: "var(--muted)", letterSpacing: "0.05em",
                }}>
                  <div style={{ width: "4px", height: "4px", background: "var(--accent)", flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
              <a href="#experience" style={{
                padding: "12px 28px",
                background: "var(--accent)",
                color: "#080810",
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                display: "inline-block",
              }}>Туршлага харах</a>
              <a href="mailto:hulanm765@gmail.com" style={{
                padding: "12px 28px",
                background: "transparent",
                color: "var(--accent)",
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1px solid rgba(64,220,200,0.3)",
                display: "inline-block",
              }}>Холбогдох</a>
            </div>
          </div>

          {/* Photo */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "420px", height: "520px" }}>
              {/* Gradient border */}
              <div style={{
                position: "absolute",
                inset: "-1px",
                background: "linear-gradient(135deg, var(--accent) 0%, transparent 50%, var(--accent2) 100%)",
                clipPath: "polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)",
                zIndex: 1,
              }} />
              <Image
                src="/profile.jpg"
                alt="Мөнхбат Хулан"
                width={418}
                height={518}
                style={{
                  objectFit: "cover",
                  objectPosition: "center top",
                  clipPath: "polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)",
                  filter: "grayscale(15%) contrast(1.05)",
                  zIndex: 2,
                  position: "absolute",
                  inset: "1px",
                }}
                priority
              />
              {/* Corners */}
              {[
                { cls: "tl", style: { top: "-12px", left: "-12px", borderWidth: "2px 0 0 2px" } },
                { cls: "tr", style: { top: "-12px", right: "-12px", borderWidth: "2px 2px 0 0" } },
                { cls: "bl", style: { bottom: "-12px", left: "-12px", borderWidth: "0 0 2px 2px" } },
                { cls: "br", style: { bottom: "-12px", right: "-12px", borderWidth: "0 2px 2px 0" } },
              ].map((c) => (
                <div key={c.cls} style={{
                  position: "absolute",
                  width: "40px", height: "40px",
                  borderColor: "var(--accent)",
                  borderStyle: "solid",
                  zIndex: 3,
                  ...c.style,
                }} />
              ))}
              {/* Badge */}
              <div style={{
                position: "absolute",
                bottom: "-24px", right: "-24px",
                background: "var(--surface2)",
                border: "1px solid var(--border)",
                padding: "16px 20px",
                zIndex: 4,
              }}>
                <div style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "32px", fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>3+</div>
                <div style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "4px" }}>Жилийн туршлага</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 80px" }}>
          <SectionHeader num="01" title="Миний тухай" />
          <div className="fade-in" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "rgba(226,226,240,0.8)", fontWeight: 300 }}>
              Санхүү болон хүний нөөцийн чиглэлээр ажлын туршлагатай. Хүний нөөцийн бүрдүүлэлт, сонгон шалгаруулалт, хөдөлмөрийн харилцааг бие даан хариуцан ажилласан. Одоогоор зээлийн эргэн төлөлтийн менежерээр ажиллаж, чанаргүй зээлийг бууруулах, мөнгөн урсгалын тогтвортой байдлыг хангахад хувь нэмрээ оруулан ажиллаж байна.<br /><br />
              Их сургуулийн хугацаанд &apos;Залуу нийгмийн ажилтан&apos; клубийн дэд тэргүүнээр ажиллаж байсан.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)" }}>
              {[
                { num: "2+", label: "Компанид ажилласан" },
                { num: "3.3", label: "Голч дүн (GPA)" },
                { num: "20+", label: "Шагнал, амжилт" },
                { num: "2", label: "Гадаад хэл" },
              ].map((stat) => (
                <StatCard key={stat.label} num={stat.num} label={stat.label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ background: "var(--surface)", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 80px" }}>
          <SectionHeader num="02" title="Ажлын туршлага" />
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <ExpItem
              date="2025.07 — Одоо"
              company='"Тус Финтек ББСБ" ХХК'
              title="Зээлийн эргэн төлөлтийн менежер"
              duties={[
                "Зээлийн эргэн төлөлтийн хяналтыг хэрэгжүүлж, хугацаа хэтэрсэн зээлийг бууруулах арга хэмжээ авах",
                "Чанаргүй зээлийн түвшинг бууруулж, мөнгөн урсгалын тогтвортой байдлыг хангахад хувь нэмэр оруулах",
                "Харилцагчийн төлбөрийн сахилга, санхүүгийн хариуцлагыг сайжруулах",
              ]}
            />
            <ExpItem
              date="2024.06 — 2025.06"
              company='"Жүр Үр" ХХК'
              title="Хүний нөөцийн мэргэжилтэн"
              duties={[
                "Хүний нөөцийн бүрдүүлэлт, сонгон шалгаруулалт, хөдөлмөрийн харилцааг бие даан хариуцан ажилласан",
                "Ажлын байрны тодорхойлолт боловсруулах, тушаал гаргах, баримт бичгийн бүрдүүлэлт хөтлөх",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 80px" }}>
          <SectionHeader num="03" title="Ур чадвар" />
          <div className="fade-in" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", background: "var(--border)" }}>
            <SkillGroup title="Гадаад хэл" tags={["Англи", "Солонгос"]} />
            <SkillGroup title="Компьютерийн ур чадвар" tags={["Word", "Excel", "PowerPoint", "Canva", "Figma", "CapCut"]} />
            <SkillGroup title="Мэргэжлийн ур чадвар" tags={["Хүний нөөц", "Хөдөлмөрийн хууль", "Зээлийн эргэн төлөлтийн хяналт", "Баримт бичиг"]} />
            <SkillGroup title="Хувийн ур чадвар" tags={["Багаар ажиллах", "Манлайлал", "Шинжилгээ", "Асуудал шийдвэрлэх", "Цаг баримтлах"]} />
            <SkillGroup title="Спортын ур чадвар" tags={["Волейбол · 1-р зэрэг", "Сагсан бөмбөг"]} />
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" style={{ background: "var(--surface)", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 80px" }}>
          <SectionHeader num="04" title="Боловсрол" />
          <div className="fade-in" style={{
            border: "1px solid var(--border)",
            padding: "48px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "40px",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0, top: 0, bottom: 0,
              width: "3px",
              background: "linear-gradient(to bottom, var(--accent), var(--accent2))",
            }} />
            <div>
              <div style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "10px", letterSpacing: "0.2em", color: "var(--accent)", textTransform: "uppercase", marginBottom: "10px" }}>
                Бакалавр · 2020 — 2024
              </div>
              <div style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px", letterSpacing: "-0.01em" }}>
                Монгол Улсын Их Сургууль
              </div>
              <div style={{ fontSize: "15px", color: "var(--muted)" }}>
                Нийгмийн ажил — Нийгмийн ухааны салбар сургууль
              </div>
            </div>
            <div style={{
              textAlign: "center",
              background: "rgba(64,220,200,0.06)",
              border: "1px solid rgba(64,220,200,0.2)",
              padding: "24px 32px",
            }}>
              <span style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "36px", fontWeight: 700, color: "var(--accent)", display: "block" }}>3.3</span>
              <span style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "4px", display: "block" }}>Голч дүн</span>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 80px" }}>
          <SectionHeader num="05" title="Шагнал · Амжилт" />
          <div className="fade-in" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px", background: "var(--border)" }}>
            <AwardItem rank="🥇" rankColor="oklch(0.78 0.18 80)" text="МУИС Нийгмийн ухааны салбар сургуулийн спортын баг наадам" year="2022 · Тэргүүн байр" />
            <AwardItem rank="🥈" rankColor="oklch(0.75 0.04 250)" text="МУИС Нийгмийн ухааны салбар сургуулийн спортын баг наадам" year="2023 · Дэд байр" />
            <AwardItem rank="🥇" rankColor="oklch(0.78 0.18 80)" text="Орхон аймгийн идэрчүүдийн аварга шалгаруулах тэмцээн" year="2019 · Тэргүүн байр" />
            <AwardItem rank="🥇" rankColor="oklch(0.78 0.18 80)" text="Орхон аймгийн идэрчүүдийн аварга шалгаруулах тэмцээн" year="2018 · Тэргүүн байр" />
            <AwardItem rank="★" rankColor="var(--accent)" rankSize="18px" text="'Залуу нийгмийн ажилтан' клубийн Дэд тэргүүн" year="Монгол Улсын Их Сургууль" />
          </div>
        </div>
      </section>

      {/* Employer logo */}
      <div className="fade-in" style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 80px 100px",
        display: "flex",
        alignItems: "center",
        gap: "24px",
        position: "relative",
        zIndex: 1,
      }}>
        <span style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "10px", color: "var(--muted)", letterSpacing: "0.15em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
          Одоогийн ажил олгогч
        </span>
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "16px 24px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}>
          <Image src="/tusfintech.jpg" alt="Тус Финтек" height={40} width={120} style={{ height: "40px", width: "auto" }} />
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid var(--border)",
        padding: "40px 80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        zIndex: 1,
      }}>
        <div style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "12px", color: "var(--muted)", letterSpacing: "0.1em" }}>
          © 2026 · Мөнхбат Хулан
        </div>
        <div style={{ display: "flex", gap: "32px" }}>
          {[
            { href: "mailto:hulanm765@gmail.com", label: "hulanm765@gmail.com" },
            { href: "tel:+97695619882", label: "+976 9561 9882" },
          ].map((link) => (
            <a key={link.href} href={link.href} style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "11px",
              color: "var(--muted)",
              textDecoration: "none",
              letterSpacing: "0.08em",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >{link.label}</a>
          ))}
        </div>
      </footer>
    </>
  );
}

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="fade-in" style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "60px" }}>
      <span style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "11px", color: "var(--accent)", letterSpacing: "0.2em" }}>{num}</span>
      <h2 style={{ fontSize: "36px", fontWeight: 700, letterSpacing: "-0.02em" }}>{title}</h2>
      <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
    </div>
  );
}

function StatCard({ num, label }: { num: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ background: "var(--surface)", padding: "32px 28px", position: "relative", overflow: "hidden" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position: "absolute",
        bottom: 0, left: 0,
        height: "2px",
        width: hovered ? "100%" : "0",
        background: "var(--accent)",
        transition: "width 0.4s ease",
      }} />
      <div style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "40px", fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>{num}</div>
      <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "8px", letterSpacing: "0.05em" }}>{label}</div>
    </div>
  );
}

function ExpItem({ date, company, title, duties }: { date: string; company: string; title: string; duties: string[] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="fade-in"
      style={{
        background: hovered ? "rgba(64,220,200,0.02)" : "var(--bg)",
        border: `1px solid ${hovered ? "rgba(64,220,200,0.25)" : "var(--border)"}`,
        padding: "36px 40px",
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        gap: "40px",
        alignItems: "start",
        transition: "border-color 0.2s, background 0.2s",
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ paddingTop: "4px" }}>
        <div style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "10px", color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>{date}</div>
        <div style={{ fontSize: "13px", color: "var(--muted)", fontWeight: 400 }}>{company}</div>
      </div>
      <div>
        <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "16px", letterSpacing: "-0.01em" }}>{title}</h3>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
          {duties.map((duty) => (
            <li key={duty} style={{ fontSize: "14px", color: "rgba(226,226,240,0.7)", lineHeight: 1.6, paddingLeft: "20px", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--accent)", fontSize: "12px" }}>→</span>
              {duty}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SkillGroup({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div style={{ background: "var(--surface)", padding: "36px 32px" }}>
      <div style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "20px" }}>{title}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      style={{
        padding: "6px 14px",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        fontSize: "12px",
        color: hovered ? "var(--accent)" : "var(--text)",
        background: "var(--bg)",
        letterSpacing: "0.03em",
        transition: "all 0.2s",
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >{children}</span>
  );
}

function AwardItem({ rank, rankColor, rankSize, text, year }: { rank: string; rankColor: string; rankSize?: string; text: string; year: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        background: hovered ? "var(--surface2)" : "var(--surface)",
        padding: "28px 32px",
        display: "flex",
        alignItems: "flex-start",
        gap: "16px",
        transition: "background 0.2s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: rankSize ?? "24px", fontWeight: 700, color: rankColor, lineHeight: 1, flexShrink: 0, width: "32px", paddingTop: rankSize ? "4px" : undefined }}>{rank}</div>
      <div>
        <div style={{ fontSize: "14px", color: "rgba(226,226,240,0.8)", lineHeight: 1.5 }}>{text}</div>
        <div style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "10px", color: "var(--muted)", marginTop: "4px", letterSpacing: "0.1em" }}>{year}</div>
      </div>
    </div>
  );
}
