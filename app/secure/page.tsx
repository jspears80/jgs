// app/secure/page.tsx
import React from "react";
import styles from "./secure.module.css";

export const metadata = {
  title: "Secure — Flat-Fee Microsoft 365 Hardening | JGS Cloud Compliance",
  description:
    "Because trust isn’t something you assume — it’s something you prove. Secure resets Microsoft 365 so it’s organized, protected, and defensible.",
};

export default function SecurePage() {
  return (
    <section className={styles.wrap}>
      {/* ===== Secure Only ===== */}
      <section className={`${styles.card} ${styles.accent}`}>
        <h2>🛡️ Secure — Flat-Fee Microsoft 365 Hardening</h2>
        <p className={styles.tag}>
          Because trust isn’t something you assume — it’s something you prove.
        </p>

        <div className={styles.twoCol}>
          <div>
            <h3>Microsoft 365 for CPA & Law Firms</h3>
            <p>Your firm runs on trust — between partners, clients, and insurers.</p>
            <p>But Microsoft 365 ships insecure by default: weak authentication, open sharing, risky defaults, and silent configuration drift.</p>
            <p></p>
            <p>Secure is our one-time hardening engagement that locks down your tenant with modern authentication, Conditional Access, secure mailflow, device compliance, and data governance — all built specifically for CPA & Law firms.</p>
            <p className={styles.price}>
              <strong>$3,000 flat fee.</strong>
              <br />
              One engagement. Permanent peace of mind.
            </p>
          </div>

          <aside className={styles.side}>
            <h4>The Business Value</h4>
            <ul>
              <li>
                <strong>Reassure your clients and insurers.</strong>
                <br />
                Prove your firm takes data protection seriously — with measurable, documented controls.
              </li>
              <li>
                <strong>Reduce exposure and uncertainty.</strong>
                <br />
               Eliminate weak defaults, hidden admins, insecure sharing, legacy authentication, and configuration drift — risks that quietly accumulate over years.
              </li>
              <li>
                <strong>Protect your reputation.</strong>
                <br />
                A hardened Microsoft 365 environment preserves confidentiality, prevents compromise, and aligns with insurer and regulatory expectations.
              </li>
              <li>
                <strong>Operate with confidence.</strong>
                <br />
                Stable, governed systems mean fewer surprises, fewer disruptions, and more trust in every exchange..
              </li>
            </ul>
          </aside>
        </div>

        <div className={styles.divider} />

        <h4>What You Get</h4>
        <div className={styles.steps}>
          <article className={styles.step}>
            <div className={styles.badge}>1️⃣</div>
            <h5>Reset &amp; Rebuild</h5>
            <p>
              We secure the foundation — identity, access, and email — eliminating the drift that builds up over years.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>2️⃣</div>
            <h5>Proof You Can Hand Off</h5>
            <p>
              You leave with clear documentation: who can access what, which protections are in place, and a signed Secure Report for insurers and clients.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>3️⃣</div>
            <h5>Renewed Confidence</h5>
            <p>
              Everything works like it should.
              <br />
              Your systems are clean, compliant, and aligned to professional standards — ready for audits, renewals, or anything that comes next.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}
