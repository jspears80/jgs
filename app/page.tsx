'use client';
import React, { useEffect, useState } from 'react';

/** Sections for soft-page overlays (no anchors/scroll) */
const NAV = ['Home','Services','Advisory','CPA','Law','Risks','Why JGS','Get Started'] as const;

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

/** Reusable soft overlay page */
const SoftPage: React.FC<{title:string; onClose:()=>void; children:React.ReactNode}> = ({title,onClose,children}) => (
  <section className="section overlay" role="dialog" aria-modal="true" aria-label={title}>
    <div className="page">
      <button
        onClick={onClose}
        aria-label="Close"
        style={{position:'absolute', right:'1rem', top:'1rem', background:'none',
                border:'1px solid rgba(255,255,255,.3)', color:'#fff',
                padding:'.3rem .6rem', borderRadius:6, cursor:'pointer'}}
      >✕</button>
      <h2 className="title-xl">{title}</h2>
      {children}
    </div>
  </section>
);

export default function Page() {
  const [section, setSection] = useState<(typeof NAV)[number]>('Home');
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen]       = useState(false);

  useEffect(()=>{ const f=()=>setIsMobile(window.innerWidth<=900); f(); window.addEventListener('resize',f); return ()=>window.removeEventListener('resize',f);},[]);
  useEffect(()=>{ if(!isMobile && open) setOpen(false); },[isMobile,open]);

  return (
    <main>
      <BG />

      {/* Header with burger */}
      <header>
        <div className="container header-row">
          <div style={{display:'flex',alignItems:'center',gap:'.6rem'}}>
            <img src="/Logo.png" alt="JGS logo" className="logo" />
            <a href="#" onClick={(e)=>{e.preventDefault(); setSection('Home'); setOpen(false);}} style={{fontWeight:800,fontSize:'1.1rem'}}>
              JGS Cloud Compliance
            </a>
          </div>

          {/* Controlled burger + CSS dropdown */}
          <input id="nav-toggle" type="checkbox" aria-label="Toggle navigation" checked={open} onChange={()=>setOpen(!open)} />
          <label htmlFor="nav-toggle" className="burger" aria-hidden="true"><span></span><span></span><span></span></label>

          {/* Desktop nav (no anchors; prevent scroll) */}
          <nav className="nav-links">
            {NAV.map(k=>(
              <a key={k} href="#"
                 onClick={(e)=>{ e.preventDefault(); setSection(k); setOpen(false); }}
                 role="button">
                {k}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO — visible only when Home */}
      {section==='Home' && (
        <section className="section container">
          <div className="page">
            <h2 className="title-xl">Protecting Clients. Preserving Trust.</h2>
            <p className="lead">
              Your firm’s reputation rests on confidentiality. We secure Microsoft 365 so every client interaction is protected — and every safeguard is backed by proof.
            </p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'1rem'}}>
              <div className="card">🛡️ Renewal Approved — Coverage Protected</div>
              <div className="card">💰 $75K Saved. Fraud Stopped Cold.</div>
              <div className="card">⚖️ Deadline Met. Case Delivered.</div>
              <div className="card">📈 Score Doubled. Risk Reduced.</div>
            </div>
          </div>
        </section>
      )}

      {/* ===== Overlays (flattened to one big hero-style card) ===== */}

      {/* Services */}
      {section==='Services' && (
        <SoftPage title="Core Services" onClose={()=>setSection('Home')}>
          <h3 className="title-lg">🔒 Security Hardening & Remediation</h3>
          <p>Insurers raise premiums. Regulators raise standards. We align your Microsoft 365 so you can
            <strong> prove control, reduce exposure, and negotiate from strength.</strong> This isn’t about passwords — it’s about showing you already meet the bar they set.
          </p>
          <ul>
            <li>Admin rights reduced; conditional access enforced</li>
            <li>Legacy/basic auth blocked; extended audit logging enabled</li>
            <li>Controls mapped to insurer/regulator requirements</li>
          </ul>

          <div className="divider" />

          <h3 className="title-lg">📧 Secure Email Delivery</h3>
          <p>Email is your firm’s lifeline. We ensure your domain is
            <strong> recognized, trusted, and protected</strong>.
          </p>
          <ul>
            <li>SPF, DKIM, DMARC (BIMI where applicable) enforced</li>
            <li>Malicious rules/connectors removed</li>
            <li>End-to-end TLS; deliverability checks</li>
          </ul>

          <div className="divider" />

          <h3 className="title-lg">🔁 Backup & Recovery Assurance</h3>
          <p>A backup means nothing until recovery is proven — we make it a
            <strong> measured business advantage</strong>.
          </p>
          <ul>
            <li>Immutable backups with versioning & legal holds</li>
            <li>Quarterly restore drills with signed evidence</li>
            <li>Retention aligned to discovery / peer-review cycles</li>
          </ul>
        </SoftPage>
      )}

      {/* Advisory */}
      {section==='Advisory' && (
        <SoftPage title="Advisory Retainers" onClose={()=>setSection('Home')}>
          <h3 className="title-lg">💧 Lite Advisory</h3>
          <p>We keep your Microsoft 365 <strong>monitored, drift tracked, and evidence current.</strong></p>
          <ul>
            <li><strong>Support:</strong> Email only, business hours</li>
            <li><strong>Commitment:</strong> Minimal — one admin account + a firm contact</li>
            <li><strong>What You Get:</strong> Drift alerts, monitoring, binder evidence kept up to date</li>
          </ul>
          <p><em>Best for firms that want oversight without heavy involvement.</em></p>

          <div className="divider" />

          <h3 className="title-lg">📘 Plus Advisory</h3>
          <p>We run <strong>regular drills, reviews, and checks</strong> to keep alignment year-round.</p>
          <ul>
            <li><strong>Support:</strong> Email + scheduled remote sessions</li>
            <li><strong>Commitment:</strong> Moderate — quarterly reviews</li>
            <li><strong>What You Get:</strong> Recovery drills, deliverability checks, policy updates</li>
          </ul>
          <p><em>Best for firms that want tested, reliable systems year-round.</em></p>

          <div className="divider" />

          <h3 className="title-lg">🏛️ Enterprise Advisory</h3>
          <p><strong>Priority support, board-level reporting, and regulator/insurer alignment.</strong></p>
          <ul>
            <li><strong>Support:</strong> Priority email + chat + on-demand remote sessions</li>
            <li><strong>Commitment:</strong> High — monthly reviews, dedicated contact</li>
            <li><strong>What You Get:</strong> Strategic reporting, insurer negotiation support, alignment maps</li>
          </ul>
        </SoftPage>
      )}

      {/* CPA */}
      {section==='CPA' && (
        <SoftPage title="CPA Firms" onClose={()=>setSection('Home')}>
          <p><strong>Tax season isn’t forgiving.</strong> We harden Microsoft 365 so you can
            <strong> work without disruption and show compliance on demand.</strong>
          </p>
          <ul>
            <li>Controls aligned to IRS & AICPA standards</li>
            <li>Retention mapped to peer review cycles</li>
            <li>Evidence binders ready before auditors ask</li>
          </ul>
          <p><em>Outcome:</em> Even at peak season, your firm is compliant, covered, and client-ready.</p>
        </SoftPage>
      )}

      {/* Law */}
      {section==='Law' && (
        <SoftPage title="Law Firms" onClose={()=>setSection('Home')}>
          <p><strong>Confidentiality is everything.</strong> We secure Microsoft 365 so your firm can
            <strong> protect data, meet discovery demands, and stand up under scrutiny.</strong>
          </p>
          <ul>
            <li>Email delivery that clients and courts can trust</li>
            <li>Retention aligned to discovery and insurer mandates</li>
            <li>Proof packages that show continuity and confidentiality controls</li>
          </ul>
          <p><em>Outcome:</em> Your firm answers with evidence — not promises.</p>
        </SoftPage>
      )}

      {/* Risks */}
      {section==='Risks' && (
        <SoftPage title="The Risk / Our Response" onClose={()=>setSection('Home')}>
          <table>
            <thead><tr><th style={{width:'50%'}}>The Risk</th><th style={{width:'50%'}}>Our Response</th></tr></thead>
            <tbody>
              <tr><td><ul><li>Phishing</li><li>MFA fatigue</li><li>Legacy auth</li></ul></td>
                  <td><ul><li>Phish-resistant MFA</li><li>Legacy blocked</li><li>Session controls</li></ul></td></tr>
              <tr><td><ul><li>Shadow admins</li><li>Stale consents</li><li>Weak break-glass</li></ul></td>
                  <td><ul><li>Shadow admins removed</li><li>PIM for elevation</li><li>Break-glass hardened</li></ul></td></tr>
              <tr><td><ul><li>Mailbox rules</li><li>OAuth abuse</li><li>Workspace sprawl</li></ul></td>
                  <td><ul><li>Rules/connectors blocked</li><li>SPF/DKIM/DMARC</li><li>TLS validation</li></ul></td></tr>
              <tr><td><ul><li>Malicious connectors</li><li>Auto-forwarding</li><li>Stale guests</li></ul></td>
                  <td><ul><li>Connectors locked</li><li>Forwarding disabled</li><li>Guest access governed</li></ul></td></tr>
              <tr><td><ul><li>External over-sharing</li><li>Public links</li><li>Retention gaps</li></ul></td>
                  <td><ul><li>Regulator-aligned retention</li><li>Extended audit logs</li><li>Tamper-evident trails</li></ul></td></tr>
              <tr><td><ul><li>Unproven restores</li><li>Unverified RTO/RPO</li><li>Misconfigurations</li></ul></td>
                  <td><ul><li>Quarterly restores witnessed</li><li>Playbooks signed</li><li>Evidence logged</li></ul></td></tr>
            </tbody>
          </table>
        </SoftPage>
      )}

      {/* Why */}
      {section==='Why JGS' && (
        <SoftPage title="Why JGS Cloud Compliance" onClose={()=>setSection('Home')}>
          <table>
            <thead><tr><th>MSPs</th><th>JGS Cloud Compliance</th></tr></thead>
            <tbody>
              <tr><td>❌ Generic IT support across dozens of tools</td><td>✅ Microsoft 365 only — hardened, tested, proven</td></tr>
              <tr><td>❌ Hourly creep, surprise bills</td><td>✅ Flat-fee clarity, scope locked before kickoff</td></tr>
              <tr><td>❌ Promises of “we’ll handle it”</td><td>✅ Proof packages you can hand to insurers and auditors</td></tr>
              <tr><td>❌ One-size-fits-all settings</td><td>✅ Controls mapped to IRS, AICPA, and ABA requirements</td></tr>
              <tr><td>❌ Fixes without evidence</td><td>✅ Audit-ready binders with logs, screenshots, and reports</td></tr>
            </tbody>
          </table>
        </SoftPage>
      )}

      {/* Get Started */}
      {section==='Get Started' && (
        <SoftPage title="Get Started" onClose={()=>setSection('Home')}>
          <h3 className="title-lg">📦 Flat-Fee Projects</h3>
          <ul><li>Security Hardening & Remediation</li><li>Secure Email Delivery</li><li>Backup & Recovery Assurance</li></ul>
          <div className="divider" />
          <h3 className="title-lg">📊 Advisory Retainers</h3>
          <ul><li>Lite — Oversight & posture proof</li><li>Plus — Continuous resilience</li><li>Enterprise — Full compliance cycle</li></ul>
          <div className="divider" />
          <h3 className="title-lg">📅 Book Your Kickoff</h3>
          <p>👉 <a href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled" target="_blank" rel="noopener">Book a Call</a>
             {' '}|{' '}
             <a href="mailto:support@cloudjgs.com">Support</a>
          </p>
        </SoftPage>
      )}
    </main>
  );
}
