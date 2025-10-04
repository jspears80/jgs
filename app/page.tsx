'use client';
import React, { useState, useEffect } from 'react';

/**
 * JGS SoftPage — FULL SITE RESTORE
 * - All sections: Home, Services, Advisory, CPA, Law, Risks, Why JGS, Get Started
 * - Founder card only in Get Started (left aligned, max-width)
 * - Get Started CTAs: Book a Consultation + Email Support (no Explore Services)
 * - Fixed JSX tag balance across all sections
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

/* Founder card (Get Started only) */
.founder{border:1px solid var(--muted); background:rgba(0,0,0,.45); border-radius:1rem; box-shadow:0 8px 20px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.06); padding:1rem; display:flex; flex-direction:column; align-items:flex-start; gap:1rem; max-width:340px;}
.founder-img{width:100%; height:260px; border-radius:.8rem; object-fit:cover}
.founder-meta{text-align:center; width:100%}
.founder-name{font-weight:800; margin:.25rem 0 .1rem}
.founder-title{opacity:.9; font-size:.95rem; margin-bottom:.6rem}
.founder-actions{display:flex; gap:.5rem}

/* Buttons */
.btn{display:inline-flex; align-items:center; justify-content:center; padding:.6rem 1rem; border:1px solid var(--muted); border-radius:.75rem; background:rgba(0,0,0,.5); text-decoration:none}
.btn.primary{background:rgba(255,255,255,.08); border-color:rgba(255,255,255,.3)}
.btn.sm{padding:.4rem .7rem; font-size:.9rem}
`;

const NAV = ['Services','Advisory','CPA','Law','Risks','Why JGS','Get Started'] as const;
type Section = 'Home' | typeof NAV[number] | 'ServiceRetrofit' | 'ServiceWhy' | 'ServiceWhat' | 'ServiceOutcome';

const Card: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="card">{title ? <h3 className="title-lg">{title}</h3> : null}{children}</div>
);

export default function Page(){
  const [section, setSection] = useState<Section>('CPA');
  const go = (target: Section) => setSection(target);

  useEffect(() => {
    if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
      console.assert(NAV[0] === 'Services' && NAV.at(-1) === 'Get Started', 'NAV order unexpected');
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <main>
        <header>
          <div className="container header-row">
            <div className="brand" role="button" tabIndex={0} onClick={() => go('Home')} onKeyDown={(e)=>{ if(e.key==='Enter' || e.key===' ') go('Home'); }}>
              <img src="/Logo.png" alt="JGS logo (Home)" className="logo" />
            </div>
            <nav className="nav-links">{NAV.map(k => (<a key={k} href="#" role="button" onClick={(e)=>{ e.preventDefault(); go(k); }}>{k}</a>))}</nav>
          </div>
        </header>

        {/* ===== HOME ===== */}
        {section === 'Home' && (
          <section className="section container">
            <div className="page" style={{display:'grid', gridTemplateColumns:'1fr', gap:'1.25rem'}}>
              <div>
                <h1 className="hero">JGS Cloud Compliance — Microsoft 365 Secured for CPA and Law.</h1>
                <p className="lead">Tax deadlines don’t move. Court orders don’t wait. Insurers don’t forgive weak controls. We harden tenants, deliver clean mailflow, and prove recoverability so your firm keeps working under pressure.</p>
                <div style={{display:'flex', gap:'.75rem', margin:'.75rem 0 1.25rem 0', flexWrap:'wrap'}}>
                  <a className="btn primary" href="#" onClick={(e)=>{e.preventDefault(); go('Services');}}>See Services →</a>
                  <a className="btn" href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled" target="_blank" rel="noopener">Book a Consult</a>
                </div>
                <div className="proofgrid">
                  <div>CPA renewal saved → coverage cleared after tenant hardening</div>
                  <div>$75k fraud blocked → spoofed partner emails stopped in 48 hours</div>
                  <div>Discovery deadline met → case files restored within 24 hours</div>
                  <div>Secure Score: 43% → 81% (admins cleaned, logging extended)</div>
                </div>
              </div>
            </div>
          </section>
        )}

       {/* ===== SERVICES ===== */}
{section === 'Services' && (
  <section className="section container">
    <div className="page">
      <h2 className="title-xl">🛠 Core Services</h2>

      {/* Card 1 — Intro */}
      <Card title="🛠 Microsoft 365 Security Retrofit">
        <p>Close the cracks attackers exploit inside your firm.<br/>Small professional firms are often left with too many doors open — old accounts, forgotten logins, or staff holding unchecked “keys to the kingdom.” That’s where intruders slip in. We retrofit your Microsoft 365 environment so access is controlled, intruders are stopped, and leadership has certainty about who can get in and why.</p>
        <h4 className="title-lg" style={{marginTop:'0.75rem'}}>What changes for your firm:</h4>
        <ul>
          <li>Only the right people have access — and only to what they need.</li>
          <li>Forgotten accounts and entry points are sealed.</li>
          <li>Hidden backdoors and silent footholds are removed.</li>
          <li>Leadership can show outsiders that access is responsibly run.</li>
        </ul>
      </Card>

      <Card title="📧 Microsoft 365 Email Security Retrofit">
        <p>Make your firm’s communications trusted and reliable.<br/>Your entire business runs on email: invoices, filings, contracts, and client communications. If clients can’t trust your emails — or if important messages don’t land — business stops. We secure your Microsoft 365 email so every message is recognized, impostors are blocked, and revenue-critical mail is delivered the first time.</p>
        <h4 className="title-lg" style={{marginTop:'0.75rem'}}>What changes for your firm:</h4>
        <ul>
          <li>Invoices and filings arrive and are acknowledged on first send.</li>
          <li>Clients, courts, and counterparties know your emails are genuine.</li>
          <li>Fake invoices and impostor messages fail before they reach staff or clients.</li>
          <li>Billing disputes and “we never got it” calls disappear.</li>
        </ul>
      </Card>

      <Card title="🔁 Microsoft 365 Backup & Recovery Retrofit">
        <p>Prove your firm can survive disruption.<br/>Most small firms assume Microsoft “backs everything up” — until a file is wiped, a case folder vanishes, or ransomware hits. We test, time, and harden your recovery so you know exactly how long restoration takes and how much could be lost — and so outsiders accept you can continue working after an incident.</p>
        <h4 className="title-lg" style={{marginTop:'0.75rem'}}>What changes for your firm:</h4>
        <ul>
          <li>Case files and client records can’t vanish without recovery.</li>
          <li>Recovery drills are rehearsed, timed, and documented.</li>
          <li>Destructive actions trigger same-day alarms.</li>
          <li>Auditors, regulators, and insurers accept your continuity posture.</li>
        </ul>
      </Card>
    </div>
  </section>
)}

        {/* ===== ADVISORY ===== */}
        {section === 'Advisory' && (
          <section className="section container">
            <div className="page">
              <h2 className="title-xl">📘 Advisory Retainers</h2>
              <Card title="💧 Lite Retainer – Escalation Safety Net">
                <p>For firms that want certainty the hard problems won’t linger.</p>
                <p><strong>Role:</strong> Your Principal Consultant on standby when your MSP hits a wall.</p>
                <p><strong>Scope:</strong> High-severity issues only — outages, performance failures, broken integrations.</p>
                <p><strong>Support:</strong> Escalation via email, during business hours.</p>
                <h4 className="title-lg" style={{marginTop:'0.75rem'}}>What You Get:</h4>
                <ul>
                  <li>Resolution of problems your MSP can’t close.</li>
                  <li>Direct line to me — no call centers, no queues.</li>
                  <li>A short incident wrap-up in plain English for leadership.</li>
                </ul>
                <p><strong>Outcome:</strong> Problems stop dragging. Your staff and partners get back to work.</p>
                <p><em>Best For:</em> Firms that want a simple safety net without ongoing involvement.</p>
              </Card>
              <Card title="📘 Plus Retainer – Escalation + Leadership Assurance">
                <p>For firms that want tough issues fixed and leadership kept in the loop.</p>
                <p><strong>Role:</strong> Principal Consultant for escalations, plus quarterly advisor for leadership.</p>
                <p><strong>Scope:</strong> Escalation coverage + quarterly business reviews.</p>
                <p><strong>Support:</strong> Priority email + scheduled remote sessions.</p>
                <h4 className="title-lg" style={{marginTop:'0.75rem'}}>What You Get:</h4>
                <ul>
                  <li>Guaranteed resolution of complex IT problems.</li>
                  <li>Quarterly leadership briefings: what happened, what improved, what still needs attention.</li>
                  <li>Reviews of continuity and reliability — invoices delivered, data recoverable, firm resilient.</li>
                </ul>
                <p><strong>Outcome:</strong> Issues are closed, and leadership stays informed and confident.</p>
                <p><em>Best For:</em> Firms that want fewer emergencies and no surprises.</p>
              </Card>
              <Card title="🏛 Enterprise Retainer – Principal Consultant at the Table">
                <p>For firms under heavy scrutiny from insurers, regulators, or high-stakes clients.</p>
                <p><strong>Role:</strong> Your fractional CIO/CISO — solving problems, advising partners, and preparing you for outside eyes.</p>
                <p><strong>Scope:</strong> Escalation resolution + monthly leadership sessions + insurer/regulator advocacy.</p>
                <p><strong>Support:</strong> Priority email, chat, and on-demand remote sessions.</p>
                <h4 className="title-lg" style={{marginTop:'0.75rem'}}>What You Get:</h4>
                <ul>
                  <li>Fast closure on critical technical issues.</li>
                  <li>Monthly board-level reporting: issues resolved, risks emerging, readiness status.</li>
                  <li>Talking points and prep for insurer renewals and regulatory reviews.</li>
                  <li>Coordination with your MSP so you’re not caught in the middle.</li>
                </ul>
                <p><strong>Outcome:</strong> Your firm is seen as resilient, responsible, and professionally advised — by clients, insurers, and regulators alike.</p>
                <p><em>Best For:</em> Firms where failure isn’t an option: high-dollar matters, regulator attention, premium renewals on the line.</p>
              </Card>
            </div>
          </section>
        )}

        {/* ===== CPA ===== */}
        {section === 'CPA' && (
          <section className="section container">
            <div className="page">
              <h2 className="title-xl">💼 CPA Firms</h2>
              

              <Card title="Why CPAs Are Targeted">
                <ul>
                  <li>Invoices & money flows make you attractive for payment fraud.</li>
                  <li>Tax records & payroll data are gold for identity theft and extortion.</li>
                  <li>Seasonal deadlines mean ransomware or outages hit hardest during crunch time.</li>
                  <li>Client trust means your email is the perfect disguise for scams.</li>
                </ul>
                <p>One incident can cost a client relationship, spike your premiums, or stall your entire practice.</p>
              </Card>

              <Card title="What We Do for CPA Firms">
                <p>As your Principal Consultant, I close the cracks attackers exploit and give leadership clear assurance your firm can keep running under pressure.</p>
                <p>We focus on three essentials:</p>
                <ul>
                  <li><strong>Access Defensibility (Inside the Firm)</strong>
                    <ul>
                      <li>Only the right people can reach your systems.</li>
                      <li>Old accounts, forgotten outsiders, and unnecessary “keys to the kingdom” are removed.</li>
                      <li>Partners know the firm won’t be blindsided by silent intrusions.</li>
                    </ul>
                  </li>
                  <li><strong>Communications Defensibility (Outside the Firm)</strong>
                    <ul>
                      <li>Every invoice, filing, and client message is recognized as genuine.</li>
                      <li>Impostor emails and spoofed domains fail before they reach your clients.</li>
                      <li>Your billing and submissions aren’t stuck in junk folders or lost in transit.</li>
                    </ul>
                  </li>
                  <li><strong>Continuity Defensibility (Survival)</strong>
                    <ul>
                      <li>Even if data is deleted or held for ransom, you can recover.</li>
                      <li>Recovery is tested, timed, and documented.</li>
                      <li>Leadership knows exactly how long it takes to get back online and how much data is at risk.</li>
                    </ul>
                  </li>
                </ul>
              </Card>

              <Card title="Business Outcomes for CPA Firms">
                <ul>
                  <li>Cash comes in on time — invoices deliver and disputes drop.</li>
                  <li>Deadlines are met — filings accepted on the first try, no rework.</li>
                  <li>Clients stay confident — impostor invoices don’t poison relationships.</li>
                  <li>Insurers say yes — renewals are smoother, premiums more stable.</li>
                  <li>Bad days cost less — recoveries are faster, write-offs smaller.</li>
                  <li>Reputation holds — your firm stays credible with clients, regulators, and referral partners.</li>
                </ul>
              </Card>
            </div>
          </section>
        )}

        {/* ===== LAW ===== */}
        {section === 'Law' && (
          <section className="section container">
            <div className="page">
              <h2 className="title-xl">⚖️ Law Firms</h2>
              

              <Card title="Why Law Firms Are Targeted">
                <p>Hackers know attorneys are high-value targets because:</p>
                <ul>
                  <li>Case files, contracts, and settlements are extortion gold.</li>
                  <li>Court and regulatory deadlines create pressure — ransomware timed before a filing is devastating.</li>
                  <li>Attorney email carries natural authority — if it looks like it came from counsel, people act.</li>
                  <li>Escrow and settlement funds are tempting for redirection scams.</li>
                  <li>Bar associations and insurers require responsibility — and penalize firms that can’t prove it.</li>
                </ul>
              </Card>

              <Card title="What We Do for Law Firms">
                <p>As your Principal Consultant, I close the cracks attackers exploit and give leadership confidence your practice can survive pressure from clients, regulators, and adversaries.</p>
                <p>We focus on three essentials:</p>
                <ul>
                  <li><strong>Access Defensibility (Inside the Firm)</strong>
                    <ul>
                      <li>Only the right people can reach your systems.</li>
                      <li>Dormant accounts, forgotten vendors, and excessive privileges are shut down.</li>
                      <li>Partners know there aren’t silent intruders moving inside the firm’s files.</li>
                    </ul>
                  </li>
                  <li><strong>Communications Defensibility (Outside the Firm)</strong>
                    <ul>
                      <li>Every client update, settlement instruction, and filing is recognized as authentic.</li>
                      <li>Impostor emails and lookalike domains fail before they reach your clients or opposing counsel.</li>
                      <li>Your reputation as “the trusted voice” is preserved.</li>
                    </ul>
                  </li>
                  <li><strong>Continuity Defensibility (Survival)</strong>
                    <ul>
                      <li>Even if case files are deleted or held for ransom, you can recover.</li>
                      <li>Recovery is tested and timed, so partners know exactly how long it takes to get back online.</li>
                      <li>Your practice keeps operating under court and client deadlines.</li>
                    </ul>
                  </li>
                </ul>
              </Card>

              <Card title="Business Outcomes for Law Firms">
                <p>Working with JGS means leadership confidence, not IT jargon:</p>
                <ul>
                  <li>Deadlines are met — filings and submissions are accepted the first time.</li>
                  <li>Confidentiality is preserved — case files and contracts aren’t quietly siphoned or leaked.</li>
                  <li>Clients stay confident — impostor emails don’t trick them, and trust in your firm holds.</li>
                  <li>Insurers renew smoothly — fewer questions, more stable premiums, no last-minute scramble.</li>
                  <li>Bad days cost less — faster recovery, smaller blast radius, fewer malpractice risks.</li>
                  <li>Your reputation endures — peers, clients, and referral partners see you as responsible and reliable.</li>
                </ul>
              </Card>
            </div>
          </section>
        )}

        {/* ===== RISKS ===== */}
        {section === 'Risks' && (
          <section className="section container">
            <div className="page">
              <h2 className="title-xl">🛡️ Stopping Hackers</h2>
              
              <Card title="🔑 Stage 1: Getting In">
                <p><strong>The Risk:</strong> Fake emails, spoofed logins, and forgotten old accounts.<br/><strong>Response:</strong> Unused doors are sealed, phishing attempts are blocked, and weak entry points eliminated.<br/><strong>Outcome:</strong> Attorneys and staff work without interruption. Intruders are stopped before deadlines are put at risk.</p>
              </Card>
              <Card title="🛡️ Stage 2: Grabbing Control">
                <p><strong>The Risk:</strong> Hidden admin rights, old integrations, and unsecured “emergency” accounts.<br/><strong>Response:</strong> Access is cut to the minimum, emergency logins hardened, and every change tracked.<br/><strong>Outcome:</strong> No one holds the “keys to the kingdom” they shouldn’t. Control stays with the firm, not an attacker.</p>
              </Card>
              <Card title="🔄 Stage 3: Spreading Out">
                <p><strong>The Risk:</strong> Once inside, hackers roam through mailboxes, client folders, or shared drives.<br/><strong>Response:</strong> Suspicious mailbox rules are removed, silent forwarding shut down, and access trimmed across shared systems.<br/><strong>Outcome:</strong> Even if an intruder gets in, they can’t wander into sensitive case files or client tax records.</p>
              </Card>
              <Card title="📌 Stage 4: Sneaking Back In">
                <p><strong>The Risk:</strong> Attackers plant hidden backdoors — guest accounts, forwarding loops, or expired integrations left open.<br/><strong>Response:</strong> Dormant outsiders are removed, loopholes closed, and silent backdoors disabled.<br/><strong>Outcome:</strong> Once kicked out, they stay out. No lingering footholds waiting to be exploited later.</p>
              </Card>
              <Card title="📤 Stage 5: Stealing Data">
                <p><strong>The Risk:</strong> Confidential contracts, tax returns, or settlement files leaked through oversharing or unsecured links.<br/><strong>Response:</strong> File sharing is tightened, retention aligned with professional standards, and audit trails kept tamper-proof.<br/><strong>Outcome:</strong> Sensitive documents don’t walk out the back door. Client trust and confidentiality remain intact.</p>
              </Card>
              <Card title="💾 Stage 6: Holding You Hostage">
                <p><strong>The Risk:</strong> Backups that look fine on paper but fail when they’re needed most.<br/><strong>Response:</strong> Live recovery drills run with leadership present, so restoration is proven under pressure.<br/><strong>Outcome:</strong> Even if files are wiped or ransomed, operations recover on schedule. Court and tax deadlines are met without compromise.</p>
              </Card>
            </div>
          </section>
        )}

        {/* ===== WHY JGS ===== */}
        {section === 'Why JGS' && (
          <section className="section container">
            <div className="page">
              <h2 className="title-xl">✨ Why JGS Cloud Compliance</h2>
              <Card title="Because uptime isn’t enough.">
                <p>For law and CPA firms, it’s not just about keeping systems online — it’s about making sure invoices are paid, filings go through, clients trust communications, and deadlines aren’t missed.</p>
              </Card>
              <Card title="The Problem with Others">
                <ul>
                  <li><strong>MSPs</strong> keep the lights on, but stall when issues get complex.</li>
                  <li><strong>Microsoft</strong> provides templates, but not tailored answers for your practice.</li>
                  <li><strong>Auditors</strong> hand out checklists, but don’t fix what actually puts you at risk.</li>
                </ul>
              </Card>
              <Card title="Why JGS is Different">
                <p>I was the senior engineer MSPs escalated to when they were out of options. Today, as your Principal Consultant, I work directly with firm leadership to:</p>
                <ul>
                  <li>Resolve the hard problems your MSP can’t close.</li>
                  <li>Keep partners ahead of new risks and scams before they hit.</li>
                  <li>Prepare you with clear, plain-English answers for clients, insurers, and regulators.</li>
                </ul>
              </Card>
              <Card title="The Results in Business Terms">
                <ul>
                  <li>Cash flow is steady — invoices deliver and disputes drop.</li>
                  <li>Deadlines are met — filings are accepted the first time.</li>
                  <li>Clients stay confident — impostor emails don’t undermine trust.</li>
                  <li>Renewals are smoother — insurers and auditors see a responsible practice.</li>
                  <li>Disruptions end quickly — problems get closed, not dragged out.</li>
                </ul>
                <p><strong>👉 Why JGS?</strong><br/>Because when your firm is under pressure, you need more than tickets and templates. You need senior expertise that keeps your practice moving and your reputation intact.</p>
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
                  <a className="btn" href="mailto:support@cloudjgs.com">Email Support</a>
                </div>
              </div>
              <div className="founder" style={{marginTop:'1rem'}}>
                <img src="/founder.jpg" alt="Jeremiah Spears headshot" className="founder-img" />
                <div className="founder-meta">
                  <div className="founder-name">Jeremiah Spears</div>
                  <div className="founder-title">Founder & Principal Consultant<br/>JGS Cloud Compliance, LLC</div>
                  <div className="founder-actions">
                    <a className="btn sm" href="https://www.linkedin.com/in/jspears80" target="_blank" rel="noopener">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

      </main>
    </>
  );
}
