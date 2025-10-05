'use client';
import React from 'react';

export default function ServicesPage() {
  return (
    <section className="section container">
      {/* ===== Page Header ===== */}
      <div className="card full">
        <span className="eyebrow">Secure = Projects</span>
        <h1 className="hero">Secure — Microsoft 365 Projects</h1>
        <p className="lead">
          One-time, flat-fee projects that close security gaps, restore confidence, and make your Microsoft 365
          environment defensible and verifiable.
        </p>
      </div>

      {/* ===== Service: Security Hardening ===== */}
      <div className="card">
        <h2 className="title-xl">🛠 Microsoft 365 Security Hardening — $1,995</h2>
        <p><strong>Objective:</strong> Close internal access gaps, remove stale accounts, and enforce least-privilege control across your Microsoft 365 tenant.</p>
        <ul>
          <li>Orphaned and inactive accounts removed.</li>
          <li>Privileged roles reviewed and restricted.</li>
          <li>Conditional Access policies implemented and verified.</li>
          <li>Secure Score and audit logs documented pre-/post-change.</li>
        </ul>
        <p style={{ fontWeight: 700, marginTop: '.35rem' }}>
          <strong>Outcome:</strong> Only the right people can sign in; leadership can demonstrate control to partners, insurers, and regulators.
        </p>
      </div>

      {/* ===== Service: Email Authentication ===== */}
      <div className="card">
        <h2 className="title-xl">📧 Email Authentication &amp; Delivery — $995</h2>
        <p><strong>Objective:</strong> Configure and validate SPF, DKIM, and DMARC so every message your firm sends is trusted, authenticated, and delivered the first time.</p>
        <ul>
          <li>SPF records aligned and simplified.</li>
          <li>DKIM keys generated, rotated, and verified.</li>
          <li>DMARC policy enforced and reporting enabled.</li>
          <li>Mail-flow tested end-to-end for deliverability and spoof protection.</li>
        </ul>
        <p style={{ fontWeight: 700, marginTop: '.35rem' }}>
          <strong>Outcome:</strong> Clients, courts, and counterparties recognize authentic mail; impostors fail before reaching staff.
        </p>
      </div>

      {/* ===== Service: Backup & Recovery ===== */}
      <div className="card">
        <h2 className="title-xl">🔁 Backup &amp; Recovery Validation — $995</h2>
        <p><strong>Objective:</strong> Prove that your firm can recover data quickly and completely when disruption strikes, across SharePoint, OneDrive, and Exchange Online.</p>
        <ul>
          <li>Backup configuration review and coverage verification.</li>
          <li>Timed restore drill with recovery-point objective measurement.</li>
          <li>Retention policies mapped to insurer and regulatory requirements.</li>
          <li>Continuity report written in plain English for leadership files.</li>
        </ul>
        <p style={{ fontWeight: 700, marginTop: '.35rem' }}>
          <strong>Outcome:</strong> Case files and client records are recoverable and auditable; continuity evidence accepted by insurers.
        </p>
      </div>

      {/* ===== Process Summary ===== */}
      <div className="card">
        <h2 className="title-xl">How Projects Work</h2>
        <ol>
          <li><strong>Discovery (2 hrs)</strong> — Collect tenant data and define risk scope.</li>
          <li><strong>Implementation (1–2 weeks)</strong> — Apply corrections with rollback safety.</li>
          <li><strong>Verification Session</strong> — Demonstrate results to firm leadership.</li>
          <li><strong>Report Delivery</strong> — Plain-English summary suitable for insurers or auditors.</li>
        </ol>
        <p>Each engagement ends with tangible proof: configuration evidence, screenshots, and a summary written for partners — not technicians.</p>
      </div>

      {/* ===== CTA (Premium Band) ===== */}
      <div className="card full cta-band">
        <h2 className="title-xl">Ready to Secure Your Firm?</h2>
        <p className="lead" style={{ marginBottom: '.9rem' }}>
          Start with a 30-minute consultation to review your environment, insurer requirements, and immediate priorities.
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
