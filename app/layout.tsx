// app/layout.tsx
import "./globals.css";
import React from "react";
import Nav from "./Nav";

export const metadata = {
  metadataBase: new URL("https://www.cloudjgs.com"),
  title:
    "Secure • Support • Prove — Microsoft 365 for Law & CPA Firms | JGS Cloud Compliance",
  description:
    "JGS Cloud Compliance helps law and accounting firms operate securely and confidently on Microsoft 365. Projects fix risks. Retainers keep systems supported and defensible.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* ===== HEADER ===== */}
        <header className="header">
          <div className="header-row container">
            {/* Brand */}
            <div className="brand" style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
              <a href="/" aria-label="JGS Cloud Compliance — Home">
                <img src="/Logo.png" alt="JGS Cloud Compliance" className="logo" />
              </a>
              <span className="tagline" aria-hidden="true">{/* reserved */}</span>
            </div>

            {/* Nav */}
            <Nav />

            {/* Right actions: CTA (desktop) + Phone (mobile) */}
            <div className="nav-right">
              <span className="nav-phone">
                <a href="tel:+16192021105">📞 (619) 202-1105</a>
              </span>
              <a className="btn btn-cta" href="/contact">
                🔒 Book Consultation
              </a>
            </div>
          </div>
        </header>

        {/* ===== MAIN ===== */}
        <main className="main container">{children}</main>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          <div className="container footer-row">
            {/* Left — Brand */}
            <div className="footer-brand" style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
              <a href="/" aria-label="JGS Cloud Compliance — Home">
                <img src="/Logo.png" alt="JGS Cloud Compliance logo" className="footer-logo" />
              </a>
              <span className="sr-only">JGS Cloud Compliance</span>
            </div>

            {/* Center — Links */}
            <nav className="footer-links" aria-label="Footer">
              <a href="/">Home</a>
              <a href="/secure">Secure</a>
              <a href="/support">Support</a>
              <a href="/prove">Prove</a>
              <a href="/custom">Custom</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>

            {/* Right — Contact */}
            <div className="footer-contact">
              <div>
                <a href="mailto:support@cloudjgs.com">support@cloudjgs.com</a>
              </div>
              <div>
                <a href="tel:+16192021105">📞 (619) 202-1105</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
