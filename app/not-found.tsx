'use client';
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <section className="section container">
      <div className="card full">
        <span className="eyebrow">404</span>
        <h1 className="hero">Page not found</h1>
        <p className="lead" style={{ maxWidth: '68ch' }}>
          The page you’re looking for moved or never existed. You can return home or jump straight to our services.
        </p>
        <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', marginTop: '.6rem' }}>
          <Link className="btn primary" href="/">← Back to Home</Link>
          <Link className="btn" href="/services">View Services</Link>
          <Link className="btn" href="/contact">Book Consultation</Link>
        </div>
      </div>
    </section>
  );
}
