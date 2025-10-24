'use client';
import React from 'react';

export default function ServicesPage() {
  return (
    <section className="section container page-services">
      {/* ===== Header ===== */}
      <div className="card full">
        <span className="eyebrow">Secure = Projects</span>
        <h1 className="hero">Secure — Microsoft 365 Projects</h1>
        <p className="lead" style={{ maxWidth: '70ch' }}>
          Microsoft 365 is where your firm works—client files, correspondence, deadlines, and trust. Over time,
          access drifts, policies weaken, and proof goes missing. The Secure phase fixes that. These flat-fee
          projects close quiet gaps and rebuild your environment so it’s not just working—it's defensible.
        </p>

        {/* legend chips */}
        <div className="legend-row">
          <span className="legend">🛠 Security</span>
          <span className="legend">📧 Email</span>
          <span className="legend">🔁 Continuity</span>
          <span className="legend">📄 Verifiable documentation</span>
        </div>
      </div>

      {/* ===== Service: Security Retrofit ===== */}
      <div id="security-retrofit" className="card service-card">
        <div className="service-head">
          <h2 className="title-xl">🛠 Security Retrofit</h2>
          <span className="price-pill" aria-label="Price: $1,995">$1,995</span>
        </div>

        <p>
          <strong>Why it matters:</strong> Most incidents begin with basic weaknesses—excess access, legacy settings,
          and missing visibility. This retrofit closes those entry points and replaces uncertainty with control.
        </p>

        <div className="two-col">
          <div>
            <p className="subhead">What we deliver</p>
            <ul className="list-tight">
              <li><strong>Access under control</strong> — accounts and admin roles reviewed, right-sized, verified.</li>
              <li><strong>Configuration hardened</strong> — sharing, device, and sync policies rebuilt to stop exposure.</li>
              <li><strong>Identity protection</strong> — multifactor enforced, risky sign-ins blocked, legacy auth removed.</li>
              <li><strong>Data safeguards</strong> — confidential work protected and retained to standard.</li>
              <li><strong>Detection & alerting</strong> — logs and anomalies surfaced for leadership visibility.</li>
              <li><strong>Documentation</strong> — before/after summary with measurable risk reduction.</li>
            </ul>
          </div>
          <div>
            <p className="subhead">Business outcome</p>
            <ul className="list-tight">
              <li>Unauthorized access stopped before it becomes an incident.</li>
              <li>Misconfigurations eliminated—and recorded.</li>
              <li>Leadership knows who controls what, with proof it’s defensible.</li>
              <li>Insurers and auditors see clear evidence of controls and maintenance.</li>
              <li>Clients observe governance, not guesswork.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Service: Email Security Retrofit ===== */}
      <div id="email-security-retrofit" className="card service-card">
        <div className="service-head">
          <h2 className="title-xl">📧 Email Security Retrofit</h2>
          <span className="price-pill" aria-label="Price: $995">$995</span>
        </div>

        <p>
          <strong>Why it matters:</strong> Spoofing, silent forwarding, and delivery issues erode trust. This retrofit
          ensures every message is authentic, protected, and recognized the first time.
        </p>

        <div className="two-col">
          <div>
            <p className="subhead">What we deliver</p>
            <ul className="list-tight">
              <li>Authenticated mail and recognized identity.</li>
              <li>Impostor controls and rule hygiene (no hidden redirects or exfiltration).</li>
              <li>Encrypted transmission and insurer-aligned configuration.</li>
              <li>Delivery and reputation checks with documented results.</li>
              <li><strong>Documentation</strong> — plain-English report showing the channel is secure and verifiable.</li>
            </ul>
          </div>
          <div>
            <p className="subhead">Business outcome</p>
            <ul className="list-tight">
              <li>“Fake invoice” and “wire-change” attacks are blocked before staff or clients see them.</li>
              <li>No silent forwarding or unnoticed data egress.</li>
              <li>Consistent, trusted delivery to partners and clients.</li>
              <li>Clear evidence that email risk is contained and documented.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Service: Backup & Recovery Retrofit ===== */}
      <div id="backup-recovery-retrofit" className="card service-card">
        <div className="service-head">
          <h2 className="title-xl">🔁 Backup &amp; Recovery Retrofit</h2>
          <span className="price-pill" aria-label="Price: $995">$995</span>
        </div>

        <p>
          <strong>Why it matters:</strong> Backups matter only when recovery works. This retrofit proves your firm can
          restore quickly and completely—turning assumptions into documentation leadership can use.
        </p>

        <div className="two-col">
          <div>
            <p className="subhead">What we deliver</p>
            <ul className="list-tight">
              <li>Live restoration exercise with measured timings.</li>
              <li>Coverage verification across files, mailboxes, and records.</li>
              <li>Resilience checks against tampering and deletion attempts.</li>
              <li>Retention and compliance confirmation in writing.</li>
              <li><strong>Continuity report</strong> — timelines, loss windows, and success metrics.</li>
            </ul>
          </div>
          <div>
            <p className="subhead">Business outcome</p>
            <ul className="list-tight">
              <li>Ransomware or mistakes don’t paralyze operations—recovery is proven.</li>
              <li>Leadership knows restoration time and potential loss windows.</li>
              <li>Renewals move faster with evidence of tested continuity controls.</li>
              <li>Clear alignment with retention and recovery expectations.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="card full cta-band">
        <h2 className="title-xl">Ready to eliminate risk?</h2>
        <p className="lead" style={{ marginBottom: '.9rem' }}>
          In a 30-minute consultation we’ll pinpoint blind spots in Microsoft 365, set priorities, and outline a direct path
          to close them—backed by documentation leadership, insurers, and auditors will recognize as proof of control.
        </p>
        <a
          className="btn primary"
          href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled"
          target="_blank"
          rel="noopener"
          aria-label="Book a 30-minute consultation"
        >
          🔒 Book Consultation
        </a>
      </div>
    </section>
  );
}
