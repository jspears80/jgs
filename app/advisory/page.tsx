// app/support/page.tsx
import React from "react";

export const metadata = {
  title:
    "Microsoft 365 Helpdesk & Advisory for Law and CPA Firms | JGS Cloud Compliance",
  description:
    "Responsive, senior-level Microsoft 365 support for professional firms. Fast help, trusted guidance, and documented accountability — all in one predictable plan.",
};

export default function SupportPage() {
  return (
    <section className="section container">
      <div className="page service-grid">
        {/* ===== HERO SECTION ===== */}
        <div className="hero-block">
          <h1 className="hero">🤝 Support — Microsoft 365 Helpdesk & Advisory</h1>
          <h2 className="subhero">
            Because your firm shouldn’t have to wait for answers.
          </h2>

          <p className="lead">Microsoft 365 for Law &amp; CPA Firms</p>

          <p className="body-text">
            Your team depends on Microsoft 365 every hour of every day. When
            something breaks, stalls, or confuses, you need more than a ticket
            number — you need someone who knows your system, understands your
            staff, and responds fast. <strong>Support</strong> gives your firm a
            dedicated Microsoft 365 helpdesk and advisor in one predictable
            monthly plan.
          </p>

          <p className="price">
            <strong>$995 per month.</strong>
            <br />
            Fast response. Clear accountability.
          </p>
        </div>

        <hr className="divider" />

        {/* ===== BUSINESS VALUE ===== */}
        <section className="business-value">
          <h2>The Business Value</h2>

          <ul className="value-list">
            <li>
              <strong>Keep your firm productive.</strong>
              <br />
              Quick, direct help when Outlook, OneDrive, Teams, or permissions
              act up — no tier-1 queue, no run-around.
            </li>
            <li>
              <strong>Get senior-level answers.</strong>
              <br />
              Every request is handled by the same Microsoft 365 consultant who
              secured your tenant — not a random tech who’s learning on the job.
            </li>
            <li>
              <strong>Document every fix.</strong>
              <br />
              Each change, update, or resolution is logged and summarized so you
              can prove continuity and control.
            </li>
            <li>
              <strong>Simplify your operations.</strong>
              <br />
              One email or call — issues resolved, staff supported, compliance
              maintained.
            </li>
          </ul>
        </section>

        <hr className="divider" />

        {/* ===== WHAT YOU GET ===== */}
        <section className="deliverables">
          <h2>What You Get</h2>

          <div className="deliverable">
            <h3>1️⃣ Responsive Helpdesk</h3>
            <p>
              Fast, friendly, expert support for Outlook, SharePoint, Teams,
              OneDrive, licensing, and user access — with quick response
              guaranteed.
            </p>
          </div>

          <div className="deliverable">
            <h3>2️⃣ Advisory Access</h3>
            <p>
              Ask policy questions, plan rollouts, or confirm configuration
              changes before they happen. You get a trusted advisor, not just a
              break-fix service.
            </p>
          </div>

          <div className="deliverable">
            <h3>3️⃣ Managed Accountability</h3>
            <p>
              Every month you receive a Support Report showing what was handled,
              what was updated, and what risks were prevented.
            </p>
          </div>

          <div className="deliverable">
            <h3>4️⃣ Microsoft 365 Kept in Shape</h3>
            <p>
              We maintain permissions, alerts, and best-practice settings so
              your environment stays as secure and reliable as the day it was
              hardened.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* ===== WHO IT’S FOR ===== */}
        <section className="business-value">
          <h2>Who It’s For</h2>

          <ul className="value-list">
            <li>
              Firms that want a <strong>direct line</strong> for Microsoft 365
              issues — no call center.
            </li>
            <li>Partners tired of waiting hours for small fixes.</li>
            <li>
              Teams that rely on Outlook, SharePoint, and Teams to serve clients
              daily.
            </li>
            <li>
              Firms that value <strong>speed, accountability, and documentation</strong> in
              their support partner.
            </li>
          </ul>
        </section>

        <hr className="divider" />

        {/* ===== CTA ===== */}
        <section className="service-cta">
          <p>
            Stop chasing tickets. Start getting real help.
            <br />
            <strong>
              Book your Support consultation
            </strong>{" "}
            or email{" "}
            <a
              href="mailto:support@cloudjgs.com"
              style={{ color: "#9b8df2", textDecoration: "none" }}
            >
              support@cloudjgs.com
            </a>{" "}
            to connect your firm’s Microsoft 365 helpdesk today.
          </p>
        </section>
      </div>
    </section>
  );
}
