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
        <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:'.75rem', flexWrap:'wrap' }}>
          <h2 className="title-xl" style={{ marginBottom: '.25rem' }}>🛠 Security Retrofit</h2>
          <span style={{ border:'1px solid rgba(255,255,255,.25)', borderRadius:'.6rem', padding:'.25rem .55rem', fontWeight:700, whiteSpace:'nowrap' }}>$1,995</span>
        </div>

        <p><strong>Why it matters:</strong> When too many people have access—or no one knows exactly who controls what—it’s not just an IT issue, it’s a liability. 
        The Security Retrofit closes those cracks and gives your firm a verifiable foundation where every login, permission, and control has an owner and a reason.</p>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
          <div>
            <p style={{ fontWeight:700, marginBottom:'.35rem' }}>What we deliver</p>
            <ul>
              <li>Only the right people can access systems, and leadership can prove it.</li>
              <li>Old accounts, open permissions, and forgotten access points are sealed.</li>
              <li>Built-in guardrails prevent internal misuse or accidental exposure.</li>
              <li>Clear, plain-English report showing measurable risk reduction and insurer-ready evidence.</li>
            </ul>
          </div>
          <div>
            <p style={{ fontWeight:700, marginBottom:'.35rem' }}>The business outcome</p>
            <ul>
              <li>Leadership knows who can get in, what they can do, and why.</li>
              <li>Operations stay secure without slowing work.</li>
              <li>Auditors and insurers see proof of responsible control.</li>
              <li>Your firm runs on trust—and can prove it.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Service: Email Security Retrofit ===== */}
      <div className="card">
        <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:'.75rem', flexWrap:'wrap' }}>
          <h2 className="title-xl" style={{ marginBottom: '.25rem' }}>📧 Email Security Retrofit</h2>
          <span style={{ border:'1px solid rgba(255,255,255,.25)', borderRadius:'.6rem', padding:'.25rem .55rem', fontWeight:700, whiteSpace:'nowrap' }}>$995</span>
        </div>

        <p><strong>Why it matters:</strong> Your business depends on email that works and can be trusted.
        When messages don’t arrive—or when someone pretends to be you—it costs money, reputation, and time.
        The Email Security Retrofit ensures your firm’s messages are verifiable, deliverable, and protected.</p>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
          <div>
            <p style={{ fontWeight:700, marginBottom:'.35rem' }}>What we deliver</p>
            <ul>
              <li>Authentic, trusted communication that reaches inboxes on the first send.</li>
              <li>Protection from impostors and fake invoices that target clients and staff.</li>
              <li>Encrypted, compliant message flow that meets insurer and privacy expectations.</li>
              <li>Continuous oversight to prevent drift or reputation loss.</li>
              <li>Plain-English summary showing exactly how your firm’s communication is now defensible.</li>
            </ul>
          </div>
          <div>
            <p style={{ fontWeight:700, marginBottom:'.35rem' }}>The business outcome</p>
            <ul>
              <li>Faster client responses and fewer disputes.</li>
              <li>No impersonation risk or spoofed email threats.</li>
              <li>Trusted correspondence your partners and carriers can verify.</li>
              <li>Written proof that your firm meets modern communication security standards.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Service: Backup & Recovery Retrofit ===== */}
      <div className="card">
        <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:'.75rem', flexWrap:'wrap' }}>
          <h2 className="title-xl" style={{ marginBottom: '.25rem' }}>🔁 Backup &amp; Recovery Retrofit</h2>
          <span style={{ border:'1px solid rgba(255,255,255,.25)', borderRadius:'.6rem', padding:'.25rem .55rem', fontWeight:700, whiteSpace:'nowrap' }}>$995</span>
        </div>

        <p><strong>Why it matters:</strong> Backups are only as good as the last time they were tested.
        The Backup & Recovery Retrofit turns assumptions into proof—demonstrating that your firm’s data can be recovered quickly, completely, and without guesswork.</p>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
          <div>
            <p style={{ fontWeight:700, marginBottom:'.35rem' }}>What we deliver</p>
            <ul>
              <li>Live restoration drill proving how fast your firm can recover.</li>
              <li>Verified coverage for files, email, and shared data.</li>
              <li>Ransomware-resistant recovery paths protected from tampering.</li>
              <li>Continuity report showing recovery times, retention, and business impact.</li>
              <li>Audit-ready documentation that satisfies insurers and regulators.</li>
            </ul>
          </div>
          <div>
            <p style={{ fontWeight:700, marginBottom:'.35rem' }}>The business outcome</p>
            <ul>
              <li>Leadership knows exactly how recovery works—and how long it takes.</li>
              <li>Clients and carriers trust your ability to survive a disruption.</li>
              <li>Deadlines and filings stay on track, even under pressure.</li>
              <li>Continuity becomes measurable—not theoretical.</li>
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
