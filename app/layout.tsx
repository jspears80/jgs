<footer className="footer">
  <div className="container footer-grid">
    <div className="footer-brand">
      <img src="/Logo.png" alt="JGS logo" className="footer-logo" />
      <span className="sr-only">JGS Cloud Compliance</span>
    </div>

    <nav className="footer-links" aria-label="Footer">
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

  {/* Credibility row */}
  <div className="trust-row">
    <div className="container trust-items">
      <span>✅ Fully Insured — Technology & Cyber Liability Coverage</span>
      <a
        href="https://portal.nextinsurance.com/public/certificates/live-certificate/9d9860207b4a4a69bec692ceab81979f"
        target="_blank"
        rel="noopener"
        className="trust-link"
      >
        📄 View Certificate of Insurance
      </a>
      <span>🔐 Microsoft 365 E3 + Teams Infrastructure</span>
      <span>🧾 Registered California LLC — Entity ID B20250301108</span>
    </div>
  </div>

  <div className="subfooter">
    <div className="container subfooter-row">
      <span>© {new Date().getFullYear()} JGS Cloud Compliance, LLC</span>
      <span className="dot">•</span>
      <span>City Business No. 013999-2025</span>
      <span className="dot">•</span>
      <a href="/privacy" className="subfooter-link">Privacy</a>
      <span className="dot">•</span>
      <a href="/terms" className="subfooter-link">Terms</a>
    </div>
  </div>
</footer>
