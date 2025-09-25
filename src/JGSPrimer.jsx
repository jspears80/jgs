import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";



function GlobalCSS() {
  return (
    <style>{`
      html, body { scrollbar-gutter: stable both-edges; }
      @supports not (scrollbar-gutter: stable both-edges) { html { overflow-y: scroll; } }
    `}</style>
  );
}

const CHAPTERS = [
  { id: "intro",    title: "Home" },
  { id: "cpa",      title: "CPA Firms" },
  { id: "law",      title: "Law Firms" },
  { id: "services", title: "Our Services" },
  { id: "support",  title: "Support" },
  { id: "proof",    title: "Case Studies" },
  { id: "why",      title: "Why JGS" },
  { id: "vision",   title: "Vision" },
  { id: "cta",      title: "Get Started" },
];

const SECTIONS = {
  operations: ["op1", "op2", "op3"],
  security:   ["sec1", "sec2", "sec3"],
  emaildns:   ["em1", "em2", "em3"],
  backups:    ["bk1", "bk2", "bk3"],
};

const PAGES = {
  home: { key: "home", kind: "home", title: "Home" },
  "nav-intro":    { key: "nav-intro", kind: "nav", title: "Home", body: "Secure • Simple • Reliable — Microsoft 365 for CPA and law firms." },
  "nav-cpa":      { key: "nav-cpa", kind: "nav", title: "CPA Firms", body: "Tax season without tech stress." },
  "nav-law":      { key: "nav-law", kind: "nav", title: "Law Firms", body: "Confidential collaboration, year‑round." },
  "nav-services": { key: "nav-services", kind: "nav", title: "Our Services", body: "Flat‑Fee projects + Advisory retainers." },
  "nav-support":  { key: "nav-support", kind: "nav", title: "Support", body: "Real Microsoft 365 support, same day." },
  "nav-proof":    { key: "nav-proof", kind: "nav", title: "Case Studies", body: "CPA renewal saved; Law firm spoofing blocked." },
  "nav-why":      { key: "nav-why", kind: "nav", title: "Why JGS", body: "Flat fees. Proof over promises. Not an MSP." },
  "nav-vision":   { key: "nav-vision", kind: "nav", title: "Vision", body: "Today: projects + retainers. Tomorrow: automated oversight." },
  "nav-cta":      { key: "nav-cta", kind: "nav", title: "Get Started", body: "Secure • Simple • Reliable. Start today." },
  "nav-contact":  { key: "nav-contact", kind: "nav", title: "Contact", body: "Email, call, or schedule a meeting." },
  "nav-schedule": { key: "nav-schedule", kind: "nav", title: "Schedule", body: "Book a discovery call." },
  "nav-comm":     { key: "nav-comm", kind: "nav", title: "Communication", body: "Direct answers — no help desk shuffle." },
};

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

function Header({ go }) {
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
                <a key={c.id} href={`#${c.id}`} onClick={(e)=>{ e.preventDefault(); (e.currentTarget.closest('details')).open=false; go('nav-'+c.id); }} className="block rounded-lg px-3 py-2 hover:bg-white/5 whitespace-nowrap">{c.title}</a>
              ))}
              <div className="my-2 h-px bg-white/10" />
              <div className="px-2 py-1 text-[11px] uppercase tracking-wide text-white/60">Connect</div>
              <div className="mt-1">
                <a href="#contact"  onClick={(e)=>{e.preventDefault(); (e.currentTarget.closest('details')).open=false; go('nav-contact');}}  className="block rounded-lg px-3 py-2 hover:bg-white/5">Contact</a>
                <a href="#schedule" onClick={(e)=>{e.preventDefault(); (e.currentTarget.closest('details')).open=false; go('nav-schedule');}} className="block rounded-lg px-3 py-2 hover:bg-white/5">Schedule</a>
                <a href="#comm"     onClick={(e)=>{e.preventDefault(); (e.currentTarget.closest('details')).open=false; go('nav-comm');}}      className="block rounded-lg px-3 py-2 hover:bg-white/5">Communication</a>
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
  const labelFor = (id) => SUBPAGES[id]?.title || `Article ${id} (placeholder)`;

  return (
    <section id="portal" className="relative z-10 py-16 border-t border-white/10">
      <h2 className="text-center text-2xl font-semibold text-rose-200 mb-10">
        Knowledge Sections
      </h2>
      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">

        {/* Operations & Support */}
        <div>
          <h3 className="display text-[22px] tracking-wide text-rose-200 mb-3">
            Operations & Support
          </h3>
          <ul className="space-y-2 text-left">
            {SECTIONS.operations.map((id) => (
              <li key={id}>
                <button onClick={() => go(id)} className="hover:underline">
                  {labelFor(id)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Security & Hardening */}
        <div>
          <h3 className="display text-[22px] tracking-wide text-rose-200 mb-3">
            Security & Hardening
          </h3>
          <ul className="space-y-2 text-left">
            {SECTIONS.security.map((id) => (
              <li key={id}>
                <button onClick={() => go(id)} className="hover:underline">
                  {labelFor(id)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Email & DNS */}
        <div>
          <h3 className="display text-[22px] tracking-wide text-rose-200 mb-3">
            Email & DNS
          </h3>
          <ul className="space-y-2 text-left">
            {SECTIONS.emaildns.map((id) => (
              <li key={id}>
                <button onClick={() => go(id)} className="hover:underline">
                  {labelFor(id)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Backups & Recovery */}
        <div>
          <h3 className="display text-[22px] tracking-wide text-rose-200 mb-3">
            Backups & Recovery
          </h3>
          <ul className="space-y-2 text-left">
            {SECTIONS.backups.map((id) => (
              <li key={id}>
                <button onClick={() => go(id)} className="hover:underline">
                  {labelFor(id)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


function HomePage({ go }) {
  return (
    <PageShell>
      <section className="relative flex min-h-[58vh] items-end pt-2 pb-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="display text-[44px] sm:text-[64px] md:text-[84px] leading-[1.05] tracking-tight">Microsoft 365 Security, Compliance & Solutions</h1>
          <p className="mt-4 text-rose-200/85 font-semibold">Evidence-first Microsoft 365 knowledge for CPA and Law Firms</p>
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
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-4 text-white/85 leading-relaxed">{body}</p>
        </div>
      </div>
    </PageShell>
  );
}

const SUBPAGES = {
  op1: { key: "op1", title: "Onboarding & Scheduling", section: "operations", body: "Step-by-step onboarding, scheduling calls, and setting expectations for CPA and Law firms." },
  op2: { key: "op2", title: "Account & Access Basics", section: "operations", body: "Basics of Microsoft 365 account setup, access controls, and user provisioning." },
  op3: { key: "op3", title: "Common Defaults to Avoid", section: "operations", body: "Why weak defaults (MFA off, no logging) leave firms exposed and how JGS remediates them." },
  sec1: { key: "sec1", title: "Why 365 Isn’t Secure by Default", section: "security", body: "Microsoft 365 leaves key security settings optional; JGS enforces them as baseline." },
  sec2: { key: "sec2", title: "MFA & Conditional Access", section: "security", body: "Multi-factor authentication and conditional access policies explained with compliance overlays." },
  sec3: { key: "sec3", title: "Audit Logging & Retention", section: "security", body: "Default logs purge after 90 days if you don’t enable retention. JGS turns on audit logging and applies sensible retention so evidence exists when needed." },
  em1: { key: "em1", title: "SPF / DKIM / DMARC Basics", section: "emaildns", body: "How DNS alignment restores deliverability and blocks spoofing." },
  em2: { key: "em2", title: "Stopping Spoofing & Impersonation", section: "emaildns", body: "Practical steps to block impersonation and protect client communications." },
  em3: { key: "em3", title: "Mail Flow Validation", section: "emaildns", body: "Validating connectors, MX, and authentication to ensure mail lands." },
  bk1: { key: "bk1", title: "Why Recycle Bins ≠ Backups", section: "backups", body: "Immutable backups with test restores guarantee recoverability." },
  bk2: { key: "bk2", title: "Immutable Backup Overview", section: "backups", body: "What immutable means in Microsoft 365 backup solutions and why it matters." },
  bk3: { key: "bk3", title: "Quarterly Restore Tests", section: "backups", body: "Routine restore tests provide insurer-ready proof and real resilience." },
};

export default function JGSPrimer() {
  const [page, setPage] = useState("home");
  const go = (key) => setPage(key || "home");

  useEffect(() => {
    const applyHash = () => {
      const h = (window.location.hash || "#home").replace("#", "");
      if (h === "home") setPage("home");
      else if (PAGES["nav-" + h]) setPage("nav-" + h);
      else if (PAGES[h] || SUBPAGES[h]) setPage(h);
      else setPage("home");
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0f2a] text-neutral-100">
      <GlobalCSS />
      <Background />
      <ProgressBar />
      <Header go={(key)=>{ window.location.hash = key; go(key); }} />
      <AnimatePresence mode="wait">
        {page === "home" ? (
          <HomePage key="home" go={(key)=>{ window.location.hash = key; go(key); }} />
        ) : (
          <SectionPage key={page} pageKey={page} />
        )}
      </AnimatePresence>
    </main>
  );
}
