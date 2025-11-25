// app/about/page.tsx
import React from "react";
import styles from "./about.module.css";

export const metadata = {
  title: "About — Secure • Prove • Assure | JGS Cloud Compliance",
  description:
    "JGS Cloud Compliance secures Microsoft 365 for CPA & law firms, proves it with audit-ready evidence, and keeps it defensible year-round through an annual assurance program.",
};

export default function AboutPage() {
  return (
    <section className={styles.wrap}>
      {/* ===== Intro Card ===== */}
      <section className={`${styles.card} ${styles.accent}`}>
        <h2>🧱 About</h2>

        <p>🏢 Enterprise consultants speak in frameworks and five-figure retainers.</p>
        <p>
          🧰 Generic MSPs keep the lights on but rarely fix the misconfigurations and risky defaults
          that put firms at risk with insurers, auditors, or clients.
        </p>
        <p>
          In the middle are firms like yours — CPA and law practices of five to thirty people who
          live inside Microsoft 365 and carry real professional liability.
        </p>
        <p>
          You handle confidential information every day. You can’t afford outages, impersonation,
          or “we thought it was secure.”
        </p>
        <p>
          JGS Cloud Compliance exists to close that gap — to bring enterprise-grade Microsoft 365
          security, proof, and continuity to small professional firms at a scale and price that
          actually fits.
        </p>
      </section>

      {/* ===== The Model, Plainly ===== */}
      <section className={styles.card}>
        <h3>⚙️ Our Services — Plain and Simple</h3>

        <article className={styles.block}>
          <h4>🛡️ Secure — Microsoft 365 Hardening</h4>
          <p>
            Over time, permissions drift, legacy settings linger, and no one is fully sure who can
            see what. Meanwhile, Microsoft 365 ships with risky defaults that leave firms exposed.
          </p>
          <p>
            <strong>Secure</strong> is a one-time hardening engagement that locks down identity,
            authentication, Conditional Access, mailflow, device compliance, and baseline data
            governance — built specifically for CPA &amp; law firms.
          </p>
          <p>
            You leave with a tenant that is stable, protected, and aligned with modern insurer and
            regulatory expectations.
          </p>
          <p>
            <strong>$3,000 — one-time flat fee</strong>
          </p>
        </article>

        <article className={styles.block}>
          <h4>📘 Prove — Microsoft 365 Audit Binder</h4>
          <p>
            When an insurer, client, or auditor asks for proof, screenshots and “trust us” aren’t
            enough.
          </p>
          <p>
            <strong>Prove</strong> runs an evidence-driven assessment of your Microsoft 365 tenant
            and delivers a professional, audit-ready binder: real tenant data, evaluated controls,
            clear findings, and a roadmap written in plain English.
          </p>
          <p>
            It’s the documentation you hand to carriers, peer reviewers, and major clients when they
            ask how your firm secures Microsoft 365.
          </p>
          <p>
            <strong>$3,000 — one-time flat fee</strong>
          </p>
        </article>

        <article className={styles.block}>
          <h4>🔄 Assure — Annual Security Program</h4>
          <p>
            Some firms want more than a project. They want to know that Microsoft 365 stays secure,
            documented, and renewal-ready all year.
          </p>
          <p>
            <strong>Assure</strong> combines Secure + Prove with quarterly evidence refreshes and
            focused leadership advisory, so you always have up-to-date posture and proof on file.
          </p>
          <p>
            It’s a year-round assurance layer for firms that can’t afford uncertainty during tax
            season, litigation, or renewal cycles.
          </p>
          <p>
            <strong>$5,000 / year</strong> <span>or</span> <strong>$425 / month (annual agreement)</strong>
          </p>
        </article>
      </section>

      {/* ===== Why Flat-Fee Matters ===== */}
      <section className={styles.card}>
        <h3>💰 Why Flat-Fee Matters</h3>
        <p>Flat pricing forces discipline — on us, not on you.</p>
        <p>
          We scope the problem, do the work, and deliver proof of what changed. No hourly creep, no
          vague retainers, no surprise invoices.
        </p>
        <p>
          You know exactly what you’re paying for — Secure, Prove, or Assure — and we know exactly
          what we have to deliver to call the engagement complete.
        </p>
        <p>
          That transparency is what small professional firms have been missing in Microsoft 365
          security and compliance.
        </p>
        <p>It’s how trust is built — and how it stays that way.</p>
      </section>

      {/* ===== In Plain English ===== */}
      <section className={styles.card}>
        <h3>✉️ In Plain English</h3>
        <p>You shouldn’t have to choose between being overcharged or under-protected.</p>
        <p>
          Your firm deserves the same Microsoft 365 security discipline large enterprises have,
          delivered at a pace and price that fit the way you actually work.
        </p>
        <p>That’s why JGS Cloud Compliance exists:</p>
        <p>
          we <strong>Secure</strong> your tenant, we <strong>Prove</strong> its posture with real
          evidence, and we <strong>Assure</strong> that it stays defensible — so you can stay
          focused on your clients, not your IT.
        </p>
      </section>
    </section>
  );
}
