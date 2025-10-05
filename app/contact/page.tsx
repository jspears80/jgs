'use client';
import React from 'react';

export default function AboutPage() {
  return (
    <section className="section container">
      {/* ===== Page Header ===== */}
      <div className="card full" id="about">
        <span className="eyebrow">Firm Overview</span>
        <h1 className="hero" style={{ marginBottom: '.5rem' }}>
          JGS Cloud Compliance, LLC — Firm Overview (2025 Edition)
        </h1>
        <p className="lead" style={{ maxWidth: '72ch' }}>
          Secure and Support — Microsoft 365 for Law &amp; CPA Firms
        </p>
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
          Founded by Jeremiah Spears, a senior Microsoft 365 engineer and former lead escalation resource for managed
          service providers, JGS bridges the gap between IT support and true accountability.
        </p>
        <p>
          Where MSPs manage uptime, JGS provides assurance — making Microsoft 365 environments defensible, documented,
          and ready for insurer or auditor review.
        </p>
        <p>
          <strong>Our philosophy is simple:</strong> We secure and support the technology professional firms depend on,
          so trust, deadlines, and compliance are never in question.
        </p>
      </div>

      {/* ===== Who We Serve ===== */}
      <div className="card" id="who-we-serve">
        <h2 className="title-xl">Who We Serve</h2>
        <p>
          JGS works exclusively with law firms and accounting practices employing roughly 10–25 people — large enough to
          depend on Microsoft 365 for daily operations but too small to justify internal IT management.
        </p>
        <p>These firms share a common reality:</p>
        <ul>
          <li>Client confidentiality and continuity are non-negotiable.</li>
          <li>Deadlines are fixed by courts, regulators, or tax calendars.</li>
          <li>A single failed email, missed filing, or data loss can threaten reputation and revenue.</li>
        </ul>
        <p>
          Our clients aren’t looking for another IT vendor. They’re looking for a professional partner who takes
          ownership, finishes the work, and proves the result.
        </p>
      </div>

      {/* ===== The Problem We Solve ===== */}
      <div className="card" id="problem">
        <h2 className="title-xl">The Problem We Solve</h2>
        <p>
          Most firms already have IT providers, but none who guarantee completeness. Systems may be “online,” but they’re
          often unverified, misconfigured, or undocumented.
        </p>
        <p>Common exposure points include:</p>
        <ul>
          <li>Dormant or over-permissioned accounts that weaken internal control.</li>
          <li>Incomplete SPF, DKIM, and DMARC configurations that allow impersonation or lost invoices.</li>
          <li>Backups assumed to exist but never tested.</li>
          <li>
            Fragmented accountability — MSPs, auditors, and vendors each covering a piece, leaving leadership without
            closure.
          </li>
        </ul>
        <p>
          The result is risk that hides in plain sight: incidents no one claims responsibility for and questions leadership
          can’t answer with confidence. JGS eliminates that ambiguity by combining hands-on remediation with executive-level
          clarity.
        </p>
      </div>

      {/* ===== Philosophy: Secure & Support ===== */}
      <div className="card" id="philosophy">
        <h2 className="title-xl">Our Philosophy: Secure &amp; Support</h2>
        <p>Everything JGS does fits naturally into two disciplines:</p>
        <table>
          <thead>
            <tr>
              <th>Discipline</th>
              <th>Purpose</th>
              <th>Result</th>
            </tr>
          </thead>
        </table>
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
          This structure is more than marketing — it’s the JGS operating model:
          <br />
          <strong>Assess → Secure → Support → Review.</strong>
        </p>
      </div>

      {/* ===== What We Deliver — Focused Projects (Secure) ===== */}
      <div className="card" id="projects">
        <h2 className="title-xl">What We Deliver — Focused Projects (Secure)</h2>
        <p>
          One-time, fixed-fee engagements that eliminate immediate risks and bring Microsoft 365 into a verified state of
          control.
        </p>
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Objective</th>
              <th>Tangible Outcome (Business Impact)</th>
            </tr>
          </thead>
        </table>
        <div aria-hidden="true" style={{ height: '.25rem' }} />
        <table>
          <tbody>
            <tr>
              <td data-label="Service"><strong>Security Hardening</strong></td>
              <td data-label="Objective">Close access gaps, remove stale accounts, and enforce least-privilege control across Microsoft 365.</td>
              <td data-label="Business Impact">
                Unauthorized access is eliminated; internal control can be demonstrated to partners, insurers, and regulators.
                Leadership knows exactly who has authority — and why.
              </td>
            </tr>
            <tr>
              <td data-label="Service"><strong>Email Authentication &amp; Delivery</strong></td>
              <td data-label="Objective">Implement and validate SPF, DKIM, and DMARC to restore sender trust and ensure reliable message delivery.</td>
              <td data-label="Business Impact">
                Every message is verified, recognized, and delivered on the first send. Clients, courts, and counterparties can
                rely on firm communications without fear of impersonation.
              </td>
            </tr>
            <tr>
              <td data-label="Service"><strong>Backup &amp; Recovery Validation</strong></td>
              <td data-label="Objective">Test, time, and document recovery under real conditions.</td>
              <td data-label="Business Impact">
                Critical data can be restored quickly and verifiably. Continuity evidence satisfies insurers and gives leadership
                assurance the firm can survive disruption without missing deadlines.
              </td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginTop: '.75rem' }}>
          Each project is clearly scoped, priced, and delivered with a short, plain-English report suitable for leadership,
          auditors, or insurers.
        </p>
      </div>

      {/* ===== Advisory Retainers (Support) ===== */}
      <div className="card" id="advisory">
        <h2 className="title-xl">Advisory Retainers (Support)</h2>
        <p>
          After securing the environment, JGS continues to support leadership through proactive oversight and responsive
          expertise.
        </p>
        <table>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Monthly Fee</th>
              <th>Scope</th>
              <th>Best For</th>
            </tr>
          </thead>
        </table>
        <div aria-hidden="true" style={{ height: '.25rem' }} />
        <table>
          <tbody>
            <tr>
              <td data-label="Plan"><strong>Support &amp; Escalation Advisor</strong></td>
              <td data-label="Monthly Fee">$495</td>
              <td data-label="Scope">Senior-level response for incidents or complex problems, plus concise post-incident summaries.</td>
              <td data-label="Best For">Firms that want a trusted escalation contact when MSP support stalls.</td>
            </tr>
            <tr>
              <td data-label="Plan"><strong>Advisory Partner</strong></td>
              <td data-label="Monthly Fee">$995</td>
              <td data-label="Scope">Ongoing oversight of access, email, and recovery with quarterly reviews and leadership updates.</td>
              <td data-label="Best For">Firms that want continuous assurance their systems remain compliant and ready for scrutiny.</td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginTop: '.75rem' }}>
          Both tiers provide direct access to a Principal Consultant — no call queues, no hand-offs, no ticket system.
        </p>
      </div>

      {/* ===== How Clients Engage ===== */}
      <div className="card" id="engage">
        <h2 className="title-xl">How Clients Engage</h2>
        <ol>
          <li>
            <strong>Consultation (30 Minutes)</strong> — Discuss goals, exposures, and insurer requirements.
          </li>
          <li>
            <strong>Project Execution (Secure)</strong> — Implement corrections, validate results, and deliver final
            documentation.
          </li>
          <li>
            <strong>Ongoing Advisory (Support)</strong> — Maintain alignment and respond to issues before they become crises.
          </li>
          <li>
            <strong>Review &amp; Renewal</strong> — Biannual meeting to confirm stability, track changes, and identify new
            priorities.
          </li>
        </ol>
        <p>
          This disciplined process gives small firms the same governance cycle large organizations achieve through internal IT
          leadership.
        </p>
      </div>

      {/* ===== The JGS Difference ===== */}
      <div className="card" id="difference">
        <h2 className="title-xl">The JGS Difference</h2>
        <ul>
          <li><strong>Direct Accountability</strong> — Clients work with the same expert from consultation to completion.</li>
          <li><strong>Fixed Scope, Fixed Price</strong> — Every engagement is defined and predictable.</li>
          <li><strong>Plain-English Reporting</strong> — Business impact comes first; technical details follow.</li>
          <li><strong>Evidence Built In</strong> — Deliverables use the same language insurers and regulators expect.</li>
          <li><strong>Continuity, Not Tickets</strong> — Support is proactive relationship management, not a queue system.</li>
        </ul>
        <p style={{ fontStyle: 'italic', opacity: 0.9 }}>
          “I was the senior engineer MSPs escalated to when they were out of options. I built JGS for the firms that can’t
          afford half-solutions.” — Jeremiah Spears, Founder &amp; Principal Consultant
        </p>
      </div>

      {/* ===== Results You Can See and Prove ===== */}
      <div className="card" id="results">
        <h2 className="title-xl">Results You Can See and Prove</h2>
        <table>
          <thead>
            <tr>
              <th>Business Area</th>
              <th>Impact</th>
            </tr>
          </thead>
        </table>
        <div aria-hidden="true" style={{ height: '.25rem' }} />
        <table>
          <tbody>
            <tr>
              <td data-label="Business Area"><strong>Operations</strong></td>
              <td data-label="Impact">Filings and invoices deliver correctly; communication is trusted.</td>
            </tr>
            <tr>
              <td data-label="Business Area"><strong>Continuity</strong></td>
              <td data-label="Impact">Backups are verified; recovery is rehearsed and documented.</td>
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
        <p style={{ marginTop: '.75rem' }}>
          Every engagement ends the same way: systems configured correctly, leadership confident, and documentation that
          speaks for itself.
        </p>
      </div>

      {/* ===== Vision & Values ===== */}
      <div className="card" id="vision">
        <h2 className="title-xl">Vision</h2>
        <p>
          To be the principal consultancy for small professional firms that need the assurance of enterprise-grade resilience
          without enterprise complexity.
        </p>
        <p>
          Over the next five years, JGS will scale through remote delivery, insurer collaboration, and recognition of its
          deliverables as accepted evidence of cyber and continuity readiness.
        </p>
      </div>

      <div className="card" id="values">
        <h2 className="title-xl">Core Values</h2>
        <ul>
          <li>Clarity before complexity.</li>
          <li>Accountability over automation.</li>
          <li>Continuity as the true measure of success.</li>
        </ul>
      </div>

      {/* ===== In Summary ===== */}
      <div className="card" id="summary">
        <h2 className="title-xl">In Summary</h2>
        <p>
          JGS Cloud Compliance helps law and accounting firms operate securely, confidently, and without interruption on
          Microsoft 365.
        </p>
        <p>
          We close risks through focused projects and keep firms stable through ongoing advisory. Our clients gain not just
          protection, but proof — clear evidence that their systems, data, and communications are under control.
        </p>
        <p style={{ fontWeight: 700 }}>
          Microsoft 365 Secured. Email Delivered. Data Recovered.
          <br />
          That’s not a tagline — it’s the measurable result of every JGS engagement.
        </p>
      </div>
    </section>
  );
}
