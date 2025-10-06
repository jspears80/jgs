'use client';
import React from 'react';

export default function AdvisoryPage() {
  return (
    <section className="section container page-advisory">
      {/* ===== Header — context, not a pitch ===== */}
      <div className="card full">
        <span className="eyebrow">Support = Advisory</span>
        <h1 className="hero">Support — Resolution &amp; Assurance</h1>
        <p className="lead" style={{ maxWidth: '70ch' }}>
          Microsoft 365 doesn’t stay secure by itself. Accounts change. Vendors change. Settings drift.
          The Support phase keeps leadership informed, incidents resolved correctly, and proof on file.
          Two levels, one discipline: <strong>Resolution &amp; Assurance</strong>.
        </p>

        {/* legend chips */}
        <div className="legend-row">
          <span className="legend">💧 Advisory Access</span>
          <span className="legend">📘 Full Remote Support</span>
          <span className="legend">🧭 Judgment</span>
          <span className="legend">📄 Proof</span>
        </div>
      </div>

      {/* ===== Tier 1 ===== */}
      <div id="advisory-access" className="card service-card">
        <div className="service-head">
          <h2 className="title-xl">💧 Resolution &amp; Assurance Advisor</h2>
          <span className="price-pill" aria-label="Price: $495 per month">$495 / month</span>
        </div>

        <p>
          When you want guaranteed access to expert judgment — but can handle the light lifting internally.
          This tier gives your firm a direct line to your Principal Consultant for incident guidance, technical validation,
          and written proof that every issue was resolved correctly.
        </p>

        <div className="two-col">
          <div>
            <p className="subhead">Scope &amp; Access</p>
            <ul className="list-tight">
              <li>Direct <strong>email and phone</strong> access — no queue, no escalation chain.</li>
              <li>Rapid analysis, research, and guided remediation for Microsoft 365 issues.</li>
              <li>Validation of fixes performed by your MSP or internal IT.</li>
              <li>Priority response for authentication, mail-flow, and configuration problems.</li>
              <li>Written summaries formatted for leadership, auditors, or insurers.</li>
            </ul>
          </div>
          <div>
            <p className="subhead">Ideal For &amp; Outcome</p>
            <ul className="list-tight">
              <li><strong>Ideal for:</strong> Firms with IT support that want senior oversight and defensible assurance.</li>
              <li><strong>Outcome:</strong> You execute the fix; <strong>JGS confirms</strong> it’s correct, secure, and documented — turning “we think it’s handled” into <strong>proof of control</strong>.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Tier 2 ===== */}
      <div id="advisory-remote" className="card service-card">
        <div className="service-head">
          <h2 className="title-xl">📘 Resolution &amp; Assurance — Full Remote Support</h2>
          <span className="price-pill" aria-label="Price: $995 per month">$995 / month</span>
        </div>

        <p>
          When you want the same assurance — handled directly, end-to-end.
          This tier provides full remote execution from your Principal Consultant: every issue diagnosed, corrected,
          and documented by JGS itself.
        </p>

        <div className="two-col">
          <div>
            <p className="subhead">Scope &amp; Access</p>
            <ul className="list-tight">
              <li><strong>Full remote support</strong> inside your Microsoft 365 tenant — JGS executes and verifies changes directly.</li>
              <li>Unlimited <strong>email and phone</strong> access; live remote troubleshooting when needed.</li>
              <li>Comprehensive closure documentation — cause, action, prevention, and verification.</li>
              <li>Post-resolution validation ensuring controls remain enforced, compliant, and auditable.</li>
            </ul>
          </div>
          <div>
            <p className="subhead">Ideal For &amp; Outcome</p>
            <ul className="list-tight">
              <li><strong>Ideal for:</strong> Firms without dedicated IT, or those that prefer JGS to manage incidents directly.</li>
              <li><strong>Outcome:</strong> Problems are researched, analyzed, fixed, and proven by JGS; leadership receives complete operational assurance and a defensible record.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Difference table ===== */}
      <div className="card">
        <h2 className="title-xl">The Difference</h2>
        <div className="two-col">
          <div>
            <p className="subhead">$495 / month — Advisory Access</p>
            <ul className="list-tight">
              <li><strong>Access:</strong> Email + phone</li>
              <li><strong>Execution:</strong> You / MSP act on JGS guidance</li>
              <li><strong>Depth:</strong> Research &amp; advanced diagnostics provided</li>
              <li><strong>Response:</strong> Priority same-day</li>
              <li><strong>Deliverable:</strong> Leadership summary</li>
              <li><strong>Value:</strong> Expert assurance and oversight</li>
            </ul>
          </div>
          <div>
            <p className="subhead">$995 / month — Full Remote Support</p>
            <ul className="list-tight">
              <li><strong>Access:</strong> Email + phone + live remote support</li>
              <li><strong>Execution:</strong> JGS performs remediation directly</li>
              <li><strong>Depth:</strong> Research, diagnostics, and full remediation executed</li>
              <li><strong>Response:</strong> Immediate / real-time</li>
              <li><strong>Deliverable:</strong> Full closure + verification report</li>
              <li><strong>Value:</strong> Direct execution and proof of control</li>
            </ul>
          </div>
        </div>

        <p className="lead" style={{ marginTop: '.75rem' }}>
          Both tiers deliver <strong>Resolution + Assurance</strong> — the same senior judgment and the same proof standard.
          The difference is simply how far you want us to go: <strong>$495 — We guide and verify.</strong> · <strong>$995 — We handle and prove.</strong>
        </p>
      </div>

      {/* ===== Scope of Support ===== */}
      <div className="card">
        <h2 className="title-xl">Scope of Support — Resolution &amp; Assurance</h2>
        <p>
          JGS provides senior-level support focused exclusively on Microsoft 365 — where your firm’s security, operations,
          and compliance intersect. Our purpose isn’t day-to-day IT; it’s to maintain the integrity of the systems that
          protect your clients, your data, and your evidence of control.
        </p>

        <div className="two-col">
          <div>
            <p className="subhead">Included (All Tiers)</p>
            <ul className="list-tight">
              <li>Incident triage and root-cause diagnosis.</li>
              <li>Guided or direct remediation for security, identity, and operational failures.</li>
              <li>Correction of Conditional Access, MFA, mail-flow, and retention policies.</li>
              <li>Validation and documentation of results with leadership summaries.</li>
              <li>Coordination with your MSP or internal IT for aligned closure.</li>
              <li>Microsoft 365 assurance consulting and insurer questionnaire support.</li>
            </ul>
          </div>
          <div>
            <p className="subhead">Tier 2 Adds</p>
            <ul className="list-tight">
              <li>Direct administrative access — JGS executes changes and policy updates.</li>
              <li>Advanced troubleshooting across Exchange Online, SharePoint, Teams, Entra ID.</li>
              <li>System-level corrective work (access, auth, mail transport, backup, retention).</li>
              <li>Post-resolution validation confirming controls remain enforced and auditable.</li>
            </ul>
          </div>
        </div>

        <p className="subhead" style={{ marginTop: '.75rem' }}>Out of Scope</p>
        <ul className="list-tight">
          <li>End-user helpdesk (passwords, desktops, personal devices).</li>
          <li>Network hardware, printers, on-prem servers.</li>
          <li>Non-Microsoft SaaS platforms.</li>
          <li>Migrations, rollouts, or large deployments (delivered as projects).</li>
          <li>Custom development unrelated to remediation or control assurance.</li>
        </ul>

        <p className="subhead" style={{ marginTop: '.75rem' }}>Response &amp; Engagement</p>
        <ul className="list-tight">
          <li><strong>Business-critical:</strong> Immediate or same-day engagement.</li>
          <li><strong>Standard incidents:</strong> Addressed within one business day.</li>
          <li><strong>Documentation:</strong> Closure summary delivered within 48 hours of resolution.</li>
          <li><strong>Access channels:</strong> Tier 1 — Email &amp; Phone · Tier 2 — Email &amp; Phone + Remote Support.</li>
        </ul>

        <p style={{ marginTop: '.75rem' }}>
          <strong>Operating principle:</strong> JGS support is assurance-driven, not ticket-driven. Every engagement ends with a measurable result:
          the issue is identified and resolved, the remediation is verified and documented, and the firm is ready to prove control.
        </p>
      </div>

      {/* ===== CTA ===== */}
      <div className="card full cta-band">
        <h2 className="title-xl">Ready for continuous assurance?</h2>
        <p className="lead" style={{ marginBottom: '.9rem' }}>
          The worst time to learn where your controls stand is during an incident or renewal.
          In a short consultation, we’ll determine the right level of Resolution &amp; Assurance for your firm —
          and show exactly how you’ll receive expert access, real fixes, and evidence you can hand to anyone who asks.
        </p>
        <a
          className="btn primary"
          href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled"
          target="_blank"
          rel="noopener"
          aria-label="Book a 30-minute consultation"
        >
          🔒 Book Consultation
        </a>
      </div>
    </section>
  );
}
