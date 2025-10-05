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
            JGS Cloud Compliance helps professional firms work without uncertainty. We remove the risks that interrupt
            revenue and trust, then stay engaged so leadership always knows systems are controlled, communications are
            trusted, and recovery is proven.
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

          {/* ===== PROOF BADGES (Business Outcomes) ===== */}
          <div className="badge-list">
            <div className="badge">
              🛠 <strong>Access Under Control</strong> — Leadership can state who holds access and why; insider risk drops.
            </div>
            <div className="badge">
              📧 <strong>Emails That Count, Delivered</strong> — Invoices, filings, and engagement letters land on first send.
            </div>
            <div className="badge">
              🔁 <strong>Continuity You Can Prove</strong> — Recovery is rehearsed and documented; insurers accept readiness.
            </div>
            <div className="badge">
              📄 <strong>Evidence Delivered</strong> — Every engagement ends with plain-English proof leadership can show to clients, insurers, or regulators.
            </div>
          </div>

          {/* ===== CTA BAND (Value framing) ===== */}
          <div className="cta-band" style={{ marginTop: '1.25rem' }}>
            <p className="lead" style={{ margin: 0 }}>
              Projects eliminate specific risks. Retainers keep the gains. That’s Secure → Support — a simple model
              that gives partners clarity, credibility, and continuity.
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
            <p style={{ fontSize: '.95rem', opacity: 0.9, maxWidth: '60ch' }}>
              “I built JGS for firms that can’t afford half-solutions — they need technology that proves it’s working,
              not just promises it is.”
            </p>
            <div className="founder-actions" style={{ justifyContent: 'center' }}>
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
