'use client';
import React from 'react';

export default function ServicesPage() {
  return (
    <section className="section container">
      {/* ===== Header ===== */}
      <div className="card full">
        <span className="eyebrow">Secure = Projects</span>
        <h1 className="hero">Secure — Microsoft 365 Projects</h1>
        <p className="lead" style={{ maxWidth: '70ch' }}>
          Flat-fee projects that remove specific risks inside Microsoft 365 and produce results you can prove —
          protect client data, deliver trusted communication, and preserve continuity with audit-ready evidence.
        </p>
      </div>

      {/* ===== Services (current canon) ===== */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'1rem' }}>
        {/* --- Security Retrofit --- */}
        <div className="card">
          <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:'.75rem', flexWrap:'wrap' }}>
            <h2 className="title-xl" style={{ marginBottom: '.25rem' }}>🛠 Security Retrofit</h2>
            <span style={{ border:'1px solid rgba(255,255,255,.25)', borderRadius:'.6rem', padding:'.25rem .55rem', fontWeight:700, whiteSpace:'nowrap' }}>$1,995</span>
          </div>

          <p><strong>Purpose:</strong> Protect client data and re-establish defensible control over who can access systems and why.</p>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
            <div>
              <p style={{ fontWeight:700, marginBottom:'.35rem' }}>What We Do</p>
              <ul>
                <li>Remove dormant/guest accounts; right-size privileged roles.</li>
                <li>Enforce MFA and Conditional Access; disable legacy auth.</li>
                <li>Apply Microsoft 365 security baselines aligned to insurer expectations.</li>
              </ul>
            </div>
            <div>
              <p style={{ fontWeight:700, marginBottom:'.35rem' }}>Business Outcome</p>
              <ul>
                <li>Leadership can name exactly who holds access and why — with proof.</li>
                <li>Insider risk and credential abuse drop; operations keep moving.</li>
                <li>Insurers view the firm as controlled, responsible, and insurable.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Email Security Retrofit --- */}
        <div className="card">
          <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:'.75rem', flexWrap:'wrap' }}>
            <h2 className="title-xl" style={{ marginBottom: '.25rem' }}>📧 Email Security Retrofit</h2>
            <span style={{ border:'1px solid rgba(255,255,255,.25)', borderRadius:'.6rem', padding:'.25rem .55rem', fontWeight:700, whiteSpace:'nowrap' }}>$995</span>
          </div>

          <p><strong>Purpose:</strong> Deliver trust with every message — verified, protected, and accepted the first time.</p>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
            <div>
              <p style={{ fontWeight:700, marginBottom:'.35rem' }}>What We Do</p>
              <ul>
                <li>Configure and validate SPF, DKIM, and DMARC to global trust standards.</li>
                <li>Harden Exchange Online policies and test real-world deliverability.</li>
                <li>Document sender integrity in plain English for leadership and insurers.</li>
              </ul>
            </div>
            <div>
              <p style={{ fontWeight:700, marginBottom:'.35rem' }}>Business Outcome</p>
              <ul>
                <li>Invoices, filings, and engagement letters arrive without dispute.</li>
                <li>Impostors fail; clients, courts, and counterparties trust your domain.</li>
                <li>“We never got it” loops disappear; billing friction drops.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Backup & Recovery Retrofit --- */}
        <div className="card">
          <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:'.75rem', flexWrap:'wrap' }}>
            <h2 className="title-xl" style={{ marginBottom: '.25rem' }}>🔁 Backup &amp; Recovery Retrofit</h2>
            <span style={{ border:'1px solid rgba(255,255,255,.25)', borderRadius:'.6rem', padding:'.25rem .55rem', fontWeight:700, whiteSpace:'nowrap' }}>$995</span>
          </div>

          <p><strong>Purpose:</strong> Preserve every file, rehearse recovery, and keep the firm in business no matter what happens.</p>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
            <div>
              <p style={{ fontWeight:700, marginBottom:'.35rem' }}>What We Do</p>
              <ul>
                <li>Run a timed live-restore across SharePoint, OneDrive, and Exchange.</li>
                <li>Verify retention coverage and destructive-action alerts.</li>
                <li>Document RPO/RTO clearly for leadership and insurers.</li>
              </ul>
            </div>
            <div>
              <p style={{ fontWeight:700, marginBottom:'.35rem' }}>Business Outcome</p>
              <ul>
                <li>Continuity proven with real evidence — not assumptions.</li>
                <li>Clear expectations for outage or ransomware scenarios.</li>
                <li>Confidence that operations can resume on a clock.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Process Summary ===== */}
      <div className="card">
        <h2 className="title-xl">How Projects Deliver Value</h2>
        <ol>
          <li><strong>Discovery</strong> — Identify exposures affecting operations and insurer compliance.</li>
          <li><strong>Implementation</strong> — Correct configuration risk without disrupting work.</li>
          <li><strong>Verification</strong> — Demonstrate results directly to leadership.</li>
          <li><strong>Documentation</strong> — Provide audit-ready proof in plain English.</li>
        </ol>
        <p>
          Every project ends with measurable outcomes — reduced exposure, improved insurer alignment, and evidence your firm can keep on file.
        </p>
      </div>

      {/* ===== CTA (Premium Band) ===== */}
      <div className="card full cta-band">
        <h2 className="title-xl">Ready to Eliminate Risk?</h2>
        <p className="lead" style={{ marginBottom: '.9rem' }}>
          Start with a 30-minute consultation to pinpoint where Microsoft 365 gaps may expose your firm and outline the fastest path to closure.
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
