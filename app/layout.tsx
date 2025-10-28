// app/layout.tsx

import './globals.css';
import React from 'react';
import Nav from './Nav';

export const metadata = {
  metadataBase: new URL('https://www.cloudjgs.com'),
  title:
    'Secure • Support • Prove — Microsoft 365 for Law & CPA Firms | JGS Cloud Compliance',
  description:
    'JGS Cloud Compliance helps law and accounting firms operate securely and confidently on Microsoft 365. Projects fix risks. Retainers keep systems supported and defensible.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* ================= HEADER ================= */}
        <header className="header">
          <div className="header-row container">
            {/* ---- Brand ---- */}
            <div className="brand">
              <img
                src="/Logo.png"
                alt="JGS Cloud Compliance"
                className="logo"
              />
              <span className="tagline" aria-hidden="true">
                {/* hidden by CSS */}
              </span>
            </div>

            {/* ---- Navigation ---- */}
            <Nav />

            {/* ---- CTA ---- */}
            <div className="nav-right">
              <a className="btn btn-cta" href="/contact">
                🔒 Book Consultation
              </a>
            </div>
          </div>
        </header>

        {/* ================= MAIN ================= */}
        <main className="main container">{children}</main>

        {/* ================= FOOTER ================= */}
        <footer className="footer">
          <div className="container footer-grid">
            {/* ---- Brand ---- */}
            <div className="footer-brand">
              <img
                src="/Logo.png"
                alt="JGS Cloud Compliance logo"
                className="footer-logo"
              />
              <span className="sr-only">JGS Cloud Compliance</span>
            </div>

            {/* ---- Navigation ---- */}
            <nav className="footer-links" aria-label="Footer">
              <a href="/">Home</a>
              <a href="/secure">Secure</a>
              <a href="/support">Support</a>
              <a href="/prove">Prove</a>
              <a href="/custom">Custom</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>

            {/* ---- Contact Info (Right side) ---- */}
            <div className="footer-contact" style={{ textAlign: 'right' }}>
              <a
                href="mailto:support@cloudjgs.com"
                className="footer-link"
                style={{ display: 'block', color: '#9b8df2' }}
              >
                support@cloudjgs.com
              </a>
              <span style={{ opacity: 0.9 }}>
                Office:{' '}
                <a
                  href="tel:+16192021105"
                  style={{ color: '#9b8df2', textDecoration: 'none' }}
                >
                  (619) 202-1105
                </a>
              </span>
            </div>
          </div>

          {/* ---- Closing Line ---- */}
          <div className="footer-close">
            <div className="container" style={{ textAlign: 'center' }}>
              <p className="lead" style={{ margin: 0 }}>
                Questions? Email{' '}
                <a
                  href="mailto:support@cloudjgs.com"
                  style={{ color: '#9b8df2', textDecoration: 'none' }}
                >
                  support@cloudjgs.com
                </a>{' '}
                or call{' '}
                <a
                  href="tel:+16192021105"
                  style={{ color: '#9b8df2', textDecoration: 'none' }}
                >
                  (619) 202-1105
                </a>
                .
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
