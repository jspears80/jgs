'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function AdvisoryPage() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Focus, ESC, and scroll lock
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) {
      document.addEventListener('keydown', onKey);
      // Focus modal container
      setTimeout(() => modalRef.current?.focus(), 0);
      // Prevent background scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

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

      {/* ===== Advisory Access ===== */}
      <div id="advisory-access" className="card service-card">
        <div className="service-head">
          <h2 className="title-xl">💧 Resolution &amp; Assurance Advisor</h2>
          <span className="price-pill" aria-label="Price: $495 per month">$495 / month</span>
        </div>

        <p>
          When you want guaranteed access to expert judgment — but can handle the light lifting internally.
          This level gives your firm a direct line to your Principal Consultant for incident guidance, technical validation,
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
              <li>Leadership-ready summaries formatted for executives, auditors, or insurers.</li>
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

      {/* ===== Full Remote Support ===== */}
      <div id="advisory-remote" className="card service-card">
        <div className="service-head">
          <h2 className="title-xl">📘 Resolution &amp; Assurance — Full Remote Support</h2>
          <span className="price-pill" aria-label="Price: $995 per month">$995 / month</span>
        </div>

        <p>
          When you want the same assurance — handled directly, end-to-end.
          This level provides full remote execution from your Principal Consultant: every issue diagnosed, corrected,
          and documented by JGS itself.
        </p>

        <div className="two-col">
          <div>
            <p className="subhead">Scope &amp; Access</p>
            <ul className="list-tight">
              <li><strong>Full remote support</strong> — JGS executes and verifies changes directly in your tenant.</li>
              <li>Unlimited <strong>email and phone</strong> access; live remote troubleshooting when needed.</li>
              <li>Comprehensive closure documentation — cause, action, prevention, verification.</li>
              <li>Post-resolution validation ensuring controls remain enforced and auditable.</li>
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

      {/* ===== Difference card ===== */}
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
          Both levels deliver <strong>Resolution + Assurance</strong> — the same senior judgment and the same proof standard.
          The difference is simply how far you want us to go: <strong>$495 — We guide and verify.</strong> · <strong>$995 — We handle and prove.</strong>
        </p>
      </div>

      {/* ===== Scope CTA (opens modal) ===== */}
      <div className="card">
        <h2 className="title-xl">Scope of Support</h2>
        <p style={{ marginBottom: '.75rem' }}>
          JGS provides senior-level support focused on Microsoft 365 — where your firm’s security, operations, and compliance intersect.
          Our role isn’t general IT; it’s to maintain the integrity of the systems that protect your clients, your data, and your evidence of control.
        </p>
        {/* Label corrected: no "View Scope" and no "(opens popup)" */}
        <button
          className="btn sm"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          📄 See Full Resolution Process
        </button>
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

      {/* ===== Modal (Scope of Support) ===== */}
      {open && (
        <div
          className="modal-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        >
          <div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="scopeTitle"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
            ref={modalRef}
          >
            <div className="modal-head">
              <h3 id="scopeTitle" className="title-xl">Resolution &amp; Assurance — Full Scope</h3>
              <button className="btn sm" onClick={() => setOpen(false)} aria-label="Close">
                ✕
              </button>
            </div>

            <div className="modal-body">
              <p>
                Handles incidents that threaten business continuity, data integrity, access control, or compliance posture.
                Every engagement concludes with a verified resolution and written documentation that leadership, insurers, or auditors can rely on.
              </p>

              <div className="two-col">
                <div>
                  <p className="subhead">Included (All Engagements)</p>
                  <ul className="list-tight">
                    <li>Incident triage and root-cause diagnosis.</li>
                    <li>Guided or direct remediation of Microsoft 365 configuration, identity, and access issues.</li>
                    <li>Correction of Conditional Access, MFA, mail-flow, and retention policies.</li>
                    <li>Verification and lea
