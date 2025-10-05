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
          Flat-fee projects that remove specific business risks inside Microsoft 365. 
          Each engagement produces visible results you can prove — safer access, trusted communication, 
          and documented continuity.
        </p>

        {/* quick legend / badges */}
        <div style={{ display:'flex', gap:'.5rem', flexWrap:'wrap', marginTop:'.25rem' }}>
          <span style={{ opacity:.9 }}>🛠 Security</span>
          <span style={{ opacity:.9 }}>📧 Email</span>
          <span style={{ opacity:.9 }}>🔁 Continuity</span>
          <span style={{ opacity:.9 }}>📄 Audit-ready proof</span>
        </div>
      </div>

      {/* ===== Services Grid ===== */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'1rem' }}>
        {/* --- Security Hardening --- */}
        <div className="card">
          <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:'.75rem', flexWrap:'wrap' }}>
            <h2 className="title-xl" style={{ marginBottom: '.25rem' }}>🛠 Microsoft 365 Security Hardening</h2>
            <span style={{ border:'1px solid rgba(255,255,255,.25)', borderRadius:'.6rem', padding:'.25rem .55rem', fontWeight:700, whiteSpace:'nowrap' }}>$1,995</span>
          </div>

          <p><strong>Purpose:</strong> Restore confidence in who can access systems and data.</p>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
            <div>
              <p style={{ fontWeight:700, marginBottom:'.35rem' }}>What We Do</p>
              <ul>
                <li>Remove dormant/guest accounts and right-size privileged roles.</li>
                <li>Enforce MFA and Conditional Access; disable legacy auth.</li>
                <li>Apply Microsoft 365 baselines aligned with insurer expectations.</li>
              </ul>
            </div>
            <div>
              <p style={{ fontWeight:700, marginBottom:'.35rem' }}>Business Outcome</p>
              <ul>
                <li>Leadership can name exactly who holds access and why.</li>
                <li>Insider risk and credential abuse drop sharply.</li>
                <li>Insurers view the firm as controlled and responsible.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Email Authentication & Delivery --- */}
        <div className="card">
          <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:'.75rem', flexWrap:'wrap' }}>
            <h2 className="title-xl" style={{ marginBottom: '.25rem' }}>📧 Email Authentication &amp; Delivery</h2>
            <span style={{ border:'1px solid rgba(255,255,255,.25)', borderRadius:'.6rem', padding:'.25rem .55rem', fontWeight:700, whiteSpace:'nowrap' }}>$995</span>
          </div>

          <p><strong>Purpose:</strong> Ensure every outbound message is authentic and accepted on the first send.</p>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
            <div>
              <p style={{ fontWeight:700, marginBottom:'.35rem' }}>What We Do</p>
              <ul>
                <li>Configure and validate SPF, DKIM, and DMARC to global trust standards.</li>
                <li>Harden Exchange Online policies; test true deliverability.</li>
                <li>Map sender integrity documentation in plain English.</li>
              </ul>
            </div>
            <div>
              <p style={{ fontWeight:700, marginBottom:'.35rem' }}>Business Outcome</p>
              <ul>
                <li>Invoices, filings, and engagement letters arrive without dispute.</li>
                <li>Clients and courts trust your domain; impostors fail.</li>
                <li>Fewer “we never got it” loops and billing delays.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Backup & Recovery Validation --- */}
        <div className="card">
          <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:'.75rem', flexWrap:'wrap' }}>
            <h2 className="title-xl" style={{ marginBottom: '.25rem' }}>🔁 Backup &amp; Recovery Validation</h2>
            <span style={{ border:'1px solid rgba(255,255,255,.25)', borderRadius:'.6rem', padding:'.25rem .55rem', fontWeight:700, whiteSpace:'nowrap' }}>$995</span>
          </div>

          <p><strong>Purpose:</strong> Turn “we think it’s backed up” into measured proof of recovery.</p>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
            <div>
              <p style={{ fontWeight:700, marginBottom:'.35rem' }}>What We Do</p>
              <ul>
                <li>Run a timed live restore across SharePoint, OneDrive, and Exchange.</li>
                <li>Verify retention coverage and destructive-action alerts.</li>
                <li>Document RPO/RTO clearly for leadership and insurers.</li>
              </ul>
            </div>
            <div>
              <p style={{ fontWeight:700, marginBottom:'.35rem' }}>Business Outcome</p>
              <ul>
                <li>Continuity you can demonstrate with real evidence.</li>
                <li>Clear expectations in an outage or ransomware claim.</li>
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
          <li><strong>Documentation</strong> — Deliver a plain-English summary suitable for insurers, auditors, and partners.</li>
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
