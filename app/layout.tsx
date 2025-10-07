'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/advisory', label: 'Advisory' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <html lang="en">
      <head>
        <title>JGS Cloud Compliance — Secure and Support</title>
        <meta
          name="description"
          content="Secure and Support — Microsoft 365 for Law & CPA Firms. Projects secure it. Retainers support it."
        />

        {/* Favicons / Touch Icons (with cache-busting) */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png?v=3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=3" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png?v=3" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-180.png?v=3" />
        <meta name="theme-color" content="#0b0b0b" />

        {/* Open Graph / Social */}
        <meta property="og:title" content="JGS Cloud Compliance — Secure and Support" />
        <meta
          property="og:description"
          content="Secure Microsoft 365 for law and accounting firms — flat-fee projects that harden access, email and recovery, plus advisory retainers that keep it that way."
        />
        <meta property="og:image" content="/social-800.png?v=3" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cloudjgs.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JGS Cloud Compliance — Secure and Support" />
        <meta
          name="twitter:description"
          content="Microsoft 365 security and advisory for law & CPA firms — secure it, support it."
        />
        <meta name="twitter:image" content="/social-800.png?v=3" />

        {/* (Optional) PWA Manifest */}
        {/* <link rel="manifest" href="/manifest.json" /> */}
      </head>
      <body>
        {/* ===== Header ===== */}
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
          <div className="header-row container">
            {/* Brand (logo only) */}
            <Link href="/" className="brand" aria-label="JGS Cloud Compliance — Home">
              <img src="/Logo.png" alt="JGS logo" className="logo" />
            </Link>

            {/* Nav */}
            <nav className="nav-links" aria-label="Primary">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={pathname === href ? 'nav-active' : undefined}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Right CTA + Office line */}
            <div className="nav-right">
              <span
                style={{
                  color: 'rgba(255,255,255,.85)',
                  fontSize: '.95rem',
                  whiteSpace: 'nowrap',
                  marginRight: '.75rem',
                }}
              >
                Office:&nbsp;
                <a href="tel:+16192021105" style={{ color: '#9b8df2', textDecoration: 'none' }}>
                  (619) 202-1105
                </a>
              </span>
              <a
                className="btn btn-cta"
                href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener"
              >
                🔒 Book Consultation
              </a>
            </div>
          </div>
        </header>

        {/* ===== Page content ===== */}
        <main className="main">{children}</main>

        {/* ===== Footer (grid + subfooter) ===== */}
        <footer className="footer">
          <div className="container footer-grid">
            {/* Brand (logo only) */}
            <div className="footer-brand">
              <img src="/Logo.png" alt="JGS logo" className="footer-logo" />
              <span className="sr-only">JGS Cloud Compliance</span>
            </div>

            {/* Quick Links */}
            <nav className="footer-links" aria-label="Footer">
              <a href="/">Home</a>
              <a href="/services">Services</a>
              <a href="/advisory">Advisory</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>

            {/* Contact / CTA */}
            <div className="footer-cta">
              <a href="mailto:support@cloudjgs.com" className="footer-link">
                support@cloudjgs.com
              </a>
              <span style={{ opacity: '.9' }}>
                Office:&nbsp;
                <a href="tel:+16192021105" style={{ color: '#9b8df2', textDecoration: 'none' }}>
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
                <a
                  className="btn sm footer-book"
                  href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled"
                  target="_blank"
                  rel="noopener"
                >
                  🔒 Book Consultation
                </a>
              </div>
            </div>
          </div>

          <div className="subfooter">
            <div className="container subfooter-row">
              <span>© {new Date().getFullYear()} JGS Cloud Compliance, LLC</span>
              <span className="dot">•</span>
              <span>Registered in California — EIN 39-4459407 — State ID B20250301108</span>
             
              <span>Secure • Support • Prove</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

