'use client';
import React from 'react';

export default function ServicesPage() {
  return (
    <section className="section container">
      {/* ===== Page Header ===== */}
      <div className="card full">
        <span className="eyebrow">Secure = Projects</span>
        <h1 className="hero">Secure — Microsoft 365 Projects</h1>
        <p className="lead" style={{ maxWidth: '70ch' }}>
          Each JGS project removes a specific point of business risk inside Microsoft 365.
          These flat-fee engagements are designed for results that leadership can see and prove —
          safer access, trusted communication, and documented continuity.
        </p>
      </div>

      {/* ===== Service: Security Hardening ===== */}
      <div className="card">
        <h2 className="title-xl">🛠 Microsoft 365 Security Hardening — $1,995</h2>
        <p>
          <strong>Purpose:</strong> Restore confidence in who can access firm systems and data.
          We close the silent vulnerabilities that accumulate over time — unused accounts, broad
          permissions, and unclear ownership.
        </p>
        <p>
          <strong>What We Do:</strong> Review and tighten account access, disable dormant identities,
          and implement Microsoft 365 security baselines that match insurer expectations.
        </p>
        <p style={{ fontWeight: 700 }}>
          <strong>Business Outcome:</strong> Leadership knows exactly who holds access and why.
          Insider risk and credential abuse are reduced, and insurers view the firm as controlled and responsible.
        </p>
      </div>

      {/* ===== Service: Email Authentication ===== */}
      <div className="card">
        <h2 className="title-xl">📧 Email Authentication &amp; Delivery — $995</h2>
        <p>
          <strong>Purpose:</strong> Protect revenue and reputation by ensuring every outgoing
          message is recognized as legitimate and delivered the first time.
        </p>
        <p>
          <strong>What We Do:</strong> Align your Microsoft 365 mail with global trust standards so
          clients, courts, and counterparties can verify authenticity. JGS configures and validates
          modern email-security controls and tests real-world deliverability.
        </p>
        <p style={{ fontWeight: 700 }}>
          <strong>Business Outcome:</strong> Invoices, filings, and engagement letters reach their
          destination without dispute. Clients and insurers trust your domain as a verified source of communication.
        </p>
      </div>

      {/* ===== Service: Backup & Recovery ===== */}
      <div className="card">
        <h2 className="title-xl">🔁 Backup &amp; Recovery Validation — $995</h2>
        <p>
          <strong>Purpose:</strong> Turn “we think it’s backed up” into documented proof of recovery.
          Data loss isn’t just a technology failure — it’s a business disruption.
        </p>
        <p>
          <strong>What We Do:</strong> JGS performs a live restore test across Microsoft 365 data
          sources, verifies retention coverage, and documents the exact recovery time and scope.
        </p>
        <p style={{ fontWeight: 700 }}>
          <strong>Business Outcome:</strong> Partners can demonstrate continuity with real evidence.
          In an outage or ransomware claim, the firm can show exactly how quickly operations would resume.
        </p>
      </div>

      {/* ===== Process Summary ===== */}
      <div className="card">
        <h2 className="title-xl">How Projects Deliver Value</h2>
        <ol>
          <li><strong>Discovery:</strong> Identify exposures that impact daily operations and insurer compliance.</li>
          <li><strong>Implementation:</strong> Apply targeted remediations that correct configuration risk without disrupting work.</li>
          <li><strong>Verification:</strong> Demonstrate results directly to firm leadership.</li>
          <li><strong>Documentation:</strong> Deliver a concise, plain-English summary suitable for insurers, auditors, and partners.</li>
        </ol>
        <p>
          Every project concludes with measurable outcomes — reduced exposure, improved insurer alignment,
          and evidence the firm can keep on file.
        </p>
      </div>

      {/* ===== CTA (Premium Band) ===== */}
      <div className="card full cta-band">
        <h2 className="title-xl">Ready to Eliminate Risk?</h2>
        <p className="lead" style={{ marginBottom: '.9rem' }}>
          Start with a 30-minute consultation to pinpoint where Microsoft 365 gaps may
          expose your firm and outline the simplest path to closure.
        </p>
        <a
          className="btn primary"
          href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled"
          target="_blank"
          rel="noopener"
        >
          🔒 Book Consultation
        </a>
      </div>
    </section>
  );
}
