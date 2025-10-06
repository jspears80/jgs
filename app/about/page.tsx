'use client';
import React from 'react';

export default function AboutPage() {
  return (
    <section className="section container page-about">
      <div className="card full" style={{ textAlign: 'center', maxWidth: '70ch', margin: '0 auto' }}>
        <h1 className="hero" style={{ color: '#fca311', marginBottom: '1.5rem' }}>
          What We Protect Isn’t Just Data — It’s Trust.
        </h1>

        <p className="lead" style={{ fontSize: '1.15rem', lineHeight: '1.7', opacity: 0.95 }}>
          Every document in your system represents something irreplaceable: a client’s identity,
          a legal defense, a financial record, a promise of confidentiality.
        </p>

        <p className="lead" style={{ fontSize: '1.15rem', lineHeight: '1.7', marginTop: '1rem', opacity: 0.95 }}>
          When that trust is broken, it’s not just a breach — it’s a betrayal.
        </p>

        <p className="lead" style={{ fontSize: '1.15rem', lineHeight: '1.7', marginTop: '1.5rem', opacity: 0.95 }}>
          At JGS, we treat that trust as sacred.
          Every control we implement, every configuration we verify, every piece of evidence we document —
          it’s not just to satisfy an audit.
          It’s to protect the relationships that keep your firm alive.
        </p>
      </div>
    </section>
  );
}
