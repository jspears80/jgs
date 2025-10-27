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
          {/* Top row: brand · nav · contact */}
          <div className="container footer-main" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '1rem' }}>
            {/* Brand */}
            <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
              <img src="/Logo.png" alt="" className="footer-logo" />
              <span className="brand-name">JGS Cloud Compliance</span>
            </div>

            {/* Footer nav */}
            <nav className="footer-links" aria-label="Footer navigation" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/">Home</a>
              <a href="/services">Services</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>

            {/* Contact / actions */}
            <div className="footer-contact" style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <a href="mailto:support@cloudjgs.com" className="footer-link">support@cloudjgs.com</a>
              <a href="tel:+16192021105" className="footer-link">(619) 202-1105</a>
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

          {/* Bottom line: copyright only */}
          <div className="container footer-bottom" style={{ textAlign: 'center', marginTop: '1rem', opacity: '.9', fontSize: '.9rem' }}>
            <p style={{ margin: '.25rem 0' }}>
              © {new Date().getFullYear()} JGS Cloud Compliance, LLC
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
