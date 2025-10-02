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

// ================= BACKGROUND =================
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
const Section = ({ id, title, subtitle, children }: any) => (
  <section id={id} className="section container">
    <div className="page">
      <h2 className="title-xl">{title}</h2>
      {subtitle && <p className="lead">{subtitle}</p>}
      <div>{children}</div>
    </div>
  </section>
);

const Card = ({ title, children }: any) => (
  <div className="card">
    {title && <h3 className="title-lg">{title}</h3>}
    {children}
  </div>
);

// ================= NAV + FOOTER =================
const Nav = () => (
  <header>
    <div className="container header-row">
      <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
        <img src={CONFIG.logo} alt="JGS logo" className="logo" />
        <a href="#home" style={{ fontWeight: 800, fontSize: '1.1rem' }}>
          {CONFIG.brand}
        </a>
      </div>
      {/* Mobile toggle + nav (CSS-only) */}
      <input id="nav-toggle" type="checkbox" aria-label="Toggle navigation" />
      <label htmlFor="nav-toggle" className="burger" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
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
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
        gap: '1rem',
      }}
    >
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
      <p>
        Insurers raise premiums. Regulators raise standards. We align your
        Microsoft 365 so you can <strong>prove control, reduce exposure, and
        negotiate from strength.</strong> This isn’t about passwords — it’s
        about showing you already meet the bar they set.
      </p>
    </div>
    <div className="hr" />
    <div className="card">
      <h3 className="title-lg">📧 Secure Email Delivery</h3>
      <p>
        Email is your firm’s lifeline: invoices, filings, contracts. If they
        don’t land, business stops. We ensure your domain is <strong>recognized,
        trusted, and protected</strong> — so every message carries weight with
        clients, courts, and counterparties alike.
      </p>
    </div>
    <div className="hr" />
    <div className="card">
      <h3 className="title-lg">🔁 Backup & Recovery Assurance</h3>
      <p>
        A backup means nothing until recovery is proven. We make it a <strong>
        measured business advantage:</strong> rapid restores, aligned retention,
        logged tests. When an insurer or regulator asks, you don’t explain — you
        show them.
      </p>
    </div>
  </Section>
);

const Advisory = () => (
  <Section
    id="advisory"
    title="Advisory Retainers"
    subtitle="Defined tiers. Clear support. Proof that scales with your risk."
  >
    <div className="card">
      <h3 className="title-lg">💧 Lite Advisory</h3>
      <p>
        Insurance forms ask. Regulators check. We keep your Microsoft 365{' '}
        <strong>monitored, drift tracked, and evidence current.</strong>
      </p>
      <ul>
        <li>
          <strong>Support:</strong> Email only, business hours
        </li>
        <li>
          <strong>Commitment:</strong> Minimal — one admin account + a firm
          contact
        </li>
        <li>
          <strong>What You Get:</strong> Drift alerts, monitoring, binder
          evidence kept up to date
        </li>
      </ul>
      <p>
        <em>Best for firms that want oversight without heavy involvement.</em>
      </p>
    </div>
    <div className="hr" />
    <div className="card">
      <h3 className="title-lg">📘 Plus Advisory</h3>
      <p>
        Security isn’t “set and forget.” We run <strong>regular drills, reviews,
        and checks</strong> so your systems stay aligned as your firm evolves.
      </p>
      <ul>
        <li>
          <strong>Support:</strong> Email + scheduled remote sessions
        </li>
        <li>
          <strong>Commitment:</strong> Moderate — quarterly reviews, occasional
          staff input
        </li>
        <li>
          <strong>What You Get:</strong> Recovery drills, deliverability checks,
          policy updates
        </li>
      </ul>
      <p>
        <em>Best for firms that want tested, reliable systems year-round.</em>
      </p>
    </div>
    <div className="hr" />
    <div className="card">
      <h3 className="title-lg">🏛️ Enterprise Advisory</h3>
      <p>
        High-stakes clients, insurers, and regulators demand more. We deliver{' '}
        <strong>priority support, board-level reporting, and regulator/insurer
        alignment.</strong>
      </p>
      <ul>
        <li>
          <strong>Support:</strong> Priority email + chat + on-demand remote
          sessions
        </li>
        <li>
          <strong>Commitment:</strong> High — monthly reviews, dedicated contact,
          regulator coordination
        </li>
        <li>
          <strong>What You Get:</strong> Strategic reporting, insurer
          negotiation support, alignment maps
        </li>
      </ul>
      <p>
        <em>Best for firms facing high scrutiny and higher risk.</em>
      </p>
    </div>
  </Section>
);

const CPA = () => (
  <Section id="cpa" title="CPA Firms">
    <div className="card">
      <h3 className="title-lg">📊 CPA Firms</h3>
      <p>
        <strong>Tax season isn’t forgiving.</strong> Staff are buried, deadlines
        mount, and auditors want proof you can’t scramble to produce. We harden
        Microsoft 365 so you can <strong>work without disruption and show
        compliance on demand.</strong>
      </p>
      <ul>
        <li>Controls aligned to IRS & AICPA standards</li>
        <li>Retention mapped to peer review cycles</li>
        <li>Evidence binders ready before auditors ask</li>
      </ul>
      <p>
        <em>Outcome:</em> Even at peak season, your firm is compliant, covered,
        and client-ready.
      </p>
    </div>
  </Section>
);

const Law = () => (
  <Section id="law" title="Law Firms">
    <div className="card">
      <h3 className="title-lg">⚖️ Law Firms</h3>
      <p>
        <strong>Confidentiality is everything.</strong> A single breach or failed
        retention policy can undermine client trust and sink insurer negotiations.
        We secure Microsoft 365 so your firm can <strong>protect data, meet
        discovery demands, and stand up under scrutiny.</strong>
      </p>
      <ul>
        <li>Email delivery that clients and courts can trust</li>
        <li>Retention aligned to discovery and insurer mandates</li>
        <li>Proof packages that show continuity and confidentiality controls</li>
      </ul>
      <p>
        <em>Outcome:</em> When clients, insurers, or regulators demand assurance,
        your firm answers with evidence — not promises.
      </p>
    </div>
  </Section>
);

const Risks = () => (
  <Section id="risks" title="The Risk / Our Response">
    <table>
      <thead>
        <tr>
          <th style={{ width: '50%' }}>The Risk</th>
          <th style={{ width: '50%' }}>Our Response</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            🎯 <strong>Initial Access</strong>
            <br />
            Phishing, MFA fatigue, legacy auth, token replay
          </td>
          <td>
            <strong>MFA + Conditional Access Everywhere</strong>
          </td>
        </tr>
        <tr>
          <td>
            🔑 <strong>Privilege Escalation</strong>
            <br />
            Shadow admins, stale app consents, insecure break-glass
          </td>
          <td>
            <strong>Admin Hygiene</strong>
          </td>
        </tr>
        <tr>
          <td>
            🔄 <strong>Lateral Movement</strong>
            <br />
            Mailbox rules, OAuth abuse, Teams/SharePoint sprawl
          </td>
          <td>
            <strong>Mailflow Defense</strong>
          </td>
        </tr>
        <tr>
          <td>
            📌 <strong>Persistence</strong>
            <br />
            Malicious connectors, forwarding rules, guest accounts, PIM gaps
          </td>
          <td>
            <strong>Tightened Controls</strong>
          </td>
        </tr>
        <tr>
          <td>
            📤 <strong>Exfiltration</strong>
            <br />
            External sharing, ungoverned links, weak retention
          </td>
          <td>
            <strong>Logging + Retention</strong>
          </td>
        </tr>
        <tr>
          <td>
            ♻️ <strong>Recovery & Assurance</strong>
            <br />
            Backups that exist but can’t be proven
          </td>
          <td>
            <strong>Immutable Backups</strong>
          </td>
        </tr>
      </tbody>
    </table>
    <div className="card" style={{ marginTop: '1rem' }}>
      <strong>Bottom Line:</strong> We don’t just close gaps. We document every
      control so you can prove it — to insurers, auditors, and clients.
    </div>
  </Section>
);

const Why = () => (
  <Section id="why" title="Why JGS Cloud Compliance">
    <p className="lead">MSPs promise support. We deliver evidence.</p>
    <table>
      <thead>
        <tr>
          <th style={{ width: '28%' }}></th>
          <th style={{ width: '32%' }}>MSPs</th>
          <th style={{ width: '40%' }}>JGS Cloud Compliance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>Approach</strong>
          </td>
          <td>Generic IT support across dozens of tools</td>
          <td>Microsoft 365 only — hardened, tested, proven</td>
        </tr>
        <tr>
          <td>
            <strong>Pricing</strong>
          </td>
          <td>Hourly creep, surprise bills</td>
          <td>Flat-fee clarity, scope locked before kickoff</td>
        </tr>
        <tr>
          <td>
            <strong>Delivery</strong>
          </td>
          <td>Promises of “we’ll handle it”</td>
          <td>Proof packages you can hand to insurers and auditors</td>
        </tr>
        <tr>
          <td>
            <strong>Configuration</strong>
          </td>
          <td>One-size-fits-all settings</td>
          <td>Controls mapped to IRS, AICPA, and ABA requirements</td>
        </tr>
        <tr>
          <td>
            <strong>Documentation</strong>
          </td>
          <td>Fixes without evidence</td>
          <td>Audit-ready binders with logs, screenshots, and reports</td>
        </tr>
      </tbody>
    </table>
    <p className="lead" style={{ marginTop: '1rem' }}>
      <strong>The Difference:</strong> MSPs leave you hoping. JGS leaves you covered.
    </p>
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
      <p>
        <em>Result:</em> Defined scope. Flat fee. Proof in hand.
      </p>
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
      <p>
        <em>Result:</em> Continuous alignment, tested resilience, board-ready evidence.
      </p>
    </div>
    <div className="hr" />
    <div className="card">
      <h3 className="title-lg">📅 Book Your Kickoff</h3>
      <p>Choose your project or advisory tier. We’ll set the scope, launch fast, and start proving results.</p>
      <p>
        👉 <a href={CONFIG.bookingUrl} target="_blank" rel="noopener">
          Book a Call
        </a>{' '}
        | <a href={`mailto:${CONFIG.supportEmail}`}>Contact Support</a>
      </p>
    </div>
  </Section>
);

// ================= SHELL =================
export default function JGSSite() {
  return (
    <main>
      {/* all CSS now in app/globals.css via layout.tsx */}
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
