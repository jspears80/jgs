'use client';
import React from 'react';

export default function HomePage() {
  return (
    <section className="section container">
      <div className="page home-grid">
        {/* ===== LEFT COLUMN — HERO / SUMMARY ===== */}
        <div>
          <span className="eyebrow">Consulting • Microsoft 365</span>
          <h1 className="hero">Secure • Support • Prove</h1>

          <p className="lead" style={{ maxWidth: '68ch' }}>
            Professional firms run on trust — between partners, clients, and insurers.
            JGS Cloud Compliance protects that trust by securing Microsoft 365, maintaining it day-to-day,
            and proving it’s governed to professional standards. Each service below is designed to make your firm’s
            digital operations clear, defensible, and dependable.
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

          {/* ===== SERVICE GRID (Four-Card) ===== */}
          <div className="proofgrid">
            {/* SECURE */}
            <div>
              🛡️ <strong>SECURE — $1,495 Flat-Fee Engagement</strong> — Bring control, clarity, and confidence back to your Microsoft 365.
              The Secure engagement hardens identity, access, and email so your environment is clean, closed, and compliant —
              stable, protected, and aligned with insurer expectations.
            </div>

            {/* SUPPORT */}
            <div>
              🤝 <strong>SUPPORT — $995 / Month Advisory + Helpdesk</strong> — The ongoing partnership that keeps your firm steady and supported.
              We handle user issues, policy changes, and compliance upkeep — respond fast, and document every action so you’re always audit-ready.
            </div>

            {/* PROVE */}
            <div>
              📊 <strong>PROVE — $495 Audit Data Package</strong> — Show proof, not promises.
              Exportable evidence straight from Microsoft 365 — no interpretation, just organized facts ready for insurers, clients, or auditors.
            </div>

            {/* CUSTOM */}
            <div>
              ⚙️ <strong>CUSTOM SOLUTIONS — from $495+</strong> — Turn Microsoft 365 into the system that fits your firm.
              Automate workflows, improve efficiency, and preserve governance at every step — security and productivity in one motion.
            </div>
          </div>

          {/* ===== CTA BAND ===== */}
          <div className="cta-band" style={{ marginTop: '1.75rem' }}>
            <p className="lead" style={{ margin: 0, textAlign: 'center' }}>
              Projects secure it. Retainers support it. That’s Secure → Support — the JGS model that gives professional
              firms proof, continuity, and senior expertise on demand.
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
