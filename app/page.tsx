'use client';
import React from 'react';

export default function HomePage() {
  return (
    <section className="section container">
      <div className="page home-grid">
        {/* ===== LEFT COLUMN — HERO / SUMMARY ===== */}
        <div>
          <span className="eyebrow">Consulting • Microsoft 365</span>
          <h1 className="hero">Secure • Support • Prove </h1>
          <h2>Microsoft 365 for Law &amp; CPA Firms</h2>

          <p className="lead" style={{ maxWidth: '68ch' }}>
            Professional firms run on trust. We secure your Microsoft 365, keep it clean, and deliver the proof that your data—and reputation—are protected.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '.75rem',
              margin: '.9rem 0 1.25rem',
              flexWrap: 'wrap',
            }}
          >
            <a
              className="btn primary"
              href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled"
              target="_blank"
              rel="noopener"
            >
              🔒 Book a 30-Minute Consultation
            </a>
            <a className="btn" href="/services">
              📘 View Services
            </a>
          </div>

          {/* ===== PROOF GRID (Four-Card) ===== */}
          <div className="proofgrid">
            <div>
             <strong>🛡️Secure</strong> — Flat-fee Microsoft 365 hardening that restores trust, compliance, and peace of mind.
            </div>
            <div>
             <strong>🤝Support</strong> — Your Microsoft 365 helpdesk and advisor — steady support, fast fixes, full accountability.
            </div>
            <div>
             <strong>📊Prove</strong> — Deliver audit-ready Microsoft 365 proof your clients, auditors, and insurers believe.
            </div>
            <div>
             <strong>⚙️Custom</strong> — Extend Microsoft 365 beyond security — streamline operations with built-in governance and ease.
            </div>
          </div>

          {/* ===== CTA BAND ===== */}
          <div className="cta-band" style={{ marginTop: '1.75rem' }}>
            <p className="lead" style={{ margin: 0, textAlign: 'center' }}>
JGS Cloud Compliance gives Law & CPA Firms visible control, reliable support, and undeniable proof their Microsoft 365 is governed right.
            </p>
          </div>
        </div>

        {/* ===== RIGHT COLUMN — FOUNDER CARD ===== */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="founder" style={{ textAlign: 'center', alignItems: 'center' }}>
            <img
              src="/founder.jpg"
              alt="Founder headshot"
              className="founder-img"
              width={720}
              height={720}
            />
            <div className="founder-meta">
              <div className="founder-name">Jeremiah Spears</div>
              <div className="founder-title">Founder &amp; Principal Consultant</div>
            </div>

            <p style={{ fontSize: '.95rem', opacity: 0.9, marginTop: '.25rem', maxWidth: '60ch' }}>
              “I’ve seen too many firms run on bare-bones Microsoft 365, told they’re secure when they’re not.
              I built JGS to fix that — to deliver security you can prove, not just assume.”
            </p>

            <div className="founder-actions" style={{ justifyContent: 'center', marginTop: '.5rem' }}>
              <a
                className="btn sm"
                href="https://www.linkedin.com/in/jspears80/"
                target="_blank"
                rel="noopener"
              >
                🔗 LinkedIn
              </a>
              <a className="btn sm" href="/contact">
                ✉️ Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}










