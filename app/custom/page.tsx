// app/custom/page.tsx
import React from "react";

export const metadata = {
  title:
    "Custom — Microsoft 365 Workflows & Governance by Design | JGS Cloud Compliance",
  description:
    "Design Microsoft 365 around your firm. Automate workflows, simplify collaboration, and hard-wire governance—security and productivity in one motion.",
};

export default function CustomPage() {
  return (
    <section className="section container">
      <div className="page service-grid">
        {/* ===== HERO SECTION ===== */}
        <div className="hero-block">
          <h1 className="hero">⚙️ Custom — Microsoft 365, Built Around Your Firm</h1>
          <h2 className="subhero">
            Turn everyday work into governed workflows — faster, clearer, and easier to audit.
          </h2>

          <p className="lead">Microsoft 365 for Law &amp; CPA Firms</p>

          <p className="body-text">
            Tools should fit the way your team actually works. <strong>Custom</strong> transforms
            routine steps into reliable Microsoft 365 workflows — reducing hand-offs, tightening
            governance, and keeping evidence in reach. Security and productivity, in one motion.
          </p>

          <p className="price">
            <strong>From $495+</strong>
            <br />
            Scoping first. Fixed price per deliverable.
          </p>
        </div>

        <hr className="divider" />

        {/* ===== BUSINESS VALUE ===== */}
        <section className="business-value">
          <h2>The Business Value</h2>

          <ul className="value-list">
            <li>
              <strong>Work faster with fewer errors.</strong>
              <br />
              Automate repeatable steps in intake, reviews, approvals, and hand-offs.
            </li>
            <li>
              <strong>Keep governance built-in.</strong>
              <br />
              Access, retention, and audit trails enforced by design — not by memory.
            </li>
            <li>
              <strong>Reduce manual effort.</strong>
              <br />
              Less copy-paste, fewer status emails, clearer ownership at every step.
            </li>
            <li>
              <strong>Make audits easier.</strong>
              <br />
              Evidence lives inside the process — policies and results are easy to show.
            </li>
          </ul>
        </section>

        <hr className="divider" />

        {/* ===== WHAT YOU GET ===== */}
        <section className="deliverables">
          <h2>What You Get</h2>

          <div className="deliverable">
            <h3>1️⃣ Workflow Design</h3>
            <p>
              Map the real-world steps your team follows and convert them into a clear,
              governed Microsoft 365 flow.
            </p>
          </div>

          <div className="deliverable">
            <h3>2️⃣ Build &amp; Implementation</h3>
            <p>
              Configure SharePoint structures, lists, and automations (Power Automate/Forms/Teams)
              with the right roles and guardrails.
            </p>
          </div>

          <div className="deliverable">
            <h3>3️⃣ Governance by Default</h3>
            <p>
              Permissions, retention, and logging built into the workflow — evidence captured
              as work happens.
            </p>
          </div>

          <div className="deliverable">
            <h3>4️⃣ Documentation &amp; Handoff</h3>
            <p>
              Admin notes, user quick-start, and a simple support playbook so your team can run
              it confidently day-to-day.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* ===== COMMON USE CASES ===== */}
        <section className="business-value">
          <h2>Common Use Cases</h2>

          <ul className="value-list">
            <li>
              <strong>Client Intake &amp; Engagement</strong> — structured data capture, approvals,
              matter/workspace creation, governed sharing.
            </li>
            <li>
              <strong>Document Reviews &amp; Sign-Off</strong> — routed reviews, reminders,
              versioning, and retention baked in.
            </li>
            <li>
              <strong>Onboarding / Offboarding</strong> — access, folders, Teams channels, and
              licenses handled the same way every time.
            </li>
            <li>
              <strong>Recurring Compliance Tasks</strong> — scheduled checks with timestamped
              results and simple exportable evidence.
            </li>
          </ul>
        </section>

        <hr className="divider" />

        {/* ===== HOW IT WORKS ===== */}
        <section className="deliverables">
          <h2>How It Works</h2>

          <div className="deliverable">
            <h3>Step 1 — Scope</h3>
            <p>
              Short workshop to define outcomes, owners, exceptions, and governance requirements.
            </p>
          </div>

          <div className="deliverable">
            <h3>Step 2 — Build</h3>
            <p>
              We prototype quickly, review with stakeholders, and finalize the workflow in your
              tenant.
            </p>
          </div>

          <div className="deliverable">
            <h3>Step 3 — Launch</h3>
            <p>
              Light training, documentation, and a stabilization window to ensure adoption and
              accountability.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* ===== CTA ===== */}
        <section className="service-cta">
          <p>
            Ready to work smarter inside Microsoft 365?
            <br />
            <strong>Schedule a Custom design session</strong> or email{" "}
            <a
              href="mailto:support@cloudjgs.com"
              style={{ color: "#9b8df2", textDecoration: "none" }}
            >
              support@cloudjgs.com
            </a>{" "}
            to scope your first workflow.
          </p>
        </section>
      </div>
    </section>
  );
}
