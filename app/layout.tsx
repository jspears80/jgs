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
            {/* Brand */}
            <Link href="/" className="brand">
              <img src="/Logo.png" alt="JGS Cloud Compliance logo" className="logo" />
              <span className="tagline">Secure and Support</span>
            </Link>

            {/* Nav */}
            <nav className="nav-links">
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

            {/* Right CTA */}
            <div className="nav-right">
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

        {/* Page content */}
        <main className="main">{children}</main>

        {/* Footer */}
        <footer className="footer">
          <div className="container footer-inner">
            <div><img src="/Logo.png" alt="JGS logo small" className="footer-logo" /></div>
            <div className="footer-text">
              <p>© {new Date().getFullYear()} JGS Cloud Compliance, LLC · Secure and Support</p>
              <p>
                <a href="mailto:support@cloudjgs.com">support@cloudjgs.com</a> |
                <a href="https://www.linkedin.com/in/jspears80/" target="_blank" rel="noopener"> LinkedIn</a> |
                <a href="https://www.cloudjgs.com" target="_blank" rel="noopener"> www.cloudjgs.com</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
