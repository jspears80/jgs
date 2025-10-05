'use client';
import React from 'react';

export default function ServicesPage() {
  return (
    <section className="section container">
      {/* ===== Page Header (context, not a pitch) ===== */}
      <div className="card full">
        <span className="eyebrow">Secure = Projects</span>
        <h1 className="hero">Secure — Microsoft 365 Projects</h1>
        <p className="lead" style={{ maxWidth: '70ch' }}>
          Microsoft 365 is where your firm’s entire operation lives — client files, correspondence, deadlines, and trust.
          Over time, access drifts, policies weaken, and proof disappears. The Secure phase fixes that.
          These flat-fee projects close the quiet gaps that cause breaches and rebuild your environment so it’s not just working — it’s defensible.
        </p>
      </div>

      {/* ===== Service: Security Retrofit ===== */}
      <div className="card">
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: '.75rem',
            flexWrap: 'wrap',
          }}
        >
          <h2 className="title-xl" style={{ marginBottom: '.25rem' }}>
            🛠 Security Retrofit
          </h2>
          <span
            style={{
              border: '1px solid rgba(255,255,255,.25)',
              borderRadius: '.6rem',
              padding: '.25rem .55rem',
              fontWeight: 700,
              whiteSpace: 'nowrap',
            }}
          >
            $1,995
          </span>
        </div>

        <p>
          <strong>Why it matters:</strong> Microsoft 365 holds everything your firm depends on — client data,
          correspondence, financials, and internal records. Most breaches don’t come from hackers kicking down the door;
          they come from open access, forgotten settings, and missing visibility. The Security Retrofit rebuilds
          Microsoft 365 to close those quiet entry points and replace uncertainty with proof.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <p style={{ fontWeight: 700, marginBottom: '.35rem' }}>What we deliver</p>
            <ul>
              <li><strong>Access under control</strong> — every account and admin role reviewed, right-sized, and verified against business need.</li>
              <li><strong>Configuration hardened</strong> — sharing, device, and sync policies rebuilt to stop silent data exposure and lateral movement.</li>
              <li><strong>Identity protection</strong> — multifactor enforced, risky sign-ins blocked, and legacy authentication shut off.</li>
              <li><strong>Data safeguards</strong> — confidential work encrypted, retained correctly, and shielded from accidental sharing.</li>
              <li><strong>Detection and alerting</strong> — audit logs, anomaly alerts, and access reviews tuned so leadership sees issues before attackers do.</li>
              <li><strong>Evidence pack</strong> — a before-and-after summary showing measurable risk reduction and insurer-recognized proof of compliance.</li>
            </ul>
          </div>
          <div>
            <p style={{ fontWeight: 700, marginBottom: '.35rem' }}>The business outcome</p>
            <ul>
              <li>Internal compromise and unauthorized access attempts are stopped before they become incidents.</li>
              <li>Hidden misconfigurations, stale accounts, and blind spots are eliminated — and documented.</li>
              <li>Leadership gains clear visibility into who controls what — and written proof it’s defensible.</li>
              <li>Auditors and insurers receive concrete evidence that controls exist and are maintained.</li>
              <li>Clients see a professional firm that treats security as governance, not guesswork.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Service: Email Security Retrofit ===== */}
      <div className="card">
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: '.75rem',
            flexWrap: 'wrap',
          }}
        >
          <h2 className="title-xl" style={{ marginBottom: '.25rem' }}>
            📧 Email Security Retrofit
          </h2>
          <span
            style={{
              border: '1px solid rgba(255,255,255,.25)',
              borderRadius: '.6rem',
              padding: '.25rem .55rem',
              fontWeight: 700,
              whiteSpace: 'nowrap',
            }}
          >
            $995
          </span>
        </div>

        <p>
          <strong>Why it matters:</strong> Your firm’s reputation depends on messages that are genuine, private, and delivered.
          When an email is hijacked, spoofed, or quietly redirected, it isn’t a technical glitch — it’s a breach of trust.
          The Email Security Retrofit closes those invisible gaps so every message your firm sends is authentic, protected, and defensible.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <p style={{ fontWeight: 700, marginBottom: '.35rem' }}>What we deliver</p>
            <ul>
              <li>Authentic communication — every message verified as real and reaching inboxes the first time.</li>
              <li>Protection from impostors — attackers can’t mimic your domain, redirect mail, or fake internal users.</li>
              <li>Hidden rule cleanup — malicious forwarding and auto-redirects discovered and disabled.</li>
              <li>Encrypted transmission — mail traffic secured to insurer-approved standards.</li>
              <li>Continuous monitoring — inbox reputation and delivery trends tracked for drift or tampering.</li>
              <li>Evidence package — a plain-English report showing your email environment is secure, compliant, and verifiable.</li>
            </ul>
          </div>
          <div>
            <p style={{ fontWeight: 700, marginBottom: '.35rem' }}>The business outcome</p>
            <ul>
              <li>No more “fake invoice” or “wire-change” attacks — impostor messages are stopped before they reach staff or clients.</li>
              <li>Silent forwarding and exfiltration rules eliminated; nothing leaves the firm unnoticed.</li>
              <li>Partners and clients see communications that are consistently delivered, recognized, and trusted.</li>
              <li>Auditors and insurers receive clear evidence that email risks are contained and documented.</li>
              <li>Leadership can prove the firm’s inboxes are secure, compliant, and under continuous watch.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Service: Backup & Recovery Retrofit ===== */}
      <div className="card">
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: '.75rem',
            flexWrap: 'wrap',
          }}
        >
          <h2 className="title-xl" style={{ marginBottom: '.25rem' }}>
            🔁 Backup &amp; Recovery Retrofit
          </h2>
          <span
            style={{
              border: '1px solid rgba(255,255,255,.25)',
              borderRadius: '.6rem',
              padding: '.25rem .55rem',
              fontWeight: 700,
              whiteSpace: 'nowrap',
            }}
          >
            $995
          </span>
        </div>

        <p>
          <strong>Why it matters:</strong> Data loss isn’t just inconvenient — it can stop your business, violate retention
          obligations, and trigger insurance disputes. The Backup &amp; Recovery Retrofit proves your firm can recover quickly,
          completely, and with evidence. It replaces assumptions with documentation and shows insurers, auditors, and clients that
          continuity is under control.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <p style={{ fontWeight: 700, marginBottom: '.35rem' }}>What we deliver</p>
            <ul>
              <li>Live restoration exercise — a supervised drill proving data can be recovered on demand.</li>
              <li>Coverage verification — every file, mailbox, and record checked for backup consistency.</li>
              <li>Ransomware resilience — backup integrity tested against tampering or deletion attempts.</li>
              <li>Retention &amp; compliance audit — regulatory and insurer retention requirements confirmed.</li>
              <li>Continuity report — recovery timelines, loss windows, and success metrics in plain English.</li>
              <li>Evidence package — screenshots, timing logs, and executive summary ready for audit or claim.</li>
            </ul>
          </div>
          <div>
            <p style={{ fontWeight: 700, marginBottom: '.35rem' }}>The business outcome</p>
            <ul>
              <li>Ransomware or accidental deletions can’t paralyze your firm — recovery is proven, not promised.</li>
              <li>Leadership knows exactly how long restoration takes and what data could be lost.</li>
              <li>Insurance renewals move faster with documented proof of tested continuity controls.</li>
              <li>Auditors and regulators see clear evidence of compliance with retention and recovery standards.</li>
              <li>Clients trust that critical records are safeguarded and retrievable — even under pressure.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== CTA (Threat → Proof) ===== */}
      <div className="card full cta-band">
        <h2 className="title-xl">Ready to Eliminate Risk?</h2>
        <p className="lead" style={{ marginBottom: '.9rem' }}>
          Most firms discover their weakest point only after an incident.
          In a 30-minute consultation, we’ll pinpoint the blind spots inside Microsoft 365 that could cost your firm
          clients, coverage, or credibility — and outline a direct path to close them.
          You’ll leave with clarity, evidence, and a plan that leadership, insurers, and auditors will all recognize as proof of control.
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
