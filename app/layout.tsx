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
            {/* ---- Brand / Logo ---- */}
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

            {/* ---- Call-to-Action ---- */}
            <div className="nav-right">
              <a className="btn btn-cta" href="/contact">
                🔒 Book Consultation
              </a>
            </div>
          </div>
        </header>

        {/* ================= MAIN CONTENT ================= */}
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

            {/* ---- Contact / CTA ---- */}
            <div className="footer-cta">
              <a
                href="mailto:support@cloudjgs.com"
                className="footer-link"
              >
                support@cloudjgs.com
              </a>
              <span style={{ opacity: '.9' }}>
                Office:&nbsp;
                <a
                  href="tel:+16192021105"
                  style={{ color: '#9b8df2', textDecoration: 'none' }}
                >
                  (619) 202-1105
                </a>
              </span>
              <div className="footer-actions">
                <a
                  className="btn sm"
                  href="https://www.linkedin.com/in/jspears80/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 LinkedIn
                </a>
                <a
                  className="btn sm footer-book"
                  href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔒 Book Consultation
                </a>
              </div>
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
