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
            <h3>Microsoft 365 for Law &amp; CPA Firms</h3>
            <p>Your firm runs on trust — between partners, clients, and insurers.</p>
            <p>Over time, access drifts, risks pile up, and confidence erodes.</p>
            <p>
              Secure resets your Microsoft 365 so it’s organized, protected, and
              defensible — restoring clarity to who has what, where, and why.
            </p>
            <p className={styles.price}>
              <strong>$1,495 flat fee.</strong>
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
                No more “who can see what” confusion. You’ll know — and be able to show — exactly how access is governed.
              </li>
              <li>
                <strong>Preserve your reputation.</strong>
                <br />
                Stay compliant with insurer expectations, renewals, and client due diligence.
              </li>
              <li>
                <strong>Operate with confidence.</strong>
                <br />
                A stable, governed Microsoft 365 means less noise, fewer surprises, and more trust in every exchange.
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
