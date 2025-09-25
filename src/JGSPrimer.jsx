// JGS Cloud Compliance — Phase 2 React Outline (Final Content Fill)
// Structure unchanged. This update only fills in the approved Business Plan v15.0 content.
// All components remain prefixed JGS* to avoid collisions. Tests unchanged.

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

function JGSGlobalStyles() {
  return (
    <style>{`
      body { margin:0; font-family: ui-sans-serif, system-ui; color:#111; }
      .container { max-width: 1100px; margin: 0 auto; padding: 2rem; }
      .hero { padding: 5rem 0 2rem; }
      .btn { display:inline-block; padding: .75rem 1rem; border-radius: .75rem; border:1px solid rgba(0,0,0,.08); text-decoration:none; color:inherit; cursor:pointer; }
      .grid { display:grid; gap: 1rem; }
      .grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    `}</style>
  );
}

function JGSNav(){
  const link = (to, label) => (
    <NavLink to={to}>{label}</NavLink>
  );
  return (
    <header>
      <div className="container flex items-center justify-between">
        <Link to="/">JGS Cloud Compliance</Link>
        <nav>
          {link("/", "Home")}
          {link("/cpa", "CPA Firms")}
          {link("/law", "Law Firms")}
          {link("/services", "Our Services")}
          {link("/support", "Support")}
          {link("/proof", "Proof")}
          {link("/contact", "Contact")}
        </nav>
      </div>
    </header>
  );
}

function JGSFooter(){
  return (
    <footer className="border-t mt-12">
      <div className="container text-sm flex items-center justify-between">
        <div>© {new Date().getFullYear()} JGS Cloud Compliance, LLC</div>
        <div>Secure • Simple • Reliable</div>
      </div>
    </footer>
  );
}

function JGSHero(){
  return (
    <section className="hero container">
      <h1>Secure • Simple • Reliable — Microsoft 365 for CPA and law firms.</h1>
      <p>
        We harden Microsoft 365 so your firm can focus on clients, not IT problems.<br/>
        <strong>CPAs:</strong> tax season without missed deadlines or downtime.<br/>
        <strong>Lawyers:</strong> no lost credibility from insecure systems.
      </p>
      <div>
        <Link className="btn" to="/services">See Services</Link>
        <Link className="btn" to="/cpa">For CPA Firms</Link>
        <Link className="btn" to="/law">For Law Firms</Link>
      </div>
    </section>
  );
}

function JGSSupportSection(){
  return (
    <section className="container">
      <h2>Real Microsoft 365 support, same day.</h2>
      <p>No tickets. No delays. Every request answered the same business day, with urgent issues prioritized. We support only Microsoft 365—email, Teams, SharePoint, and Office apps—so nothing slips through the cracks.</p>
      <Link to="/support" className="btn">Get Support Now</Link>
    </section>
  );
}

function JGSServices(){
  return (
    <section className="container">
      <h2>Flat-fee Microsoft 365 projects</h2>
      <ul>
        <li><strong>Security & Remediation — $1,995</strong><br/>MFA enforced • Audit logging enabled • Retention applied • Global admin cleanup<br/>✅ Tenant hardened. Audit- and insurer-ready.</li>
        <li><strong>Email & DNS Cleanup — $995</strong><br/>SPF/DKIM/DMARC corrected • Mail flow fixed • Spoofing blocked<br/>✅ Emails deliver. Spoofing stopped. Domain credibility restored.</li>
        <li><strong>Backup & Recovery Setup — $995</strong><br/>Immutable backups deployed • Retention aligned • Test restore performed<br/>✅ Guaranteed recoverability.<br/>⚠️ Recycle bins are not backups.</li>
        <li><strong>Private Support & Special Projects — Scoped (min. $2,500)</strong><br/>Complex migrations • Forensic cleanups • Compliance alignments (SOC2/ABA/IRS)<br/>✅ Complex problems finished completely.<br/>⚠️ Not included in Enterprise.</li>
      </ul>
      <h2>Advisory retainers</h2>
      <ul>
        <li><strong>Advisory Light — $295/mo</strong><br/>Leadership support by email • Quick answers • Action Notes</li>
        <li><strong>Advisory Plus — $495/mo</strong><br/>Full Microsoft 365 support for leadership & staff • Email/phone/remote • License/bill reviews • Priority urgent issues</li>
        <li><strong>Advisory Enterprise — $995/mo (12-mo min)</strong><br/>Unlimited support • Quarterly reviews & reporting • Includes 1× each project annually<br/>⚠️ Exclusions: Private Support, major migrations, non-M365 systems.</li>
      </ul>
    </section>
  );
}

function JGSCPAs(){
  return (
    <section className="container">
      <h1>Tax season without tech stress.</h1>
      <p>We keep email, Teams, SharePoint, and Office apps running securely and smoothly so your firm hits deadlines without downtime. IRS safeguard alignment and peer-review logging are covered as part of our Microsoft 365 work—so partners stay focused on clients, not IT.</p>
    </section>
  );
}

function JGSLaw(){
  return (
    <section className="container">
      <h1>Confidential collaboration, year-round.</h1>
      <p>We harden Microsoft 365 so client matters move without risk—confidential email, reliable Teams meetings, and SharePoint that just works. SOC2/ABA safeguards baked in so attorneys can focus on clients with confidence.</p>
    </section>
  );
}

function JGSProof(){
  return (
    <section className="container">
      <h2>We don’t promise security. We prove it.</h2>
      <ul>
        <li><strong>CPA Renewal Saved</strong> — MFA enforced + logs delivered → $12k premium hike canceled</li>
        <li><strong>Law Firm Spoofing Blocked</strong> — DNS corrected → $75k wire fraud prevented</li>
      </ul>
      <h3>Deliverables</h3>
      <ul>
        <li>Secure Score snapshot</li>
        <li>DNS health screenshot</li>
        <li>Backup restore confirmation</li>
        <li>Leadership Action Note</li>
      </ul>
    </section>
  );
}

function JGSContact(){
  return (
    <section className="container">
      <h1>Let’s get started</h1>
      <p>Secure, simple, reliable Microsoft 365 for your firm. Flat fees. Real support.</p>
      <button className="btn">Schedule a Call</button>
      <button className="btn">Get Support Now</button>
      <button className="btn">Download Sample Report</button>
    </section>
  );
}

function JGSHome(){
  return (
    <>
      <JGSHero/>
      <JGSSupportSection/>
      <JGSServices/>
      <JGSProof/>
      <JGSContact/>
    </>
  );
}

function App(){
  return (
    <BrowserRouter>
      <JGSGlobalStyles />
      <JGSNav />
      <Routes>
        <Route path="/" element={<JGSHome />} />
        <Route path="/cpa" element={<JGSCPAs />} />
        <Route path="/law" element={<JGSLaw />} />
        <Route path="/services" element={<JGSServices />} />
        <Route path="/support" element={<JGSSupportSection />} />
        <Route path="/proof" element={<JGSProof />} />
        <Route path="/contact" element={<JGSContact />} />
      </Routes>
      <JGSFooter />
    </BrowserRouter>
  );
}

const rootEl = document.getElementById("root") || (()=>{
  const el = document.createElement("div");
  el.id = "root";
  document.body.appendChild(el);
  return el;
})();
ReactDOM.createRoot(rootEl).render(<App />);

// Smoke tests (do not change expectation; wait for DOM)
(function(){
  function waitFor(predicate, timeout=3000, interval=16){
    return new Promise((resolve)=>{
      const start = Date.now();
      const id = setInterval(()=>{
        if (predicate() || Date.now()-start>timeout){ clearInterval(id); resolve(); }
      }, interval);
    });
  }
  // Wait until nav is mounted, then assert ≥6 links in header nav
  waitFor(()=> document.querySelectorAll("header nav a").length >= 6)
    .then(()=>{
      const navLinks = document.querySelectorAll("header nav a");
      console.assert(navLinks.length >= 6, "Nav should have at least 6 links");
    });
})();
