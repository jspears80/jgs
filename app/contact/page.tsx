// app/contact/page.tsx
import React from "react";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact — Start the Conversation | JGS Cloud Compliance",
  description:
    "Every strong engagement starts with clarity. JGS Cloud Compliance helps CPA & Law firms secure Microsoft 365, prove it with evidence, and keep it defensible year-round.",
};

export default function ContactPage() {
  return (
    <section className={styles.wrap}>
      {/* ===== Intro / Hero Card ===== */}
      <section className={`${styles.card} ${styles.accent}`}>
        <h2>📅 Contact — Start the Conversation</h2>
        <p className={styles.tag}>Every great engagement begins with clarity.</p>

        <h3>Microsoft 365 Security for CPA &amp; Law Firms</h3>
        <p>
          A consultation with JGS Cloud Compliance isn’t a sales pitch — it’s a structured,
          senior-level conversation about your firm, your risks, and what Microsoft 365
          needs to look like for you to operate confidently.
        </p>
        <p>
          We focus on how your team actually works: what’s smooth, what breaks during deadlines,
          and where insurers, auditors, or clients are starting to ask harder questions.
        </p>
        <p>
          Our goal is simple: understand, assess, and give you a clear next step — nothing to sign,
          no pressure, just expertise.
        </p>
      </section>

      {/* ===== What the Consultation Is ===== */}
      <section className={styles.card}>
        <h3>What the Consultation Is</h3>
        <p>
          A short, focused session designed to give you an honest picture of your Microsoft 365
          security posture and the risks most professional firms don’t see until renewal season.
        </p>
        <p>
          We’ll review how your tenant is configured, where the common weak points usually are,
          and which actions would make the biggest difference for security, continuity, or compliance.
        </p>
        <p>No jargon. No fluff. Just insight, direction, and a clear path forward.</p>

        <div className={styles.listBlock}>
          <p>You’ll leave with:</p>
          <ul className={styles.list}>
            <li>A clear understanding of where your Microsoft 365 stands today</li>
            <li>A practical next step — Secure, Prove, or the Assure program</li>
            <li>
              A sense of what it’s like to work directly with a founder — no tiers, no ticket walls,
              just senior-level judgment
            </li>
          </ul>
          <p>This first call lays the groundwork for real, defensible continuity.</p>
          <p className={styles.ctaWrap}>
            <a
              className={styles.ctaLink}
              href="https://outlook.office.com/book/JGSCloudCompliance@cloudjgs.com/?ismsaljsauthenabled"
            >
              🔒 Schedule a Consultation →
            </a>
          </p>
        </div>
      </section>

      {/* ===== How to Reach Us ===== */}
      <section className={styles.card}>
        <h3>How to Reach Us</h3>
        <div className={styles.kv}>
          <div className={styles.k}><strong>Email:</strong></div>
          <div className={styles.v}>
            <a href="mailto:support@cloudjgs.com">support@cloudjgs.com</a>
          </div>

          <div className={styles.k}><strong>Office:</strong></div>
          <div className={styles.v}>
            <a href="tel:+16192021105">(619) 202-1105</a>
          </div>

          <div className={styles.k}><strong>Availability:</strong></div>
          <div className={styles.v}>
            Monday – Friday · 8 AM – 6 PM PT for consultations · 24/7 for urgent security issues
          </div>

          <div className={styles.k}><strong>Coverage:</strong></div>
          <div className={styles.v}>
            Remote Microsoft 365 security consulting for law and accounting firms nationwide
          </div>

          <div className={styles.k}><strong>LinkedIn:</strong></div>
          <div className={styles.v}>
            <a href="https://linkedin.com/in/jspears80">linkedin.com/in/jspears80</a>
          </div>

          <div className={styles.k}><strong>Website:</strong></div>
          <div className={styles.v}>
            <a href="https://www.cloudjgs.com">www.cloudjgs.com</a>
          </div>
        </div>
      </section>

      {/* ===== Founder Note ===== */}
      <section className={styles.card}>
        <h3>A Note from the Founder</h3>
        <blockquote className={styles.note}>
          <p>
            “I built JGS Cloud Compliance so CPA and Law firms could access senior-level
            Microsoft 365 security expertise without delays, confusion, or guesswork.
          </p>
          <p>
            This first meeting is about understanding what your firm truly needs —
            then helping you secure it, prove it, and keep it defensible year-round.”
          </p>
          <footer>
            — <strong>Jeremiah Spears, Founder &amp; Principal Consultant</strong>
          </footer>
        </blockquote>
      </section>
    </section>
  );
}
