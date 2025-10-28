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
        <header className={styles.header}>
          <div className={`${styles.headerRow} container`}>
            <div>
              <a href="/" aria-label="JGS Cloud Compliance — Home">
                <img src="/Logo.png" alt="JGS Cloud Compliance" className={styles.logo} />
              </a>
            </div>
            <Nav />
            <div style={{ textAlign: "right" }}>
              <span className={styles.navPhone}>
                <a href="tel:+16192021105">📞 (619) 202-1105</a>
              </span>
              <a href="/contact" className={styles.btnCta}>
                🔒 Book Consultation
              </a>
            </div>
          </div>
        </header>

        <main className="main container">{children}</main>

        <footer className={styles.footer}>
          <div className={`${styles.footerRow} container`}>
            <div>
              <a href="/" aria-label="Home">
                <img src="/Logo.png" alt="JGS logo" className="footer-logo" />
              </a>
            </div>
            <nav className={styles.footerLinks} aria-label="Footer">
              <a href="/">Home</a>
              <a href="/secure">Secure</a>
              <a href="/support">Support</a>
              <a href="/prove">Prove</a>
              <a href="/custom">Custom</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>
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
