// app/custom/page.tsx
import React from "react";
import styles from "./custom.module.css";

export const metadata = {
  title: "Custom — Bring Us Your Microsoft 365 Idea | JGS Cloud Compliance",
  description:
    "If it touches Microsoft 365, we can design it, build it, or automate it. Your ideas, engineered for Microsoft 365.",
};

export default function CustomPage() {
  return (
    <section className={styles.wrap}>
      <section className={`${styles.card} ${styles.accent}`}>
        <h2>⚙️ Custom — Bring Us Your Microsoft 365 Idea</h2>
        <p className={styles.tag}>
          If it touches Microsoft 365, we can design it, build it, or automate it.
        </p>

        <div className={styles.twoCol}>
          <div>
            <h3>Microsoft 365 for Law &amp; CPA Firms</h3>
            <p>Every firm works differently. The challenge is making Microsoft 365 work that way too.</p>
            <p>
              Custom is where you bring your ideas — the “what ifs,” the “can this be done,” the
              workflows you wish existed.
            </p>
            <p>
              We take those ideas and turn them into secure, governed systems built entirely inside
              Microsoft 365.
            </p>
            <p>
              From quick automations to full-scale firm integrations — if it helps your people work
              better, we’ll design it.
            </p>
            <p className={styles.price}>
              <strong>From $495+.</strong>
              <br />
              Scoped upfront. Fixed per deliverable.
            </p>
          </div>

          <aside className={styles.side}>
            <h4>The Business Value</h4>
            <ul>
              <li>
                <strong>Create what doesn’t exist yet.</strong>
                <br />
                If you can imagine the outcome, we can build it natively inside Microsoft 365.
              </li>
              <li>
                <strong>Connect your tools.</strong>
                <br />
                Outlook, Teams, SharePoint, Power Automate, and OneDrive working together as one.
              </li>
              <li>
                <strong>Remove repetition.</strong>
                <br />
                Automate the everyday steps that slow your team down — intake, routing, approvals,
                reminders.
              </li>
              <li>
                <strong>Future-ready foundation.</strong>
                <br />
                Every Custom project is built on secure, Microsoft-supported frameworks — ready for
                Copilot and AI.
              </li>
            </ul>
          </aside>
        </div>

        <div className={styles.divider} />

        <h4>What You Get</h4>
        <div className={styles.steps4}>
          <article className={styles.step}>
            <div className={styles.badge}>1️⃣</div>
            <h5>Blueprint &amp; Design</h5>
            <p>
              We listen first — mapping your idea and designing a workflow, portal, or automation
              that fits your firm perfectly.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>2️⃣</div>
            <h5>Build &amp; Integration</h5>
            <p>
              Your concept comes to life inside Microsoft 365 — connected through Teams, SharePoint,
              Power Automate, or Power Apps.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>3️⃣</div>
            <h5>Governance &amp; Security</h5>
            <p>
              Access, retention, and audit trails built-in through Microsoft Purview and Entra ID.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>4️⃣</div>
            <h5>Training &amp; Handoff</h5>
            <p>
              Simple documentation and walk-throughs so your staff can use and evolve it
              confidently.
            </p>
          </article>
        </div>

        <div className={styles.divider} />

        <div className={styles.twins}>
          <section className={styles.listCard}>
            <h4>When to Call Us</h4>
            <ul>
              <li>You’ve outgrown email and shared drives.</li>
              <li>Your staff repeat the same manual steps every day.</li>
              <li>You want your tools to talk to each other.</li>
              <li>You need automation or AI but don’t know where to start.</li>
              <li>You want to modernize without buying new software.</li>
            </ul>
            <p className={styles.note}>
              If it lives in Microsoft 365, we can make it simpler, faster, and provable.
            </p>
          </section>

          <section className={styles.listCard}>
            <h4>What That Might Look Like</h4>
            <ul>
              <li>Automating client intake or onboarding.</li>
              <li>Building a custom portal for clients or staff.</li>
              <li>Connecting data across Teams, SharePoint, and Outlook.</li>
              <li>Turning procedures into workflows that run automatically.</li>
              <li>Preparing your systems for Microsoft Copilot and AI.</li>
            </ul>
            <p className={styles.note}>
              We’ll take what’s in your head and make it work inside your system.
            </p>
          </section>
        </div>

        <div className={styles.divider} />

        <section className={styles.result}>
          <h4>The Result</h4>
          <p>
            A Microsoft 365 environment that reflects your firm —<br />
            clean, connected, automated, and ready for whatever’s next.
          </p>
          <p>
            That’s what Custom is:<br />
            your ideas, engineered for Microsoft 365.
          </p>
        </section>
      </section>
    </section>
  );
}
