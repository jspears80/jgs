// app/about/page.tsx
import React from "react";
import styles from "./about.module.css";

export const metadata = {
  title: "About — Secure • Support • Prove | JGS Cloud Compliance",
  description:
    "Professional firms run on trust. JGS Cloud Compliance secures Microsoft 365, maintains it day-to-day, and proves it’s governed to professional standards.",
};

export default function AboutPage() {
  return (
    <section className={styles.wrap}>
      {/* ===== Intro Card ===== */}
      <section className={`${styles.card} ${styles.accent}`}>
        <h2>🧱 About</h2>

        <p>🏢 Enterprise consultants speak in frameworks and five-figure retainers.</p>
        <p>
          🧰 Generic MSPs keep the lights on but rarely fixe the weaknesses that result
          in compromise and sleepless nights.
        </p>
        <p>
          In the middle are firms like yours — law and accounting teams of ten to twenty-five
          people who live inside Microsoft 365.
        </p>
        <p>
          You handle confidential information every day. You can’t afford downtime or uncertainty.
        </p>
        <p>
          You also shouldn’t have to pay enterprise prices just to feel secure.
        </p>
        </section>

      {/* ===== The Model, Plainly ===== */}
      <section className={styles.card}>
        <h3>⚙️ Our Services — Plain and Simple</h3>

        <article className={styles.block}>
          <h4>🛡️ Secure brings control, clarity, and confidence back to Microsoft 365.</h4>
          <p>
            Over time, permissions drift and risks pile up until no one’s sure who can see what.
          </p>
          <p>
            Secure resets everything — hardening identity, access, and email so your environment
            is clean, closed, and compliant.
          </p>
          <p>
            You leave with a tenant that’s stable, protected, and aligned with insurer expectations.
          </p>
          <p><strong>Flat fee — $1,495</strong></p>
        </article>

        <article className={styles.block}>
          <h4>🤝 Support keeps that posture steady.</h4>
          <p>Once secure, systems should stay that way.</p>
          <p>
            Our Support plan provides a dedicated Microsoft 365 advisor and helpdesk that
            handles user issues, policy changes, and compliance upkeep while you focus on clients.
          </p>
          <p>We respond fast and document every action so you’re always audit-ready.</p>
          <p><strong>$995 / month</strong></p>
        </article>

        <article className={styles.block}>
          <h4>📊 Prove answers the evidence question without the scramble.</h4>
          <p>
            When an insurer, client, or auditor asks for proof, Prove delivers exportable
            Microsoft 365 data — organized facts, not interpretation — ready to hand off.
          </p>
          <p><strong>$495 one-time</strong></p>
        </article>

        <article className={styles.block}>
          <h4>⚙️ Custom is where you bring the idea that would make your firm work better.</h4>
          <p>
            If it touches Microsoft 365, we can design it, build it, or automate it — portals,
            intake flows, review and approval, lifecycle and retention — all inside your tenant,
            governed by policy.
          </p>
          <p><strong>From $495+, scoped upfront and fixed per deliverable</strong></p>
        </article>
      </section>

      {/* ===== Why Flat-Fee Matters ===== */}
      <section className={styles.card}>
        <h3>💰 Why Flat-Fee Matters</h3>
        <p>Flat pricing forces discipline — on us.</p>
        <p>We scope the problem, fix it, and prove it works.</p>
        <p>
          You know exactly what you’re paying for, and we know exactly what we have to deliver.
        </p>
        <p>
          That transparency is what small professional firms have been missing in cybersecurity.
        </p>
        <p>It’s how trust is built — and how it stays that way.</p>
      </section>

      {/* ===== In Plain English ===== */}
      <section className={styles.card}>
        <h3>✉️ In Plain English</h3>
        <p>
          You shouldn’t have to choose between being overcharged or under-protected.
        </p>
        <p>
          Your firm deserves the same security discipline big enterprises have, delivered at a
          price and pace that fit the way you actually work.
        </p>
        <p>That’s why JGS Cloud Compliance exists:</p>
        <p>
          we secure it, we support it, we prove it — so you can stay focused on your clients,
          not your IT.
        </p>
      </section>
    </section>
  );
}




