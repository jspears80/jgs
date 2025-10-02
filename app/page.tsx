```tsx
'use client';

import React from 'react';

// ================= CONFIG =================
const CONFIG = Object.freeze({
  brand: 'JGS Cloud Compliance',
  tagline: 'Microsoft 365 Secured. Email Delivered. Data Recovered.',
  bookingUrl:
    'https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled',
  supportEmail: 'support@cloudjgs.com',
  linkedinUrl: 'https://www.linkedin.com/in/jspears80/',
  website: 'https://www.cloudjgs.com/',
  heroImage: '/founder.jpg',
  logo: '/Logo Transparent.png',
});

// ================= GLOBAL STYLES + BG =================
const GlobalStyles = () => (
  <style>{`
    /* Base */
    body { margin:0; background:#0b0b0b; color:#fff; font-family: system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif; }
    a { color: inherit; text-decoration: none; }

    /* Layout */
    .container { max-width:72rem; margin:auto; padding:1rem; }
    .section { padding:3rem 0; scroll-margin-top:4rem; }

    /* Type */
    .title-xl { font-size:2rem; font-weight:800; margin:0 0 .75rem; }
    .title-lg { font-size:1.05rem; font-weight:700; margin:.25rem 0 .5rem; }
    .lead    { opacity:.92; margin:.25rem 0 1rem; }

    /* Soft page wrapper */
    .page { border:1px solid rgba(255,255,255,.14); border-radius:1rem; background:rgba(0,0,0,.55); backdrop-filter:blur(6px); box-shadow:0 10px 30px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.06); padding:1.25rem 1.5rem; }
    .page + .page { margin-top:1rem; }

    /* Blocks */
    .card { border:1px solid rgba(255,255,255,.12); border-radius:.6rem; padding:1rem 1.25rem; background:rgba(0,0,0,.6); line-height:1.55; }
    .hr   { height:1px; background:rgba(255,255,255,.12); margin:1rem 0; }

    /* Header */
    header { position:sticky; top:0; background:rgba(0,0,0,.6); backdrop-filter:blur(6px); z-index:50; border-bottom:1px solid rgba(255,255,255,.15); }
    .header-row{ display:flex; align-items:center; justify-content:space-between; gap:1rem; padding:.8rem 1rem; }
    nav a { font-weight:600; color:#fff; }
    .logo { height:28px; margin-right:.6rem; vertical-align:middle; }

    /* Footer */
    footer { border-top:1px solid rgba(255,255,255,.2); padding:1rem; text-align:center; font-size:.9rem; opacity:.9; }

    /* Background layers */
    .bg-wrap { position:fixed; inset:0; z-index:-10; overflow:hidden; }
    .bg-grad { position:absolute; inset:0; background: radial-gradient(1200px 600px at 50% -10%, #0b0b0b 0%, transparent 60%); pointer-events:none; }
    .bg-grid { position:absolute; inset:0; background-image: linear-gradient(to right, rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.1) 1px, transparent 1px); background-size:64px 64px; opacity:.3; pointer-events:none; }
    .bg-flare { position:absolute; filter: blur(90px); opacity:.55; mix-blend-mode: screen; pointer-events:none; }
    .flare-1 { width:46rem; height:46rem; left:-20rem; top:-18rem; background: radial-gradient(circle at 30% 30%, rgba(34,211,238,.55), rgba(139,92,246,.35) 55%, transparent 70%); animation:pulse 9s ease-in-out infinite; }
    .flare-2 { width:40rem; height:40rem; right:-18rem; bottom:-14rem; background: radial-gradient(circle at 70% 70%, rgba(232,121,249,.45), rgba(56,189,248,.35) 50%, transparent 70%); animation:pulse 12s ease-in-out infinite reverse; }
    .bg-flow { position:absolute; inset:0; pointer-events:none; background:
      linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,.25) 10%, rgba(0,0,0,0) 20%),
      repeating-linear-gradient(90deg, rgba(80,200,255,.35) 0 2px, transparent 2px 8px),
      repeating-linear-gradient(0deg, rgba(160,120,255,.22) 0 2px, transparent 2px 10px);
      -webkit-mask-image: radial-gradient(1200px 600px at 50% 0%, rgba(255,255,255,.9), transparent 70%);
      mask-image: radial-gradient(1200px 600px at 50% 0%, rgba(255,255,255,.9), transparent 70%);
      animation: flowX 18s linear infinite; opacity:.25; }
    .bg-scan { position:absolute; inset:-20%; background: repeating-linear-gradient(135deg, rgba(255,255,255,.05) 0 2px, transparent 2px 18px); animation:scan 22s linear infinite; opacity:.15; pointer-events:none; }

    /* Tables */
    table { width:100%; border-collapse:collapse; margin-top:1rem; }
    th, td { padding:.75rem .9rem; text-align:left; vertical-align:top; }
    thead th { font-weight:700; border-bottom:2px solid rgba(255,255,255,.2); }
    tbody tr+tr td { border-top:1px solid rgba(255,255,255,.12); }

    /* Lists */
    ul { margin:.5rem 0 1rem 1.25rem; padding:0; }
    ul li { margin:.25rem 0; list-style:disc; }

    /* Mobile hamburger (CSS-only) */
    #nav-toggle{ display:none; }
    .burger{ display:none; cursor:pointer; width:36px; height:28px; position:relative; }
    .burger span{ position:absolute; left:0; right:0; height:2px; background:#fff; border-radius:2px; transition:transform .2s, opacity .2s, top .2s; }
    .burger span:nth-child(1){ top:4px; }
    .burger span:nth-child(2){ top:13px; }
    .burger span:nth-child(3){ top:22px; }
    .nav-links{ display:flex; gap:1.25rem; flex-wrap:wrap; align-items:center; }

    @media (max-width:900px){
      .nav-links{ position:fixed; top:56px; left:0; right:0; background:rgba(0,0,0,.92); border-bottom:1px solid rgba(255,255,255,.12); transform:translateY(-120%); transition:transform .2s ease; display:grid; gap:.5rem; padding:.75rem 1rem; }
      #nav-toggle:checked ~ .nav-links{ transform:translateY(0); }
      .burger{ display:block; }
      .header-row{ padding:.6rem 1rem; }
      .nav-links a{ padding:.5rem .75rem; border-radius:.5rem; }
    }

    @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
    @keyframes flowX { 0%{ background-position:0 0,0 0,0 0 } 100%{ background-position:800px 0,400px 0,0 300px } }
    @keyframes scan { 0%{ transform:translate3d(0,0,0) } 100%{ transform:translate3d(-10%,-10%,0) } }
  `}</style>
);

const BG = () => (
  <div className="bg-wrap" aria-hidden>
    <div className="bg-grad" />
    <div className="bg-grid" />
    <div className="bg-flare flare-1" />
    <div className="bg-flare flare-2" />
    <div className="bg-flow" />
    <div className="bg-scan" />
  </div>
);

// ================= PRIMITIVES =================
const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="section container">
    <div className="page">
      <h2 className="title-xl">{title}</h2>
      {subtitle && <p className="lead">{subtitle}</p>}
      <div>{children}</div>
    </div>
  </section>
);

const Card = ({ title, children }) => (
  <div className="card">
    {title && <h3 className="title-lg">{title}</h3>}
    {children}
  </div>
);

// ================= NAV + FOOTER =================
const Nav = () => (
  <header>
    <div className="container header-row">
      <div style={{ display:'flex', alignItems:'center', gap:'.6rem' }}>
        <img src={CONFIG.logo} alt="JGS logo" className="logo" />
        <a href="#home" style={{ fontWeight:800, fontSize:'1.1rem' }}>{CONFIG.brand}</a>
      </div>
      {/* Mobile toggle + nav */}
      <input id="nav-toggle" type="checkbox" aria-label="Toggle navigation" />
      <label htmlFor="nav-toggle" className="burger" aria-hidden="true">
        <span></span><span></span><span></span>
      </label>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#advisory">Advisory</a>
        <a href="#cpa">CPA</a>
        <a href="#law">Law</a>
        <a href="#risks">Risks</a>
        <a href="#why">Why JGS</a>
        <a href="#get">Get Started</a>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer>© {new Date().getFullYear()} {CONFIG.brand}</footer>
);

// ================= SECTIONS =================
const Home = () => (
  <Section
    id="home"
    title="Protecting Clients. Preserving Trust."
    subtitle="Your firm’s reputation rests on confidentiality. We secure Microsoft 365 so every client interaction is protected — and every safeguard is backed by proof."
  >
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'1rem' }}>
      <Card>🛡️ Renewal Approved — Coverage Protected</Card>
      <Card>💰 $75K Saved. Fraud Stopped Cold.</Card>
      <Card>⚖️ Deadline Met. Case Delivered.</Card>
      <Card>📈 Score Doubled. Risk Reduced.</Card>
    </div>
  </Section>
);

const Services = () => (
  <Section id="services" title="Core Services">
    <div className="card">
      <h3 className="title-lg">🔒 Security Hardening & Remediation</h3>
      <p>Insurers raise premiums. Regulators raise standards. We align your Microsoft 365 so you can <strong>prove control, reduce exposure, and negotiate from strength.</strong> This isn’t about passwords — it’s about showing you already meet the bar they set.</p>
    </div>
    <div className="hr" />
    <div className="card">
      <h3 className="title-lg">📧 Secure Email Delivery</h3>
      <p>Email is your firm’s lifeline: invoices, filings, contracts. If they don’t land, business stops. We ensure your domain is <strong>recognized, trusted, and protected</strong> — so every message carries weight with clients, courts, and counterparties alike.</p>
    </div>
    <div className="hr" />
    <div className="card">
      <h3 className="title-lg">🔁 Backup & Recovery Assurance</h3>
      <p>A backup means nothing until recovery is proven. We make it a <strong>measured business advantage:</strong> rapid restores, aligned retention, logged tests. When an insurer or regulator asks, you don’t explain — you show them.</p>
    </div>
  </Section>
);

const Advisory = () => (
  <Section id="advisory" title="Advisory Retainers" subtitle="Defined tiers. Clear support. Proof that scales with your risk.">
    <div className="card">
      <h3 className="title-lg">💧 Lite Advisory</h3>
      <p>Insurance forms ask. Regulators check. We keep your Microsoft 365 <strong>monitored, drift tracked, and evidence current.</strong></p>
      <ul>
        <li><strong>Support:</strong> Email only, business hours</li>
        <li><strong>Commitment:</strong> Minimal — one admin account + a firm contact</li>
        <li><strong>What You Get:</strong> Drift alerts, monitoring, binder evidence kept up to date</li>
      </ul>
      <p><em>Best for firms that want oversight without heavy involvement.</em></p>
    </div>
    <div className="hr" />
    <div className="card">
      <h3 className="title-lg">📘 Plus Advisory</h3>
      <p>Security isn’t “set and forget.” We run <strong>regular drills, reviews, and checks</strong> so your systems stay aligned as your firm evolves.</p>
      <ul>
        <li><strong>Support:</strong> Email + scheduled remote sessions</li>
        <li><strong>Commitment:</strong> Moderate — quarterly reviews, occasional staff input</li>
        <li><strong>What You Get:</strong> Recovery drills, deliverability checks, policy updates</li>
      </ul>
      <p><em>Best for firms that want tested, reliable systems year-round.</em></p>
    </div>
    <div className="hr" />
    <div className="card">
      <h3 className="title-lg">🏛️ Enterprise Advisory</h3>
      <p>High-stakes clients, insurers, and regulators demand more. We deliver <strong>priority support, board-level reporting, and regulator/insurer alignment.</strong></p>
      <ul>
        <li><strong>Support:</strong> Priority email + chat + on-demand remote sessions</li>
        <li><strong>Commitment:</strong> High — monthly reviews, dedicated contact, regulator coordination</li>
        <li><strong>What You Get:</strong> Strategic reporting, insurer negotiation support, alignment maps</li>
      </ul>
      <p><em>Best for firms facing high scrutiny and higher risk.</em></p>
    </div>
  </Section>
);

const CPA = () => (
  <Section id="cpa" title="CPA Firms">
    <div className="card">
      <h3 className="title-lg">📊 CPA Firms</h3>
      <p><strong>Tax season isn’t forgiving.</strong> Staff are buried, deadlines mount, and auditors want proof you can’t scramble to produce. We harden Microsoft 365 so you can <strong>work without disruption and show compliance on demand.</strong></p>
      <ul>
        <li>Controls aligned to IRS & AICPA standards</li>
        <li>Retention mapped to peer review cycles</li>
        <li>Evidence binders ready before auditors ask</li>
      </ul>
      <p><em>Outcome:</em> Even at peak season, your firm is compliant, covered, and client-ready.</p>
    </div>
  </Section>
);

const Law = () => (
  <Section id="law" title="Law Firms">
    <div className="card">
      <h3 className="title-lg">⚖️ Law Firms</h3>
      <p><strong>Confidentiality is everything.</strong> A single breach or failed retention policy can undermine client trust and sink insurer negotiations. We secure Microsoft 365 so your firm can <strong>protect data, meet discovery demands, and stand up under scrutiny.</strong></p>
      <ul>
        <li>Email delivery that clients and courts can trust</li>
        <li>Retention aligned to discovery and insurer mandates</li>
        <li>Proof packages that show continuity and confidentiality controls</li>
      </ul>
      <p><em>Outcome:</em> When clients, insurers, or regulators demand assurance, your firm answers with evidence — not promises.</p>
    </div>
  </Section>
);

const Risks = () => (
  <Section id="risks" title="The Risk / Our Response">
    <table>
      <thead>
        <tr>
          <th style={{ width:'50%' }}>The Risk</th>
          <th style={{ width:'50%' }}>Our Response</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>🎯 <strong>Initial Access</strong><br/>Phishing, MFA fatigue, legacy auth, token replay</td>
          <td><strong>MFA + Conditional Access Everywhere</strong></td>
        </tr>
        <tr>
          <td>🔑 <strong>Privilege Escalation</strong><br/>Shadow admins, stale app consents, insecure break-glass</td>
          <td><strong>Admin Hygiene</strong></td>
        </tr>
        <tr>
          <td>🔄 <strong>Lateral Movement</strong><br/>Mailbox rules, OAuth abuse, Teams/SharePoint sprawl</td>
          <td><strong>Mailflow Defense</strong></td>
        </tr>
        <tr>
          <td>📌 <strong>Persistence</strong><br/>Malicious connectors, forwarding rules, guest accounts, PIM gaps</td>
          <td><strong>Tightened Controls</strong></td>
        </tr>
        <tr>
          <td>📤 <strong>Exfiltration</strong><br/>External sharing, ungoverned links, weak retention</td>
          <td><strong>Logging + Retention</strong></td>
        </tr>
        <tr>
          <td>♻️ <strong>Recovery & Assurance</strong><br/>Backups that exist but can’t be proven</td>
          <td><strong>Immutable Backups</strong></td>
        </tr>
      </tbody>
    </table>
    <div className="card" style={{ marginTop:'1rem' }}>
      <strong>Bottom Line:</strong> We don’t just close gaps. We document every control so you can prove it — to insurers, auditors, and clients.
    </div>
  </Section>
);

const Why = () => (
  <Section id="why" title="Why JGS Cloud Compliance">
    <p className="lead">MSPs promise support. We deliver evidence.</p>
    <table>
      <thead>
        <tr>
          <th style={{ width:'28%' }}></th>
          <th style={{ width:'32%' }}>MSPs</th>
          <th style={{ width:'40%' }}>JGS Cloud Compliance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Approach</strong></td>
          <td>Generic IT support across dozens of tools</td>
          <td>Microsoft 365 only — hardened, tested, proven</td>
        </tr>
        <tr>
          <td><strong>Pricing</strong></td>
          <td>Hourly creep, surprise bills</td>
          <td>Flat-fee clarity, scope locked before kickoff</td>
        </tr>
        <tr>
          <td><strong>Delivery</strong></td>
          <td>Promises of “we’ll handle it”</td>
          <td>Proof packages you can hand to insurers and auditors</td>
        </tr>
        <tr>
          <td><strong>Configuration</strong></td>
          <td>One-size-fits-all settings</td>
          <td>Controls mapped to IRS, AICPA, and ABA requirements</td>
        </tr>
        <tr>
          <td><strong>Documentation</strong></td>
          <td>Fixes without evidence</td>
          <td>Audit-ready binders with logs, screenshots, and reports</td>
        </tr>
      </tbody>
    </table>
    <p className="lead" style={{ marginTop:'1rem' }}><strong>The Difference:</strong> MSPs leave you hoping. JGS leaves you covered.</p>
  </Section>
);

const Get = () => (
  <Section id="get" title="Get Started" subtitle="Pick your path. Lock scope. Prove outcomes.">
    <div className="card">
      <h3 className="title-lg">📦 Flat-Fee Projects</h3>
      <p>One-time engagements with clear deliverables and evidence binders at the end.</p>
      <ul>
        <li>Security Hardening & Remediation</li>
        <li>Secure Email Delivery</li>
        <li>Backup & Recovery Assurance</li>
      </ul>
      <p><em>Result:</em> Defined scope. Flat fee. Proof in hand.</p>
    </div>
    <div className="hr" />
    <div className="card">
      <h3 className="title-lg">📊 Advisory Retainers</h3>
      <p>Ongoing oversight, testing, and reporting that scale with your risk.</p>
      <ul>
        <li>Lite: Oversight & posture proof</li>
        <li>Plus: Continuous resilience</li>
        <li>Enterprise: Full compliance cycle</li>
      </ul>
      <p><em>Result:</em> Continuous alignment, tested resilience, board-ready evidence.</p>
    </div>
    <div className="hr" />
    <div className="card">
      <h3 className="title-lg">📅 Book Your Kickoff</h3>
      <p>Choose your project or advisory tier. We’ll set the scope, launch fast, and start proving results.</p>
      <p>👉 <a href={CONFIG.bookingUrl} target="_blank" rel="noopener">Book a Call</a> | <a href={`mailto:${CONFIG.supportEmail}`}>Contact Support</a></p>
    </div>
  </Section>
);

// ================= SHELL =================
export default function JGSSite() {
  return (
    <main>
      <GlobalStyles />
      <BG />
      <Nav />
      <Home />
      <Services />
      <Advisory />
      <CPA />
      <Law />
      <Risks />
      <Why />
      <Get />
      <Footer />
    </main>
  );
}
