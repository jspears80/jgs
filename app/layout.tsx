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
    'JGS Cloud Compliance secures Microsoft 365, maintains it day-to-day, and delivers audit-ready proof for law, CPA, and consulting firms.',
  openGraph: {
    title:
      'Secure • Support • Prove — Microsoft 365 for Professional Firms | JGS Cloud Compliance',
    description:
      'Security isn’t a guess — it’s a record. JGS makes Microsoft 365 secure, supported, and provable for professional firms.',
    url: 'https://www.cloudjgs.com',
    siteName: 'JGS Cloud Compliance',
    type: 'website',
  },
  keywords: [
    'Microsoft 365 security',
    'M365 hardening',
    'CPA security',
    'law firm security',
    'email security',
    'DMARC DKIM SPF',
    'audit evidence',
    'compliance proof',
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cloudjgs',
    title:
      'Secure • Support • Prove — Microsoft 365 for Professional Firms | JGS Cloud Compliance',
    description:
      'We harden your Microsoft 365, keep it maintained, and deliver audit-ready proof.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* ===== Header / Site Navigation ===== */}
        <header className="header">
          <div className="header-row container">
            <a className="brand" href="/" aria-label="JGS Cloud Compliance">
              <img
                src="/Logo.png"
                alt="JGS Cloud Compliance"
                className="logo"
                width={28}
                height={28}
              />
              <span className="brand-text">JGS Cloud Compliance</span>
            </a>

            {/* Nav is a client component; safe to render here */}
            <Nav />

            <div className="nav-right">
              <a className="btn btn-cta" href="/contact">
                Book Consultation
              </a>
            </div>
          </div>
        </header>

        {/* ===== Main ===== */}
        <main className="main container">{children}</main>

        {/* ===== Footer ===== */}
        <footer className="footer">
          <div className="container footer-grid">
            <div className="footer-brand">
              <img
                src="/Logo.png"
                alt="JGS logo"
                className="footer-logo"
                width={28}
                height={28}
              />
              <span className="sr-only">JGS Cloud Compliance</span>
              <p className="footer-tag">
                Secure • Support • Prove — Professional trust, verified.
              </p>
            </div>

            <nav className="footer-links" aria-label="Footer navigation">
              <a href="/">Home</a>
              <a href="/services">Services</a>
              <a href="/advisory">Advisory</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>

            <div className="footer-cta">
              <a href="mailto:support@cloudjgs.com" className="footer-link">
                support@cloudjgs.com
              </a>
              <span className="footer-text">
                Office:{' '}
                <a
                  href="tel:+16192021105"
                  className="footer-link alt"
                  aria-label="Call our office"
                >
                  (619) 202-1105
                </a>
              </span>
              <div className="footer-actions">
                <a
                  className="btn sm"
                  href="https://www.linkedin.com/in/jspears80/"
                  target="_blank"
                  rel="noopener"
                >
                  🔗 LinkedIn
                </a>
                <a className="btn sm footer-book" href="/contact">
                  🔒 Book Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Trust / Compliance row */}
          <div className="trust-row">
            <div className="container trust-items">
              <span>✅ Technology &amp; Cyber Liability Insured</span>
              <a
                href="https://portal.nextinsurance.com/public/certificates/live-certificate/9d9860207b4a4a69bec692ceab81979f"
                target="_blank"
                rel="noopener"
                className="trust-link"
              >
                📄 View Certificate of Insurance
              </a>
              <span>🔐 Microsoft 365 E5 + Teams Infrastructure</span>
              <span>🧾 Registered California LLC — Entity ID B20250301108</span>
            </div>
          </div>

          {/* Legal row */}
          <div className="subfooter">
            <div className="container subfooter-row">
              <span>© {new Date().getFullYear()} JGS Cloud Compliance, LLC</span>
              <span className="dot">•</span>
              <span>City Business No. 013999-2025</span>
              <span className="dot">•</span>
              <a href="/privacy" className="subfooter-link">
                Privacy
              </a>
              <span className="dot">•</span>
              <a href="/terms" className="subfooter-link">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
