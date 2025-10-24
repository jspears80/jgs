'use client';
import React from 'react';

export default function HomePage() {
  return (
    <section className="section container">
      <div className="page home-grid">
        {/* ===== LEFT COLUMN — HERO / SUMMARY ===== */}
        <div>
          <span className="eyebrow">Microsoft 365 • Security & Advisory</span>
          <h1 className="hero">Secure and sustain Microsoft&nbsp;365 for professional firms</h1>

          <p className="lead" style={{ maxWidth: '68ch' }}>
            JGS Cloud Compliance secures each tenant against evolving threats, preserves client-data integrity,
            and provides continuing advisory support that strengthens <strong>trust, efficiency, and reputation</strong>.
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
              aria-label="Book a 30-minute consultation"
            >
              🔒 Book a 30-minute consultation
            </a>
            <a className="btn" href="/services" aria-label="View services">
              📘 View services
            </a>
          </div>

          {/* ===== PROOF GRID (four cards) ===== */}
          <div className="proofgrid">
            <div>
              🛠 <strong>Security Retrofit</strong> — Close quiet gaps, restore control of access and configuration,
              and deliver a defensible baseline.
            </div>
            <div>
              📧 <strong>Email Security Retrofit</strong> — Authenticate mail, block impostors and hidden rules,
              and make delivery reliable and trusted.
            </div>
            <div>
              🔁 <strong>Backup &amp; Recovery Retrofit</strong> — Prove recovery with timed drills, documented
              outcomes, and insurer-ready evidence.
            </div>
            <div>
              💧 <strong>Resolution &amp; Assurance</strong> — Senior advisory that keeps Microsoft&nbsp;365 stable,
              responsive, and documented month after month.
            </div>
          </div>

          {/* ===== CTA BAND ===== */}
          <div className="cta-band" style={{ marginTop: '1.75rem' }}>
            <p className="lead" style={{ margin: 0, textAlign: 'center' }}>
              <strong>Secure → Support → Prove.</strong> Projects establish the baseline. Retainers keep it resilient.
              Every outcome is captured as clear, verifiable documentation.
            </p>
          </div>
        </div>

        {/* ===== RIGHT COLUMN — FOUNDER CARD ===== */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div className="founder" style={{ textAlign: 'center', alignItems: 'center' }}>
            <img
              src="/founder.jpg"
              alt="Jeremiah Spears — Founder & Principal Consultant"
              className="founder-img"
              width={720}
              height={720}
            />
            <div className="founder-meta">
              <div className="founder-name">Jeremiah Spears</div>
              <div className="founder-title">Founder &amp; Principal Consultant</div>
            </div>

            <p style={{ fontSize: '.95rem', opacity: 0.9, marginTop: '.25rem', maxWidth: '60ch' }}>
              “Professional firms deserve enterprise-grade security without enterprise friction. Our job is to harden
              Microsoft&nbsp;365, support it with judgment, and hand you proof you can stand behind.”
            </p>

            <div className="founder-actions" style={{ justifyContent: 'center', marginTop: '.5rem' }}>
              <a
                className="btn sm"
                href="https://www.linkedin.com/in/jspears80/"
                target="_blank"
                rel="noopener"
                aria-label="Open LinkedIn profile"
              >
                🔗 LinkedIn
              </a>
              <a className="btn sm" href="/contact" aria-label="Contact JGS Cloud Compliance">
                ✉️ Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
