import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

function GlobalCSS() {
  return (
    <style>{`
      /* Keep layout width identical whether or not the page scrolls */
      html, body { scrollbar-gutter: stable both-edges; }
      /* Fallback for browsers without scrollbar-gutter */
      @supports not (scrollbar-gutter: stable both-edges) {
        html { overflow-y: scroll; }
      }
    `}</style>
  );
}

// ==============================
// JGS Climate-style Skeleton — STABLE v2 (LOCKED)
// Minimal JS (no TS types) to avoid parser errors
// ==============================

// ---------- Data ----------
const CHAPTERS = [
  { id: "intro", title: "Intro" },
  { id: "problem", title: "The Default Problem" },
  { id: "projects", title: "Flat-Fee Projects" },
  { id: "retainers", title: "Ongoing Support" },
  { id: "snapshots", title: "Case Snapshots" },
  { id: "evidence", title: "Deliverables" },
  { id: "why", title: "Why JGS" },
  { id: "vision", title: "Vision" },
  { id: "cta", title: "Get Started" },
];

const SECTIONS = {
  science: ["01", "02a", "02b", "02c", "03a", "03b"],
  change: ["04", "05", "06a", "06b", "06c", "06d"],
  risks: ["07", "08a", "08b", "08c", "08d", "08e", "09"],
  solutions: ["10a", "10b", "10c", "10d", "10e", "11"],
};

const PAGES = {
  home: { key: "home", kind: "home", title: "Home" },
  // Knowledge sections (titles only; body can be filled later)
  science: { key: "science", kind: "section", title: "Cloud Science", section: "science", body: "" },
  change: { key: "change", kind: "section", title: "Cloud Change", section: "change", body: "" },
  risks: { key: "risks", kind: "section", title: "Risks", section: "risks", body: "" },
  solutions: { key: "solutions", kind: "section", title: "Solutions", section: "solutions", body: "" },
  // Funnel pages (right nav)
  "nav-contact": { key: "nav-contact", kind: "nav", title: "Contact", body: "" },
  "nav-schedule": { key: "nav-schedule", kind: "nav", title: "Schedule", body: "" },
  "nav-comm": { key: "nav-comm", kind: "nav", title: "Communication", body: "" },
  // Core Fundamentals (hamburger)
  "nav-intro": { key: "nav-intro", kind: "nav", title: "Intro", body: "" },
  "nav-problem": { key: "nav-problem", kind: "nav", title: "The Default Problem", body: "" },
  "nav-projects": { key: "nav-projects", kind: "nav", title: "Flat-Fee Projects", body: "" },
  "nav-retainers": { key: "nav-retainers", kind: "nav", title: "Ongoing Support", body: "" },
  "nav-snapshots": { key: "nav-snapshots", kind: "nav", title: "Case Snapshots", body: "" },
  "nav-evidence": { key: "nav-evidence", kind: "nav", title: "Deliverables", body: "" },
  "nav-why": { key: "nav-why", kind: "nav", title: "Why JGS", body: "" },
  "nav-vision": { key: "nav-vision", kind: "nav", title: "Vision", body: "" },
  "nav-cta": { key: "nav-cta", kind: "nav", title: "Get Started", body: "" },
};

const SUBPAGES = {
  "01": { key: "01", title: "A brief history of cloud science", section: "science", body: "" },
  "02a": { key: "02a", title: "How it works", section: "science", body: "" },
  "02b": { key: "02b", title: "Our tenant", section: "science", body: "" },
  "02c": { key: "02c", title: "The impact of weak defaults", section: "science", body: "" },
  "03a": { key: "03a", title: "Secure Score basics", section: "science", body: "" },
  "03b": { key: "03b", title: "Evidence snapshots", section: "science", body: "" },
  "04": { key: "04", title: "The landscape is always changing", section: "change", body: "" },
  "05": { key: "05", title: "How much risk is natural?", section: "change", body: "" },
  "06a": { key: "06a", title: "Models", section: "change", body: "" },
  "06b": { key: "06b", title: "Uncertainty", section: "change", body: "" },
  "06c": { key: "06c", title: "Interpreting signals", section: "change", body: "" },
  "06d": { key: "06d", title: "What models say", section: "change", body: "" },
  "07": { key: "07", title: "Understanding risk", section: "risks", body: "" },
  "08a": { key: "08a", title: "Sea level rise", section: "risks", body: "" },
  "08b": { key: "08b", title: "Heat & humidity", section: "risks", body: "" },
  "08c": { key: "08c", title: "Destructive storms", section: "risks", body: "" },
  "08d": { key: "08d", title: "Ocean acidification", section: "risks", body: "" },
  "08e": { key: "08e", title: "Food & water", section: "risks", body: "" },
  "09": { key: "09", title: "How long can we wait to act?", section: "risks", body: "" },
  "10a": { key: "10a", title: "Introduction", section: "solutions", body: "" },
  "10b": { key: "10b", title: "Curtailing emissions", section: "solutions", body: "" },
  "10c": { key: "10c", title: "Removing carbon", section: "solutions", body: "" },
  "10d": { key: "10d", title: "Adaptation", section: "solutions", body: "" },
  "10e": { key: "10e", title: "Geoengineering", section: "solutions", body: "" },
  "11": { key: "11", title: "The bottom line", section: "solutions", body: "" },
};

// ---------- UI Helpers ----------
function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });
  return (
    <div className="fixed right-4 top-24 bottom-24 z-40 hidden md:flex items-center">
      <motion.div style={{ scaleY }} className="w-1 origin-top rounded-full bg-gradient-to-b from-rose-300 via-indigo-300 to-sky-500" />
    </div>
  );
}

function Background() {
  return (
    <div className="fixed inset-0 -z-20">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_-150px,rgba(255,210,200,0.25),transparent_60%),radial-gradient(1000px_600px_at_70%_20%,rgba(100,150,255,0.18),transparent_65%),linear-gradient(180deg,#0a0f2a,70%,#0b102d)]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[720px] w-[1900px] -translate-x-1/2 rounded-full border-t-[140px] border-t-rose-200/35 opacity-90 blur-[48px]" />
      <div className="pointer-events-none absolute -bottom-64 left-1/2 h-[1000px] w-[2200px] -translate-x-1/2 rounded-full border-t-[110px] border-t-indigo-300/25 opacity-80 blur-[72px]" />
    </div>
  );
}

const pageVariants = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };
const pageTransition = { duration: 0.28, ease: [0.2, 0.8, 0.2, 1] };

function PageShell({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition} className="min-h-screen">
      {children}
    </motion.div>
  );
}

// ---------- Layout ----------
function Header({ go, page }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-[env(safe-area-inset-top)]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mt-0 flex flex-wrap items-center justify-between gap-2 rounded-full border border-white/10 bg-white/5/50 backdrop-blur px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          <a href="#home" onClick={(e)=>{e.preventDefault(); go('home');}} className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-200 via-rose-200 to-indigo-300 shadow" />
            <div className="leading-tight"><div className="text-[13px] font-semibold tracking-tight">JGS</div><div className="text-[11px] text-white/70">Cloud Compliance</div></div>
          </a>
          <details className="relative">
            <summary className="list-none cursor-pointer rounded-full bg-rose-300/90 text-[#0a0f2a] px-3 py-2 text-xs font-semibold shadow">≡</summary>
            <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-[min(92vw,360px)] max-h-[70vh] overflow-auto rounded-xl border border-white/10 bg-[#0d1440] p-2 text-sm z-[60]">
              <div className="px-2 py-1 text-[11px] uppercase tracking-wide text-white/60">Fundamentals</div>
              {CHAPTERS.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    (e.currentTarget.closest('details')).open = false;
                    go('nav-' + c.id);
                  }}
                  className="block rounded-lg px-3 py-2 hover:bg-white/5 whitespace-nowrap"
                >
                  {c.title}
                </a>
              ))}
              <div className="my-2 h-px bg-white/10" />
              <div className="px-2 py-1 text-[11px] uppercase tracking-wide text-white/60">Connect</div>
              {/* Funnel links */}
              <div className="mt-1">
                <a href="#contact" onClick={(e)=>{e.preventDefault(); (e.currentTarget.closest('details')).open=false; go('nav-contact');}} className="block rounded-lg px-3 py-2 hover:bg-white/5">Contact</a>
                <a href="#schedule" onClick={(e)=>{e.preventDefault(); (e.currentTarget.closest('details')).open=false; go('nav-schedule');}} className="block rounded-lg px-3 py-2 hover:bg-white/5">Schedule</a>
                <a href="#comm" onClick={(e)=>{e.preventDefault(); (e.currentTarget.closest('details')).open=false; go('nav-comm');}} className="block rounded-lg px-3 py-2 hover:bg-white/5">Communication</a>
              </div>
            </div>
          </details>
          <nav className="hidden"></nav>
        </div>
      </div>
    </header>
  );
}

function KnowledgeGrid({ go }) {
  return (
    <section id="portal" className="relative z-10 py-16 border-t border-white/10">
      <h2 className="text-center text-2xl font-semibold text-rose-200 mb-10">Knowledge Sections</h2>
      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        {/* Cloud Science */}
        <div>
          <h3 className="display text-[22px] tracking-wide text-rose-200 mb-3">Cloud Science</h3>
          <ul className="space-y-2 text-left">
            <li><button onClick={()=>go('01')} className="hover:underline">01 - A brief history of cloud science</button></li>
            <li><button onClick={()=>go('02a')} className="hover:underline">02a - How it works</button></li>
            <li><button onClick={()=>go('02b')} className="hover:underline">02b - Our tenant</button></li>
            <li><button onClick={()=>go('02c')} className="hover:underline">02c - The impact of weak defaults</button></li>
            <li><button onClick={()=>go('03a')} className="hover:underline">03a - Secure Score basics</button></li>
            <li><button onClick={()=>go('03b')} className="hover:underline">03b - Evidence snapshots</button></li>
          </ul>
        </div>

        {/* Cloud Change */}
        <div>
          <h3 className="display text-[22px] tracking-wide text-rose-200 mb-3">Cloud Change</h3>
          <ul className="space-y-2 text-left">
            <li><button onClick={()=>go('04')} className="hover:underline">04 - The landscape is always changing</button></li>
            <li><button onClick={()=>go('05')} className="hover:underline">05 - How much risk is natural?</button></li>
            <li><button onClick={()=>go('06a')} className="hover:underline">06a - Models</button></li>
            <li><button onClick={()=>go('06b')} className="hover:underline">06b - Uncertainty</button></li>
            <li><button onClick={()=>go('06c')} className="hover:underline">06c - Interpreting signals</button></li>
            <li><button onClick={()=>go('06d')} className="hover:underline">06d - What models say</button></li>
          </ul>
        </div>

        {/* Risks */}
        <div>
          <h3 className="display text-[22px] tracking-wide text-rose-200 mb-3">Risks</h3>
          <ul className="space-y-2 text-left">
            <li><button onClick={()=>go('07')} className="hover:underline">07 - Understanding risk</button></li>
            <li><button onClick={()=>go('08a')} className="hover:underline">08a - Sea level rise</button></li>
            <li><button onClick={()=>go('08b')} className="hover:underline">08b - Heat & humidity</button></li>
            <li><button onClick={()=>go('08c')} className="hover:underline">08c - Destructive storms</button></li>
            <li><button onClick={()=>go('08d')} className="hover:underline">08d - Ocean acidification</button></li>
            <li><button onClick={()=>go('08e')} className="hover:underline">08e - Food & water</button></li>
            <li><button onClick={()=>go('09')} className="hover:underline">09 - How long can we wait to act?</button></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="display text-[22px] tracking-wide text-rose-200 mb-3">Solutions</h3>
          <ul className="space-y-2 text-left">
            <li><button onClick={()=>go('10a')} className="hover:underline">10a - Introduction</button></li>
            <li><button onClick={()=>go('10b')} className="hover:underline">10b - Curtailing emissions</button></li>
            <li><button onClick={()=>go('10c')} className="hover:underline">10c - Removing carbon</button></li>
            <li><button onClick={()=>go('10d')} className="hover:underline">10d - Adaptation</button></li>
            <li><button onClick={()=>go('10e')} className="hover:underline">10e - Geoengineering</button></li>
            <li><button onClick={()=>go('11')} className="hover:underline">11 - The bottom line</button></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function HomePage({ go }) {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative flex min-h-[58vh] items-end pt-2 pb-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="display text-[44px] sm:text-[64px] md:text-[84px] leading-[1.05] tracking-tight">Microsoft 365 Security, Compliance & Solutions</h1>
          <p className="mt-4 text-rose-200/85 font-semibold">Evidence-first Microsoft 365 knowledge for everyone</p>
        </div>
      </section>
      {/* Knowledge grid */}
      <KnowledgeGrid go={go} />
    </PageShell>
  );
}

function SectionPage({ pageKey }) {
  const sub = SUBPAGES[pageKey];
  const page = PAGES[pageKey];
  const title = (sub && sub.title) || (page && page.title) || "";
  const body = (sub && sub.body) || (page && page.body) || "";
  return (
    <PageShell>
      <div className="min-h-screen pt-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-4 text-white/85 leading-relaxed">{body}</p>
        </div>
      </div>
    </PageShell>
  );
}

// ---------- Dev Diagnostics (lightweight tests) ----------
function DevChecks() {
  useEffect(() => {
    // Test 1: All knowledge grid keys exist in SUBPAGES
    const gridKeys = [
      "01","02a","02b","02c","03a","03b",
      "04","05","06a","06b","06c","06d",
      "07","08a","08b","08c","08d","08e","09",
      "10a","10b","10c","10d","10e","11"
    ];
    gridKeys.forEach(k => console.assert(Boolean(SUBPAGES[k]), `Missing SUBPAGES entry for ${k}`));

    // Test 2: All CHAPTERS have matching nav pages
    CHAPTERS.forEach(c => console.assert(Boolean(PAGES['nav-' + c.id]), `Missing PAGES entry for nav-${c.id}`));
  }, []);
  return null;
}

export default function JGSPrimer() {
  const [page, setPage] = useState('home');

  const go = (key) => {
    if (PAGES[key] || SUBPAGES[key]) {
      setPage(key);
      history.replaceState(null, '', '#' + key);
    } else {
      setPage('home');
      history.replaceState(null, '', '#home');
    }
  };

  useEffect(() => {
    const openMenus = document.querySelectorAll('header details[open]');
    openMenus.forEach((el) => el.removeAttribute('open'));
  }, [page]);

  useEffect(() => {
    const hash = (window.location.hash || '#home').replace('#','');
    go(hash || 'home');
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0f2a] text-neutral-100">
      <GlobalCSS />
      <Background />
      <ProgressBar />
      <Header go={go} page={page} />
      <DevChecks />
      <AnimatePresence mode="wait">
        {page === 'home' ? (
          <HomePage key="home" go={go} />
        ) : (
          <SectionPage key={page} pageKey={page} />
        )}
      </AnimatePresence>
    </main>
  );
}
