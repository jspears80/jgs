'use client';
import React from 'react';

export default function ContactPage() {
  return (
    <section className="section container page-contact">
      {/* ===== Page Header ===== */}
      <div className="card full">
        <span className="eyebrow">Book • Contact</span>
        <h1 className="hero">Get in Touch</h1>
        <p className="lead" style={{ maxWidth: '70ch' }}>
          Every engagement begins with a focused conversation about your firm’s goals, insurer requirements,
          and Microsoft 365 environment. Whether it’s a planned consultation or an active incident, JGS is always available to respond.
        </p>
      </div>

      {/* ===== What to Expect ===== */}
      <div className="card">
        <h2 className="title-xl">What to Expect</h2>
        <ul className="list-tight" style={{ marginTop: '.25rem' }}>
          <li><strong>Clarity:</strong> A quick but detailed review of your environment and immediate goals.</li>
          <li><strong>Assessment:</strong> Identification of gaps in security, compliance, and recoverability.</li>
          <li><strong>Next steps:</strong> A simple, prioritized plan to secure what matters first — no jargon, no delay.</li>
        </ul>
        <p style={{ marginTop: '.9rem', opacity: .9 }}>
          <strong>Urgent issue?</strong> JGS operates <strong>24/7</strong> for clients experiencing outages,
          account compromise, or mail disruption.  
          Email <a href="mailto:support@cloudjgs.com">support@cloudjgs.com</a> with “URGENT” in the subject line, and you’ll receive a direct response from Jeremiah within minutes.
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
          <p>
          <strong>Office:</strong> <a href="tel:+16192021105">(619) 202-1105</a>
          <br />
                Available 24/7 for advisory and support.
          </p>

          <strong>Coverage:</strong> Remote consulting for law and accounting firms nationwide.
        </p>
      </div>

      {/* ===== Founder Note ===== */}
      <div className="card">
        <h2 className="title-xl">A Note from the Founder</h2>
        <p style={{ fontStyle: 'italic', opacity: .92 }}>
          “I built JGS Cloud Compliance so small professional firms could access senior Microsoft 365 expertise without
          layers of tickets or delay. Whether it’s 2 PM or 2 AM, if something breaks or feels off — you should have someone you trust to call.”
        </p>
        <p style={{ fontWeight: 600, marginTop: '.5rem' }}>
          — Jeremiah Spears, Founder &amp; Principal Consultant
        </p>
      </div>

      {/* ===== Secondary CTA ===== */}
      <div className="card full book-cta">
        <h2 className="title-xl">Let’s Secure and Support Your Firm</h2>
        <p className="lead" style={{ marginBottom: '.9rem' }}>
          Book your consultation and take the first step toward Microsoft 365 that’s <strong>secure, documented, and trusted — day or night</strong>.
        </p>
        <a
          className="btn primary"
          href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled"
          target="_blank"
          rel="noopener"
          aria-label="Schedule a consultation"
        >
          📅 Schedule Now
        </a>
      </div>
    </section>
  );
}

