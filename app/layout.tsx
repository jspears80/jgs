// app/layout.tsx
import React from "react";
import "./globals.css";
import styles from "./layout.module.css";
import Nav from "./Nav";

export const metadata = {
  metadataBase: new URL("https://www.cloudjgs.com"),
  title:
    "Secure • Support • Prove — Microsoft 365 for Law & CPA Firms | JGS Cloud Compliance",
  description:
    "JGS Cloud Compliance helps law and accounting firms operate securely and confidently on Microsoft 365.",
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
        <header className={styles.header}>
          <div className={`${styles.headerRow} container`}>
            {/* Left — Brand */}
            <div>
              <a href="/" aria-label="JGS Cloud Compliance — Home">
                <img
                  src="/Logo.png"
                  alt="JGS Cloud Compliance"
                  className={styles.logo}
                />
              </a>
            </div>

            {/* Center — Nav */}
            <Nav />

            {/* Right — CTA only (no phone) */}
            <div style={{ textAlign: "right" }}>
              <a href="/contact" className={styles.btnCta}>
                🔒 Book Consultation
              </a>
            </div>
          </div>
        </header>

        {/* ===== MAIN ===== */}
        <main className="main container">{children}</main>

        {/* ===== FOOTER ===== */}
        <footer className={styles.footer}>
          <div className={`${styles.footerRow} container`}>
            {/* Left — Brand */}
            <div>
              <a href="/" aria-label="Home">
                <img
                  src="/Logo.png"
                  alt="JGS logo"
                  className="footer-logo"
                  style={{ maxHeight: "32px" }}
                />
              </a>
            </div>

            {/* Center — Links */}
            <nav className={styles.footerLinks} aria-label="Footer">
              <a href="/">Home</a>
              <a href="/secure">Secure</a>
              <a href="/support">Support</a>
              <a href="/prove">Prove</a>
              <a href="/custom">Custom</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>

            {/* Right — Contact Info */}
            <div className={styles.footerContact}>
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
