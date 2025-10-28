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
        {/* =============== HEADER =============== */}
        <header className="header">
          <div className="header-row container">
            {/* ---- Brand ---- */}
            <div className="brand">
              <img src="/Logo.png" alt="JGS Cloud Compliance" className="logo" />
              <span className="tagline" aria-hidden="true">
                {/* hidden by CSS */}
              </span>
            </div>

            {/* ---- Navigation ---- */}
            <Nav />

            {/* ---- CTA ---- */}
            <div className="nav-right">
              <a className="btn btn-cta" href="/contact">
                🔒 Book Consultation
              </a>
            </div>
          </div>
        </header>

        {/* =============== MAIN CONTENT =============== */}
        <main className="main container">{children}</main>

        {/* =============== FOOTER =============== */}
        <footer className="footer">
          <div className="footer-row container">
            {/* ---- Brand ---- */}
            <div className="brand">
              <img
                src="/Logo.png"
                alt="JGS Cloud Compliance"
                className="logo"
              />
            </div>

            {/* ---- Navigation ---- */}
            <Nav />

            {/* ---- Contact ---- */}
            <div className="footer-contact">
              <a
                href="mailto:support@cloudjgs.com"
                className="footer-link"
                style={{ display: "block" }}
              >
                support@cloudjgs.com
              </a>
              <span style={{ opacity: 0.9 }}>
                Office:{" "}
                <a
                  href="tel:+16192021105"
                  style={{ textDecoration: "none" }}
                >
                  (619) 202-1105
                </a>
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
