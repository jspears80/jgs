import './globals.css';
import React from 'react';
import Nav from './Nav';

export const metadata = {
  title: 'Secure • Support • Prove — Microsoft 365 for Professional Firms | JGS Cloud Compliance',
  description: 'JGS Cloud Compliance secures Microsoft 365 for professional firms, maintains it day-to-day, and delivers audit-ready proof.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* ===== Header ===== */}
        <header className="header">
          <div className="container header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="/" className="brand" aria-label="JGS Cloud Compliance — Home" style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
              <img src="/Logo.png" alt="JGS Cloud Compliance" style={{ height: 48 }} />
              <span style={{ fontWeight: 600 }}>JGS Cloud Compliance</span>
            </a>
            <Nav />
            <a href="/contact" className="btn btn-cta">Book Consultation</a>
          </div>
        </header>

        {/* ===== Main ===== */}
        <main className="main" role="main">{children}</main>

        {/* ===== Footer ===== */}
        <footer className="footer">
          <nav className="footer-links unified-nav">
            <a href="/services">Secure</a>
            <a href="/advisory">Support</a>
            <a href="/proof">Proof</a>
            <a href="/custom">Custom</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
          <a href="mailto:support@cloudjgs.com">support@cloudjgs.com</a> • <a href="tel:+16192021105">(619) 202-1105</a>
          <small>© {new Date().getFullYear()} JGS Cloud Compliance LLC</small>
        </footer>
      </body>
    </html>
  );
}
