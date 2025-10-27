// app/page.tsx
'use client';
import React from 'react';

export default function HomePage() {
  return (
    <section className="section container">
      <div className="page home-grid">
        {/* ===== LEFT COLUMN — HERO ===== */}
        <div>
          <span className="eyebrow">Consulting • Microsoft 365</span>
          <h1 className="hero">Secure • Support • Prove</h1>

          <p className="lead" style={{ maxWidth: '68ch' }}>
            JGS Cloud Compliance secures Microsoft 365 for professional firms—CPAs, law
            practices, and consultants who rely on it every day. We harden your
            environment, keep it maintained, and deliver the proof your clients, partners,
            and insurers expect.
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

          {/* ===== CONCISE SERVICE GRID ===== */}
          <div className="proofgrid">
            <div>
              🛡️ <strong>Secure</strong> — Reclaim control of your
              Microsoft 365 tenant. We close exposure points, lock down access, and
              deliver an auditable, insurer-ready baseline.
            </div>
            <div>
              🤝 <strong>Support> — Stay secure
              year-round. We manage updates, handle user issues, and document every action
              so you remain audit-ready.
            </div>
            <div>
              📊 <strong>Prove</strong> — Show proof, not
              promises. Exportable Microsoft 365 evidence—no opinions, just organized data
              you can hand to an insurer or client.
            </div>
            <div>
              ⚙ <strong>Custom Solutions</strong> — Operate smarter inside
              Microsoft 365. We automate workflows and streamline collaboration without
              losing governance.
            </div>
          </div>

          {/* ===== STRAPLINE ===== */}
          <div className="cta-band" style={{ marginTop: '1.75rem' }}>
            <p className="lead" style={{ margin: 0, textAlign: 'center' }}>
              Security isn’t a guess — it’s a record. JGS makes Microsoft 365 secure,
              supported, and provable — so your firm can work with confidence.
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
              “I’ve seen too many firms run on bare-bones Microsoft 365, told they’re
              secure when they’re not. I built JGS to fix that — to deliver security you
              can prove, not just assume.”
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


