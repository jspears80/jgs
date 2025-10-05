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
          Flat-fee projects that remove specific risks inside Microsoft 365 and replace uncertainty with proof.
          Each engagement protects client data, restores trust in communication, and demonstrates continuity that insurers and auditors can verify.
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
    <strong>Why it matters:</strong> Microsoft 365 holds everything your firm relies on —
    client data, correspondence, and internal records. Most firms assume it’s safe because
    it works. The Security Retrofit rebuilds that foundation so leadership can say,
    “We know who has access, what’s protected, and how we can prove it.”
  </p>

  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
    <div>
      <p style={{ fontWeight: 700, marginBottom: '.35rem' }}>What we deliver</p>
      <ul>
        <li>Access under control — every account and privilege verified and right-sized.</li>
        <li>Configuration hardened — sharing, device, and sync settings aligned to policy.</li>
        <li>Identity protected — multifactor enforced and external access gated.</li>
        <li>Data safeguarded — sensitive content labeled, encrypted, and retained properly.</li>
        <li>Visibility restored — audit logging, alerts, and leadership reports expanded.</li>
        <li>Evidence provided — before/after summary showing measurable risk reduction.</li>
      </ul>
    </div>
    <div>
      <p style={{ fontWeight: 700, marginBottom: '.35rem' }}>The business outcome</p>
      <ul>
        <li>Your Microsoft 365 environment moves from “assumed safe” to demonstrably secure.</li>
        <li>Staff keep working normally while security strengthens behind the scenes.</li>
        <li>Auditors, clients, and insurers see proof of responsible control.</li>
        <li>Leadership gains confidence built on evidence, not reassurance.</li>
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
    <strong>Why it matters:</strong> Your firm’s reputation depends on messages that are genuine,
    private, and delivered. When an email is hijacked, spoofed, or quietly redirected, it’s not a
    technical failure — it’s a breach of trust. The Email Security Retrofit closes those invisible
    gaps so every message your firm sends is authentic, protected, and defensible.
  </p>

  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
    <div>
      <p style={{ fontWeight: 700, marginBottom: '.35rem' }}>What we deliver</p>
      <ul>
        <li>Authentic communication — every message verified as real and reaching inboxes the first time.</li>
        <li>Protection from impostors — attackers can’t mimic your domain, redirect mail, or fake internal users.</li>
        <li>Hidden rule cleanup — malicious forwarding and auto-redirects discovered and disabled.</li>
        <li>Encrypted transmission — all mail traffic secured to insurer-approved standards.</li>
        <li>Continuous monitoring — inbox reputation and delivery trends tracked for drift or tampering.</li>
        <li>Evidence package — plain-English report showing your firm’s email environment is secure, compliant, and verifiable.</li>
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
    <strong>Why it matters:</strong> Data loss isn’t just inconvenient — it can stop your business,
    violate retention obligations, and trigger insurance disputes. The Backup &amp; Recovery Retrofit
    proves your firm can recover quickly, completely, and with evidence. It replaces assumptions with
    documentation and shows insurers, auditors, and clients that continuity is under control.
  </p>

  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
    <div>
      <p style={{ fontWeight: 700, marginBottom: '.35rem' }}>What we deliver</p>
      <ul>
        <li>Live restoration exercise — a supervised drill proving data can be recovered on demand.</li>
        <li>Coverage verification — every file, mailbox, and record checked for backup consistency.</li>
        <li>Ransomware resilience — backup integrity tested against tampering or deletion attempts.</li>
        <li>Retention &amp; compliance audit — confirm regulatory and insurer retention requirements are met.</li>
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
        <li>Clients trust that critical records are safeguarded and retrievable even under pressure.</li>
      </ul>
    </div>
  </div>
</div>



      {/* ===== CTA (Premium Band) ===== */}
      <div className="card full cta-band">
        <h2 className="title-xl">Ready to Eliminate Risk?</h2>
        <p className="lead" style={{ marginBottom: '.9rem' }}>
          Start with a 30-minute consultation to identify where Microsoft 365 gaps may expose your firm and
          receive a clear plan to close them—with results your leadership, clients, and insurers can all verify.
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
