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

            <p>
              Every year, firms face renewal forms, security questionnaires, and client
              due-diligence requests that all demand the same thing:
            </p>

            <p><strong>“Show us proof your Microsoft 365 is secure.”</strong></p>

            <p>
              Most tenants can’t — because screenshots, assumptions, and MSP explanations don’t
              count. Auditors, insurers, and large clients expect **real, verifiable evidence**.
            </p>

            <p>
              PROVE™ delivers modern, evidence-driven documentation built directly from your
              Microsoft 365 tenant — real data, verified controls, and an audit-ready binder designed
              for insurers, auditors, and leadership review.
            </p>

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
                A polished, third-party evidence binder built from actual tenant data — exactly what
                underwriters and auditors expect.
              </li>

              <li>
                <strong>Reduce the compliance scramble.</strong>
                <br />
                No more hunting screenshots or explaining settings. PROVE delivers organized,
                ready-to-send documentation.
              </li>

              <li>
                <strong>Strengthen client and insurer confidence.</strong>
                <br />
                Clear, evidence-backed controls show your firm takes data protection seriously.
              </li>

              <li>
                <strong>Save internal time and effort.</strong>
                <br />
                We handle collection, analysis, and formatting so your team stays focused on client
                work.
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
              A plain-English summary of your identity, email, data, device, and collaboration
              posture — written for non-technical leadership, auditors, and insurers.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>2️⃣</div>
            <h5>Audit Data Package</h5>
            <p>
              Real evidence pulled directly from your tenant: authentication, Conditional Access,
              domain security, Purview retention &amp; DLP, device compliance, email authentication,
              collaboration settings, and more — formatted for audit and insurance documentation.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>3️⃣</div>
            <h5>Validation Artifacts</h5>
            <p>
              Timestamps, screenshots, and configuration exports verifying the findings in your
              report — proof, not assumptions.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>4️⃣</div>
            <h5>Share-Ready Delivery</h5>
            <p>
              Delivered as a clean, labeled PDF + ZIP bundle — easy to email to insurers,
              underwriters, auditors, or major clients, and ready to reuse next year.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}
