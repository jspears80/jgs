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
          <h1 className="hero">SECURE • PROVE • ASSURE</h1>
          <h2 className="hero">Microsoft 365 Security for CPA & Law Firms</h2>

          <p className="lead" style={{ maxWidth: '68ch' }}>
Small professional firms depend on Microsoft 365 for every deadline, filing, and client exchange — yet most tenants remain insecure by default.
JGS Cloud Compliance hardens your environment, proves its security with real evidence, and keeps it that way year-round.

Founder-led. Evidence-driven. Built for firms that can’t afford uncertainty.
          </p>

          <div style={{ display: 'flex', gap: '.75rem', margin: '.9rem 0 1.25rem', flexWrap: 'wrap' }}>
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
            <Link href="/secure"  className="card-link hover-card">
              🛡️ <strong>SECURE — Microsoft 365 Hardening</strong> — We lock down your Microsoft 365 tenant with modern authentication, Conditional Access, secure mailflow, device compliance, and data governance — all delivered as a flat-fee hardening project designed for CPA & Law firms.
            </Link>
            <Link href="/prove" className="card-link hover-card">
              📘 <strong>PROVE — Microsoft 365 Audit Binder</strong> — A full evidence-driven assessment of your Microsoft 365 environment, producing a polished, audit-ready binder that insurers, auditors, and clients accept as proof of security and compliance.
            </Link>
            <Link href="/assure"   className="card-link hover-card">
              🔄 <strong>ASSURE — Annual Security Program</strong> — SECURE + PROVE + quarterly refreshes + leadership advisory.
A year-round assurance program that keeps your Microsoft 365 locked down, documented, and ready for insurers and clients at all times.
            </Link>
            <Link href="/custom"  className="card-link hover-card">
              🏢 <strong>CPA & Law Firms</strong> — Small professional firms run on trust, deadlines, and confidentiality.
But Microsoft 365 ships insecure by default — and insurers, auditors, and clients increasingly demand proof.
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Link href="/contact" className="founder" style={{ textAlign: 'center', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/founder.jpg" alt="Founder headshot" className="founder-img" width={720} height={720} />
            <div className="founder-meta">
              <div className="founder-name">Jeremiah Spears</div>
              <div className="founder-title">Founder &amp; Principal Consultant</div>
            </div>
            <p style={{ fontSize: '.95rem', opacity: 0.9, marginTop: '.25rem', maxWidth: '60ch', color: 'inherit' }}>
             💬 “I’ve seen too many firms run on bare-bones Microsoft 365, told they’re secure when they’re not.
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








