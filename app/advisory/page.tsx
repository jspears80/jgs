'use client';
import React from 'react';

export default function AdvisoryPage() {
  return (
    <section className="section container">
      {/* ===== Page Header ===== */}
      <div className="card full">
        <h1 className="hero">Support — Microsoft 365 Advisory Retainers</h1>
        <p className="lead">
          Once your environment is secure, JGS Cloud Compliance provides continuing assurance through
          advisory retainers that keep leadership informed and the system aligned.  
          <br />Support means direct access to a senior consultant—no tiers, no tickets, no uncertainty.
        </p>
      </div>

      {/* ===== Support & Escalation Advisor ===== */}
      <div className="card">
        <h2 className="title-xl">💧 Support & Escalation Advisor — $495 / month</h2>
        <p>
          Designed for firms that already have an MSP but need a senior Microsoft 365 specialist on call
          when critical issues exceed standard support.
        </p>
        <ul>
          <li>Direct escalation path to your Principal Consultant.</li>
          <li>Incident triage, root-cause analysis, and rapid remediation guidance.</li>
          <li>Plain-English post-incident briefing for leadership.</li>
          <li>Priority response for authentication, mail-flow, and compliance disruptions.</li>
        </ul>
        <p style={{fontWeight:600}}>
          <strong>Result:</strong> Complex issues are resolved correctly the first time,
          with documented closure and restored confidence.
        </p>
      </div>

      {/* ===== Advisory Partner ===== */}
      <div className="card">
        <h2 className="title-xl">📘 Advisory Partner — $995 / month</h2>
        <p>
          A proactive relationship for firms that want continuous oversight of Microsoft 365 security,
          compliance, and continuity—without hiring internal IT leadership.
        </p>
        <ul>
          <li>Quarterly reviews of access, email, and recovery configurations.</li>
          <li>Risk-register updates and Secure Score tracking.</li>
          <li>Change management reviews to prevent configuration drift.</li>
          <li>Leadership reports written in insurer-ready language.</li>
        </ul>
        <p style={{fontWeight:600}}>
          <strong>Result:</strong> Your firm stays secure, compliant, and ready for audit
          while leadership always knows the current state of control.
        </p>
      </div>

      {/* ===== Advisory Process ===== */}
      <div className="card">
        <h2 className="title-xl">Advisory Lifecycle</h2>
        <ol>
          <li>
            <strong>Onboarding Session</strong> — Confirm access, review prior project work, establish metrics.
          </li>
          <li>
            <strong>Active Monitoring &amp; Response</strong> — Address escalation events and support requests directly.
          </li>
          <li>
            <strong>Quarterly Review</strong> — Evaluate Secure Score trends, retention, and authentication policies.
          </li>
          <li>
            <strong>Bi-Annual Renewal</strong> — Discuss value delivered, update scope, and plan next improvements.
          </li>
        </ol>
        <p>
          The retainer model ensures continuity and clear accountability.
          You’ll always know who to call, what was fixed, and why it mattered.
        </p>
      </div>

      {/* ===== Philosophy Reminder ===== */}
      <div className="card">
        <h2 className="title-xl">Secure → Support → Review</h2>
        <p>
          Projects secure your environment; advisory support keeps it that way.
          Each review ensures ongoing alignment with insurer and regulatory standards.
        </p>
        <p style={{fontWeight:700}}>
          Secure and Support isn’t a tagline — it’s our operating model.
        </p>
      </div>

      {/* ===== CTA ===== */}
      <div className="card full book-cta">
        <h2 className="title-xl">Ready for Continuous Assurance?</h2>
        <p className="lead">
          Book a brief consultation to discuss how Advisory Support fits your firm’s governance cycle.
        </p>
        <a
          className="btn primary"
          href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled"
          target="_blank"
          rel="noopener"
        >
          🔒 Book Consultation
        </a>
      </div>
    </section>
  );
}
