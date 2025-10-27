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
  openGraph: {
    title:
      'Secure • Support • Prove — Microsoft 365 for Professional Firms | JGS Cloud Compliance',
    description:
      'Security isn’t a guess — it’s a record. JGS makes Microsoft 365 secure, supported, and provable for professional firms.',
    url: 'https://www.cloudjgs.com',
    siteName: 'JGS Cloud Compliance',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Secure • Support • Prove — Microsoft 365 for Professional Firms | JGS Cloud Compliance',
    description:
      'We harden Microsoft 365, keep it maintained, and deliver audit-ready proof.',
  },
  keywords: [
    'Microsoft 365 security',
    'law firm Microsoft 365',
    'CPA Microsoft 365',
    'DMARC DKIM SPF',
    'M365 hardening',
    'audit evidence',
    'compliance proof',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* ======================= Header (quiet) ======================= */}
        <header className="header" role="banner">
          <div className="container header-row">
            <a href="/" className="brand" aria-label="JGS Cloud Compliance — Home">
              <img
                src="/Logo.png"
                alt="JGS Cloud Compliance"
                className="logo"
                width={32}
                height={32}
              />
            </a>

            {/* Client Nav component (can be a client component) */}
            <Nav />

            <a className="btn btn-cta" href="/contact">
              Book Consultation
            </a>
          </div>
        </header>

        {/* ========================= Main ========================= */}
        <main className="main container" role="main">
          {children}
        </main>

        {/* ======================= Footer (minimal) ======================= */}
        <footer className="footer" role="contentinfo">
          {/* Top row: brand + nav + contact */}
          <div className="container footer-main">
            <div className="footer-brand">
              <img
                src="/Logo.png"
                alt="JGS Cloud Compliance"
                className="footer-logo"
                width={28}
                height={28}
              />
              <span className="brand-name">JGS Cloud Compliance</span>
            </div>

            <nav className="footer-links" aria-label="Footer navigation">
              <a href="/">Home</a>
              <a href="/services">Services</a>
              <a href="/advisory">Advisory</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>

            <div className="footer-contact" aria-label="Contact">
              <a href="mailto:support@cloudjgs.com" className="footer-link">
                support@cloudjgs.com
              </a>
              <a href="tel:+16192021105" className="footer-link">
                (619) 202-1105
              </a>
            </div>
          </div>

          {/* Bottom row: legal / trust (muted, single place) */}
          <div className="container footer-bottom">
            <p className="footer-legal">
              © {new Date().getFullYear()} JGS Cloud Compliance, LLC • Registered
              California LLC • City Business No. 013999-2025
            </p>
            <p className="footer-trust">
              Technology &amp; Cyber Liability Insured • Microsoft 365 E5 Infrastructure
            </p>
            <nav className="footer-legal-links" aria-label="Legal">
              <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
