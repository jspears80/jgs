'use client';
import React from 'react';

export default function AboutPage() {
  return (
    <section className="section container">
      {/* ===== Page Header ===== */}
      <div className="card full">
        <h1 className="hero">JGS Cloud Compliance, LLC — Firm Overview </h1>
        <p className="lead">Secure and Support — Microsoft 365 for Law &amp; CPA Firms</p>
      </div>

      {/* ===== About the Firm ===== */}
      <div className="card">
        <h2 className="title-xl">About the Firm</h2>
        <p>
          JGS Cloud Compliance is a Microsoft 365 consulting practice built for small professional firms
          that cannot afford uncertainty. We help law and accounting firms operate securely, continuously,
          and confidently by addressing the two needs every professional environment shares —
          to be secure and to stay supported.
        </p>
        <p>
          Founded by <strong>Jeremiah Spears</strong>, a senior Microsoft 365 engineer and former
          escalation resource for MSPs, JGS bridges the gap between IT support and true accountability.
          Where MSPs manage uptime, JGS provides assurance—making environments defensible,
          documented, and ready for review.
        </p>
      </div>

      {/* ===== Who We Serve ===== */}
      <div className="card">
        <h2 className="title-xl">Who We Serve</h2>
        <ul>
          <li>Law firms and CPA practices with 10–25 staff relying on Microsoft 365.</li>
          <li>Client confidentiality and continuity are non-negotiable.</li>
          <li>Deadlines driven by courts, regulators, and tax calendars.</li>
          <li>Any missed email or filing can damage reputation and revenue.</li>
        </ul>
        <p>
          These firms aren’t looking for another IT vendor—they want a professional partner who
          takes ownership, finishes the work, and proves the result.
        </p>
      </div>

      {/* ===== Problem We Solve ===== */}
      <div className="card">
        <h2 className="title-xl">The Problem We Solve</h2>
        <ul>
          <li>Dormant or over-permissioned accounts weaken internal control.</li>
          <li>Incomplete SPF, DKIM, DMARC configs allow impersonation or lost mail.</li>
          <li>Backups assumed to exist but never tested.</li>
          <li>Fragmented accountability between MSPs, auditors, and vendors.</li>
        </ul>
        <p>
          JGS eliminates that ambiguity by combining hands-on remediation with executive-level clarity.
        </p>
      </div>

      {/* ===== Secure & Support Philosophy ===== */}
      <div className="card">
        <h2 className="title-xl">Our Philosophy — Secure &amp; Support</h2>
        <table>
          <thead>
            <tr><th>Discipline</th><th>Purpose</th><th>Result</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Secure</strong></td>
              <td>Focused projects that fix access, email, and recovery weaknesses.</td>
              <td>A hardened, validated, defensible environment.</td>
            </tr>
            <tr>
              <td><strong>Support</strong></td>
              <td>Ongoing advisory that keeps controls effective over time.</td>
              <td>Continuity, confidence, and leadership assurance.</td>
            </tr>
          </tbody>
        </table>
        <p><strong>Lifecycle:</strong> Assess → Secure → Support → Review.</p>
      </div>

      {/* ===== Services Overview ===== */}
      <div className="card">
        <h2 className="title-xl">Focused Projects (Secure)</h2>
        <table>
          <thead>
            <tr><th>Service</th><th>Objective</th><th>Outcome</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Security Hardening</td>
              <td>Remove stale accounts and tighten permissions.</td>
              <td>Unauthorized access eliminated; leadership knows who has control.</td>
            </tr>
            <tr>
              <td>Email Authentication &amp; Delivery</td>
              <td>Implement SPF/DKIM/DMARC and repair domain reputation.</td>
              <td>Mail lands first time; clients and courts trust it.</td>
            </tr>
            <tr>
              <td>Backup &amp; Recovery Validation</td>
              <td>Test and document real restore performance.</td>
              <td>Continuity proven; insurers accept evidence of resilience.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ===== Advisory Retainers ===== */}
      <div className="card">
        <h2 className="title-xl">Advisory Retainers (Support)</h2>
        <table>
          <thead>
            <tr><th>Plan</th><th>Fee</th><th>Scope</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Support &amp; Escalation Advisor</td>
              <td>$495 / mo</td>
              <td>Direct senior response for incidents and brief post-incident reports.</td>
            </tr>
            <tr>
              <td>Advisory Partner</td>
              <td>$995 / mo</td>
              <td>Ongoing oversight with quarterly reviews and leadership updates.</td>
            </tr>
          </tbody>
        </table>
        <p>No queues, no hand-offs — direct access to your Principal Consultant.</p>
      </div>

      {/* ===== Difference ===== */}
      <div className="card">
        <h2 className="title-xl">Why Firms Choose JGS</h2>
        <ul>
          <li>Direct accountability from consultation to completion.</li>
          <li>Fixed scope and transparent pricing.</li>
          <li>Plain-English reporting aligned to insurer language.</li>
          <li>Continuity support over ticket queues.</li>
        </ul>
        <p style={{ fontStyle:'italic', opacity:.9 }}>
          “I built JGS for the firms that can’t afford half-solutions.” — Jeremiah Spears
        </p>
      </div>

      {/* ===== Results ===== */}
      <div className="card">
        <h2 className="title-xl">Results in Business Terms</h2>
        <ul>
          <li>Filings and invoices deliver on time and are received.</li>
          <li>Clients and courts trust your communications.</li>
          <li>Leadership has verifiable proof of security and recovery.</li>
          <li>Insurers renew with confidence.</li>
        </ul>
        <p style={{ fontWeight:700 }}>
          Microsoft 365 Secured. Email Delivered. Data Recovered.
        </p>
      </div>
    </section>
  );
}

