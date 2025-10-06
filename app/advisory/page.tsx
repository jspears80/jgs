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
          <span className="legend">📘 Hands-On Support</span>
          <span className="legend">🧭 Judgment</span>
          <span className="legend">📄 Proof</span>
        </div>
      </div>

      {/* ===== Tier 1: Resolution & Assurance — Advisory Access ===== */}
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
            <p className="subhead">What we deliver</p>
            <ul className="list-tight">
              <li><strong>Direct access by email &amp; phone</strong> to your Principal Consultant — no queue, no tiers.</li>
              <li><strong>Rapid analysis &amp; guided remediation</strong> for Microsoft 365 incidents.</li>
              <li><strong>Validation of fixes</strong> executed by your MSP or internal IT.</li>
              <li><strong>Priority response</strong> for authentication, mail-flow, and configuration problems.</li>
              <li><strong>Leadership summaries</strong> formatted for insurers, auditors, or clients.</li>
            </ul>
          </div>
          <div>
            <p className="subhead">The outcome</p>
            <ul className="list-tight">
              <li>You execute the fix; <strong>JGS confirms it’s sound, safe, and documented</strong>.</li>
              <li>Incidents move from “we think it’s handled” to <strong>proof of control</strong>.</li>
              <li>Leadership gains <strong>clarity</strong> without adding another helpdesk.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Tier 2: Resolution & Assurance — Full Remote Support ===== */}
      <div id="advisory-remote" className="card service-card">
        <div className="service-head">
          <h2 className="title-xl">📘 Resolution &amp; Assurance — Full Remote Support</h2>
          <span className="price-pill" aria-label="Price: $995 per month">$995 / month</span>
        </div>

        <p>
          When you want the same assurance — handled directly, end-to-end.
          JGS analyzes the issue, executes the fix inside your tenant, and delivers formal closure documentation
          that is defensible to leadership, clients, and insurers.
        </p>

        <div className="two-col">
          <div>
            <p className="subhead">What we deliver</p>
            <ul className="list-tight">
              <li><strong>Full remote support</strong> — JGS executes and verifies changes in your Microsoft 365 environment.</li>
              <li><strong>Unlimited access</strong> by email &amp; phone with live remote troubleshooting when needed.</li>
              <li><strong>Formal closure reports</strong> — cause, action, prevention, and verification for every engagement.</li>
              <li><strong>Post-resolution validation</strong> — controls confirmed enforced and auditable.</li>
            </ul>
          </div>
          <div>
            <p className="subhead">The outcome</p>
            <ul className="list-tight">
              <li>Problems are <strong>analyzed, fixed, and proven</strong> by JGS — not just advised.</li>
              <li>Leadership receives <strong>complete operational assurance</strong> and written evidence.</li>
              <li>Your firm shows <strong>professional corrective action</strong> without internal strain.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Comparison — keeps it simple ===== */}
      <div className="card">
        <h2 className="title-xl">Which level fits your firm?</h2>
        <div className="two-col">
          <div>
            <p className="subhead">💧 Advisory Access — $495 / month</p>
            <ul className="list-tight">
              <li><strong>Access:</strong> Email + phone</li>
              <li><strong>Execution:</strong> Your team / MSP acts on JGS guidance</li>
              <li><strong>Deliverable:</strong> Leadership / insurer summaries</li>
              <li><strong>Value:</strong> Expert assurance and validation</li>
            </ul>
          </div>
          <div>
            <p className="subhead">📘 Full Remote Support — $995 / month</p>
            <ul className="list-tight">
              <li><strong>Access:</strong> Email + phone + live remote support</li>
              <li><strong>Execution:</strong> JGS performs remediation directly</li>
              <li><strong>Deliverable:</strong> Full closure + verification reports</li>
              <li><strong>Value:</strong> Direct execution and proof of control</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== CTA — Threat → Proof ===== */}
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
