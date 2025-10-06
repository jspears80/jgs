'use client';
import React from 'react';

export default function ContactPage() {
  return (
    <section className="section container page-contact">
      {/* ===== Header ===== */}
      <div className="card full">
        <span className="eyebrow">Book • Contact</span>
        <h1 className="hero">Get in Touch</h1>
        <p className="lead" style={{ maxWidth: '70ch' }}>
          Every engagement begins with a focused conversation about your firm’s goals, insurer requirements,
          and current Microsoft 365 posture.
        </p>
      </div>

      {/* ===== Primary Booking CTA ===== */}
      <div className="card full cta-band">
        <h2 className="title-xl">🔒 Book a 30-Minute Consultation</h2>
        <p className="lead" style={{ marginBottom: '.9rem' }}>
          Speak directly with <strong>Jeremiah Spears</strong>, Principal Consultant, about securing and supporting
          your firm’s Microsoft 365 environment—no forms, no queue, just a practical discussion.
        </p>
        <a
          className="btn primary"
          href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled"
          target="_blank"
          rel="noopener"
          aria-label="Book a 30-minute consultation"
        >
          📅 Book Consultation
        </a>
      </div>

      {/* ===== What to Expect ===== */}
      <div className="card">
        <h2 className="title-xl">What to Expect in 30 Minutes</h2>
        <ul className="list-tight" style={{ marginTop: '.25rem' }}>
          <li><strong>Context:</strong> Your client work, deadlines, insurer posture, and current Microsoft 365 state.</li>
          <li><strong>Clarity:</strong> Immediate risks that matter to continuity, reputation, or compliance.</li>
          <li><strong>Next steps:</strong> A straightforward plan—what to secure now, and how proof will be delivered.</li>
        </ul>
        <p style={{ marginTop: '.75rem', opacity: .9 }}>
          <strong>If this is urgent</strong> (auth failures, mail delivery issues, suspected compromise), book the earliest slot
          and email <a href="mailto:support@cloudjgs.com">support@cloudjgs.com</a> with “URGENT” in the subject. We’ll triage immediately.
        </p>
      </div>

      {/* ===== Direct Contact ===== */}
      <div className="card">
        <h2 className="title-xl">Contact Information</h2>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:support@cloudjgs.com">support@cloudjgs.com</a><br />
          <strong>Website:</strong>{' '}
          <a href="https://www.cloudjgs.com" target="_blank" rel="noopener">
            www.cloudjgs.com
          </a><br />
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/jspears80/" target="_blank" rel="noopener">
            linkedin.com/in/jspears80
          </a>
        </p>
        <p>
          <strong>Hours:</strong> Monday–Friday, 9 AM – 5 PM (Pacific)<br />
          Remote consulting nationwide.
        </p>
      </div>

      {/* ===== Founder Note ===== */}
      <div className="card">
        <h2 className="title-xl">A Note from the Founder</h2>
        <p style={{ fontStyle: 'italic', opacity: .92 }}>
          “I built JGS Cloud Compliance so small professional firms could access senior Microsoft 365 expertise without
          layers of tickets or guesswork. If your firm needs systems that are secure, supported, and defensible—let’s talk.”
        </p>
        <p style={{ fontWeight: 600, marginTop: '.5rem' }}>
          — Jeremiah Spears, Founder &amp; Principal Consultant
        </p>
      </div>

      {/* ===== Secondary CTA ===== */}
      <div className="card full book-cta">
        <h2 className="title-xl">Let’s Secure and Support Your Firm</h2>
        <p className="lead" style={{ marginBottom: '.9rem' }}>
          Book your consultation and take the first step toward Microsoft 365 that’s <strong>secure, documented, and trusted</strong>.
        </p>
        <a
          className="btn primary"
          href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled"
          target="_blank"
          rel="noopener"
          aria-label="Schedule a consultation"
        >
          🔒 Schedule Now
        </a>
      </div>
    </section>
  );
}
