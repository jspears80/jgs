// app/prove/page.tsx
import React from "react";

export const metadata = {
  title:
    "Prove — Audit-Ready Microsoft 365 Evidence | JGS Cloud Compliance",
  description:
    "Clear, verified Microsoft 365 evidence for insurance renewals, client reviews, and audits — organized and ready to share without the scramble.",
};

export default function ProvePage() {
  return (
    <section className="section container">
      <div className="page service-grid">
        {/* ===== HERO SECTION ===== */}
        <div className="hero-block">
          <h1 className="hero">📊 Prove — Audit-Ready Microsoft 365 Evidence</h1>
          <h2 className="subhero">
            When insurers or clients ask for proof, you shouldn’t have to scramble.
          </h2>

          <p className="lead">Microsoft 365 for Law &amp; CPA Firms</p>

          <p className="body-text">
            Every year, firms face renewal forms, questionnaires, and client
            due-diligence requests that all ask the same thing:{" "}
            <em>Show us proof your Microsoft 365 is secure.</em>{" "}
            <strong>Prove</strong> delivers that documentation — clear,
            verified, and formatted for auditors and insurers. No stress, no
            tech talk — just organized evidence you can send immediately.
          </p>

          <p className="price">
            <strong>$495 one-time.</strong>
            <br />
            Fast turnaround. Ready to share.
          </p>
        </div>

        <hr className="divider" />

        {/* ===== BUSINESS VALUE ===== */}
        <section className="business-value">
          <h2>The Business Value</h2>

          <ul className="value-list">
            <li>
              <strong>Get through renewals and reviews quickly.</strong>
              <br />
              Provide professional, third-party evidence of your Microsoft 365
              controls — exactly what auditors and underwriters need.
            </li>
            <li>
              <strong>Reduce the compliance scramble.</strong>
              <br />
              Stop chasing screenshots and explanations. Your documentation is
              built, organized, and ready to hand off.
            </li>
            <li>
              <strong>Strengthen client and insurer confidence.</strong>
              <br />
              Transparent proof shows your firm takes data protection seriously —
              without adding another project.
            </li>
            <li>
              <strong>Save internal time and effort.</strong>
              <br />
              We handle the evidence gathering, formatting, and packaging so your
              staff stays focused on client work.
            </li>
          </ul>
        </section>

        <hr className="divider" />

        {/* ===== WHAT YOU GET ===== */}
        <section className="deliverables">
          <h2>What You Get</h2>

          <div className="deliverable">
            <h3>1️⃣ Microsoft 365 Evidence Report</h3>
            <p>
              A plain-English summary of your environment and controls, written
              for non-technical reviewers.
            </p>
          </div>

          <div className="deliverable">
            <h3>2️⃣ Audit Data Package</h3>
            <p>
              Exports and snapshots of key Microsoft 365 settings — access,
              permissions, and protection — formatted for insurance and compliance
              documentation.
            </p>
          </div>

          <div className="deliverable">
            <h3>3️⃣ Validation Artifacts</h3>
            <p>
              Timestamped screenshots and configuration exports that verify the
              evidence in your report.
            </p>
          </div>

          <div className="deliverable">
            <h3>4️⃣ Share-Ready Delivery</h3>
            <p>
              Delivered as a clean, labeled zip or PDF bundle — easy to email,
              upload, or store for next year’s renewal.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* ===== WHO IT’S FOR ===== */}
        <section className="business-value">
          <h2>Who It’s For</h2>

          <ul className="value-list">
            <li>
              Firms preparing for <strong>cyber-insurance renewals</strong> or
              policy underwriting.
            </li>
            <li>
              Firms answering <strong>client due-diligence or vendor-security
              questionnaires.</strong>
            </li>
            <li>
              <strong>Practice administrators</strong> responsible for gathering
              compliance documentation.
            </li>
            <li>
              <strong>Auditors, brokers, and consultants</strong> who need
              verifiable Microsoft 365 evidence for their clients.
            </li>
          </ul>
        </section>

        <hr className="divider" />

        {/* ===== HOW IT WORKS ===== */}
        <section className="deliverables">
          <h2>How It Works</h2>

          <div className="deliverable">
            <h3>Step 1 — Access &amp; Scope</h3>
            <p>
              Grant lightweight, read-only access and confirm what evidence you
              need produced.
            </p>
          </div>

          <div className="deliverable">
            <h3>Step 2 — Evidence Collection</h3>
            <p>
              We extract configuration data and screenshots directly from
              Microsoft 365 — verified and timestamped.
            </p>
          </div>

          <div className="deliverable">
            <h3>Step 3 — Delivery</h3>
            <p>
              You receive a ready-to-share package and a short walkthrough of how
              to present it to your insurer, client, or auditor.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* ===== CTA ===== */}
        <section className="service-cta">
          <p>
            Make renewals easy and reviews effortless.
            <br />
            <strong>Request your PROVE package</strong> or email{" "}
            <a
              href="mailto:support@cloudjgs.com"
              style={{ color: "#9b8df2", textDecoration: "none" }}
            >
              support@cloudjgs.com
            </a>{" "}
            to get your audit-ready Microsoft 365 evidence delivered this week.
          </p>
        </section>
      </div>
    </section>
  );
}
