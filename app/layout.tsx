import type { Metadata, Viewport } from "next";
import KitScripts from "./kit-scripts";

const title = "Мөнхбат Хулан: зээлийн эргэн төлөлтийн менежер, хүний нөөцийн мэргэжилтэн";
const description =
  "Тус Финтек ББСБ-д зээлийн эргэн төлөлтийг хариуцдаг Мөнхбат Хулангийн ажлын туршлага, ур чадвар, боловсрол, холбоо барих хаяг.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    title,
    description: "Ажлын туршлага, ур чадвар, боловсрол, холбоо барих хаяг.",
    images: ["share.jpg"],
  },
  twitter: { card: "summary_large_image" },
  other: { "site-kind": "other", "page-type": "service" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#eeecea",
};

/* The palette and the type as start.mjs printed them (three-stones, source-serif). */
const tokens = `
:root {
  --p-bg: #eeecea; --p-surface: #e4e1dd; --p-ink: #333231; --p-muted: #625f5b;
  --p-accent: #5c6b54; --p-accent-ink: #ffffff; --p-action: #5c6b54; --p-action-ink: #ffffff;
  --p-inv-bg: #333231; --p-inv-surface: #3e3d3c; --p-inv-ink: #eeecea; --p-inv-muted: #adaba9;
  --p-inv-accent: #eeecea; --p-inv-accent-ink: #333231; --p-inv-action: #eeecea; --p-inv-action-ink: #333231;
  --font-display: "Source Serif 4", Georgia, serif;
  --font-text: "Libre Franklin", system-ui, sans-serif;
  --display-weight: 400;
  --display-tracking: -0.02em;
  --display-tracking-xl: -0.026em;
}
/* page CSS: only what sits inside a visual and the kit lacks */
.rows .rows__name small { display: block; font-weight: 400; color: var(--muted); font-size: var(--t-small); }
.rows > li > p + p { margin-top: var(--s-2); }
.tools { background: var(--surface); display: grid; }
.tools > ul { list-style: none; margin: 0; padding: var(--s-7); display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--s-7); align-content: center; }
.tools li { display: grid; justify-items: center; gap: var(--s-4); font-weight: 500; }
.tools img { width: auto; height: 72px; }
@media (max-width: 1023px) { .tools { min-height: 360px; } }
.logo-frame { background: #2cbcb6; overflow: hidden; }
/* the newest award: a gold medal mark and a warm row */
.award-top { border-bottom-color: #c99a2e !important; }
.award-top > .rows__name { font-size: var(--t-lead); }
.award-top > .rows__value { color: #7a5a12; font-weight: 500; }
.medal { display: inline-block; width: 18px; height: 18px; margin-right: var(--s-2); vertical-align: -2px; border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fff3c2, #e2b33c 45%, #a8780f); box-shadow: 0 0 0 2px #f3e7c4, 0 0 0 3px #c99a2e; }
/* the statement band in a deep olive, and the hero photo a touch warmer */
#about.ground-inverse { background: #3b4536; }
.hero__media { box-shadow: 0 30px 60px -30px rgba(51, 50, 49, .45); }
.hero__media > img { filter: saturate(1.05) contrast(1.03); }
.hero h1 { color: #2b2a29; }
.logo-frame > img { display: block; width: 100%; height: 100%; object-fit: contain; }
@media (min-width: 1024px) {
  .hero--split .hero__text { display: flex; flex-direction: column; align-self: stretch; }
  .hero__text > .hero-facts { margin-top: auto; }
}
`;

const enter =
  "document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700);" +
  "document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500)";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="mn"
      data-type="service"
      data-radius="soft"
      data-buttons="block"
      data-motion=""
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400..700&family=Libre+Franklin:wght@400..600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/backgrounds/backgrounds.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <link rel="stylesheet" href="/assets/icons/icon.css" />
        <link rel="stylesheet" href="/assets/moments/word-highlight/moment.css" />
        <style dangerouslySetInnerHTML={{ __html: tokens }} />
        <script dangerouslySetInnerHTML={{ __html: enter }} />
        <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
        <link rel="modulepreload" href="/assets/moments/word-highlight/moment.js" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <KitScripts />
      </body>
    </html>
  );
}
