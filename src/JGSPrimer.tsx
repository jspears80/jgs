
import React, { useEffect, useState } from "react";

/* JGS Cloud Compliance, LLC — SPA v12.0 (QA-stable)
   - Clean JSX, stable build, Tailwind, and Vite TS config.
*/

// ===== Config =====
const BOOKING_URL = "https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled";
const DOMAIN = "cloudjgs.com";
const EMAIL_SUPPORT = "support@cloudjgs.com";
const EMAIL_DIRECT = "jspears@cloudjgs.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/jspears80/";

// ===== Helpers =====
function openExternal(url: string) {
  try { window.open(url, "_blank", "noopener"); } catch (_) {}
}
function sendMail(addr: string) {
  try { window.location.href = `mailto:${addr}`; } catch (_) {}
}

// ===== Styles (injects Tailwind + custom CSS) =====
function GlobalCSS() {
  return (
    <style>{`
      html, body { scrollbar-gutter: stable both-edges; }
      @supports not (scrollbar-gutter: stable both-edges) { html { overflow-y: scroll; } }

      :root { --ring: rgba(255, 182, 193, .55); }

      .reveal-init { opacity: 0; transform: translateY(14px); transition: opacity .45s ease-out, transform .45s ease-out; }
      .reveal-in { opacity: 1; transform: none; }
      @media (prefers-reduced-motion: reduce) {
        .reveal-init { opacity: 1 !important; transform: none !important; transition: none !important; }
      }

      .card { transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease; }
      .card:hover { transform: translateY(-2px); background-color: rgba(255,255,255,0.07); box-shadow: 0 10px 24px rgba(0,0,0,0.25); }

      p { line-height: 1.65; }
      ul, ol { line-height: 1.6; }
      h1, h2 { letter-spacing: -0.01em; }
      .copy { max-width: 68ch; }

      .nav-link { position: relative; }
      .nav-link.active::after { content: ""; position: absolute; left: 12px; right: 12px; bottom: 6px; height: 2px; background: linear-gradient(90deg, #ffc0cb, #9fb8ff); border-radius: 2px; }

      a:focus-visible, button:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--ring); border-radius: 12px; }

      .skip-link { position: absolute; left: -9999px; top: auto; width: 1px; height: 1px; overflow: hidden; }
      .skip-link:focus { left: 16px; top: 12px; width: auto; height: auto; padding: 8px 12px; background: #fff; color: #0a0f2a; border-radius: 10px; z-index: 9999; }
    `}</style>
  );
}

// ===== Nav & Background =====
const NAV = [
  { id: "home", title: "Home" },
  { id: "services", title: "Our Services" },
  { id: "support", title: "Support" },
  { id: "cpa", title: "CPA Firms" },
  { id: "law", title: "Law Firms" },
  { id: "proof", title: "Case Studies" },
  { id: "why", title: "Why JGS" },
  { id: "vision", title: "Vision" },
  { id: "cta", title: "Get Started" }
];

function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_-150px,rgba(255,210,200,0.22),transparent_60%),radial-gradient(1000px_600px_at_70%_20%,rgba(100,150,255,0.16),transparent_65%),linear-gradient(180deg,#0a0f2a,70%,#0b102d)]" />
    </div>
  );
}

// ===== Header =====
function Header({ go, page }: { go: (k: string) => void; page: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="fixed top-0 inset-x-0 z-50 pt-[env(safe-area-inset-top)] bg-[#0a0f2a]/80 backdrop-blur">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 flex items-center justify-between py-2">
          <a href="#home" onClick={(e) => { e.preventDefault(); go("home"); }} className="flex items-center gap-3">
            <div className="relative h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-rose-300 via-pink-200 to-indigo-300 shadow-lg">
              <span className="text-[#0a0f2a] font-bold text-sm">JGS</span>
            </div>
            <div className="leading-tight">
              <div className="text-[14px] font-semibold tracking-wide">Cloud Compliance</div>
              <div className="text-[11px] text-white/70">Secure • Simple • Reliable</div>
            </div>
          </a>
          <nav className="hidden md:flex flex-wrap gap-2 text-xs">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={(e) => { e.preventDefault(); go(n.id); }}
                aria-current={page===n.id? 'page':undefined}
                className={`nav-link px-3 py-2 ${page===n.id? 'bg-white/10 font-semibold active':''}`}
              >
                {n.title}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={BOOKING_URL} onClick={(e)=>{e.preventDefault(); openExternal(BOOKING_URL);}} className="rounded-full bg-rose-300/95 text-[#0a0f2a] px-4 py-2 text-xs font-semibold shadow hover:bg-rose-300">Book Now</a>
            <button onClick={()=>setOpen(s=>!s)} className="md:hidden rounded-full border border-white/20 px-3 py-2 text-xs">Menu</button>
          </div>
        </div>
        {open && (
          <div className="md:hidden mx-auto max-w-[1400px] px-4 sm:px-8 pb-2">
            <div className="rounded-2xl border border-white/10 bg-[#0b112d] p-3 text-sm">
              <div className="grid gap-1">
                {NAV.map((n) => (
                  <a key={n.id} href={`#${n.id}`} onClick={(e)=>{e.preventDefault(); go(n.id); setOpen(false);}} className={`rounded-lg px-3 py-2 hover:bg-white/5 ${page===n.id? 'bg-white/10 font-semibold':''}`}>{n.title}</a>
                ))}
                <a href={BOOKING_URL} onClick={(e)=>{e.preventDefault(); openExternal(BOOKING_URL);}} className="rounded-lg px-3 py-2 bg-rose-300/90 text-[#0a0f2a] font-semibold hover:bg-rose-300">Book Now</a>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* sticky book for mobile */}
      <a href={BOOKING_URL} onClick={(e)=>{e.preventDefault(); openExternal(BOOKING_URL);}} className="sm:hidden fixed bottom-4 right-4 z-40 rounded-full bg-rose-300/95 text-[#0a0f2a] px-4 py-3 text-xs font-semibold shadow-lg">Book</a>
    </>
  );
}

// ===== Sections =====
function SectionWrapper({ children, alt }: { children: React.ReactNode; alt?: boolean }) {
  return (
    <section data-reveal className={`py-16 border-t border-white/10 ${alt ? "bg-[#0b112d]" : ""} reveal-init`}>
      {children}
    </section>
  );
}

function CTAButtons() {
  return (
    <div data-reveal className="mt-10 flex flex-wrap justify-center gap-4 reveal-init">
      <a href={BOOKING_URL} onClick={(e)=>{e.preventDefault(); openExternal(BOOKING_URL);}} className="rounded-xl bg-rose-300/95 text-[#0a0f2a] px-6 py-3 text-sm font-semibold hover:bg-rose-300">Book a Call</a>
      <a href="#services" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/5">See Services</a>
      <a href="#support" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/5">Get Support</a>
    </div>
  );
}

// ===== Pages =====
function HomePage({ go }: { go: (k: string) => void }) {
  return (
    <div>
      <section className="relative pt-10 pb-12">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-8 items-end">
          <div data-reveal className="text-center lg:text-left lg:col-span-7 reveal-init">
            <h1 className="display text-[42px] sm:text-[60px] md:text-[78px] leading-[1.05] tracking-tight">JGS Cloud Compliance — Secure it. Support it. Prove it.</h1>
            <p className="mt-5 text-rose-200/90 font-semibold max-w-3xl lg:max-w-none mx-auto lg:mx-0">Microsoft 365 secured, supported, and audit-ready for CPA and law firms — with flat-fee projects, advisory lifelines, and receipts that stand up to insurers and auditors.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button onClick={() => go("services")} className="rounded-xl bg-rose-300/95 text-[#0a0f2a] px-5 py-3 text-sm font-semibold hover:bg-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-300/80">See Services</button>
              <a href={BOOKING_URL} onClick={(e)=>{e.preventDefault(); openExternal(BOOKING_URL);}} className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30">Book a Call</a>
              <button onClick={() => go("cpa")} className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30">For CPA Firms</button>
              <button onClick={() => go("law")} className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30">For Law Firms</button>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 text-[13px]">
              <div className="card rounded-lg border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">💼 <span className="font-semibold">CPA renewal hike canceled</span> — MFA + logging proof accepted</div>
              <div className="card rounded-lg border borderwhite/10 bg-white/5 px-4 py-3 backdrop-blur-sm">🛡️ <span className="font-semibold">$75k fraud averted</span> — spoofing blocked in 48 hours</div>
              <div className="card rounded-lg border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">💸 <span className="font-semibold">$19k/yr saved</span> — license right‑sizing via advisory</div>
            </div>
          </div>
          <div data-reveal className="hidden lg:block lg:col-span-5 reveal-init">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <div className="text-sm text-white/70">Secure Score</div>
              <div className="mt-3 flex items-end gap-4">
                <div className="flex-1"><div className="text-4xl font-bold">43%</div><div className="text-xs text-white/60">Before</div></div>
                <div className="h-14 w-px bg-white/10" />
                <div className="flex-1"><div className="text-4xl font-bold text-emerald-300">81%</div><div className="text-xs text-white/60">After</div></div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                <li>✔ MFA enforced for all users</li>
                <li>✔ Audit logging + retention enabled</li>
                <li>✔ External sharing tightened</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-300/20 text-emerald-200 text-[11px] px-3 py-1">Audit‑ready</span>
                <span className="rounded-full bg-sky-300/20 text-sky-200 text-[11px] px-3 py-1">Insurer‑accepted</span>
                <span className="rounded-full bg-rose-300/20 text-rose-200 text-[11px] px-3 py-1">Flat‑fee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServicesPage() {
  const services = [
    { t: "Security Hardening & Remediation — $1,995", d: "Microsoft 365 is sold as secure — but it’s not. We harden it: enforce MFA, turn on audit logging with retention, eliminate risky settings, and lock down admin roles. ✅ Hardened tenant. ✅ Audit-ready. ✅ Insurer-approved." },
    { t: "Secure Email Delivery — $995", d: "Microsoft 365 email that actually lands. We configure SPF, DKIM, and DMARC for alignment, block spoofing, and optimize mailflow. ✅ Secure & compliant. ✅ Reliable inbox delivery. ✅ Credibility restored." },
    { t: "Backup & Recovery Assurance — $995", d: "Microsoft 365 doesn’t truly back up email, Teams, or files long-term. We assure it: deploy immutable backups, align retention, and run test restores. ✅ Real recoverability. ✅ Audit-ready. ✅ Insurer-approved." },
    { t: "Custom Projects — Scoped Pricing", d: "When standard fixes aren’t enough, we scope and deliver. Migrations, cleanups, compliance overhauls, complex projects — flat-fee and finished right. ✅ Defined scope. ✅ Predictable outcomes. ✅ No drift." },
  ];
  const advisory = [
    { t: "Advisory Light — $295/mo", d: "For leadership that needs a lifeline. Email us with compliance questions and get a monthly consult. ✅ Reliable answers. ✅ No guesswork." },
    { t: "Advisory Plus — $495/mo", d: "For teams that need day-to-day coverage. Staff and leadership support by email or phone, plus license reviews. ✅ Everyday confidence. ✅ Urgent issues solved fast." },
    { t: "Advisory Enterprise — $995/mo", d: "For firms that want it all. Unlimited support plus one of each core project quarterly. ✅ Full-service partnership. ✅ Predictable price. ✅ Quarterly projects included — a standout benefit." },
  ];
  return (
    <SectionWrapper>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Our Services</h1>
        <div className="mt-8 grid md:grid-cols-2 gap-6 text-left text-white/80">
          {services.map((card, i) => (
            <div key={i} className="card rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-lg">{card.t}</h3>
              <p className="mt-2 text-sm">{card.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6 text-left text-white/80">
          {advisory.map((card, i) => (
            <div key={i} className="card rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-lg">{card.t}</h3>
              <p className="mt-2 text-sm">{card.d}</p>
            </div>
          ))}
        </div>
        <CTAButtons />
      </div>
    </SectionWrapper>
  );
}

function SupportPage() {
  const bullets = [
    "Senior advisor on every call. ✅ Expert on demand.",
    "Remote help in minutes when needed. ✅ Fast response.",
    "Written Action Notes after every call. ✅ Clear documentation.",
  ];
  return (
    <SectionWrapper alt>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Support When You Need It</h1>
        <p className="mt-4 text-white/80 copy mx-auto">No tickets. No delays. Every request answered the same business day, urgent issues prioritized. Microsoft 365 only — Email, Teams, SharePoint, and Office apps.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-4 text-left text-sm text-white/80">
          {bullets.map((t, i) => (
            <div key={i} className="card rounded-lg border border-white/10 bg-white/5 p-6">{t}</div>
          ))}
        </div>
        <CTAButtons />
      </div>
    </SectionWrapper>
  );
}

function CPAFirmsPage() {
  const bullets = [
    "Email that delivers — DNS aligned, spoofing blocked. ✅ Credible communication.",
    "Security that holds — MFA enforced, logging on, retention applied. ✅ Compliance proof.",
    "Backups that restore — Immutable, tested. ✅ Real recoverability.",
  ];
  const cases = [
    { h: "Case: IRS Audit Passed", d: "CPA firm survived an IRS tech audit with no penalties after we hardened security and produced audit logs as evidence." },
    { h: "Flat‑Fee Path", d: "Start with DNS Cleanup ($995) or Security ($1,995). Add Advisory Light ($295/mo) to stay peer‑review ready." },
  ];
  return (
    <SectionWrapper>
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-semibold tracking-tight text-center">For CPA Firms — Tax Season Without Tech Stress</h1>
        <p className="mt-4 text-white/80 copy mx-auto text-center">Microsoft 365 that just works: invoices deliver, returns arrive, access stays clean, and renewals pass without last‑minute scrambles.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm text-white/80">
          {bullets.map((t, i) => (
            <div key={i} className="card rounded-lg border border-white/10 bg-white/5 p-6">{t}</div>
          ))}
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6 text-left text-white/85">
          {cases.map((b, i) => (
            <div key={i} className="card rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">{b.h}</h3>
              <p className="mt-2 text-sm">{b.d}</p>
            </div>
          ))}
        </div>
        <CTAButtons />
      </div>
    </SectionWrapper>
  );
}

function LawFirmsPage() {
  const bullets = [
    "Anti-spoofing baked in — DNS alignment + impersonation defense. ✅ Fraud blocked.",
    "Retention & legal hold — Discovery-safe, logs retained. ✅ Evidence preserved.",
    "Advisory lifeline — Same-day guidance, license savings. ✅ Ongoing assurance.",
  ];
  const cases = [
    { h: "Case: Confidential Data Protected", d: "Law firm stopped unauthorized data sharing in Teams and SharePoint after we tightened permissions and retention policies." },
    { h: "Flat‑Fee Path", d: "Start with DNS Cleanup ($995), then Security ($1,995), plus Advisory Plus ($495/mo) for ongoing oversight." },
  ];
  return (
    <SectionWrapper>
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-semibold tracking-tight text-center">For Law Firms — Confidential Collaboration, Year‑Round</h1>
        <p className="mt-4 text-white/80 copy mx-auto text-center">Protect client confidentiality and credibility: secure email, Teams/SharePoint that behave, and insurer‑ready proof after every project.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm text-white/80">
          {bullets.map((t, i) => (
            <div key={i} className="card rounded-lg border border-white/10 bg-white/5 p-6">{t}</div>
          ))}
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6 text-left text-white/85">
          {cases.map((b, i) => (
            <div key={i} className="card rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">{b.h}</h3>
              <p className="mt-2 text-sm">{b.d}</p>
            </div>
          ))}
        </div>
        <CTAButtons />
      </div>
    </SectionWrapper>
  );
}

function ProofPage() {
  const proofs = [
    { h: "CPA Audit Ready", d: "A CPA firm avoided penalties by showing regulators complete audit trails after we enabled retention and logging." },
    { h: "Law Firm Email Secured", d: "A law firm restored trust in client communications after we realigned DNS and blocked impersonation attempts." },
    { h: "Backup Proof Delivered", d: "A client demonstrated quarterly restore tests to their insurer, proving recoverability and avoiding premium hikes." },
    { h: "Security Breach Prevented", d: "A firm avoided a costly breach when our remediation closed risky admin accounts and enforced MFA across the tenant." },
  ];
  return (
    <SectionWrapper>
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-semibold tracking-tight text-center">Case Studies & Proof</h1>
        <p className="mt-4 text-white/80 copy mx-auto text-center">Real outcomes delivered to real firms. Proof you can hand to an insurer, auditor, or board.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6 text-left text-white/85">
          {proofs.map((b, i) => (
            <div key={i} className="card rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">{b.h}</h3>
              <p className="mt-2 text-sm">{b.d}</p>
            </div>
          ))}
        </div>
        <CTAButtons />
      </div>
    </SectionWrapper>
  );
}

function WhyJGSPage() {
  const points = [
    { h: "Flat Fees. No Surprises.", d: "Clear prices for defined fixes — no hourly creep. Projects close gaps; retainers prevent drift." },
    { h: "Proof Beats Promises.", d: "Secure Score deltas, MFA logs, DNS health, restore confirmations delivered after every engagement." },
    { h: "Fixer of Last Resort.", d: "When migrations fail or spoofing hits, we stabilize, resolve, and document — fast." },
    { h: "Simple, Reliable.", d: "Microsoft 365 only. Email, Teams, SharePoint, Office — done right, in plain English." },
  ];
  return (
    <SectionWrapper>
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-semibold tracking-tight text-center">Why JGS Cloud Compliance</h1>
        <p className="mt-4 text-white/80 copy mx-auto text-center">Not an MSP. A Microsoft 365 compliance partner. Flat fees, plain English, and proof you can hand to insurers and auditors.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6 text-left text-white/85">
          {points.map((b, i) => (
            <div key={i} className="card rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">{b.h}</h3>
              <p className="mt-2 text-sm">{b.d}</p>
            </div>
          ))}
        </div>
        <CTAButtons />
      </div>
    </SectionWrapper>
  );
}

function VisionPage() {
  const phases = [
    { h: "Today", d: "Flat‑fee projects (Security, DNS, Backup) + Advisory retainers with same‑day support." },
    { h: "Tomorrow", d: "Automated Secure Score monitoring, continuous restore confirmations, insurer‑ready compliance packets." },
    { h: "Future", d: "Client portals with live dashboards for Microsoft 365 visibility, proof artifacts one click away." },
  ];
  return (
    <SectionWrapper>
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-semibold tracking-tight text-center">Our Vision</h1>
        <p className="mt-4 text-white/80 copy mx-auto text-center">Today we deliver secure, simple, reliable Microsoft 365. Tomorrow we automate oversight, deliver dashboards, and make audit‑proofing effortless.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6 text-left text-white/85">
          {phases.map((b, i) => (
            <div key={i} className="card rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">{b.h}</h3>
              <p className="mt-2 text-sm">{b.d}</p>
            </div>
          ))}
        </div>
        <CTAButtons />
      </div>
    </SectionWrapper>
  );
}

function GetStartedPage() {
  return (
    <SectionWrapper alt>
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl mx-auto card border border-white/10 bg-white/5 p-6 flex items-center gap-5">
          <img
            src="founder.jpg"
            alt="Founder — Jeremiah Spears"
            className="rounded-portrait"
            onError={(e) => { (e.currentTarget as HTMLImageElement).onerror = null; (e.currentTarget as HTMLImageElement).src = '/founder.jpg'; }}
          />
          <div className="text-white/90">
            <h3 className="text-xl font-semibold">Jeremiah Spears</h3>
            <div className="text-sm text-white/70">Founder, JGS Cloud Compliance, LLC</div>
            <p className="mt-3 text-sm text-white/80">Book time directly with me — we’ll look at your tenant, identify quick wins, and lay out a flat‑fee path to secure, simple, reliable Microsoft 365.</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a href={BOOKING_URL} onClick={(e)=>{e.preventDefault(); openExternal(BOOKING_URL);}} className="rounded-xl bg-rose-300/95 text-[#0a0f2a] px-5 py-2 text-sm font-semibold hover:bg-rose-300">Book with Jeremiah</a>
              <a href={`mailto:${EMAIL_DIRECT}`} onClick={(e)=>{e.preventDefault(); sendMail(EMAIL_DIRECT);}} className="rounded-xl border border-white/20 px-5 py-2 text-sm font-semibold hover:bg-white/5">Email Jeremiah</a>
              <a href={LINKEDIN_URL} onClick={(e)=>{e.preventDefault(); openExternal(LINKEDIN_URL);}} className="rounded-xl border border-white/20 px-5 py-2 text-sm font-semibold hover:bg-white/5">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function Footer() {
  return (
    <footer className="mt-20 py-12 border-t border-white/10 bg-[#0b112d] text-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-rose-300 via-pink-200 to-indigo-300 shadow-lg"><span className="text-[#0a0f2a] font-bold text-sm">JGS</span></div>
          <div className="leading-tight text-left">
            <div className="text-[14px] font-semibold text-white">JGS Cloud Compliance, LLC</div>
            <div className="text-[11px] text-white/60">Secure • Simple • Reliable</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hover:text-white/90">{n.title}</a>
          ))}
        </div>
        <div className="text-white/70 text-sm">
          <p>Website: <a href={`https://${DOMAIN}`} onClick={(e)=>{e.preventDefault(); openExternal(`https://${DOMAIN}`);}} className="hover:text-white/90 underline">{DOMAIN}</a></p>
          <p className="mt-1">Support: <a href={`mailto:${EMAIL_SUPPORT}`} onClick={(e)=>{e.preventDefault(); sendMail(EMAIL_SUPPORT);}} className="hover:text-white/90">{EMAIL_SUPPORT}</a> • Direct: <a href={`mailto:${EMAIL_DIRECT}`} onClick={(e)=>{e.preventDefault(); sendMail(EMAIL_DIRECT);}} className="hover:text-white/90">{EMAIL_DIRECT}</a></p>
          <p className="mt-1">LinkedIn: <a href={LINKEDIN_URL} onClick={(e)=>{e.preventDefault(); openExternal(LINKEDIN_URL);}} className="hover:text-white/90">linkedin.com/in/jspears80</a></p>
          <p className="mt-1">© {new Date().getFullYear()} JGS Cloud Compliance, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// ===== Main App =====
export default function JGSPrimer() {
  const [page, setPage] = useState<string>("home");
  const go = (key: string) => { setPage(key); try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch {} };

  // initial hash routing
  useEffect(() => {
    const h = (window.location.hash || "#home").replace("#", "");
    if (NAV.find((n) => n.id === h)) setPage(h);
  }, []);

  // reveal observer per page
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'));
    nodes.forEach((el) => { if (!el.classList.contains('reveal-init')) el.classList.add('reveal-init'); });
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { (e.target as HTMLElement).classList.add('reveal-in'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
    nodes.forEach((el) => { if (!el.classList.contains('reveal-in')) io.observe(el); });
    return () => { try { io.disconnect(); } catch {} };
  }, [page]);

  // hash sync
  useEffect(() => {
    const onHash = () => {
      const hh = (window.location.hash || "#home").replace("#", "");
      if (NAV.find((n) => n.id === hh)) setPage(hh);
      try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch {}
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <main id="main" className="min-h-screen bg-[#0a0f2a] text-neutral-100">
      <GlobalCSS />
      <Background />
      <Header go={(key) => { window.location.hash = key; go(key); }} page={page} />
      <div className="pt-24">
        {page === "home" && <HomePage go={go} />}
        {page === "services" && <ServicesPage />}
        {page === "support" && <SupportPage />}
        {page === "cpa" && <CPAFirmsPage />}
        {page === "law" && <LawFirmsPage />}
        {page === "proof" && <ProofPage />}
        {page === "why" && <WhyJGSPage />}
        {page === "vision" && <VisionPage />}
        {page === "cta" && <GetStartedPage />}
      </div>
      <Footer />
    </main>
  );
}
