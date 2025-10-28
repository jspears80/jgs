// app/secure/page.tsx
import React from "react";
import styles from "./secure.module.css";

export const metadata = {
  title: "Secure — Flat-Fee Microsoft 365 Hardening | JGS Cloud Compliance",
  description:
    "Because trust isn’t something you assume — it’s something you prove. Secure resets Microsoft 365 so it’s organized, protected, and defensible.",
};

export default function SecurePage() {
  return (
    <section className={styles.wrap}>
      {/* ===== HERO ===== */}
      <header className={styles.hero}>
        <div className={styles.kicker}>Secure • Support • Prove</div>
        <h1>Microsoft 365 for Law &amp; CPA Firms</h1>
        <p className={styles.lede}>
          Professional firms run on trust — between partners, clients, and insurers.
        </p>
        <p className={styles.lede}>
          JGS Cloud Compliance protects that trust by securing Microsoft 365, maintaining it
          day-to-day, and proving it’s governed to professional standards.
        </p>
        <p className={styles.lede}>
          Our work gives your firm visible control, reliable support, and undeniable proof that
          your data — and reputation — are protected.
        </p>

        <div className={styles.pillGrid}>
          <span className={styles.pill}>
            🛡️ <strong>SECURE</strong> — Flat-fee Microsoft 365 hardening that restores trust,
            compliance, and peace of mind.
          </span>
          <span className={styles.pill}>
            🤝 <strong>SUPPORT</strong> — Your Microsoft 365 helpdesk and advisor — steady support,
            fast fixes, full accountability.
          </span>
          <span className={styles.pill}>
            📊 <strong>PROVE</strong> — Deliver audit-ready Microsoft 365 evidence your clients,
            auditors, and insurers believe.
          </span>
          <span className={styles.pill}>
            ⚙️ <strong>CUSTOM</strong> — Design Microsoft 365 around your firm — efficient,
            compliant, and uniquely yours.
          </span>
        </div>

        <p className={styles.sublede}>
          JGS Cloud Compliance helps professional firms operate with clarity, consistency, and
          confidence — inside a Microsoft 365 environment that’s secure, documented, and built to
          professional standards.
        </p>

        <figure className={styles.founder}>
          <figcaption>
            <div className={styles.founderName}>Jeremiah Spears</div>
            <div className={styles.founderTitle}>Founder &amp; Principal Consultant</div>
          </figcaption>
          <blockquote className={styles.quote}>
            “I’ve seen too many firms run on bare-bones Microsoft 365, told they’re secure when
            they’re not.
            <br />
            I built JGS to fix that — to deliver security you can prove, not just assume.”
          </blockquote>
        </figure>
      </header>

      {/* ===== SECURE CARD ===== */}
      <section className={`${styles.card} ${styles.accent}`}>
        <h2>🛡️ Secure — Flat-Fee Microsoft 365 Hardening</h2>
        <p className={styles.tag}>
          Because trust isn’t something you assume — it’s something you prove.
        </p>

        <div className={styles.twoCol}>
          <div>
            <h3>Microsoft 365 for Law &amp; CPA Firms</h3>
            <p>Your firm runs on trust — between partners, clients, and insurers.</p>
            <p>Over time, access drifts, risks pile up, and confidence erodes.</p>
            <p>
              Secure resets your Microsoft 365 so it’s organized, protected, and defensible —
              restoring clarity to who has what, where, and why.
            </p>
            <p className={styles.price}>
              <strong>$1,495 flat fee.</strong>
              <br />
              One engagement. Permanent peace of mind.
            </p>
          </div>

          <aside className={styles.side}>
            <h4>The Business Value</h4>
            <ul>
              <li>
                <strong>Reassure your clients and insurers.</strong>
                <br />
                Prove your firm takes data protection seriously — with measurable, documented
                controls.
              </li>
              <li>
                <strong>Reduce exposure and uncertainty.</strong>
                <br />
                No more “who can see what” confusion. You’ll know — and be able to show — exactly
                how access is governed.
              </li>
              <li>
                <strong>Preserve your reputation.</strong>
                <br />
                Stay compliant with insurer expectations, renewals, and client due diligence.
              </li>
              <li>
                <strong>Operate with confidence.</strong>
                <br />
                A stable, governed Microsoft 365 means less noise, fewer surprises, and more trust in
                every exchange.
              </li>
            </ul>
          </aside>
        </div>

        <div className={styles.divider} />

        <h4>What You Get</h4>
        <div className={styles.steps}>
          <article className={styles.step}>
            <div className={styles.badge}>1️⃣</div>
            <h5>Reset &amp; Rebuild</h5>
            <p>
              We secure the foundation — identity, access, and email — eliminating the drift that
              builds up over years.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>2️⃣</div>
            <h5>Proof You Can Hand Off</h5>
            <p>
              You leave with clear documentation: who can access what, which protections are in
              place, and a signed Secure Report for insurers and clients.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.badge}>3️⃣</div>
            <h5>Renewed Confidence</h5>
            <p>
              Everything works like it should.
              <br />
              Your systems are clean, compliant, and aligned to professional standards — ready for
              audits, renewals, or anything that comes next.
            </p>
          </article>
        </div>
      </section>

      {/* ===== PREVIEW CARDS (Support / Prove / Custom) ===== */}
      <section className={styles.grid}>
        <article className={styles.card}>
          <h3>🤝 Support — Microsoft 365 Helpdesk &amp; Advisory</h3>
          <p className={styles.tag}>Because your firm shouldn’t have to wait for answers.</p>
          <p><strong>Microsoft 365 for Law &amp; CPA Firms</strong></p>
          <p>
            Your team depends on Microsoft 365 every hour of every day. When something breaks,
            stalls, or confuses, you need more than a ticket number — you need someone who knows
            your system, understands your staff, and responds fast.
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
        </article>

        <article className={styles.card}>
          <h3>📊 Prove — Audit-Ready Microsoft 365 Evidence</h3>
          <p className={styles.tag}>When insurers or clients ask for proof, you shouldn’t have to scramble.</p>
          <p><strong>Microsoft 365 for Law &amp; CPA Firms</strong></p>
          <p>
            Every year, firms face renewal forms, questionnaires, and client due-diligence requests
            that all ask the same thing: Show us proof your Microsoft 365 is secure.
          </p>
          <p>
            Prove delivers that documentation — clear, verified, and formatted for auditors and
            insurers. No stress, no tech talk — just organized evidence you can send immediately.
          </p>
          <p className={styles.price}>
            <strong>$495 one-time.</strong>
            <br />
            Fast turnaround. Ready to share.
          </p>
        </article>

        <article className={styles.card}>
          <h3>⚙️ Custom — Bring Us Your Microsoft 365 Idea</h3>
          <p className={styles.tag}>If it touches Microsoft 365, we can design it, build it, or automate it.</p>
          <p><strong>Microsoft 365 for Law &amp; CPA Firms</strong></p>
          <p>
            Every firm works differently. The challenge is making Microsoft 365 work that way too.
            Custom is where you bring your ideas — the “what ifs,” the “can this be done,” the
            workflows you wish existed.
          </p>
          <p>
            We take those ideas and turn them into secure, governed systems built entirely inside
            Microsoft 365. From quick automations to full-scale firm integrations — if it helps your
            people work better, we’ll design it.
          </p>
          <p className={styles.price}>
            <strong>From $495+.</strong>
            <br />
            Scoped upfront. Fixed per deliverable.
          </p>
        </article>
      </section>
    </section>
  );
}
