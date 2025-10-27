'use client';
import React from 'react';

export default function CustomSolutionsPage() {
  return (
    <section className="section container page-services">
      <div className="page home-grid">
        {/* ===== LEFT COLUMN — HERO / SUMMARY ===== */}
        <div>
          <span className="eyebrow">Consulting • Microsoft 365</span>
          <h1 className="hero">⚙️ Custom Solutions — from $495+</h1>
          <h2>Make Microsoft 365 fit your firm</h2>

          <p className="lead" style={{ maxWidth: '68ch' }}>
            Your tools should work the way your team does. JGS Custom Solutions extend Microsoft 365
            beyond security — automating workflows, improving efficiency, and ensuring governance at every
            step. Operate smarter inside Microsoft 365 — security and productivity in one motion.
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

          {/* ===== VALUE SUMMARY (concise) ===== */}
          <div className="proofgrid">
            <div>
              <strong>🧩 Built for your workflow</strong> — We shape Microsoft 365 around how your firm
              actually works — not the other way around.
            </div>
            <div>
              <strong>🔁 Automate routine tasks</strong> — Reduce clicks and context switching with
              Power Automate, approvals, and templated actions.
            </div>
            <div>
              <strong>📂 Govern as you go</strong> — Every solution preserves labeling, retention, and
              access discipline — compliance baked in.
            </div>
            <div>
              <strong>📈 Measurable efficiency</strong> — Time saved, steps removed, mistakes prevented —
              we document the impact so leadership can see the gain.
            </div>
          </div>

          {/* ===== WHAT WE BUILD (examples) ===== */}
          <div className="card full service-card">
            <div className="service-head">
              <h3 className="title-xl">What we build</h3>
              <span className="price-pill">From $495+</span>
            </div>
            <div className="two-col">
              <div>
                <div className="subhead">SharePoint &amp; OneDrive</div>
                <ul className="list-tight">
                  <li>Client/matter workspace templates with governed folders</li>
                  <li>Metadata &amp; views for fast search and sorting</li>
                  <li>Checklists, binders, and “close-out” packages on demand</li>
                </ul>
              </div>
              <div>
                <div className="subhead">Power Automate &amp; Teams</div>
                <ul className="list-tight">
                  <li>Intake → review → approval flows with audit trail</li>
                  <li>Auto-filing of emails/attachments to the right library</li>
                  <li>Notifications that keep partners informed — not spammed</li>
                </ul>
              </div>
              <div>
                <div className="subhead">Email &amp; Docs</div>
                <ul className="list-tight">
                  <li>Standardized signatures &amp; disclaimers with routing rules</li>
                  <li>Document templates with auto-naming and versioning</li>
                  <li>Retention that follows the document, not the user</li>
                </ul>
              </div>
              <div>
                <div className="subhead">Dashboards &amp; Proof</div>
                <ul className="list-tight">
                  <li>Lightweight status boards for work-in-progress</li>
                  <li>Activity logs that satisfy client and insurer questions</li>
                  <li>Before/after evidence that shows time saved and steps removed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ===== HOW IT WORKS (5-step) ===== */}
          <div className="card full service-card">
            <div className="service-head">
              <h3 className="title-xl">How it works</h3>
            </div>
            <div className="two-col">
              <div>
                <div className="subhead">1) Discovery</div>
                <p className="list-tight">
                  Short working session to map the current workflow, pain points, and the “done right” outcome.
                </p>
              </div>
              <div>
                <div className="subhead">2) Design</div>
                <p className="list-tight">
                  We draft the flow and guardrails — labeling, access, retention — so governance is built-in.
                </p>
              </div>
              <div>
                <div className="subhead">3) Build</div>
                <p className="list-tight">
                  Implement in Microsoft 365 using SharePoint, Teams, and Power Automate — minimal change, max reuse.
                </p>
              </div>
              <div>
                <div className="subhead">4) Pilot</div>
                <p className="list-tight">
                  Trial with a small group. We tune the steps, remove friction, and finalize user prompts.
                </p>
              </div>
              <div>
                <div className="subhead">5) Prove</div>
                <p className="list-tight">
                  We deliver the “before/after” evidence — time saved, steps reduced, and the documentation to back it.
                </p>
              </div>
            </div>
          </div>

          {/* ===== BUSINESS VALUE (explicit bullets) ===== */}
          <div className="card full">
            <h3 className="title-xl">Business Value</h3>
            <ul className="list-tight">
              <li>Simplifies collaboration and everyday operations</li>
              <li>Reduces manual effort without adding IT overhead</li>
              <li>Increases efficiency while preserving governance and security</li>
            </ul>
            <p style={{ marginTop: '.5rem', opacity: .95 }}>
              <em>“Operate smarter inside Microsoft 365 — security and productivity in one motion.”</em>
            </p>
          </div>

          {/* ===== CTA BAND ===== */}
          <div className="cta-band" style={{ marginTop: '1.75rem' }}>
            <p className="lead" style={{ margin: 0 }}>
              Ready to turn busywork into a governed workflow? Book a consultation and we’ll scope a focused,
              high-impact build for your team.
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
              “We build flows that teams actually use — because they’re fast, obvious, and governed.
              The best automation removes steps and adds proof.”
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
