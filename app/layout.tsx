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
          <div
            className="container header-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              alignItems: 'center',
              gap: '1rem',
              padding: '.9rem 1.25rem',
            }}
          >
            {/* Brand */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <a href="/" className="brand" aria-label="JGS Cloud Compliance — Home">
                <img src="/Logo.png" alt="JGS Cloud Compliance" className="logo" style={{ height: 48 }} />
              </a>
            </div>

            {/* Main Nav */}
            <nav className="nav-links unified-nav" aria-label="Main navigation">
              <a href="/">Home</a>
              <a href="/services">Services</a>
              <a href="/advisory">Advisory</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>

            {/* CTA */}
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
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              alignItems: 'center',
              gap: '1rem',
              textAlign: 'center',
              padding: '2rem 0 1rem',
            }}
          >
            {/* Brand */}
            <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
              <img
                src="/Logo.png"
                alt="JGS Cloud Compliance"
                className="footer-logo"
                style={{ height: 40, opacity: 0.95 }}
              />
              <span style={{ fontWeight: 600 }}>JGS Cloud Compliance</span>
            </div>

            {/* Footer Nav */}
            <nav className="footer-links unified-nav" aria-label="Footer navigation">
              <a href="/">Home</a>
              <a href="/services">Services</a>
              <a href="/advisory">Advisory</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>

            {/* Contact */}
            <div
              className="footer-contact"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '.9rem',
                flexWrap: 'wrap',
              }}
            >
              <a href="mailto:support@cloudjgs.com" className="footer-link">
                support@cloudjgs.com
              </a>
              <a href="tel:+16192021105" className="footer-link" style={{ opacity: 0.9 }}>
                (619) 202-1105
              </a>
              <div className="footer-actions" style={{ display: 'flex', gap: '.5rem' }}>
                <a
                  className="btn sm"
                  href="https://www.linkedin.com/in/jspears80/"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a>
                <a className="btn sm" href="/contact">
                  Book Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div
            className="container"
            style={{
              textAlign: 'center',
              marginTop: '.9rem',
              opacity: 0.85,
              fontSize: '.9rem',
              paddingBottom: '1rem',
            }}
          >
            © {new Date().getFullYear()} JGS Cloud Compliance, LLC
          </div>
        </footer>
      </body>
    </html>
  );
}
