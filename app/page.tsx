'use client';
import React from 'react';

export default function HomePage() {
  return (
    <section className="section container">
      <div className="page home-grid">
        {/* ===== LEFT COLUMN — HERO / SUMMARY ===== */}
        <div>
          <h1 className="hero">Secure and Support — Microsoft 365 for Law & CPA Firms</h1>

          <p className="lead">
            JGS Cloud Compliance helps law and accounting firms operate securely,
            confidently, and without interruption on Microsoft 365.  
            We close risks through focused projects and keep firms stable through ongoing
            advisory — so trust, deadlines, and compliance are never in question.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '.75rem',
              margin: '.75rem 0 1.25rem 0',
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

          {/* ===== PROOF GRID ===== */}
          <div className="proofgrid">
            <div>
              🛠 <strong>Access Secured</strong> — Old accounts and hidden doors closed;
              only the right people get in.
            </div>
            <div>
              📧 <strong>Email Trusted</strong> — Invoices, filings, and client
              correspondence deliver on the first send; impostors are blocked.
            </div>
            <div>
              🔁 <strong>Continuity Proven</strong> — Files recover, deadlines are met,
              and insurers accept your readiness.
            </div>
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
          <div className="founder">
            <img src="/founder.jpg" alt="Founder headshot" className="founder-img" />
            <div className="founder-meta">
              <div className="founder-name">Jeremiah Spears</div>
              <div className="founder-title">Founder & Principal Consultant</div>
            </div>
            <p style={{ fontSize: '.95rem', opacity: 0.9 }}>
              “I built JGS for firms that can’t afford half-solutions.”
            </p>
            <div className="founder-actions">
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
