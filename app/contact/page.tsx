// app/contact/page.tsx
import React from "react";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact — Start the Conversation | JGS Cloud Compliance",
  description:
    "Every great engagement begins with understanding. A consultation with JGS Cloud Compliance isn’t a pitch — it’s a conversation.",
};

export default function ContactPage() {
  return (
    <section className={styles.wrap}>
      {/* ===== Intro / Hero Card ===== */}
      <section className={`${styles.card} ${styles.accent}`}>
        <h2>📅 Contact — Start the Conversation</h2>
        <p className={styles.tag}>Every great engagement begins with understanding.</p>

        <h3>Microsoft 365 for Law &amp; CPA Firms</h3>
        <p>
          A consultation with JGS Cloud Compliance isn’t a pitch — it’s a conversation.
        </p>
        <p>
          We start by learning how your firm actually works: what’s smooth, what’s slowing you down,
          and where Microsoft 365 can serve you better.
        </p>
        <p>
          This first meeting is about connection, clarity, and charting a sensible path forward — not signing anything.
        </p>
      </section>

      {/* ===== What the Consultation Is ===== */}
      <section className={styles.card}>
        <h3>What the Consultation Is</h3>
        <p>
          It’s a short, focused discussion designed to give you perspective.
        </p>
        <p>
          We’ll review your current Microsoft 365 environment, listen to your firm’s goals, and highlight
          where better configuration, automation, or governance could immediately help.
        </p>
        <p>No jargon. No pressure. Just insight and a simple next step.</p>

        <div className={styles.listBlock}>
          <p>You’ll leave with:</p>
          <ul className={styles.list}>
            <li>A clearer picture of how Microsoft 365 supports (or limits) your workflow</li>
            <li>A practical plan for what to secure, streamline, or prove next</li>
            <li>A sense of what partnership with JGS feels like — direct, senior-level, and transparent</li>
          </ul>
          <p>This first call lays the groundwork for long-term trust.</p>
          <p className={styles.ctaWrap}>
            <a className={styles.ctaLink} href="/contact">🔒 Schedule a Consultation →</a>
          </p>
        </div>
      </section>

      {/* ===== How to Reach Us ===== */}
      <section className={styles.card}>
        <h3>How to Reach Us</h3>
        <div className={styles.kv}>
          <div className={styles.k}><strong>Email:</strong></div>
          <div className={styles.v}><a href="mailto:support@cloudjgs.com">support@cloudjgs.com</a></div>

          <div className={styles.k}><strong>Office:</strong></div>
          <div className={styles.v}><a href="tel:+16192021105">(619) 202-1105</a></div>

          <div className={styles.k}><strong>Availability:</strong></div>
          <div className={styles.v}>Monday – Friday · 8 AM – 6 PM PT for consultations · 24/7 for emergencies</div>

          <div className={styles.k}><strong>Coverage:</strong></div>
          <div className={styles.v}>Remote consulting for law and accounting firms nationwide</div>

          <div className={styles.k}><strong>LinkedIn:</strong></div>
          <div className={styles.v}><a href="https://linkedin.com/in/jspears80">linkedin.com/in/jspears80</a></div>

          <div className={styles.k}><strong>Website:</strong></div>
          <div className={styles.v}><a href="https://www.cloudjgs.com">www.cloudjgs.com</a></div>
        </div>
      </section>

      {/* ===== Founder Note ===== */}
      <section className={styles.card}>
        <h3>A Note from the Founder</h3>
        <blockquote className={styles.note}>
          <p>
            “I built JGS Cloud Compliance so professional firms could reach senior Microsoft 365 expertise
            without layers of tickets or delay.
          </p>
          <p>
            This first conversation isn’t about selling services — it’s about understanding what your firm
            actually needs and earning your confidence.”
          </p>
          <footer>— <strong>Jeremiah Spears, Founder &amp; Principal Consultant</strong></footer>
        </blockquote>
      </section>
    </section>
  );
}
