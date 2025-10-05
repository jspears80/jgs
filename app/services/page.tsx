'use client';
import React from 'react';

export default function ServicesPage() {
  return (
    <section className="section container">
      {/* ===== Header — context, not a pitch ===== */}
      <div className="card full">
        <span className="eyebrow">Secure = Projects</span>
        <h1 className="hero">Secure — Microsoft 365 Projects</h1>
        <p className="lead" style={{ maxWidth: '70ch' }}>
          Microsoft 365 is where your firm’s operation lives — client files, correspondence, deadlines, and trust.
          Over time, access drifts, policies weaken, and proof disappears. The Secure phase fixes that.
          These flat-fee projects close quiet gaps and rebuild your environment so it’s not just working — it’s defensible.
        </p>

        {/* legend chips */}
        <div className="legend-row">
          <span className="legend">🛠 Security</span>
          <span className="legend">📧 Email</span>
          <span className="legend">🔁 Continuity</span>
          <span className="legend">📄 Audit-ready proof</span>
        </div>
      </div>

      {/* ===== Service: Security Retrofit ===== */}
      <div className="card service-card">
        <div className="service-head">
          <h2 className="title-xl">🛠 Security Retrofit</h2>
          <span className="price-pill" aria-label="Price">$1,995</span>
        </div>

        <p>
          <strong>Why it matters:</strong> Most breaches don’t start with a genius attacker — they start with open access,
          forgotten settings, and missing visibility. The Security Retrofit closes those quiet entry points and replaces
          uncertainty with proof.
        </p>

        <div className="two-col">
          <div>
            <p className="subhead">What we deliver</p>
            <ul className="list-tight">
              <li><strong>Access under control</strong> — every account and admin role reviewed, right-sized, and verified.</li>
              <li><strong>Configuration hardened</strong> — sharing, device, and sync policies rebuilt to stop silent exposure.</li>
              <li><strong>Identity protection</strong> — multifactor enforced, risky sign-ins blocked, legacy auth shut off.</li>
              <li><strong>Data safeguards</strong> — confidential work encrypted, retained correctly, and isolated from casual sharing.</li>
              <li><strong>Detection & alerting</strong> — logs and anomaly alerts tuned so leadership sees issues before attackers do.</li>
              <li><strong>Evidence pack</strong> — before/after report with measurable risk reduction and insurer-recognized proof.</li>
            </ul>
          </div>
          <div>
            <p className="subhead">The business outcome</p>
            <ul className="list-tight">
              <li>Internal compromise and unauthorized access attempts are stopped before they become incidents.</li>
              <li>Hidden misconfigurations, stale accounts, and blind spots are eliminated — and documented.</li>
              <li>Leadership gains clear visibility into who controls what — with written proof it’s defensible.</li>
              <li>Auditors and insurers receive concrete evidence that controls exist and are maintained.</li>
              <li>Clients see a firm that treats security as governance, not guesswork.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Service: Email Security Retrofit ===== */}
      <div className="card service-card">
        <div className="service-head">
          <h2 className="title-xl">📧 Email Security Retrofit</h2>
          <span className="price-pill" aria-label="Price">$995</span>
        </div>

        <p>
          <strong>Why it matters:</strong> When email is hijacked, spoofed, or quietly redirected, it isn’t a technical glitch —
          it’s a breach of trust. This retrofit makes every message your firm sends authentic, protected, and defensible.
        </p>

        <div className="two-col">
          <div>
            <p className="subhead">What we deliver</p>
            <ul className="list-tight">
              <li>Authentic communication — messages verified as real and reaching inboxes the first time.</li>
              <li>Protection from impostors — no domain mimicry, mail redirects, or fake internal users.</li>
              <li>Hidden rule cleanup — malicious forwarding and auto-redirects discovered and disabled.</li>
              <li>Encrypted transmission — mail secured end-to-end to meet insurer standards.</li>
              <li>Continuous oversight — delivery and reputation monitored so issues can’t creep back.</li>
              <li>Evidence package — a plain-English report showing the channel is secure, compliant, and verifiable.</li>
            </ul>
          </div>
          <div>
            <p className="subhead">The business outcome</p>
            <ul className="list-tight">
              <li>No more “fake invoice” / “wire-change” attacks — impostors are stopped before staff or clients see them.</li>
              <li>Silent forwarding and exfiltration rules eliminated; nothing leaves unnoticed.</li>
              <li>Partners and clients experience messages that are consistently delivered, recognized, and trusted.</li>
              <li>Auditors and insurers receive clear evidence that email risks are contained and documented.</li>
              <li>Leadership can prove inboxes are secure, compliant, and under continuous watch.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Service: Backup & Recovery Retrofit ===== */}
      <div className="card service-card">
        <div className="service-head">
          <h2 className="title-xl">🔁 Backup &amp; Recovery Retrofit</h2>
          <span className="price-pill" aria-label="Price">$995</span>
        </div>

        <p>
          <strong>Why it matters:</strong> Backups are meaningless until they’re tested. This retrofit proves your firm can
          recover quickly, completely, and with evidence — turning assumptions into documentation insurers accept.
        </p>

        <div className="two-col">
          <div>
            <p className="subhead">What we deliver</p>
            <ul className="list-tight">
              <li>Live restoration exercise — a supervised drill proving recovery on demand.</li>
              <li>Coverage verification — every file, mailbox, and record checked for consistency.</li>
              <li>Ransomware resilience — backup integrity tested against tampering or deletion attempts.</li>
              <li>Retention & compliance audit — requirements confirmed in writing.</li>
              <li>Continuity report — recovery timelines, loss windows, and success metrics in plain English.</li>
              <li>Evidence package — screenshots, timing logs, and executive summary ready for audit or claim.</li>
            </ul>
          </div>
          <div>
            <p className="subhead">The business outcome</p>
            <ul className="list-tight">
              <li>Ransomware or accidental deletions can’t paralyze your firm — recovery is proven, not promised.</li>
              <li>Leadership knows exactly how long restoration takes and what data could be lost.</li>
              <li>Insurance renewals move faster with documented proof of tested continuity controls.</li>
              <li>Auditors and regulators see clear evidence of compliance with retention and recovery standards.</li>
              <li>Clients trust that critical records are safeguarded and retrievable — even under pressure.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== CTA — Threat → Proof ===== */}
      <div className="card full cta-band">
        <h2 className="title-xl">Ready to Eliminate Risk?</h2>
        <p className="lead" style={{ marginBottom: '.9rem' }}>
          Most firms discover their weakest point only after an incident. In a 30-minute consultation, we’ll pinpoint the
          blind spots inside Microsoft 365 that could cost your firm clients, coverage, or credibility — and outline a direct
          path to close them. You’ll leave with clarity, evidence, and a plan that leadership, insurers, and auditors will
          all recognize as proof of control.
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
