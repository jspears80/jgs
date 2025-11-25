// app/secure/page.tsx
import React from "react";
import styles from "./secure.module.css";

export const metadata = {
  title: "Secure — Microsoft 365 Hardening for CPA & Law Firms | JGS Cloud Compliance",
  description:
    "Secure is a one-time Microsoft 365 hardening engagement that locks down identity, email, data, and devices with modern, defensible controls.",
};

export default function SecurePage() {
  return (
    <section className={styles.wrap}>
      {/* ===== Secure Only ===== */}
      <section className={`${styles.card} ${styles.accent}`}>
        <h2>🛡️ Secure — Microsoft 365 Hardening</h2>
        <p className={styles.tag}>
          Because trust isn't something you assume — it's something you prove.
        </p>

        <div className={styles.twoCol}>
          <div>
            <h3>Microsoft 365 for CPA &amp; Law Firms</h3>

            <p>
              Your firm relies on Microsoft 365 for deadlines, filings, client communication,
              privileged records, and day-to-day continuity.
            </p>

            <p>
              But Microsoft 365 ships insecure by default — weak authentication, legacy protocols,
              open sharing, stale permissions, and years of silent configuration drift.
            </p>

            <p>
              <strong>Secure</strong> is our <strong>one-time hardening engagement</strong> that
              locks your environment down properly: modern authentication, Conditional Access,
              hardened mailflow, device compliance, and data governance — designed specifically for
              CPA and Law practices that cannot afford uncertainty.
            </p>

            <p className={styles.price}>
              <strong>$3,000 flat fee.</strong>
              <br />
              One engagement. A clean, compliant, defensible Microsoft 365 tenant.
            </p>
          </div>

          <aside className={styles.side}>
            <h4>The Business Value</h4>
            <ul>
              <li>
                <strong>Reassure your clients and insurers.</strong>
                <br />
                Demonstrate documented, third-party security controls that satisfy underwriters,
                regulators, and large clients.
              </li>

              <li>
                <strong>Reduce exposure and uncertainty.</strong>
                <br />
                Eliminate hidden admins, insecure sharing, legacy authentication, weak defaults,
                unmonitored access, and years of drift — risks that quietly accumulate in most
                tenants.
              </li>

              <li>
                <strong>Protect your reputation.</strong>
                <br />
                A hardened Microsoft 365 environment preserves confidentiality, prevents compromise,
                and aligns your firm with insurer and professional-standard expectations.
              </li>

              <li>
                <strong>Operate with confidence.</strong>
                <br />
                Stable, governed systems mean fewer surprises, fewer disruptions, and a
                predictable foundation your firm can rely on.
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
              We rebuild the core of your Microsoft 365 tenant — identity, authentication,
              Conditional Access, mailflow protection, device compliance, and data governance.
              Dangerously loose defaults are removed, drift is corrected, and a secure modern
              baseline is re-established.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>2️⃣</div>
            <h5>Proof You Can Hand Off</h5>
            <p>
              You receive clear, plain-English documentation detailing exactly what was secured,
              which protections are in place, and how access is governed. A professional, third-party
              hardening report you can present to insurers, auditors, or major clients.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>3️⃣</div>
            <h5>Renewed Confidence</h5>
            <p>
              Everything begins working the way it should. Your Microsoft 365 becomes clean,
              compliant, predictable, and aligned with professional and insurer expectations — ready
              for filings, deadlines, renewals, or anything that comes next.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}
