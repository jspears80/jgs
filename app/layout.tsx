'use client';
import React from 'react';
import Link from 'next/link';
import Seo from './Seo';
import Nav from './Nav';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Base defaults (Seo will override per-route) */}
        <title>JGS Cloud Compliance — Secure and Support</title>
        <meta
          name="description"
          content="Secure and Support — Microsoft 365 for Law & CPA Firms. Flat-fee projects and advisory retainers that protect, stabilize, and document your Microsoft 365 environment."
        />
        <link rel="icon" href="/favicon.ico" />
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
            <Nav />
          </div>
        </header>

        {/* ===== Main Content ===== */}
        <main className="main">{children}</main>

        {/* ===== Footer ===== */}
        <footer className="footer">
          <div className="container footer-inner">
            <img src="/Logo.png" alt="JGS logo small" className="footer-logo" />
            <div className="footer-text">
              <p>© {new Date().getFullYear()} JGS Cloud Compliance, LLC · Secure and Support</p>
              <p>
                <a href="mailto:support@cloudjgs.com">support@cloudjgs.com</a> |
                <a
                  href="https://www.linkedin.com/in/jspears80/"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a> |
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
