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
          <h1 className="hero">Secure • Prove • Assure</h1>
          <h2 className="hero">Microsoft 365 Security for CPA & Law Firms</h2>

          <p className="lead" style={{ maxWidth: '68ch' }}>
            Small professional firms rely on Microsoft 365 for every deadline, filing, client communication, and confidential exchange — yet most tenants remain insecure by default.

            JGS Cloud Compliance hardens your Microsoft 365, proves its security with real tenant evidence, and keeps it defensible all year with quarterly refreshes and leadership advisory.

            Founder-led. Evidence-driven. Built for firms that cannot afford uncertainty.
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
              href="https://outlook.office.com/book/JGSCloudCompliance@cloudjgs.com/?ismsaljsauthenabled"
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
            <Link href="/secure" className="card-link hover-card">
              🛡️ <strong>Secure — Microsoft 365 Hardening</strong> — A one-time, flat-fee
              hardening engagement that locks down identity, authentication, Conditional Access,
              mailflow, device compliance, and data governance — built specifically for CPA & Law
              firms.
            </Link>

            <Link href="/prove" className="card-link hover-card">
              📘 <strong>Prove — Microsoft 365 Audit Binder</strong> — A full, evidence-driven
              assessment of your Microsoft 365 tenant, producing a polished, audit-ready binder
              accepted by insurers, auditors, and major clients as defensible proof of security and
              compliance.
            </Link>

            <Link href="/support" className="card-link hover-card">
              🔄 <strong>Assure — Annual Security Program</strong> — Secure + Prove + quarterly
              evidence refreshes + leadership advisory. A year-round assurance program that keeps your Microsoft 365 hardened, documented, and renewal-ready at all times.
            </Link>

            <Link href="/about" className="card-link hover-card">
              🏢 <strong>CPA & Law Firms</strong> — Firms built on deadlines, confidentiality, and
              reputation need Microsoft 365 configurations they can defend. Insurers, auditors, and
              clients now expect proof — not assumptions.
            </Link>
          </div>

          {/* CTA band */}
          <div className="cta-band" style={{ marginTop: '1.75rem' }}>
            <p className="lead" style={{ margin: 0, textAlign: 'center' }}>
              We harden your Microsoft 365, assess it with real evidence, and keep it compliant quarter after quarter.  
              Founder-led. Flat-fee. Audit-ready.
            </p>
          </div>
        </div>

        {/* RIGHT column — founder */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link
            href="/contact"
            className="founder"
            style={{
              textAlign: 'center',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
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
            <p
              style={{
                fontSize: '.95rem',
                opacity: 0.9,
                marginTop: '.25rem',
                maxWidth: '60ch',
                color: 'inherit',
              }}
            >
              💬 “Too many firms run on misconfigured Microsoft 365, told they’re secure when
              they’re not. I built JGS to fix that — to deliver security you can prove, not just
              assume.”
            </p>
          </Link>

          <div className="founder-actions" style={{ justifyContent: 'center', marginTop: '.5rem' }}>
            <a
              className="btn sm"
              href="https://www.linkedin.com/in/jspears80/"
              target="_blank"
              rel="noopener noreferrer"
            >
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

