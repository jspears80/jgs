// app/layout.tsx
import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import Nav from './Nav';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cloudjgs.com'),
  title:
    'Secure • Support • Prove — Microsoft 365 for Professional Firms | JGS Cloud Compliance',
  description:
    'JGS Cloud Compliance secures Microsoft 365 for professional firms, maintains it day-to-day, and delivers audit-ready proof.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* =================== Header =================== */}
        <header className="header" role="banner">
          <div className="container header-row" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '1rem' }}>
            {/* Brand (left) */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <a href="/" className="brand" aria-label="JGS Cloud Compliance — Home">
                <img src="/Logo.png" alt="" className="logo" />
              </a>
            </div>

            {/* Nav (center) */}
            <nav aria-label="Main navigation" style={{ display: 'flex', justifyContent: 'center' }}>
              <Nav />
            </nav>

            {/* CTA (right) */}
            <div className="nav-right" style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a className="btn btn-cta" href="/contact">
                Book Consultation
              </a>
            </div>
          </div>
        </header>

        {/* =================== Main =================== */}
        <main className="main container" role="main">
          {children}
        </main>

        {/* =================== Footer =================== */}
      <footer className="footer" role="contentinfo">
  <div
    className="container"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '0.75rem',
      padding: '2rem 0',
    }}
  >
    {/* Brand */}
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        justifyContent: 'center',
      }}
    >
      <img
        src="/Logo.png"
        alt="JGS Cloud Compliance"
        className="footer-logo"
        style={{ height: '44px', opacity: '.95' }}
      />
      <span style={{ fontWeight: 600 }}>JGS Cloud Compliance</span>
    </div>

    {/* Navigation */}
    <nav
      className="footer-links"
      aria-label="Footer navigation"
      style={{
        display: 'flex',
        gap: '1.25rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <a href="/">Home</a>
      <a href="/services">Services</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>

    {/* Contact */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '.4rem',
      }}
    >


    {/* Copyright */}
    <p
      style={{
        marginTop: '1rem',
        opacity: '.8',
        fontSize: '.9rem',
      }}
    >
      © {new Date().getFullYear()} JGS Cloud Compliance, LLC
    </p>
  </div>
</footer>

      </body>
    </html>
  );
}



