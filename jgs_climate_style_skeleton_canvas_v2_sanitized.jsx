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

// ==============================
// JGS Climate-style Skeleton — STABLE v2 (LOCKED)
// Sanitized for GitHub (no Tailwind bracket utilities)
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
};

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
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 rounded-full border-t-rose-200/30 opacity-90"
           style={{ height: 720, width: 1900, borderTopWidth: 140, filter: 'blur(48px)' }} />
      <div className="pointer-events-none absolute -bottom-64 left-1/2 -translate-x-1/2 rounded-full border-t-indigo-300/25 opacity-80"
           style={{ height: 1000, width: 2200, borderTopWidth: 110, filter: 'blur(72px)' }} />
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
// ... rest of Header, KnowledgeGrid, HomePage, SectionPage, JGSPrimer identical to Canvas but with no bracketed Tailwind classes ...
