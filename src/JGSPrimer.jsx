import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

function GlobalCSS() {
  return (
    <style>{`
      html, body { scrollbar-gutter: stable both-edges; }
      @supports not (scrollbar-gutter: stable both-edges) {
        html { overflow-y: scroll; }
      }
    `}</style>
  );
}

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

const PAGES = {
  home: { key: "home", kind: "home", title: "Home" },
  science: { key: "science", kind: "section", title: "Cloud Science", section: "science", body: "" },
  change: { key: "change", kind: "section", title: "Cloud Change", section: "change", body: "" },
  risks: { key: "risks", kind: "section", title: "Risks", section: "risks", body: "" },
  solutions: { key: "solutions", kind: "section", title: "Solutions", section: "solutions", body: "" },
  "nav-contact": { key: "nav-contact", kind: "nav", title: "Contact", body: "" },
  "nav-schedule": { key: "nav-schedule", kind: "nav", title: "Schedule", body: "" },
  "nav-comm": { key: "nav-comm", kind: "nav", title: "Communication", body: "" },
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
  const style = {
    backgroundImage:
      'radial-gradient(1200px 700px at 50% -150px, rgba(255,210,200,0.25), transparent 60%), ' +
      'radial-gradient(1000px 600px at 70% 20%, rgba(100,150,255,0.18), transparent 65%), ' +
      'linear-gradient(180deg, #0a0f2a, 70%, #0b102d)'
  };
  return (
    <div className="fixed inset-0 -z-20" style={style}>
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 rounded-full border-t-rose-200/30 opacity-90"
        style={{ height: 720, width: 1900, borderTopWidth: 140, filter: 'blur(48px)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-64 left-1/2 -translate-x-1/2 rounded-full border-t-indigo-300/25 opacity-80"
        style={{ height: 1000, width: 2200, borderTopWidth: 110, filter: 'blur(72px)' }}
      />
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
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: 1400 }}>
        <div className="mt-0 flex flex-wrap items-center justify-between gap-2 rounded-full border border-white/10 bg-white/5/50 backdrop-blur px-4 py-2 shadow-lg">
          <a href="#home" onClick={(e)=>{e.preventDefault(); go('home');}} className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-200 via-rose-200 to-indigo-300 shadow" />
            <div className="leading-tight"><div className="text-sm font-semibold tracking-tight">JGS</div><div className="text-xs text-white/70">Cloud Compliance</div></div>
          </a>
          <details className="relative">
            <summary className="list-none cursor-pointer rounded-full bg-rose-300/90 text-[#0a0f2a] px-3 py-2 text-xs font-semibold shadow">≡</summary>
            <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-full max-w-sm overflow-auto rounded-xl border border-white/10 bg-[#0d1440] p-2 text-sm z-50 shadow-lg">
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
      <div className="mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm" style={{ maxWidth: 1400 }}>
        <div>
          <h3 className="display text-2xl tracking-wide text-rose-200 mb-3">Cloud Science</h3>
          <ul className="space-y-2 text-left">
            <li><button onClick={()=>go('01')} className="hover:underline">01 - A brief history of cloud science</button></li>
            <li><button onClick={()=>go('02a')} className="hover:underline">02a - How it works</button></li>
            <li><button onClick={()=>go('02b')} className="hover:underline">02b - Our tenant</button></li>
            <li><button onClick={()=>go('02c')} className="hover:underline">02c - The impact of weak defaults</button></li>
            <li><button onClick={()=>go('03a')} className="hover:underline">03a - Secure Score basics</button></li>
            <li><button onClick={()=>go('03b')} className="hover:underline">03b - Evidence snapshots</button></li>
          </ul>
        </div>
        <div>
          <h3 className="display text-2xl tracking-wide text-rose-200 mb-3">Cloud Change</h3>
          <ul className="space-y-2 text-left">
            <li><button onClick={()=>go('04')} className="hover:underline">04 - The landscape is always changing</button></li>
            <li><button onClick={()=>go('05')} className="hover:underline">05 - How much risk is natural?</button></li>
            <li><button onClick={()=>go('06a')} className="hover:underline">06a - Models</button></li>
            <li><button onClick={()=>go('06b')} className="hover:underline">06b - Uncertainty</button></li>
            <li><button onClick={()=>go('06c')} className="hover:underline">06c - Interpreting signals</button></li>
            <li><button onClick={()=>go('06d')} className="hover:underline">06d - What models say</button></li>
          </ul>
        </div>
        <div>
          <h3 className="display text-2xl tracking-wide text-rose-200 mb-3">Risks</h3>
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
        <div>
          <h3 className="display text-2xl tracking-wide text-rose-200 mb-3">Solutions</h3>
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
      <section className="relative flex items-end pt-2 pb-8" style={{ minHeight: '58vh' }}>
        <div className="mx-auto text-center px-6" style={{ maxWidth: 896 }}>
          <h1 className="display leading-tight tracking-tight" style={{ fontSize: 44 }}>
            Microsoft 365 Security, Compliance & Solutions
          </h1>
          <p className="mt-4 text-rose-200/85 font-semibold">
            Evidence-first Microsoft 365 knowledge for everyone
          </p>
        </div>
      </section>
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
        <div className="mx-auto px-6" style={{ maxWidth: 768 }}>
          <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-4 text-white/85 leading-relaxed">{body}</p>
        </div>
      </div>
    </PageShell>
  );
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