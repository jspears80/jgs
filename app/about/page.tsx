'use client';
import React from 'react';

export default function AboutPage() {
  return (
    <section className="section container">
      {/* ===== Page Header ===== */}
      <div className="card full" id="about">
        <span className="eyebrow">Firm Overview</span>
        <h1 className="hero">JGS Cloud Compliance, LLC — Firm Overview (2025 Edition)</h1>
        <p className="lead">Secure and Support — Microsoft 365 for Law &amp; CPA Firms</p>
      </div>

      {/* ===== About the Firm ===== */}
      <div className="card">
        <h2 className="title-xl">About the Firm</h2>
        <p>
          JGS Cloud Compliance is a Microsoft 365 consulting practice built for small professional firms that cannot
          afford uncertainty. We help law and accounting firms operate securely, continuously, and confidently by
          addressing the two needs every professional environment shares — to be secure and to stay supported.
        </p>
        <p>
          Founded by <strong>Jeremiah Spears</strong>, a senior Microsoft 365 engineer and former lead escalation
          resource for managed service providers, JGS bridges the gap between IT support and true accountability.
          Where MSPs manage uptime, JGS provides assurance — making Microsoft 365 environments defensible, documented,
          and ready for insurer or auditor review.
        </p>
        <p>
          <strong>Our philosophy is simple:</strong> We secure and support the technology professional firms depend on,
          so trust, deadlines, and compliance are never in question.
        </p>
      </div>

      {/* ===== Who We Serve ===== */}
      <div className="card">
        <h2 className="title-xl">Who We Serve</h2>
        <p>
          JGS works exclusively with law firms and accounting practices employing roughly 10–25 people — large enough to
          depend on Microsoft 365 for daily operations but too small to justify internal IT management.
        </p>
        <ul>
          <li>Client confidentiality and continuity are non-negotiable.</li>
          <li>Deadlines are fixed by courts, regulators, or tax calendars.</li>
          <li>A single failed email, missed filing, or data loss can threaten reputation and revenue.</li>
        </ul>
        <p>
          Our clients aren’t looking for another IT vendor — they want a professional partner who takes ownership,
          finishes the work, and proves the result.
        </p>
      </div>

      {/* ===== The Problem We Solve ===== */}
      <div className="card">
        <h2 className="title-xl">The Problem We Solve</h2>
        <p>
          Most firms already have IT providers, but none who guarantee completeness. Systems may be “online,” but
          they’re often unverified, misconfigured, or undocumented.
        </p>
        <ul>
          <li>Dormant or over-permissioned accounts that weaken internal control.</li>
          <li>Incomplete SPF, DKIM, and DMARC configurations that allow impersonation or lost invoices.</li>
          <li>Backups assumed to exist but never tested.</li>
          <li>Fragmented accountability — MSPs, auditors, and vendors each covering a piece, leaving leadership without closure.</li>
        </ul>
        <p>JGS eliminates that ambiguity by combining hands-on remediation with executive-level clarity.</p>
      </div>

      {/* ===== Philosophy: Secure & Support ===== */}
      <div className="card">
        <h2 className="title-xl">Our Philosophy — Secure &amp; Support</h2>

        {/* Desktop header */}
        <table>
          <thead>
            <tr><th>Discipline</th><th>Purpose</th><th>Result</th></tr>
          </thead>
        </table>
        {/* Spacer + mobile-friendly body */}
        <div aria-hidden="true" style={{ height: '.25rem' }} />
        <table>
          <tbody>
            <tr>
              <td data-label="Discipline"><strong>Secure</strong></td>
              <td data-label="Purpose">Focused projects that fix what’s weak — access, email, and recovery.</td>
              <td data-label="Result">A Microsoft 365 environment that’s hardened, validated, and defensible.</td>
            </tr>
            <tr>
              <td data-label="Discipline"><strong>Support</strong></td>
              <td data-label="Purpose">Ongoing advisory that keeps what’s strong running correctly.</td>
              <td data-label="Result">Continuity, confidence, and control under changing conditions.</td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: '.75rem' }}>
          <strong>Lifecycle:</strong> Assess → Secure → Support → Review.
        </p>
      </div>

      {/* ===== Services Overview (Secure) ===== */}
      <div className="card">
        <h2 className="title-xl">Focused Projects (Secure)</h2>

        {/* Desktop header */}
        <table>
          <thead>
            <tr><th>Service</th><th>Objective</th><th>Outcome</th></tr>
          </thead>
        </table>
        {/* Spacer + mobile-friendly body */}
        <div aria-hidden="true" style={{ height: '.25rem' }} />
        <table>
          <tbody>
            <tr>
              <td data-label="Service"><strong>Security Hardening</strong></td>
              <td data-label="Objective">Remove stale accounts, close access gaps, and enforce least-privilege control across Microsoft 365.</td>
              <td data-label="Outcome">Unauthorized access eliminated; leadership can demonstrate internal control.</td>
            </tr>
            <tr>
              <td data-label="Service"><strong>Email Authentication &amp; Delivery</strong></td>
              <td data-label="Objective">Implement and validate SPF/DKIM/DMARC; repair domain reputation.</td>
              <td data-label="Outcome">Mail lands on first send; clients and courts recognize genuine communications; impostors fail.</td>
            </tr>
            <tr>
              <td data-label="Service"><strong>Backup &amp; Recovery Validation</strong></td>
              <td data-label="Objective">Test, time, and document recovery under real conditions.</td>
              <td data-label="Outcome">Critical data restores quickly and verifiably; continuity evidence accepted by insurers.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ===== Advisory Retainers (Support) ===== */}
      <div className="card">
        <h2 className="title-xl">Advisory Retainers (Support)</h2>

        {/* Desktop header */}
        <table>
          <thead>
            <tr><th>Plan</th><th>Monthly Fee</th><th>Scope</th><th>Best For</th></tr>
          </thead>
        </table>
        {/* Spacer + mobile-friendly body */}
        <div aria-hidden="true" style={{ height: '.25rem' }} />
        <table>
          <tbody>
            <tr>
              <td data-label="Plan"><strong>Support &amp; Escalation Advisor</strong></td>
              <td data-label="Monthly Fee">$495</td>
              <td data-label="Scope">Direct senior response for incidents, root-cause clarity, and brief post-incident reports.</td>
              <td data-label="Best For">Firms that need trusted escalation when MSP support stalls.</td>
            </tr>
            <tr>
              <td data-label="Plan"><strong>Advisory Partner</strong></td>
              <td data-label="Monthly Fee">$995</td>
              <td data-label="Scope">Proactive oversight of access, email, and recovery with quarterly reviews and leadership updates.</td>
              <td data-label="Best For">Firms that want continuous assurance their systems remain compliant and ready for scrutiny.</td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: '.75rem' }}>
          Both tiers provide direct access to a Principal Consultant — no call queues, no hand-offs, no ticket system.
        </p>
      </div>

      {/* ===== How Clients Engage ===== */}
      <div className="card">
        <h2 className="title-xl">How Clients Engage</h2>
        <ol>
          <li><strong>Consultation (30 Minutes)</strong> — Discuss goals, exposures, and insurer requirements.</li>
          <li><strong>Project Execution (Secure)</strong> — Implement corrections, validate results, and deliver final documentation.</li>
          <li><strong>Ongoing Advisory (Support)</strong> — Maintain alignment and resolve issues before they escalate.</li>
          <li><strong>Review &amp; Renewal</strong> — Biannual meeting to confirm stability, track changes, and set priorities.</li>
        </ol>
        <p>This disciplined process gives small firms the same governance cycle large organizations achieve with internal IT leadership.</p>
      </div>

      {/* ===== The JGS Difference ===== */}
      <div className="card">
        <h2 className="title-xl">Why Firms Choose JGS</h2>
        <ul>
          <li><strong>Direct accountability</strong> from consultation to completion.</li>
          <li><strong>Fixed scope &amp; price</strong> — predictable engagements, no hourly uncertainty.</li>
          <li><strong>Plain-English reporting</strong> aligned to insurer and regulator language.</li>
          <li><strong>Continuity over tickets</strong> — ongoing relationship, not a queue system.</li>
        </ul>
        <p style={{ fontStyle: 'italic', opacity: .9 }}>
          “I built JGS for the firms that can’t afford half-solutions.” — Jeremiah Spears, Founder &amp; Principal Consultant
        </p>
      </div>

      {/* ===== Results ===== */}
      <div className="card">
        <h2 className="title-xl">Results You Can See and Prove</h2>
        {/* Desktop header */}
        <table>
          <thead>
            <tr><th>Business Area</th><th>Impact</th></tr>
          </thead>
        </table>
        {/* Spacer + mobile-friendly body */}
        <div aria-hidden="true" style={{ height: '.25rem' }} />
        <table>
          <tbody>
            <tr>
              <td data-label="Business Area"><strong>Operations</strong></td>
              <td data-label="Impact">Filings and invoices deliver correctly; communication is trusted.</td>
            </tr>
            <tr>
              <td data-label="Business Area"><strong>Continuity</strong></td>
              <td data-label="Impact">Backups verified; recovery rehearsed and documented.</td>
            </tr>
            <tr>
              <td data-label="Business Area"><strong>Compliance</strong></td>
              <td data-label="Impact">Auditors and insurers receive credible evidence of control.</td>
            </tr>
            <tr>
              <td data-label="Business Area"><strong>Client Trust</strong></td>
              <td data-label="Impact">Partners can demonstrate responsibility and reliability.</td>
            </tr>
            <tr>
              <td data-label="Business Area"><strong>Leadership Confidence</strong></td>
              <td data-label="Impact">There’s always a direct expert to call — no ambiguity.</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontWeight: 700, marginTop: '.75rem' }}>
          Microsoft 365 Secured. Email Delivered. Data Recovered.
        </p>
      </div>
    </section>
  );
}
