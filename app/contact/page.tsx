'use client';
import React from 'react';

export default function ContactPage() {
  return (
    <section className="section container">
      {/* ===== Page Header ===== */}
      <div className="card full">
        <span className="eyebrow">Book • Contact</span>
        <h1 className="hero">Get in Touch</h1>
        <p className="lead">
          Every engagement starts with a short conversation about your firm’s goals, insurer requirements,
          and current Microsoft 365 posture.
        </p>
      </div>

      {/* ===== Primary Booking CTA (Premium Band) ===== */}
      <div className="card full cta-band">
        <h2 className="title-xl">🔒 Book a 30-Minute Consultation</h2>
        <p className="lead" style={{ marginBottom: '.9rem' }}>
          Speak directly with Jeremiah Spears about securing and supporting your firm’s Microsoft 365 environment.
        </p>
        <a
          className="btn primary"
          href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled"
          target="_blank"
          rel="noopener"
        >
          📅 Book Consultation
        </a>
      </div>

      {/* ===== Direct Contact ===== */}
      <div className="card">
        <h2 className="title-xl">Contact Information</h2>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:support@cloudjgs.com">support@cloudjgs.com</a>
          <br />
          <strong>Website:</strong>{' '}
          <a href="https://www.cloudjgs.com" target="_blank" rel="noopener">
            www.cloudjgs.com
          </a>
          <br />
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/jspears80/" target="_blank" rel="noopener">
            linkedin.com/in/jspears80
          </a>
        </p>
        <p>
          <strong>Hours:</strong> Monday – Friday, 9 AM – 5 PM (Pacific)
          <br />
          Remote consulting nationwide.
        </p>
      </div>

      {/* ===== Message from Founder ===== */}
      <div className="card">
        <h2 className="title-xl">A Note from the Founder</h2>
        <p style={{ fontStyle: 'italic', opacity: 0.9 }}>
          “When I built JGS Cloud Compliance, I wanted small professional firms to have direct access to senior
          Microsoft 365 expertise — without layers of tickets or guesswork. If you’re ready for systems that are
          secure, supported, and defensible, let’s start with a simple conversation.”
        </p>
        <p style={{ fontWeight: 600, marginTop: '.5rem' }}>— Jeremiah Spears, Founder &amp; Principal Consultant</p>
      </div>

      {/* ===== Secondary CTA Footer ===== */}
      <div className="card full book-cta">
        <h2 className="title-xl">Let’s Secure and Support Your Firm</h2>
        <p className="lead" style={{ marginBottom: '.9rem' }}>
          Book your consultation today and take the first step toward Microsoft 365 that’s secure, documented, and trusted.
        </p>
        <a
          className="btn primary"
          href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled"
          target="_blank"
          rel="noopener"
        >
          🔒 Schedule Now
        </a>
      </div>
    </section>
  );
}
