'use client';
import React, { useState } from 'react';

/**
 * JGS SoftPage — full content restored + mobile scroll nav fixed
 * - Header: logo = Home, nav inline; mobile scrollable without hamburger
 * - Background grid/glow
 * - Transparent page wrapper; glass cards
 * - Clean CSS (fixed duplicate @media blocks)
 */

const styles = `
:root{ --bg:#0b0b0b; --fg:#ffffff; --muted:rgba(255,255,255,.20); --muted-2:rgba(255,255,255,.25); --soft:rgba(0,0,0,.55); }
*{box-sizing:border-box}
html,body,#root{height:100%}
html{overflow-y:scroll}
body{ margin:0; min-height:100%; background:var(--bg); color:var(--fg); font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; }
a{color:inherit; text-decoration:none}

/* Background */
body::before{ content:""; position:fixed; inset:0; z-index:0; pointer-events:none; background: radial-gradient(1200px 500px at 50% -6%, #0b0b0b 0%, transparent 62%), linear-gradient(to right, rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.14) 1px, transparent 1px); background-size:auto, 56px 56px, 56px 56px; opacity:.30; }
body::after{ content:""; position:fixed; inset:0; z-index:0; pointer-events:none; background: radial-gradient(44rem 44rem at 10% 2%, rgba(34,211,238,.60), rgba(139,92,246,.38) 55%, transparent 70%), radial-gradient(38rem 38rem at 90% 100%, rgba(232,121,249,.50), rgba(56,189,248,.38) 50%, transparent 70%); filter:blur(88px); mix-blend-mode:screen; animation:flarePulse 12s ease-in-out infinite alternate; }
@keyframes flarePulse{from{transform:scale(1)} to{transform:scale(1.05)}}

/* Layout */
.container{max-width:72rem; margin:0 auto; padding:1rem}
.section{padding:2.5rem 0; scroll-margin-top:4rem}
.title-xl{font-size:2rem; font-weight:800; margin:0 0 .75rem}
.title-lg{font-size:1.1rem; font-weight:700; margin:0 0 .5rem; display:flex; align-items:center; gap:.5rem}
.lead{opacity:.92; margin:.25rem 0 1rem}
.page p,.page li{font-size:1rem; font-weight:400; line-height:1.55}

/* Page wrapper (transparent) */
.page{ max-width:72rem; margin:0 auto; position:relative; z-index:1; background:transparent; border:0; border-radius:0; box-shadow:none; padding:1.25rem 1.5rem; }

/* Cards */
.card{ border:1px solid var(--muted); border-radius:.9rem; background:rgba(0,0,0,.55); box-shadow:0 8px 20px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.06); padding:1rem 1.25rem; margin:0 0 1rem 0; line-height:1.55; transition:transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
.card:hover{ transform:translateY(-4px); box-shadow:0 12px 24px rgba(0,0,0,.4); border-color:rgba(255,255,255,.35); }

/* Lists */
ul{margin:0 0 1rem 1.25rem; padding:0; list-style:disc}
li{margin:.5rem 0; line-height:1.6}

/* Tables */
table{width:100%; border-collapse:collapse; margin-top:.25rem}
thead th{border-bottom:1px solid #666; text-align:left; padding:.5rem}
tbody td{border-top:1px solid var(--muted); padding:.5rem; vertical-align:top}

/* Header */
header{ position:sticky; top:0; z-index:1000; background:rgba(0,0,0,.72); backdrop-filter:blur(8px); border-bottom:1px solid var(--muted-2); }
.header-row{display:flex; align-items:center; justify-content:flex-start; gap:.6rem; padding:.8rem 1rem}
.brand{display:flex; align-items:center; gap:.4rem; cursor:pointer}
.nav-links{display:flex; gap:.8rem; align-items:center; flex-wrap:wrap; margin-left:.25rem; position:relative}
.logo{height:56px; margin-right:.4rem; vertical-align:middle}

/* Mobile: inline scrollable nav (no burger) */
@media (max-width:900px){
  .header-row{padding:.5rem .75rem; gap:.4rem; flex-wrap:nowrap}
  .logo{height:44px; margin-right:.35rem}
  .nav-links{ position:relative; display:flex; flex-wrap:nowrap; gap:.5rem; margin-left:.2rem; flex:1; min-width:0; white-space:nowrap; overflow-x:auto; overflow-y:hidden; -webkit-overflow-scrolling:touch; scrollbar-width:none; }
  .nav-links::-webkit-scrollbar{display:none}
  .nav-links::before,.nav-links::after{content:''; position:absolute; top:0; bottom:0; width:20px; pointer-events:none}
  .nav-links::before{left:0; background:linear-gradient(to right, rgba(0,0,0,.6), transparent)}
  .nav-links::after{right:0; background:linear-gradient(to left, rgba(0,0,0,.6), transparent)}
  .nav-links a{padding:.25rem .35rem; border-radius:.4rem; font-size:.85rem}
}
@media (max-width:360px){ .logo{height:40px} .nav-links{gap:.4rem} .nav-links a{font-size:.8rem; padding:.2rem .3rem} }

/* ===== Hero specific bits ===== */
.badge{display:inline-flex; align-items:center; gap:.4rem; font-size:.8rem; padding:.25rem .5rem; border:1px solid var(--muted); border-radius:999px; background:rgba(0,0,0,.45)}
.hero{font-size:3rem; line-height:1.05; font-weight:800; margin:.25rem 0 .75rem 0}
@media (max-width:900px){ .hero{font-size:2.2rem} }
.proofgrid{display:grid; gap:.6rem; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); opacity:.92}

/* Founder card */
.founder{border:1px solid var(--muted); background:rgba(0,0,0,.45); border-radius:1rem; box-shadow:0 8px 20px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.06); padding:1rem; display:flex; flex-direction:column; align-items:center; gap:1rem}
.founder-img{width:100%; height:260px; border-radius:.8rem; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.12)}
.founder-meta{text-align:center}
.founder-name{font-weight:800; margin:.25rem 0 .1rem}
.founder-title{opacity:.9; font-size:.95rem; margin-bottom:.6rem}
.founder-actions{display:flex; gap:.5rem; justify-content:center}

/* Buttons */
.btn{display:inline-flex; align-items:center; justify-content:center; padding:.6rem 1rem; border:1px solid var(--muted); border-radius:.75rem; background:rgba(0,0,0,.5); text-decoration:none}
.btn.primary{background:rgba(255,255,255,.08); border-color:rgba(255,255,255,.3)}
.btn.sm{padding:.4rem .7rem; font-size:.9rem}
`;

const NAV = ['Services','Advisory','CPA','Law','Risks','Why JGS','Get Started'] as const;
type Section = 'Home' | typeof NAV[number];

const Card: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="card">{title ? <h3 className="title-lg">{title}</h3> : null}{children}</div>
);

export default function Page(){
  const [section, setSection] = useState<Section>('Home');
  const go = (target: Section) => setSection(target);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <main>
        <header>
          <div className="container header-row">
            <div className="brand" role="button" tabIndex={0} onClick={() => go('Home')} onKeyDown={(e)=>{ if(e.key==='Enter' || e.key===' ') go('Home'); }}>
              <img src="/Logo.png" onError={(e)=>{(e.currentTarget as HTMLImageElement).style.display='none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display='inline-block';}} alt="JGS logo (Home)" className="logo" />
              <span style={{ display:'none', width:56, height:56, borderRadius:12, background:'linear-gradient(135deg, #22d3ee, #8b5cf6)' }} />
            </div>
            <nav className="nav-links">{NAV.map(k => (<a key={k} href="#" role="button" onClick={(e)=>{ e.preventDefault(); go(k); }}>{k}</a>))}</nav>
          </div>
        </header>

        {/* ===== HOME ===== */}
        {section === 'Home' && (
          <section className="section container">
            <div className="page" style={{display:'grid', gridTemplateColumns:'1.2fr .9fr', gap:'1.25rem'}}>
              {/* Left Column: headline, lead, CTAs, proof rows */}
              <div>
               

                {/* Headline */}
                <h1 className="hero">JGS Cloud Compliance — Microsoft 365 Secured for CPA and Law.</h1>

                {/* Lead */}
                <p className="lead">Tax deadlines don’t move. Court orders don’t wait. Insurers don’t forgive weak controls. We harden tenants, deliver clean mailflow, and prove recoverability so your firm keeps working under pressure.</p>

                {/* CTAs */}
                <div style={{display:'flex', gap:'.75rem', margin:'.75rem 0 1.25rem 0', flexWrap:'wrap'}}>
                  <a className="btn primary" href="#" onClick={(e)=>{e.preventDefault(); go('Services');}}>See Services →</a>
                  <a className="btn" href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled" target="_blank" rel="noopener">Book a Consult</a>
                </div>

                {/* Proof rows */}
                <div className="proofgrid">
                  <div>CPA renewal saved → coverage cleared after tenant hardening</div>
                  <div>$75k fraud blocked → spoofed partner emails stopped in 48 hours</div>
                  <div>Discovery deadline met → case files restored within 24 hours</div>
                  <div>Secure Score: 43% → 81% (admins cleaned, logging extended)</div>
                </div>
              </div>

              {/* Right Column: Founder card */}
              <div>
                <div className="founder">
                  <div className="founder-img" aria-label="Founder headshot"></div>
                  <div className="founder-meta">
                    <div className="founder-name">Jeremiah Spears</div>
                    <div className="founder-title">Founder, JGS Cloud Compliance</div>
                    <div className="founder-actions">
                      <a className="btn sm" href="mailto:support@cloudjgs.com">Email</a>
                      <a className="btn sm" href="https://www.linkedin.com/in/jspears80" target="_blank" rel="noopener">LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ===== SERVICES ===== */}
        {section === 'Services' && (
          <section className="section container">
            <div className="page">
              <h2 className="title-xl">Core Services</h2>
              <Card title="🔒 Security Hardening & Remediation">
                <p>Insurers raise premiums. Regulators raise standards. We align your Microsoft 365 so you can <strong>prove control, reduce exposure, and negotiate from strength.</strong> This isn’t about passwords — it’s about showing you already meet the bar they set.</p>
              </Card>
              <Card title="📧 Secure Email Delivery">
                <p>Email is your firm’s lifeline: invoices, filings, contracts. If they don’t land, business stops. We ensure your domain is <strong>recognized, trusted, and protected</strong> — so every message carries weight with clients, courts, and counterparties alike.</p>
              </Card>
              <Card title="🔁 Backup & Recovery Assurance">
                <p>A backup means nothing until recovery is proven. We make it a <strong>measured business advantage:</strong> rapid restores, aligned retention, logged tests. When an insurer or regulator asks, you don’t explain — you show them.</p>
              </Card>
            </div>
          </section>
        )}

        {/* ===== ADVISORY ===== */}
        {section === 'Advisory' && (
          <section className="section container">
            <div className="page">
              <h2 className="title-xl">Advisory Retainers</h2>
              <Card title="💧 Lite Advisory">
                <p>Insurance forms ask. Regulators check. We keep your Microsoft 365 <strong>monitored, drift tracked, and evidence current.</strong></p>
                <ul>
                  <li><strong>Support:</strong> Email only, business hours</li>
                  <li><strong>Commitment:</strong> Minimal — one admin account + a firm contact</li>
                  <li><strong>What You Get:</strong> Drift alerts, monitoring, binder evidence kept up to date</li>
                </ul>
                <p><em>Best for firms that want oversight without heavy involvement.</em></p>
              </Card>
              <Card title="📘 Plus Advisory">
                <p>Security isn’t “set and forget.” We run <strong>regular drills, reviews, and checks</strong> so your systems stay aligned as your firm evolves.</p>
                <ul>
                  <li><strong>Support:</strong> Email + scheduled remote sessions</li>
                  <li><strong>Commitment:</strong> Moderate — quarterly reviews, occasional staff input</li>
                  <li><strong>What You Get:</strong> Recovery drills, deliverability checks, policy updates</li>
                </ul>
                <p><em>Best for firms that want tested, reliable systems year-round.</em></p>
              </Card>
              <Card title="🏛️ Enterprise Advisory">
                <p>High-stakes clients, insurers, and regulators demand more. We deliver <strong>priority support, board-level reporting, and regulator/insurer alignment.</strong></p>
                <ul>
                  <li><strong>Support:</strong> Priority email + chat + on-demand remote sessions</li>
                  <li><strong>Commitment:</strong> High — monthly reviews, dedicated contact, regulator coordination</li>
                  <li><strong>What You Get:</strong> Strategic reporting, insurer negotiation support, alignment maps</li>
                </ul>
                <p><em>Best for firms facing high scrutiny and higher risk.</em></p>
              </Card>
            </div>
          </section>
        )}

        {/* ===== CPA ===== */}
        {section === 'CPA' && (
          <section className="section container">
            <div className="page">
              <h2 className="title-xl">CPA Firms</h2>
              <Card>
                <p><strong>Tax season isn’t forgiving.</strong> We harden Microsoft 365 so you can <strong>work without disruption and show compliance on demand.</strong></p>
                <ul>
                  <li>Controls aligned to IRS & AICPA standards</li>
                  <li>Retention mapped to peer review cycles</li>
                  <li>Evidence binders ready before auditors ask</li>
                </ul>
                <p><em>Outcome:</em> Even at peak season, your firm is compliant, covered, and client-ready.</p>
              </Card>
            </div>
          </section>
        )}

        {/* ===== LAW ===== */}
        {section === 'Law' && (
          <section className="section container">
            <div className="page">
              <h2 className="title-xl">Law Firms</h2>
              <Card>
                <p><strong>Confidentiality is everything.</strong> We secure Microsoft 365 so your firm can <strong>protect data, meet discovery demands, and stand up under scrutiny.</strong></p>
                <ul>
                  <li>Email delivery that clients and courts can trust</li>
                  <li>Retention aligned to discovery and insurer mandates</li>
                  <li>Proof packages that show continuity and confidentiality controls</li>
                </ul>
                <p><em>Outcome:</em> Your firm answers with evidence — not promises.</p>
              </Card>
            </div>
          </section>
        )}

        {/* ===== RISKS ===== */}
        {section === 'Risks' && (
          <section className="section container">
            <div className="page">
              <h2 className="title-xl">Stopping Hackers</h2>
              <Card title="🔑 Initial Access">
                <p><strong>The Risk:</strong> Phishing, MFA fatigue, and old authentication methods.<br/><strong>Our Response:</strong> Modern MFA + Conditional Access everywhere. Legacy auth blocked. Sessions controlled.</p>
              </Card>
              <Card title="🛡️ Privilege Escalation">
                <p><strong>The Risk:</strong> Hidden admins, stale app consents, and unsecured break-glass accounts.<br/><strong>Our Response:</strong> Admin rights stripped to minimum. PIM required for elevation. Break-glass hardened and logged.</p>
              </Card>
              <Card title="🔄 Lateral Movement">
                <p><strong>The Risk:</strong> Attackers spread via mailbox rules, OAuth abuse, and sprawling Teams/SharePoint access.<br/><strong>Our Response:</strong> Mailflow monitored, malicious rules nuked, and access trimmed to least-privilege.</p>
              </Card>
              <Card title="📌 Persistence">
                <p><strong>The Risk:</strong> Malicious connectors, forwarding loopholes, and dormant guest accounts.<br/><strong>Our Response:</strong> Connectors locked down. Forwarding blocked. Guest access reviewed and hardened.</p>
              </Card>
              <Card title="📤 Exfiltration">
                <p><strong>The Risk:</strong> Data leaks through weak sharing, ungovened links, and retention gaps.<br/><strong>Our Response:</strong> Sharing controlled, retention aligned to regulators, and eDiscovery trails kept tamper-evident.</p>
              </Card>
              <Card title="💾 Recovery & Assurance">
                <p><strong>The Risk:</strong> Backups that exist but can’t be proven.<br/><strong>Our Response:</strong> Immutable backups. Quarterly restore drills witnessed by leadership. Playbooks signed and logged.</p>
              </Card>
              <p><em>Bottom Line:</em> We don’t just close gaps. We document every control so you can prove it — to insurers, auditors, and clients.</p>
            </div>
          </section>
        )}

        {/* ===== WHY JGS ===== */}
        {section === 'Why JGS' && (
          <section className="section container">
            <div className="page">
              <h2 className="title-xl">Why JGS Cloud Compliance</h2>
              <Card>
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
              </Card>
            </div>
          </section>
        )}

        {/* ===== GET STARTED ===== */}
        {section === 'Get Started' && (
          <section className="section container">
            <div className="page">
              <h2 className="title-xl">Get Started</h2>
              <div style={{marginBottom:'1.5rem'}}>
                
                <h1 className="hero" style={{marginTop:'.5rem'}}>Ready to Secure Your Firm?</h1>
                <p className="lead">Don’t wait for an audit or breach — prove it now.</p>
                <div style={{display:'flex', gap:'.75rem', flexWrap:'wrap', marginTop:'1rem'}}>
                  <a className="btn primary" href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled" target="_blank" rel="noopener">Book a Consultation</a>
                  <a className="btn" href="#" onClick={(e)=>{e.preventDefault(); go('Services')}}>Explore Services</a>
                  <a className="btn" href="mailto:support@cloudjgs.com">Email Support</a>
                </div>
              </div>
              
            </div>
          </section>
        )}

      </main>
    </>
  );
}
