'use client';
import React from 'react';

export default function AboutPage() {
  return (
    <section className="section container page-about">
      {/* Manifesto */}
      <div className="card full about-card">
        <span className="eyebrow">About</span>
        <h1 className="hero about-title">What We Protect Isn’t Just Data — It’s Trust.</h1>

        <p className="about-text">
          Every document in your system represents something irreplaceable — a client’s identity,
          a legal defense, a financial record, a promise of confidentiality.
        </p>
        <p className="about-text">
          When that trust is broken, it’s not just a breach — it’s a betrayal.
        </p>
        <p className="about-text">
          At JGS, we treat that trust as sacred. Every control we implement, every configuration we verify,
          every piece of evidence we document — it isn’t to satisfy an audit. It’s to protect the relationships
          that keep your firm alive.
        </p>
      </div>

      {/* Credo (single slim card) */}
      <div className="card about-credo">
        <h2 className="title-xl">Our Credo</h2>
        <ul className="list-tight credo-list">
          <li><strong>Purpose:</strong> We deliver assurance — systems that work correctly, securely, and defensibly.</li>
          <li><strong>Proof-first:</strong> Every engagement ends with evidence you can hand to a client, insurer, or regulator.</li>
          <li><strong>Aligned to professionals:</strong> Built for law and accounting firms — governed, precise, accountable.</li>
          <li><strong>Always available:</strong> When something feels off, you reach an expert — not a ticket queue.</li>
        </ul>

        <p className="credo-foot">
          “Security isn’t a product — it’s a professional obligation.” — <strong>Jeremiah Spears</strong>, Founder &amp; Principal Consultant
        </p>
      </div>
    </section>
  );
}
