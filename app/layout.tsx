'use client';
import React from 'react';
import Link from 'next/link';
import Seo from './Seo';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Base defaults */}
        <title>JGS Cloud Compliance — Secure and Support</title>
        <meta
          name="description"
          content="Secure and Support — Microsoft 365 for Law & CPA Firms. Flat-fee projects and advisory retainers that protect, stabilize, and document your Microsoft 365 environment."
        />
        <link rel="icon" href="/favicon.ico" />

        {/* ✅ Dynamic SEO component — must come *after* base tags so overrides win */}
        <Seo />
      </head>

      <body>
        {/* ===== Header / Nav ===== */}
        <header className="header">
          <div className="header-row container">
            <Link href="/" className="brand">
              <img src="/Logo.png" alt="JGS Cloud Compliance logo" className="logo" />
              <span className="tagline">Secure and Support</span>
            </Link>

            <nav className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/advisory">Advisory</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        {/* ===== Page Content ===== */}
        <main className="main">{children}</main>

        {/* ===== Footer ===== */}
        <footer className="footer">
          <div className="container footer-inner">
            <div>
              <img src="/Logo.png" alt="JGS logo small" className="footer-logo" />
            </div>
            <div className="footer-text">
              <p>
                © {new Date().getFullYear()} JGS Cloud Compliance, LLC · Secure and Support
              </p>
              <p>
                <a href="mailto:support@cloudjgs.com">support@cloudjgs.com</a> |{' '}
                <a
                  href="https://www.linkedin.com/in/jspears80/"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a>{' '}
                |{' '}
                <a href="https://www.cloudjgs.com" target="_blank" rel="noopener">
                  www.cloudjgs.com
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
