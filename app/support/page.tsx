// app/support/page.tsx
import React from "react";
import styles from "./support.module.css"; // same CSS — layout unchanged

export const metadata = {
  title: "Assure — Annual Microsoft 365 Security Program | JGS Cloud Compliance",
  description:
    "The JGS Assurance Program keeps your Microsoft 365 secure, documented, and audit-ready all year with quarterly refreshes, advisory, and real evidence.",
};

export default function AssurePage() {
  return (
    <section className={styles.wrap}>
      <section className={`${styles.card} ${styles.accent}`}>
        <h2>🔒 Assure — Annual Microsoft 365 Security Program</h2>
        <p className={styles.tag}>
          The reliability of Secure + the proof of Prove — kept accurate all year.
        </p>

        <div className={styles.twoCol}>
          <div>
            <h3>Microsoft 365 for Law &amp; CPA Firms</h3>
            <p>
              Your Microsoft 365 doesn’t stay secure just because it was hardened once.  
              Accounts change. Permissions drift. Microsoft updates features silently.  
              Insurers, clients, and regulators ask for proof at unpredictable times.
            </p>

            <p>
              The <strong>Assure Program</strong> keeps your environment secure, documented, and
              defensible all year — combining <strong>SECURE</strong> hardening, a full
              <strong> PROVE</strong> audit binder, quarterly evidence refreshes, and leadership-only
              advisory.
            </p>

            <p>
              When a renewal, audit, or client questionnaire appears,  
              <strong>your proof is already done.</strong>
            </p>

            <p className={styles.price}>
              <strong>$5,000 per year</strong>  
              or <strong> $425/month</strong> (annual commitment)
              <br />
              A full year of security, documentation, and continuity.
            </p>
          </div>

          <aside className={styles.side}>
            <h4>The Business Value</h4>
            <ul>
              <li>
                <strong>Stay audit-ready year-round.</strong>
                <br />
                Quarterly evidence refreshes keep your PROVE binder accurate for insurers, auditors,
                or high-value clients — no scrambling, no guesswork.
              </li>

              <li>
                <strong>Maintain a hardened, compliant tenant.</strong>
                <br />
                Silent drift, permission creep, forgotten admins, and insecure settings are corrected
                before they become liabilities.
              </li>

              <li>
                <strong>Leadership-only advisory.</strong>
                <br />
                Direct access to senior judgment — for security questions, configuration decisions,
                client questionnaires, or insurer follow-ups.
              </li>

              <li>
                <strong>Peace of mind every quarter.</strong>
                <br />
                Your Microsoft 365 never falls behind. Controls remain enforced. Documentation stays
                accurate. Proof stays defensible.
              </li>
            </ul>
          </aside>
        </div>

        <div className={styles.divider} />

        <h4>What You Get</h4>
        <div className={styles.steps}>
          <article className={styles.step}>
            <div className={styles.badge}>1️⃣</div>
            <h5>Full SECURE Hardening</h5>
            <p>
              Your tenant is rebuilt and locked down with modern authentication, Conditional Access,
              secure mailflow, device compliance, and governed sharing — a clean, modern baseline
              aligned to professional standards.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>2️⃣</div>
            <h5>The PROVE Binder</h5>
            <p>
              A complete, evidence-driven Microsoft 365 audit binder — reviewed by leadership and
              accepted by insurers, auditors, and major clients as proof of security and compliance.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>3️⃣</div>
            <h5>Quarterly Evidence Refreshes</h5>
            <p>
              Every quarter we re-run your evidence collectors, update your binder, correct drift,
              and re-verify critical controls — keeping your proof accurate all year long.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>4️⃣</div>
            <h5>Leadership Advisory</h5>
            <p>
              Direct access for security questions, insurer or client questionnaires, renewal
              follow-ups, and decision support — without becoming a helpdesk or MSP.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}

