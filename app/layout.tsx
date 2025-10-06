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
        <link rel="icon" href="/favicon.ico" />
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
              <span style={{ color: 'rgba(255,255,255,.85)', fontSize: '.95rem', whiteSpace: 'nowrap', marginRight: '.75rem' }}>
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
              {/* Optional accessibility label (hidden visually if you add an .sr-only class in CSS) */}
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
              <a href="mailto:support@cloudjgs.com" className="footer-link">support@cloudjgs.com</a>
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
              <span>Secure • Support • Prove</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
