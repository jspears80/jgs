'use client';
import React, { useEffect, useState } from 'react';

/*
  Full site in Canvas — no omissions.
  - Logo doubles as Home; 'Home' removed from NAV.
  - Header wiggle fixed with html{overflow-y:scroll}.
  - Icons added for CPA, Law, Risks; consistent bullets/table styles.
*/

const styles = `
:root{ --bg:#0b0b0b; --fg:#ffffff; --muted:rgba(255,255,255,.2); --muted-2:rgba(255,255,255,.25); --soft:rgba(0,0,0,.55); }
*{box-sizing:border-box}
html,body,#root{height:100%}
html{overflow-y:scroll}
body{ margin:0; background:var(--bg); color:var(--fg); font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; }
a{color:inherit; text-decoration:none}

/* Background grid + glow */
body::before{ content:""; position:fixed; inset:0; z-index:0; pointer-events:none; background: radial-gradient(1200px 500px at 50% -6%, #0b0b0b 0%, transparent 62%), linear-gradient(to right, rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.14) 1px, transparent 1px); background-size:auto, 56px 56px, 56px 56px; opacity:.30; }
body::after{ content:""; position:fixed; inset:0; z-index:0; pointer-events:none; background: radial-gradient(44rem 44rem at 10% 2%, rgba(34,211,238,.60), rgba(139,92,246,.38) 55%, transparent 70%), radial-gradient(38rem 38rem at 90% 100%, rgba(232,121,249,.50), rgba(56,189,248,.38) 50%, transparent 70%); filter:blur(88px); mix-blend-mode:screen; animation:flarePulse 12s ease-in-out infinite alternate; }
@keyframes flarePulse{from{transform:scale(1)} to{transform:scale(1.05)}}

/* Layout & type */
.container{max-width:72rem; margin:0 auto; padding:1rem}
.section{padding:2.5rem 0; scroll-margin-top:4rem}
.title-xl{font-size:2rem; font-weight:800; margin:0 0 .75rem}
.title-lg{font-size:1.1rem; font-weight:700; margin:0 0 .5rem; display:flex; align-items:center; gap:.5rem}
.lead{opacity:.92; margin:.25rem 0 1rem}
.page p,.page li{font-size:1rem; font-weight:400; line-height:1.55}

/* Transparent page wrapper (cards only) */
.page{ max-width:72rem; margin:0 auto; position:relative; z-index:1; background:transparent !important; border:0 !important; border-radius:0 !important; box-shadow:none !important; padding:1rem 1.25rem; }

/* Cards */
.card{ border:1px solid var(--muted); border-radius:.9rem; background:rgba(0,0,0,.55); box-shadow:0 8px 20px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.06); padding:1rem 1.25rem; margin:0 0 1rem 0; line-height:1.55; transition:transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
.card:hover{ transform:translateY(-4px); box-shadow:0 12px 24px rgba(0,0,0,.4); border-color:rgba(255,255,255,.35); }

/* Bullets */
ul{margin:0 0 1rem 1.25rem; padding:0; list-style:disc}
li{margin:0.5rem 0; line-height:1.6}

/* Tables */
table{width:100%; border-collapse:collapse; margin-top:.25rem}
thead th{border-bottom:1px solid #666; text-align:left; padding:.5rem}
tbody td{border-top:1px solid var(--muted); padding:.5rem; vertical-align:top}

/* Header / Nav */
header{ position:sticky; top:0; z-index:1000; background:rgba(0,0,0,.72); backdrop-filter:blur(8px); border-bottom:1px solid var(--muted-2); }
.header-row{display:flex; align-items:center; justify-content:flex-start; gap:1rem; padding:.8rem 1rem}
.brand{display:flex; align-items:center; gap:.6rem; cursor:pointer}
.nav-links{display:flex; gap:1.1rem; align-items:center; flex-wrap:wrap; margin-left:1rem}
.logo{height:56px; margin-right:.6rem; vertical-align:middle}

#nav-toggle{display:none}
.burger{display:none; cursor:pointer; width:36px; height:28px; position:relative; margin-left:auto}
.burger span{position:absolute; left:0; right:0; height:2px; background:#fff; border-radius:2px}
.burger span:nth-child(1){top:4px} .burger span:nth-child(2){top:13px} .burger span:nth-child(3){top:22px}

@media (max-width:900px){
  .nav-links{ position:fixed; top:56px; left:0; right:0; background:rgba(0,0,0,.92); border-bottom:1px solid var(--muted-2); transform:translateY(-120%); transition:transform .2s ease; display:grid; gap:.5rem; padding:.75rem 1rem; }
  #nav-toggle:checked ~ .nav-links{transform:translateY(0)}
  .burger{display:block}
  .header-row{padding:.6rem 1rem}
  .nav-links a{padding:.5rem .75rem; border-radius:.5rem}
}
`;

const NAV = ['Services','Advisory','CPA','Law','Risks','Why JGS','Get Started'] as const;
type Section = 'Home' | typeof NAV[number];

function Card({ title, children }:{ title?: string; children: React.ReactNode }) {
  return (<div className="card">{title ? <h3 className="title-lg">{title}</h3> : null}{children}</div>);
}

export default function App(){
  const [section, setSection] = useState<Section>('Home');
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { const f = () => setIsMobile(window.innerWidth <= 900); f(); window.addEventListener('resize', f); return () => window.removeEventListener('resize', f); }, []);
  useEffect(() => { if (!isMobile && menuOpen) setMenuOpen(false); }, [isMobile, menuOpen]);
  const go = (target: Section) => { setSection(target); setMenuOpen(false); };

  // Dev smoke tests
  useEffect(() => {
    console.assert(Array.isArray(NAV) && NAV.length > 0, 'NAV must be non-empty');
    console.assert(!NAV.includes('Home'), 'NAV excludes Home (logo is Home)');
  }, []);

  return (<>
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <main>
      <header>
        <div className="container header-row">
          <div className="brand" role="button" tabIndex={0} onClick={() => go('Home')} onKeyDown={(e)=>{ if(e.key==='Enter' || e.key===' ') go('Home'); }}>
            <img src="/Logo.png" onError={(e)=>{(e.currentTarget as HTMLImageElement).style.display='none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display='inline-block';}} alt="JGS logo (Home)" className="logo" />
            <span style={{ display:'none', width:56, height:56, borderRadius:12, background:'linear-gradient(135deg, #22d3ee, #8b5cf6)' }} />
          </div>
          <input id="nav-toggle" type="checkbox" aria-label="Toggle navigation" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
          <label htmlFor="nav-toggle" className="burger" aria-hidden="true"><span></span><span></span><span></span></label>
          <nav className="nav-links">{NAV.map(k => (
            <a key={k} href="#" role="button" onClick={(e)=>{ e.preventDefault(); go(k); }}>{k}</a>
          ))}</nav>
        </div>
      </header>

      {/* ===== HOME ===== */}
      {section === 'Home' && (
        <section className="section container">
          <div className="page">
            <h2 className="title-xl">Protecting Clients. Preserving Trust.</h2>
            <p className="lead">Your firm’s reputation rests on confidentiality. We secure Microsoft 365 so every client interaction is protected — and every safeguard is backed by proof.</p>
            <Card>
              <ul>
                <li>Renewal Approved — Coverage Protected</li>
                <li>$75K Saved. Fraud Stopped Cold.</li>
                <li>⚖️ Deadline Met. Case Delivered.</li>
                <li>Score Doubled. Risk Reduced.</li>
              </ul>
            </Card>
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
              <ul>
                <li>Admin rights reduced; conditional access enforced</li>
                <li>Legacy/basic auth blocked; extended audit logging enabled</li>
                <li>Controls mapped to insurer/regulator requirements</li>
              </ul>
            </Card>
            <Card title="📧 Secure Email Delivery">
              <p>Email is your firm’s lifeline. We ensure your domain is <strong>recognized, trusted, and protected.</strong></p>
              <ul>
                <li>SPF, DKIM, DMARC (BIMI where applicable) enforced</li>
                <li>Malicious rules/connectors removed</li>
                <li>End-to-end TLS; deliverability checks</li>
              </ul>
            </Card>
            <Card title="🔁 Backup & Recovery Assurance">
              <p>A backup means nothing until recovery is proven — we make it a <strong>measured business advantage.</strong></p>
              <ul>
                <li>Immutable backups with versioning & legal holds</li>
                <li>Quarterly restore drills with signed evidence</li>
                <li>Retention aligned to discovery / peer-review cycles</li>
              </ul>
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
              <p>We keep your Microsoft 365 <strong>monitored, drift tracked, and evidence current.</strong></p>
              <ul>
                <li><strong>Support:</strong> Email only, business hours</li>
                <li><strong>Commitment:</strong> Minimal — one admin account + a firm contact</li>
                <li><strong>What You Get:</strong> Drift alerts, monitoring, binder evidence kept up to date</li>
              </ul>
              <p><em>Best for firms that want oversight without heavy involvement.</em></p>
            </Card>
            <Card title="📘 Plus Advisory">
              <p>We run <strong>regular drills, reviews, and checks</strong> to keep alignment year-round.</p>
              <ul>
                <li><strong>Support:</strong> Email + scheduled remote sessions</li>
                <li><strong>Commitment:</strong> Moderate — quarterly reviews</li>
                <li><strong>What You Get:</strong> Recovery drills, deliverability checks, policy updates</li>
              </ul>
              <p><em>Best for firms that want tested, reliable systems year-round.</em></p>
            </Card>
            <Card title="🏛️ Enterprise Advisory">
              <p><strong>Priority support, board-level reporting, and regulator/insurer alignment.</strong></p>
              <ul>
                <li><strong>Support:</strong> Priority email + chat + on-demand remote sessions</li>
                <li><strong>Commitment:</strong> High — monthly reviews, dedicated contact</li>
                <li><strong>What You Get:</strong> Strategic reporting, insurer negotiation support, alignment maps</li>
              </ul>
            </Card>
          </div>
        </section>
      )}

      {/* ===== CPA ===== */}
      {section === 'CPA' && (
        <section className="section container">
          <div className="page">
            <h2 className="title-xl">📊 CPA Firms</h2>
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
            <h2 className="title-xl">⚖️ Law Firms</h2>
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

      {/* ===== RISKS (full table) ===== */}
      {section === 'Risks' && (
        <section className="section container">
          <div className="page">
            <h2 className="title-xl">⚠️ The Risk / Our Response</h2>
            <Card>
              <table>
                <thead>
                  <tr>
                    <th style={{width:'50%'}}>The Risk</th>
                    <th style={{width:'50%'}}>Our Response</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <ul>
                        <li>Phishing</li>
                        <li>MFA fatigue</li>
                        <li>Legacy auth</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Phish-resistant MFA</li>
                        <li>Legacy blocked</li>
                        <li>Session controls</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>Shadow admins</li>
                        <li>Stale consents</li>
                        <li>Weak break-glass</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Shadow admins removed</li>
                        <li>PIM for elevation</li>
                        <li>Break-glass hardened</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>Mailbox rules</li>
                        <li>OAuth abuse</li>
                        <li>Workspace sprawl</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Rules/connectors blocked</li>
                        <li>SPF/DKIM/DMARC</li>
                        <li>TLS validation</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>Malicious connectors</li>
                        <li>Auto-forwarding</li>
                        <li>Stale guests</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Connectors locked</li>
                        <li>Forwarding disabled</li>
                        <li>Guest access governed</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>External over-sharing</li>
                        <li>Public links</li>
                        <li>Retention gaps</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Regulator-aligned retention</li>
                        <li>Extended audit logs</li>
                        <li>Tamper-evident trails</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>Unproven restores</li>
                        <li>Unverified RTO/RPO</li>
                        <li>Misconfigurations</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Quarterly restores witnessed</li>
                        <li>Playbooks signed</li>
                        <li>Evidence logged</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </div>
        </section>
      )}

      {/* ===== WHY JGS (table) ===== */}
      {section === 'Why JGS' && (
        <section className="section container">
          <div className="page">
            <h2 className="title-xl">Why JGS Cloud Compliance</h2>
            <Card>
              <table>
                <thead>
                  <tr>
                    <th>MSPs</th>
                    <th>JGS Cloud Compliance</th>
                  </tr>
                </thead>
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
            <Card title="📦 Flat-Fee Projects">
              <ul>
                <li>Security Hardening & Remediation</li>
                <li>Secure Email Delivery</li>
                <li>Backup & Recovery Assurance</li>
              </ul>
            </Card>
            <Card title="📊 Advisory Retainers">
              <ul>
                <li>Lite — Oversight & posture proof</li>
                <li>Plus — Continuous resilience</li>
                <li>Enterprise — Full compliance cycle</li>
              </ul>
            </Card>
            <Card title="📅 Book Your Kickoff">
              <p>
                <a href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled" target="_blank" rel="noopener">Book a Call</a>
                {' '}|{' '}
                <a href="mailto:support@cloudjgs.com">Support</a>
              </p>
            </Card>
          </div>
        </section>
      )}

    </main>
  </>);
}
