'use client';
import React from 'react';

export default function AboutPage() {
  return (
    <section className="section container page-about">
      <div className="card full about-card">
        <h1 className="about-title">
          What We Protect Isn’t Just Data — It’s Trust.
        </h1>

        <p className="about-text">
          Every document in your system represents something irreplaceable — a client’s identity,
          a legal defense, a financial record, a promise of confidentiality.
        </p>

        <p className="about-text">
          When that trust is broken, it’s not just a breach — it’s a betrayal.
        </p>

        <p className="about-text">
          At JGS, we treat that trust as sacred. Every control we implement, every configuration we verify,
          every piece of evidence we document — it’s not just to satisfy an audit. It’s to protect the relationships
          that keep your firm alive.
        </p>
      </div>
    </section>
  );
}
