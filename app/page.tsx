'use client';
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="section container">
      <div className="page home-grid">
        {/* LEFT column */}
        <div>
          <span className="eyebrow">Consulting • Microsoft 365</span>
          <h1 className="hero">Secure • Support • Prove</h1>
          <h2 className="hero">Microsoft 365 for Law &amp; CPA Firms</h2>

          <p className="lead" style={{ maxWidth: '68ch' }}>
            Professional firms run on trust. We secure your Microsoft 365, keep it clean, and deliver the proof that your data—and reputation—are protected.
          </p>

          <div style={{ display: 'flex', gap: '.75rem', margin: '.9rem 0 1.25rem', flexWrap: 'wrap' }}>
            <a
              className="btn primary"
              href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔒 Book a 30-Minute Consultation
            </a>
            <Link className="btn" href="/about">
              💡 Why Firms Choose JGS
            </Link>
          </div>

          {/* PROOF GRID */}
          <div className="proofgrid">
            <Link href="/secure"  className="card-link hover-card">
              🛡️ <strong>SECURE</strong> — Flat-fee Microsoft 365 hardening that restores trust, compliance, and peace of mind.
            </Link>
            <Link href="/support" className="card-link hover-card">
              🤝 <strong>SUPPORT</strong> — Your Microsoft 365 helpdesk and advisor — steady support, fast fixes, full accountability.
            </Link>
            <Link href="/prove"   className="card-link hover-card">
              📊 <strong>PROVE</strong> — Deliver audit-ready Microsoft 365 proof your clients, auditors, and insurers believe.
            </Link>
            <Link href="/custom"  className="card-link hover-card">
              ⚙️ <strong>CUSTOM</strong> — Design Microsoft 365 around your firm — efficient, compliant, and uniquely yours.
            </Link>
          </div>

          {/* CTA band */}
          <div className="cta-band" style={{ marginTop: '1.75rem' }}>
            <p className="lead" style={{ margin: 0, textAlign: 'center' }}>
              JGS Cloud Compliance gives professional firms visible control, reliable support, and undeniable proof their Microsoft 365 is governed right.
            </p>
          </div>
        </div>

        {/* RIGHT column — founder */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Link href="/contact" className="founder" style={{ textAlign: 'center', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/founder.jpg" alt="Founder headshot" className="founder-img" width={720} height={720} />
            <div className="founder-meta">
              <div className="founder-name">Jeremiah Spears</div>
              <div className="founder-title">Founder &amp; Principal Consultant</div>
            </div>
            <p style={{ fontSize: '.95rem', opacity: 0.9, marginTop: '.25rem', maxWidth: '60ch', color: 'inherit' }}>
              “I’ve seen too many firms run on bare-bones Microsoft 365, told they’re secure when they’re not.
              I built JGS to fix that — to deliver security you can prove, not just assume.”
            </p>
          </Link>

          <div className="founder-actions" style={{ justifyContent: 'center', marginTop: '.5rem' }}>
            <a className="btn sm" href="https://www.linkedin.com/in/jspears80/" target="_blank" rel="noopener noreferrer">
              🔗 LinkedIn
            </a>
            <Link className="btn sm" href="/contact">
              ✉️ Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
