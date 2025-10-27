// app/proof/page.tsx
'use client';
import React from 'react';

export default function ProofPage() {
  return (
    <section className="section container page-services">
      <div className="page home-grid">
        {/* ===== LEFT COLUMN — HERO ===== */}
        <div>
          <span className="eyebrow">Consulting • Microsoft 365</span>
          <h1 className="hero">📊 PROVE — $495 Audit Data Package</h1>
          <h2>Show proof — not promises</h2>

          <p className="lead" style={{ maxWidth: '68ch' }}>
            When an insurer, client, or auditor asks for evidence, this is the answer.
            PROVE delivers clear, exportable data straight from Microsoft 365 — no interpretation,
            just organized facts in a ready-to-share report.
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
              📘 Back to Services
            </a>
          </div>

          {/* ===== VALUE HIGHLIGHTS ===== */}
          <div className="proofgrid">
            <div>
              <strong>✅ Factual</strong> — Evidence exported directly from Microsoft 365 — not summaries, not opinions.
            </div>
            <div>
              <strong>🧾 Auditor-ready</strong> — Organized sections, clear labels, and checksum integrity where applicable.
            </div>
            <div>
              <strong>⏱ Fast</strong> — 24-hour turnaround for standard tenants; delivered as a signed PDF + data bundle.
            </div>
            <div>
              <strong>🔐 Governed</strong> — Collected under least-privilege accounts and retained in your Evidence library.
            </div>
          </div>

          {/* ===== WHAT YOU GET ===== */}
          <div className="card full service-card">
            <div className="service-head">
              <h3 className="title-xl">What you get (deliverables)</h3>
              <span className="price-pill">$495</span>
            </div>
            <div className="two-col">
              <div>
                <div className="subhead">Configuration Evidence</div>
                <ul className="list-tight">
                  <li>Secure Score snapshot with control breakdown</li>
                  <li>Admin roles &amp; privileged access inventory</li>
                  <li>Conditional Access &amp; MFA status summary</li>
                </ul>
              </div>
              <div>
                <div className="subhead">Messaging &amp; Sharing</div>
                <ul className="list-tight">
                  <li>Mail flow trust posture (SPF, DKIM, DMARC)</li>
                  <li>Auto-forwarding &amp; legacy auth checks</li>
                  <li>External sharing visibility (SharePoint/OneDrive)</li>
                </ul>
              </div>
              <div>
                <div className="subhead">Licensing &amp; Activity</div>
                <ul className="list-tight">
                  <li>License allocation overview</li>
                  <li>Basic sign-in or change events as available</li>
                  <li>Notes on material gaps for re-run guidance</li>
                </ul>
              </div>
              <div>
                <div className="subhead">Package Format</div>
                <ul className="list-tight">
                  <li>Signed PDF summary for leadership/insurers</li>
                  <li>CSV/JSON evidence bundle (where applicable)</li>
                  <li>Delivery log &amp; optional checksum list</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ===== HOW IT WORKS ===== */}
          <div className="card full service-card">
            <div className="service-head">
              <h3 className="title-xl">How it works</h3>
            </div>
            <div className="two-col">
              <div>
                <div className="subhead">1) Initiate</div>
                <p className="list-tight">
                  You approve the scope and secure access. We schedule a quick window to pull the data.
                </p>
              </div>
              <div>
                <div className="subhead">2) Collect</div>
                <p className="list-tight">
                  We export evidence from Microsoft 365 using controlled, least-privilege methods.
                </p>
              </div>
              <div>
                <div className="subhead">3) Assemble</div>
                <p className="list-tight">
                  We package the data into a clean PDF summary and an optional CSV/JSON bundle.
                </p>
              </div>
              <div>
                <div className="subhead">4) Deliver</div>
                <p className="list-tight">
                  You receive the evidence via a secure link, ready to hand off to any third party.
                </p>
              </div>
              <div>
                <div className="subhead">5) Re-run (optional)</div>
                <p className="list-tight">
                  Need updates after remediation? Re-run the package to show progress and closure.
                </p>
              </div>
            </div>
          </div>

          {/* ===== BUSINESS VALUE (anchor bullets) ===== */}
          <div className="card full">
            <h3 className="title-xl">Business Value</h3>
            <ul className="list-tight">
              <li>Provides credible, third-party-ready documentation on demand</li>
              <li>Speeds up renewals, reviews, and compliance questionnaires</li>
              <li>Builds trust through transparency and accuracy</li>
            </ul>
            <p style={{ marginTop: '.5rem', opacity: 0.95 }}>
              <em>“The evidence — clearly organized and ready to hand off.”</em>
            </p>
          </div>

          {/* ===== CTA BAND ===== */}
          <div className="cta-band" style={{ marginTop: '1.75rem' }}>
            <p className="lead" style={{ margin: 0 }}>
              Need proof for an insurer or client review? Book a consultation and we’ll prepare your
              Microsoft 365 PROVE package.
            </p>
          </div>
        </div>

        {/* ===== RIGHT COLUMN — FOUNDER CARD (optional reuse) ===== */}
        <aside
          aria-label="Principal consultant"
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
              “Proof turns security into confidence. We export what matters so leadership, insurers,
              and auditors can verify it.”
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
        </aside>
      </div>
    </section>
  );
}
