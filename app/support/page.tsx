// app/support/page.tsx
import React from "react";
import styles from "./support.module.css";

export const metadata = {
  title: "Support — Microsoft 365 Helpdesk & Advisory | JGS Cloud Compliance",
  description:
    "Because your firm shouldn’t have to wait for answers. Dedicated Microsoft 365 helpdesk and advisor in one predictable monthly plan.",
};

export default function SupportPage() {
  return (
    <section className={styles.wrap}>
      <section className={`${styles.card} ${styles.accent}`}>
        <h2>🤝 Support — Microsoft 365 Helpdesk &amp; Advisory</h2>
        <p className={styles.tag}>Because your firm shouldn’t have to wait for answers.</p>

        <div className={styles.twoCol}>
          <div>
            <h3>Microsoft 365 for Law &amp; CPA Firms</h3>
            <p>Your team depends on Microsoft 365 every hour of every day.</p>
            <p>
              When something breaks, stalls, or confuses, you need more than a ticket number — you
              need someone who knows your system, understands your staff, and responds fast.
            </p>
            <p>
              Support gives your firm a dedicated Microsoft 365 helpdesk and advisor in one
              predictable monthly plan.
            </p>
            <p className={styles.price}>
              <strong>$995 per month.</strong>
              <br />
              Fast response. Clear accountability.
            </p>
          </div>

          <aside className={styles.side}>
            <h4>The Business Value</h4>
            <ul>
              <li>
                <strong>Keep your firm productive.</strong>
                <br />
                Quick, direct help when Outlook, OneDrive, Teams, or permissions act up — no
                tier-1 queue, no run-around.
              </li>
              <li>
                <strong>Get senior-level answers.</strong>
                <br />
                Every request is handled by the same Microsoft 365 consultant who secured your
                tenant — not a random tech who’s learning on the job.
              </li>
              <li>
                <strong>Document every fix.</strong>
                <br />
                Each change, update, or resolution is logged and summarized so you can prove
                continuity and control.
              </li>
              <li>
                <strong>Simplify your operations.</strong>
                <br />
                One email or call — issues resolved, staff supported, compliance maintained.
              </li>
            </ul>
          </aside>
        </div>

        <div className={styles.divider} />

        <h4>What You Get</h4>
        <div className={styles.steps}>
          <article className={styles.step}>
            <div className={styles.badge}>1️⃣</div>
            <h5>Responsive Helpdesk</h5>
            <p>
              Fast, friendly, expert support for Outlook, SharePoint, Teams, OneDrive, licensing,
              and user access — with quick response guaranteed.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>2️⃣</div>
            <h5>Advisory Access</h5>
            <p>
              Ask policy questions, plan rollouts, or confirm configuration changes before they
              happen. You get a trusted advisor, not just a break-fix service.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>3️⃣</div>
            <h5>Managed Accountability</h5>
            <p>
              Every month you receive a Support Report showing what was handled, what was updated,
              and what risks were prevented.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>4️⃣</div>
            <h5>Microsoft 365 Kept in Shape</h5>
            <p>
              We maintain permissions, alerts, and best-practice settings so your environment stays
              as secure and reliable as the day it was hardened.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}
