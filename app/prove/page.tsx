// app/prove/page.tsx
import React from "react";
import styles from "./prove.module.css";

export const metadata = {
  title: "Prove — Audit-Ready Microsoft 365 Evidence | JGS Cloud Compliance",
  description:
    "When insurers or clients ask for proof, you shouldn’t have to scramble. Clear, verified, share-ready Microsoft 365 evidence.",
};

export default function ProvePage() {
  return (
    <section className={styles.wrap}>
      <section className={`${styles.card} ${styles.accent}`}>
        <h2>📊 Prove — Audit-Ready Microsoft 365 Evidence</h2>
        <p className={styles.tag}>
          When insurers or clients ask for proof, you shouldn’t have to scramble.
        </p>

        <div className={styles.twoCol}>
          <div>
            <h3>Microsoft 365 for Law &amp; CPA Firms</h3>
<p>Every year, firms face renewal forms, security questionnaires, and client due-diligence requests that all demand the same thing: </p>

<p>“Show us proof your Microsoft 365 is secure.”</p>

<p>Most tenants can’t — because screenshots and assumptions don’t count.</p>

<p>PROVE™ delivers modern, evidence-driven documentation built directly from your Microsoft 365 tenant: real data, verified controls, and an audit-ready binder written for insurers and auditors.</p>
<p>
No stress. No guesswork.
<br />
Just organized, defensible evidence your firm can hand off immediately.
</p>
            <p className={styles.price}>
              <strong>$3,000 — one-time.</strong>
              <br />
              Fast turnaround. Audit-grade. Insurer-ready.
            </p>
          </div>

          <aside className={styles.side}>
            <h4>The Business Value</h4>
            <ul>
              <li>
                <strong>Get through renewals and reviews quickly.</strong>
                <br />
                Provide professional, third-party evidence of your Microsoft 365 controls — exactly
                what auditors and underwriters need.
              </li>
              <li>
                <strong>Reduce the compliance scramble.</strong>
                <br />
                Stop chasing screenshots and explanations. Your documentation is built, organized,
                and ready to hand off.
              </li>
              <li>
                <strong>Strengthen client and insurer confidence.</strong>
                <br />
                Transparent proof shows your firm takes data protection seriously — without adding
                another project.
              </li>
              <li>
                <strong>Save internal time and effort.</strong>
                <br />
                We handle the evidence gathering, formatting, and packaging so your staff stays
                focused on client work.
              </li>
            </ul>
          </aside>
        </div>

        <div className={styles.divider} />

        <h4>What You Get</h4>
        <div className={styles.steps}>
          <article className={styles.step}>
            <div className={styles.badge}>1️⃣</div>
            <h5>Microsoft 365 Evidence Report</h5>
            <p>
              A plain-English summary of your environment and controls, written for non-technical
              reviewers.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>2️⃣</div>
            <h5>Audit Data Package</h5>
            <p>
              Exports and snapshots of key Microsoft 365 settings — access, permissions, and
              protection — formatted for insurance and compliance documentation.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>3️⃣</div>
            <h5>Validation Artifacts</h5>
            <p>
              Timestamped screenshots and configuration exports that verify the evidence in your
              report.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>4️⃣</div>
            <h5>Share-Ready Delivery</h5>
            <p>
              Delivered as a clean, labeled zip or PDF bundle — easy to email, upload, or store for
              next year’s renewal.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}
