'use client';
import React, { useState, useEffect } from 'react';

const items = ['Home','Services','Advisory','CPA','Law','Risks','Why JGS','Get Started'] as const;
type Section = typeof items[number];

export default function Page(){
  const [section,setSection]=useState<Section>('Home');
  const [isMobile,setIsMobile]=useState(false);
  const [open,setOpen]=useState(false);
  useEffect(()=>{ const f=()=>setIsMobile(window.innerWidth<=900); f(); window.addEventListener('resize',f); return ()=>window.removeEventListener('resize',f);},[]);
  useEffect(()=>{ if(!isMobile&&open) setOpen(false); },[isMobile,open]);
  return (
    <main>
      <div className="grid-wrap" aria-hidden>
        <div className="grid-grad"/>
        <div className="grid-grid"/>
        <div className="grid-flare" style={{width:'46rem',height:'46rem',left:'-20rem',top:'-18rem',background:'radial-gradient(circle at 30% 30%, rgba(34,211,238,.55), rgba(139,92,246,.35) 55%, transparent 70%)'}}/>
        <div className="grid-flare" style={{width:'40rem',height:'40rem',right:'-18rem',bottom:'-14rem',background:'radial-gradient(circle at 70% 70%, rgba(232,121,249,.45), rgba(56,189,248,.35) 50%, transparent 70%)'}}/>
      </div>

      <header className="header">
        <div style={{display:'flex',alignItems:'center',gap:'.5rem'}}>
          <img src="/logo.svg" alt="logo" width={28} height={28}/>
          <strong>JGS Cloud Compliance</strong>
        </div>
        {!isMobile ? (
          <nav>
            {items.map(k=>(
              <a key={k} onClick={()=> setSection(k==='Home' ? 'Home' : k)}>{k}</a>
            ))}
          </nav>
        ) : (
          <button onClick={()=>setOpen(v=>!v)} aria-label="Toggle navigation" style={{ background:'none', border:'1px solid rgba(255,255,255,.25)', color:'#fff', borderRadius:8, padding:'6px 10px', cursor:'pointer' }}>☰</button>
        )}
      </header>

      {isMobile && open && (
        <nav className="overlay" style={{zIndex:1000}}>
          <div className="soft" style={{maxWidth:'72rem',margin:'0 auto'}}>
            {items.map(k=>(
              <div key={k} style={{padding:'.4rem 0'}}><a onClick={()=>{ setSection(k==='Home'?'Home':k); setOpen(false); }}>{k}</a></div>
            ))}
          </div>
        </nav>
      )}

      {section==='Home' && (
        <section className="section">
          <div className="container">
            <div className="soft">
              <h1 className="h1">Protecting Clients. Preserving Trust.</h1>
              <p style={{opacity:.92,margin:'0 0 1rem'}}>Your firm’s reputation rests on confidentiality. We secure Microsoft 365 so every client interaction is protected — and every safeguard is backed by proof.</p>
              <div className="cards">
                <div className="card">🛡️ Renewal Approved — Coverage Protected</div>
                <div className="card">💰 $75K Saved. Fraud Stopped Cold.</div>
                <div className="card">⚖️ Deadline Met. Case Delivered.</div>
                <div className="card">📈 Score Doubled. Risk Reduced.</div>
              </div>
              <div style={{marginTop:'1rem',display:'flex',gap:'.6rem',flexWrap:'wrap'}}>
                <a onClick={()=>setSection('Services')} style={{textDecoration:'underline',fontWeight:700,cursor:'pointer'}}>See Services</a>
                <a href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled" style={{textDecoration:'underline',fontWeight:700}}>Book a Consult</a>
              </div>
            </div>
          </div>
        </section>
      )}

      {section==='Services' && (
        <section className="section overlay">
          <div className="soft">
            <h2 className="h2">Core Services</h2>
            <h3>🔒 Security Hardening & Remediation</h3>
            <p>Insurers raise premiums. Regulators raise standards. We align your Microsoft 365 so you can <strong>prove control, reduce exposure, and negotiate from strength.</strong></p>
            <ul><li>Admin rights reduced; conditional access enforced</li><li>Legacy auth blocked; extended audit logging enabled</li><li>Controls mapped to insurer/regulator requirements</li></ul>
            <h3>📧 Secure Email Delivery</h3>
            <p>Email is your firm’s lifeline: invoices, filings, contracts. If they don’t land, business stops. We ensure your domain is <strong>recognized, trusted, and protected</strong>.</p>
            <ul><li>SPF, DKIM, DMARC (BIMI where applicable) enforced</li><li>Malicious rules/connectors detected and removed</li><li>End‑to‑end TLS validation; deliverability checks</li></ul>
            <h3>🔁 Backup & Recovery Assurance</h3>
            <p>A backup means nothing until recovery is proven. We make it a <strong>measured business advantage</strong>.</p>
            <ul><li>Immutable backups with versioning and legal holds</li><li>Quarterly restore drills with signed evidence</li><li>Retention aligned to discovery and peer‑review cycles</li></ul>
          </div>
        </section>
      )}

      {section==='Advisory' && (
        <section className="section overlay">
          <div className="soft">
            <h2 className="h2">Advisory Retainers</h2>
            <h3>💧 Lite Advisory</h3>
            <p>We keep your Microsoft 365 <strong>monitored, drift tracked, and evidence current.</strong></p>
            <ul><li><strong>Support:</strong> Email only, business hours</li><li><strong>Commitment:</strong> Minimal — one admin account + a firm contact</li><li><strong>What You Get:</strong> Drift alerts, monitoring, binder evidence kept up to date</li></ul>
            <p><em>Best for firms that want oversight without heavy involvement.</em></p>
            <h3>📘 Plus Advisory</h3>
            <p>We run <strong>regular drills, reviews, and checks</strong> so your systems stay aligned as your firm evolves.</p>
            <ul><li><strong>Support:</strong> Email + scheduled remote sessions</li><li><strong>Commitment:</strong> Moderate — quarterly reviews, occasional staff input</li><li><strong>What You Get:</strong> Recovery drills, deliverability checks, policy updates</li></ul>
            <h3>🏛️ Enterprise Advisory</h3>
            <p><strong>Priority support, board-level reporting, and regulator/insurer alignment.</strong></p>
            <ul><li><strong>Support:</strong> Priority email + chat + on-demand remote sessions</li><li><strong>Commitment:</strong> High — monthly reviews, dedicated contact</li><li><strong>What You Get:</strong> Strategic reporting, insurer negotiation support, alignment maps</li></ul>
          </div>
        </section>
      )}

      {section==='CPA' && (
        <section className="section overlay">
          <div className="soft">
            <h2 className="h2">CPA Firms</h2>
            <p><strong>Tax season isn’t forgiving.</strong> We harden Microsoft 365 so you can <strong>work without disruption and show compliance on demand.</strong></p>
            <ul><li>Controls aligned to IRS & AICPA standards</li><li>Retention mapped to peer review cycles</li><li>Evidence binders ready before auditors ask</li></ul>
            <p><em>Outcome:</em> Even at peak season, your firm is compliant, covered, and client‑ready.</p>
          </div>
        </section>
      )}

      {section==='Law' && (
        <section className="section overlay">
          <div className="soft">
            <h2 className="h2">Law Firms</h2>
            <p><strong>Confidentiality is everything.</strong> We secure Microsoft 365 so your firm can <strong>protect data, meet discovery demands, and stand up under scrutiny.</strong></p>
            <ul><li>Email delivery that clients and courts can trust</li><li>Retention aligned to discovery and insurer mandates</li><li>Proof packages that show continuity and confidentiality controls</li></ul>
            <p><em>Outcome:</em> Your firm answers with evidence — not promises.</p>
          </div>
        </section>
      )}

      {section==='Risks' && (
        <section className="section overlay">
          <div className="soft">
            <h2 className="h2">The Risk / Our Response</h2>
            <table style={{width:'100%',borderCollapse:'collapse'}}>
              <thead><tr><th style={{textAlign:'left',borderBottom:'1px solid #666'}}>The Risk</th><th style={{textAlign:'left',borderBottom:'1px solid #666'}}>Our Response</th></tr></thead>
              <tbody>
                <tr><td><ul><li>Phishing</li><li>MFA fatigue</li><li>Legacy auth</li></ul></td><td><ul><li>Phish‑resistant MFA</li><li>Legacy blocked</li><li>Session controls</li></ul></td></tr>
                <tr><td><ul><li>Shadow admins</li><li>Stale consents</li><li>Weak break‑glass</li></ul></td><td><ul><li>Shadow admins removed</li><li>PIM for elevation</li><li>Break‑glass hardened</li></ul></td></tr>
                <tr><td><ul><li>Mailbox rules</li><li>OAuth abuse</li><li>Workspace sprawl</li></ul></td><td><ul><li>Rules/connectors blocked</li><li>SPF/DKIM/DMARC</li><li>TLS validation</li></ul></td></tr>
                <tr><td><ul><li>Malicious connectors</li><li>Auto‑forwarding</li><li>Stale guests</li></ul></td><td><ul><li>Connectors locked</li><li>Forwarding disabled</li><li>Guest access governed</li></ul></td></tr>
                <tr><td><ul><li>External over‑sharing</li><li>Public links</li><li>Retention gaps</li></ul></td><td><ul><li>Regulator‑aligned retention</li><li>Extended audit logs</li><li>Tamper‑evident trails</li></ul></td></tr>
                <tr><td><ul><li>Unproven restores</li><li>Unverified RTO/RPO</li><li>Misconfigurations</li></ul></td><td><ul><li>Quarterly restores witnessed</li><li>Playbooks signed</li><li>Evidence logged</li></ul></td></tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      {section==='Why JGS' and (
        <section className="section overlay">
          <div className="soft">
            <h2 className="h2">Why JGS Cloud Compliance</h2>
            <table style={{width:'100%',borderCollapse:'collapse'}}>
              <thead><tr><th>MSPs</th><th>JGS Cloud Compliance</th></tr></thead>
              <tbody>
                <tr><td>❌ Generic IT support across dozens of tools</td><td>✅ Microsoft 365 only — hardened, tested, proven</td></tr>
                <tr><td>❌ Hourly creep, surprise bills</td><td>✅ Flat‑fee clarity, scope locked before kickoff</td></tr>
                <tr><td>❌ Promises of “we’ll handle it”</td><td>✅ Proof packages you can hand to insurers and auditors</td></tr>
                <tr><td>❌ One‑size‑fits‑all settings</td><td>✅ Controls mapped to IRS, AICPA, and ABA requirements</td></tr>
                <tr><td>❌ Fixes without evidence</td><td>✅ Audit‑ready binders with logs, screenshots, and reports</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      {section==='Get Started' && (
        <section className="section overlay">
          <div className="soft">
            <h2 className="h2">Get Started</h2>
            <h3>📦 Flat‑Fee Projects</h3>
            <ul><li>Security Hardening & Remediation</li><li>Secure Email Delivery</li><li>Backup & Recovery Assurance</li></ul>
            <h3>📊 Advisory Retainers</h3>
            <ul><li>Lite — Oversight & posture proof</li><li>Plus — Continuous resilience</li><li>Enterprise — Full compliance cycle</li></ul>
            <h3>📅 Book Your Kickoff</h3>
            <p>👉 <a href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled">Book a Call</a> | <a href="mailto:support@cloudjgs.com">Support</a></p>
          </div>
        </section>
      )}

      {!section && <footer className="footer">© {new Date().getFullYear()} JGS Cloud Compliance</footer>}
    </main>
  );
}
