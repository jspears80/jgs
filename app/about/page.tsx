'use client';
import React from 'react';

export default function AboutPage() {
  return (
    <section className="section container page-about">
      {/* ===== Intro / Manifesto ===== */}
      <div className="card full about-card">
        <span className="eyebrow">About</span>
        <h1 className="hero about-title">What We Protect Isn’t Just Data — It’s Trust.</h1>

        <p className="about-text">
          Every document in your system represents something irreplaceable — a client’s identity, a legal defense,
          a financial record, a promise of confidentiality.
        </p>
        <p className="about-text">
          When that trust is broken, it’s not just a breach — it’s a betrayal.
        </p>
        <p className="about-text">
          At JGS, we treat that trust as sacred. Every control we implement, every configuration we verify, every piece
          of evidence we document — it’s not just to satisfy an audit. It’s to protect the relationships that keep your firm alive.
        </p>
      </div>

      {/* ===== Purpose ===== */}
      <div className="card">
        <h2 className="title-xl">Our Purpose</h2>
        <p style={{ maxWidth: '75ch' }}>
          Most technology companies sell uptime. We deliver <strong>assurance</strong> — that your systems are working
          correctly, securely, and defensibly. Our role is to give firm leadership clarity and evidence, not dashboards
          and guesses. In a regulated profession, <em>proof</em> is what protects trust.
        </p>
      </div>

      {/* ===== Difference (bullets) ===== */}
      <div className="card">
        <h2 className="title-xl">Our Difference</h2>
        <ul className="list-tight" style={{ marginTop: '.25rem' }}>
          <li><strong>Hands-on expertise</strong> — senior consulting only. No tiers, no escalation paths.</li>
          <li><strong>Proof-first delivery</strong> — every engagement ends with evidence you can show to insurers or regulators.</li>
          <li><strong>Professional alignment</strong> — built around how law and accounting firms operate: governed, precise, accountable.</li>
          <li><strong>24/7 assurance</strong> — when issues arise, you reach an expert, not a ticket queue.</li>
        </ul>
      </div>

      {/* ===== Founder Statement ===== */}
      <div className="card">
        <h2 className="title-xl">Founder’s Statement</h2>
        <p style={{ fontStyle: 'italic', opacity: .92 }}>
          “Security isn’t a product — it’s a professional obligation. My goal with JGS Cloud Compliance is simple:
          to give small professional firms the same level of assurance large enterprises take for granted — without the complexity or the cost.”
        </p>
        <p style={{ fontWeight: 600, marginTop: '.5rem' }}>
          — Jeremiah Spears, Founder &amp; Principal Consultant
        </p>
      </div>
    </section>
  );
}
