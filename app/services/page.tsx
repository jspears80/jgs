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
    private, and delivered. When an email is spoofed or lost to spam, it isn’t just technical noise —
    it’s a business problem. The Email Security Retrofit ensures every message you send is recognized,
    protected, and proven.
  </p>

  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
    <div>
      <p style={{ fontWeight: 700, marginBottom: '.35rem' }}>What we deliver</p>
      <ul>
        <li>Authentic communication — messages verified as real and reaching inboxes first time.</li>
        <li>Protection from impostors — attackers can’t fake your address or domain identity.</li>
        <li>Clean, reliable delivery — important mail stops landing in junk or disappearing.</li>
        <li>Secure transmission — email traffic encrypted end-to-end to meet insurer standards.</li>
        <li>Continuous oversight — delivery and reputation monitored so issues can’t return quietly.</li>
        <li>Evidence package — plain-English report showing measurable trust and compliance.</li>
      </ul>
    </div>
    <div>
      <p style={{ fontWeight: 700, marginBottom: '.35rem' }}>The business outcome</p>
      <ul>
        <li>Fewer client delays and no “we never got it” disputes.</li>
        <li>Zero impersonation or invoice-fraud risk.</li>
        <li>Partners and insurers see proof your communication channel is credible.</li>
        <li>Leadership holds written evidence that your firm meets modern security expectations.</li>
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
    <strong>Why it matters:</strong> Backups are meaningless until they’re tested. When data loss or
    ransomware strikes, firms without proof of recovery lose more than files — they lose time,
    trust, and compliance standing. The Backup &amp; Recovery Retrofit turns “we think it’s safe”
    into a timed, documented recovery you can prove.
  </p>

  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
    <div>
      <p style={{ fontWeight: 700, marginBottom: '.35rem' }}>What we deliver</p>
      <ul>
        <li>Live restoration drill showing how fast full recovery actually takes.</li>
        <li>Verified coverage across files, email, and shared data — no blind spots.</li>
        <li>Protection from tampering — ransomware-resilient recovery paths locked down.</li>
        <li>Continuity report — timing, retention, and data-loss metrics in plain English.</li>
        <li>Audit-ready documentation — screenshots, logs, and leadership summary for insurers.</li>
      </ul>
    </div>
    <div>
      <p style={{ fontWeight: 700, marginBottom: '.35rem' }}>The business outcome</p>
      <ul>
        <li>Leadership knows exactly how recovery works — and how long it takes.</li>
        <li>Clients and carriers see evidence your firm can survive disruption.</li>
        <li>Deadlines and filings stay on schedule even after an incident.</li>
        <li>Continuity becomes measurable — not a promise, but proof.</li>
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
