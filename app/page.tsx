'use client';
import React from 'react';

export default function HomePage() {
  return (
    <section className="section container">
      <div className="page home-grid">
        {/* ===== LEFT COLUMN — HERO / SUMMARY ===== */}
        <div>
          <span className="eyebrow">Consulting • Microsoft 365</span>
          <h1 className="hero">Secure and Support — Microsoft 365 for Law &amp; CPA Firms</h1>

          <p className="lead" style={{ maxWidth: '72ch' }}>
            JGS Cloud Compliance protects client data, delivers trusted communication, and preserves business
            continuity — all with audit-ready proof and senior expertise that keeps firms confident year-round.
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
              🛠 <strong>Security Retrofit</strong> — Protect client data, keep operations moving, and hold audit-ready proof of control.
            </div>
            <div>
              📧 <strong>Email Security Retrofit</strong> — Deliver trust with every message: verified, protected, and accepted the first time.
            </div>
            <div>
              🔁 <strong>Backup &amp; Recovery Retrofit</strong> — Preserve every file, rehearse recovery, and stay in business no matter what happens.
            </div>
            <div>
              📄 <strong>Senior Expertise &amp; Support</strong> — Direct access to your Principal Consultant, continuous oversight, and confidence your firm stays secure year-round.
            </div>
          </div>

          {/* ===== CTA BAND (Value framing) ===== */}
          <div className="cta-band" style={{ marginTop: '1.25rem' }}>
            <p className="lead" style={{ margin: 0 }}>
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
