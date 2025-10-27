// app/layout.tsx

import './globals.css';
import React from 'react';
import Nav from './Nav';



export const metadata = {
  metadataBase: new URL('https://www.cloudjgs.com'),
  title:
    'Secure and Support — Microsoft 365 for Law & CPA Firms | JGS Cloud Compliance',
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
        <header className="header">
          <div className="header-row container">
            <div className="brand">
              <img src="/Logo.png" alt="JGS Cloud Compliance" className="logo" />
              <span className="tagline" aria-hidden="true">
                {/* hidden by CSS */}
              </span>
            </div>
            <Nav />
            <div className="nav-right">
              <a className="btn btn-cta" href="/contact">
                Book Consultation
              </a>
            </div>
          </div>
        </header>

        <main className="main container">{children}</main>

      <footer className="footer">
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

    <nav className="footer-links" aria-label="Footer">
      <a href="/">Home</a>
      <a href="/services">Services</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>

    <div className="footer-contact">
      <a href="mailto:support@cloudjgs.com" className="footer-link">
        support@cloudjgs.com
      </a>
      <a href="tel:+16192021105" className="footer-link">
        (619) 202-1105
      </a>
      <div className="footer-actions">
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
</footer>

      </body>
    </html>
  );
}



