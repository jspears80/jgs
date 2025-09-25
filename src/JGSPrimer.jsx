// JGSPrimer.jsx — Single‑file drop‑in (no structure changes)
// Paste this INTO your src/JGSPrimer.jsx exactly. It renders the whole site shell
// and keeps the nav test (≥6 links) passing. Requires react, react-dom, react-router-dom.

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

/****************************
 * Global Styles
 ****************************/
function JGSGlobalStyles() {
  return (
    <style>{`
      html, body { margin:0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; }
      .container { max-width: 1100px; margin: 0 auto; padding: 2rem; }
      .hero { padding: 5rem 0 2rem; }
      .btn { display:inline-block; padding:.75rem 1rem; border-radius:.75rem; border:1px solid rgba(0,0,0,.08); text-decoration:none; color:inherit; cursor:pointer; }
      .btn:hover { transform: translateY(-1px); }
      .grid { display:grid; gap: 1rem; }
      .grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      @media (max-width: 900px) { .grid-3 { grid-template-columns: 1fr; } }
      header, footer { background:#fff; border-color:#eee; border-style:solid; }
      header { border-width:0 0 1px; }
      footer { border-width:1px 0 0; }
      .shadow-card { box-shadow: 0 4px 18px rgba(0,0,0,.06); }
    `}</style>
  );
}

/****************************
 * Data (Business Plan v15.0)
 ****************************/
const JGSProjects = [
  {
    id: "security",
    name: "Microsoft 365 Security & Remediation",
    price: "$1,995",
    scope: ["MFA enforced", "Audit logging enabled", "Retention applied", "Global admin cleanup"],
    outcome: "Tenant hardened. Audit- and insurer-ready.",
  },
  {
    id: "dns",
    name: "Microsoft 365 Email & DNS Cleanup",
    price: "$995",
    scope: ["SPF/DKIM/DMARC corrected", "Mail flow fixed", "Spoofing blocked"],
    outcome: "Emails deliver. Spoofing stopped. Domain credibility restored.",
  },
  {
    id: "backup",
    name: "Microsoft 365 Backup & Recovery Setup",
    price: "$995",
    scope: ["Immutable backups deployed", "Retention aligned", "Test restore performed"],
    outcome: "Guaranteed recoverability of Microsoft 365 data.",
    note: "Recycle bins are not backups.",
  },
  {
    id: "private",
    name: "Microsoft 365 Private Support & Special Projects",
    price: "Scoped (min. $2,500)",
    scope: ["Complex migrations", "Forensic cleanups", "Compliance alignments (SOC2/ABA/IRS)"] ,
    outcome: "Complex problems finished completely.",
    exclusion: "Not included in Enterprise.",
  },
];

const JGSRetainers = [
  { tier: "Advisory Light", price: "$295/mo", bullets: ["Leadership support by email", "Quick answers for compliance/audit questions", "Written guidance & Action Notes"] },
  { tier: "Advisory Plus", price: "$495/mo", bullets: ["Full M365 support for leadership & staff", "Email, phone, meetings, remote help", "License/bill reviews", "Priority for urgent issues"] },
  { tier: "Advisory Enterprise", price: "$995/mo (12-mo min)", bullets: ["Unlimited M365 support for staff & leadership", "Quarterly reviews & reporting", "Includes 1× each project annually", "Exclusions: Private Support, major migrations, non‑M365 systems"] },
];

const JGSProofDots = [
  { title: "MFA: Why optional is not secure", blurb: "Default Microsoft 365 leaves MFA optional—here’s what we enforce and why it matters.", outcome:"Reduced account takeover risk." },
  { title: "Logs: The 90‑day purge", blurb: "Audit logs roll off by default; we enable proper retention so evidence exists when needed.", outcome:"Audit visibility preserved." },
  { title: "Recycle bins ≠ backups", blurb: "Immutable backups with test restores prove data can be recovered.", outcome:"Guaranteed recoverability." },
  { title: "DNS credibility (SPF/DKIM/DMARC)", blurb: "Alignment fixes stop spoofing and restore deliverability.", outcome:"Spoofing blocked; email lands." },
  { title: "Secure Score before/after", blurb: "A simple snapshot that shows the hardening delta we deliver.", outcome:"Measurable security improvement." },
  { title: "Action Notes example", blurb: "How leadership gets clear next steps and owner/duedate tracking.", outcome:"Decisions made quickly." },
];

/****************************
 * Header / Footer
 ****************************/
function JGSNav(){
  const link = (to, label) => (
    <NavLink to={to} aria-label={label} style={{padding:"8px 12px", borderRadius:"10px", textDecoration:"none"}}>{label}</NavLink>
  );
  return (
    <header>
      <div className="container" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <Link to="/" aria-label="JGS Cloud Compliance — Home" style={{fontWeight:600, textDecoration:"none", color:"inherit"}}>JGS Cloud Compliance</Link>
        <nav aria-label="Primary" style={{display:"flex", gap:"8px", flexWrap:"wrap"}}>
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
    <footer>
      <div className="container" style={{display:"flex", alignItems:"center", justifyContent:"space-between", fontSize:"14px", opacity:.9}}>
        <div>© {new Date().getFullYear()} JGS Cloud Compliance, LLC</div>
        <div>Secure • Simple • Reliable</div>
      </div>
    </footer>
  );
}

/****************************
 * Sections / Components
 ****************************/
function JGSHero(){
  return (
    <section className="hero container">
      <h1 style={{fontSize:"42px", lineHeight:1.15, margin:"0 0 12px", fontWeight:800}}>Secure • Simple • Reliable — Microsoft 365 for CPA and law firms.</h1>
      <p style={{fontSize:"18px", opacity:.9, margin:"0 0 16px"}}>
        We harden Microsoft 365 so your firm can focus on clients, not IT problems.<br/>
        <strong>CPAs:</strong> tax season without missed deadlines or downtime.<br/>
        <strong>Lawyers:</strong> no lost credibility from insecure systems.
      </p>
      <div style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
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
      <h2 style={{fontSize:"28px", margin:"0 0 6px", fontWeight:700}}>Real Microsoft 365 support, same day.</h2>
      <p style={{opacity:.9, margin:"0 0 10px"}}>No tickets. No delays. Every request is answered the same business day, with urgent issues prioritized. We support only Microsoft 365 — email, Teams, SharePoint, and Office apps — so nothing slips through the cracks.</p>
      <Link to="/support" className="btn">Get Support Now</Link>
    </section>
  );
}

function JGSServicesGrid(){
  return (
    <section className="container">
      <h2 style={{fontSize:"28px", margin:"0 0 6px", fontWeight:700}}>Flat-fee Microsoft 365 projects</h2>
      <div className="grid grid-3">
        {JGSProjects.map(p => (
          <article key={p.id} className="p-5 rounded-2xl border shadow-card" style={{padding:"20px", borderRadius:"16px", border:"1px solid #eee"}}>
            <h3 style={{fontSize:"20px", fontWeight:700}}>{p.name}</h3>
            <div style={{fontSize:"12px", opacity:.7, marginBottom:"8px"}}>{p.price}</div>
            <ul style={{paddingLeft:"18px", margin:"0 0 8px", opacity:.9}}>
              {p.scope.map((s,i)=>(<li key={i}>{s}</li>))}
            </ul>
            <div>✅ {p.outcome}</div>
            {p.note && <div style={{marginTop:"6px", fontSize:"12px", opacity:.75}}>⚠️ {p.note}</div>}
            {p.exclusion && <div style={{marginTop:"6px", fontSize:"12px", opacity:.75}}>⚠️ {p.exclusion}</div>}
          </article>
        ))}
      </div>
    </section>
  );
}

function JGSRetainersTable(){
  return (
    <section className="container">
      <h2 style={{fontSize:"28px", margin:"0 0 6px", fontWeight:700}}>Advisory retainers</h2>
      <div className="grid grid-3">
        {JGSRetainers.map((r) => (
          <article key={r.tier} className="p-5 rounded-2xl border shadow-card" style={{padding:"20px", borderRadius:"16px", border:"1px solid #eee"}}>
            <h3 style={{fontSize:"18px", fontWeight:700}}>{r.tier}</h3>
            <div style={{fontSize:"12px", opacity:.7, marginBottom:"8px"}}>{r.price}</div>
            <ul style={{paddingLeft:"18px", margin:0, opacity:.9}}>
              {r.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function JGSProofSection(){
  return (
    <section className="container">
      <h2 style={{fontSize:"28px", margin:"0 0 6px", fontWeight:700}}>We don’t promise security. We prove it.</h2>
      <div className="grid grid-3">
        <article className="p-5 rounded-2xl border shadow-card" style={{padding:"20px", borderRadius:"16px", border:"1px solid #eee"}}>
          <h3 style={{fontWeight:700}}>CPA Renewal Saved</h3>
          <p style={{opacity:.9}}>MFA enforced + logs delivered → $12k premium hike canceled.</p>
        </article>
        <article className="p-5 rounded-2xl border shadow-card" style={{padding:"20px", borderRadius:"16px", border:"1px solid #eee"}}>
          <h3 style={{fontWeight:700}}>Law Firm Spoofing Blocked</h3>
          <p style={{opacity:.9}}>DNS corrected → prevented $75k wire fraud.</p>
        </article>
        <article className="p-5 rounded-2xl border shadow-card" style={{padding:"20px", borderRadius:"16px", border:"1px solid #eee"}}>
          <h3 style={{fontWeight:700}}>Deliverables (every project)</h3>
          <ul style={{paddingLeft:"18px", margin:0, opacity:.9}}>
            <li>Secure Score snapshot</li>
            <li>DNS health screenshot</li>
            <li>Backup restore confirmation</li>
            <li>Leadership Action Note</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

function JGSDotGrid(){
  const [open, setOpen] = React.useState(null);
  return (
    <section className="container">
      <h2 style={{fontSize:"28px", margin:"0 0 6px", fontWeight:700}}>Proof Library</h2>
      <div className="grid" style={{gridTemplateColumns:"repeat(6,1fr)", gap:"10px"}}>
        {JGSProofDots.map((d, i) => (
          <button key={i} className="h-3 w-3 rounded-full" style={{height:12, width:12, borderRadius:"50%", background:"rgba(0,0,0,.7)", border:"none"}} aria-label={d.title} onClick={()=>setOpen(d)} />
        ))}
      </div>
      {open && <JGSSoftPage dot={open} onClose={()=>setOpen(null)} />}
    </section>
  );
}

function JGSSoftPage({ dot, onClose }){
  return (
    <div className="fixed inset-0" style={{position:"fixed", inset:0, background:"rgba(0,0,0,.5)", display:"grid", placeItems:"center", padding:"1rem"}} role="dialog" aria-modal="true">
      <div className="bg-white" style={{background:"#fff", maxWidth:"720px", width:"100%", borderRadius:"16px", overflow:"hidden"}}>
        <div style={{padding:"20px", display:"flex", alignItems:"start", justifyContent:"space-between", borderBottom:"1px solid #eee"}}>
          <h3 style={{fontSize:"20px", fontWeight:700}}>{dot.title}</h3>
          <button className="btn" onClick={onClose}>Close</button>
        </div>
        <div style={{padding:"20px", display:"grid", gap:"12px"}}>
          {dot.image && <img src={dot.image} alt="" style={{borderRadius:"12px", border:"1px solid #eee"}} />}
          <p style={{opacity:.9}}>{dot.blurb}</p>
          {dot.outcome && <div style={{opacity:.95}}>✅ {dot.outcome}</div>}
        </div>
      </div>
    </div>
  );
}

/****************************
 * Pages
 ****************************/
function JGSHome(){
  return (
    <>
      <JGSHero/>
      <JGSSupportSection/>
      <JGSServicesGrid/>
      <JGSRetainersTable/>
      <JGSProofSection/>
      <JGSDotGrid/>
      <JGSCTASection/>
    </>
  );
}

function JGSCPAs(){
  return (
    <section className="container">
      <h1 style={{fontSize:"34px", fontWeight:800, margin:"0 0 8px"}}>Tax season without tech stress.</h1>
      <p style={{opacity:.9, margin:0}}>We keep email, Teams, SharePoint, and Office apps running securely and smoothly so your firm can hit deadlines without downtime. IRS safeguard alignment and peer-review logging are covered as part of our Microsoft 365 work—so partners stay focused on clients, not IT.</p>
    </section>
  );
}

function JGSLaw(){
  return (
    <section className="container">
      <h1 style={{fontSize:"34px", fontWeight:800, margin:"0 0 8px"}}>Confidential collaboration, year-round.</h1>
      <p style={{opacity:.9, margin:0}}>We harden Microsoft 365 so client matters move without risk—secure email, reliable Teams, and SharePoint that just works.</p>
    </section>
  );
}

function JGSServices(){
  return (
    <>
      <section className="container">
        <h1 style={{fontSize:"34px", fontWeight:800, margin:"0 0 8px"}}>Our Services</h1>
        <p style={{opacity:.9, margin:"0 0 8px"}}>Flat-fee Microsoft 365 projects and advisory retainers built for CPA & law firms.</p>
      </section>
      <JGSServicesGrid/>
      <JGSRetainersTable/>
    </>
  );
}

function JGSSupport(){
  return (
    <section className="container">
      <h1 style={{fontSize:"34px", fontWeight:800, margin:"0 0 8px"}}>Support When You Need It</h1>
      <p style={{opacity:.9, margin:"0 0 8px"}}>No tickets. No delays. Same-business-day answers; urgent issues prioritized. Microsoft 365 only—email, Teams, SharePoint, Office apps.</p>
      <ul style={{paddingLeft:"18px", margin:0, opacity:.9}}>
        <li>Direct contact options: email, phone, remote session</li>
        <li>Leadership-ready Action Notes for follow‑through</li>
        <li>Quarterly check‑ins for Enterprise retainers</li>
      </ul>
    </section>
  );
}

function JGSProof(){
  return (
    <>
      <JGSProofSection/>
      <JGSDotGrid/>
    </>
  );
}

function JGSContact(){
  return (
    <section className="container">
      <h1 style={{fontSize:"34px", fontWeight:800, margin:"0 0 8px"}}>Let’s get started</h1>
      <p style={{opacity:.9, margin:"0 0 10px"}}>Secure, simple, reliable Microsoft 365 for your firm. Flat fees. Real support.</p>
      <div style={{display:"flex", gap:"8px", flexWrap:"wrap"}}>
        <button className="btn">Schedule a Call</button>
        <button className="btn">Get Support Now</button>
        <button className="btn">Download Sample Report</button>
      </div>
    </section>
  );
}

function JGSCTASection(){
  return (
    <section className="container" style={{textAlign:"center", padding:"48px 0"}}>
      <h2 style={{fontSize:"28px", margin:"0 0 6px", fontWeight:700}}>Your firm deserves Microsoft 365 that just works.</h2>
      <p style={{opacity:.9, margin:"0 0 10px"}}>Secure, simple, reliable — with flat fees and real support. Let’s get started today.</p>
      <div style={{display:"flex", gap:"8px", flexWrap:"wrap", justifyContent:"center"}}>
        <Link to="/contact" className="btn">Schedule a Call</Link>
        <Link to="/support" className="btn">Get Support Now</Link>
        <Link to="/proof" className="btn">Download Sample Report</Link>
      </div>
    </section>
  );
}

/****************************
 * App & Routes
 ****************************/
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
        <Route path="/support" element={<JGSSupport />} />
        <Route path="/proof" element={<JGSProof />} />
        <Route path="/contact" element={<JGSContact />} />
      </Routes>
      <JGSFooter />
    </BrowserRouter>
  );
}

/****************************
 * Mount
 ****************************/
const rootEl = document.getElementById("root") || (()=>{
  const el = document.createElement("div");
  el.id = "root";
  document.body.appendChild(el);
  return el;
})();
ReactDOM.createRoot(rootEl).render(<App />);

/****************************
 * Smoke Tests (do not change expectation; wait for DOM)
 ****************************/
(function(){
  function waitFor(predicate, timeout=3000, interval=16){
    return new Promise((resolve)=>{
      const start = Date.now();
      const id = setInterval(()=>{
        if (predicate() || Date.now()-start>timeout){ clearInterval(id); resolve(); }
      }, interval);
    });
  }

  // Core data shapes
  console.assert(Array.isArray(JGSProjects) && JGSProjects.length === 4, "Expected 4 flat‑fee projects");
  console.assert(Array.isArray(JGSRetainers) && JGSRetainers.length === 3, "Expected 3 retainer tiers");
  console.assert(Array.isArray(JGSProofDots) && JGSProofDots.length >= 6, "Expected >=6 proof dots");

  // Nav count (≥6) after mount
  waitFor(() => document.querySelectorAll("header nav a").length >= 6).then(() => {
    const navLinks = document.querySelectorAll("header nav a");
    console.assert(navLinks.length >= 6, "Nav should have at least 6 links");
    const labels = Array.from(navLinks).map(a => (a.textContent||"").trim());
    ["Home","CPA Firms","Law Firms","Our Services","Support","Proof","Contact"].forEach(lbl => {
      console.assert(labels.includes(lbl), `Missing nav label: ${lbl}`);
    });
  });
})();
