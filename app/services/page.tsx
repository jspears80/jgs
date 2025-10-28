// app/secure/page.tsx
import React from "react";

export const metadata = {
  title: "Secure — Flat-Fee Microsoft 365 Hardening | JGS Cloud Compliance",
  description:
    "Because trust isn’t something you assume — it’s something you prove. Secure resets Microsoft 365 so it’s organized, protected, and defensible.",
};

export default function SecurePage() {
  return (
    <section className="wrap">
      {/* ----- Hero Banner ----- */}
      <header className="hero">
        <div className="kicker">Secure • Support • Prove</div>
        <h1>Microsoft 365 for Law &amp; CPA Firms</h1>
        <p className="lede">
          Professional firms run on trust — between partners, clients, and
          insurers.
        </p>
        <p className="lede">
          JGS Cloud Compliance protects that trust by securing Microsoft 365,
          maintaining it day-to-day, and proving it’s governed to professional
          standards.
        </p>
        <p className="lede">
          Our work gives your firm visible control, reliable support, and
          undeniable proof that your data — and reputation — are protected.
        </p>

        <div className="pill-grid">
          <span className="pill">
            🛡️ <strong>SECURE</strong> — Flat-fee Microsoft 365 hardening that
            restores trust, compliance, and peace of mind.
          </span>
          <span className="pill">
            🤝 <strong>SUPPORT</strong> — Your Microsoft 365 helpdesk and
            advisor — steady support, fast fixes, full accountability.
          </span>
          <span className="pill">
            📊 <strong>PROVE</strong> — Deliver audit-ready Microsoft 365
            evidence your clients, auditors, and insurers believe.
          </span>
          <span className="pill">
            ⚙️ <strong>CUSTOM</strong> — Design Microsoft 365 around your firm —
            efficient, compliant, and uniquely yours.
          </span>
        </div>

        <p className="sublede">
          JGS Cloud Compliance helps professional firms operate with clarity,
          consistency, and confidence — inside a Microsoft 365 environment
          that’s secure, documented, and built to professional standards.
        </p>

        <figure className="founder">
          <figcaption>
            <div className="founder-name">Jeremiah Spears</div>
            <div className="founder-title">Founder &amp; Principal Consultant</div>
          </figcaption>
          <blockquote>
            “I’ve seen too many firms run on bare-bones Microsoft 365, told
            they’re secure when they’re not.
            <br />
            I built JGS to fix that — to deliver security you can prove, not
            just assume.”
          </blockquote>
        </figure>
      </header>

      {/* ----- Secure Section ----- */}
      <section className="card -accent">
        <h2>🛡️ Secure — Flat-Fee Microsoft 365 Hardening</h2>
        <p className="tag">Because trust isn’t something you assume — it’s something you prove.</p>

        <div className="two-col">
          <div>
            <h3>Microsoft 365 for Law &amp; CPA Firms</h3>
            <p>
              Your firm runs on trust — between partners, clients, and insurers.
            </p>
            <p>
              Over time, access drifts, risks pile up, and confidence erodes.
            </p>
            <p>
              Secure resets your Microsoft 365 so it’s organized, protected, and
              defensible — restoring clarity to who has what, where, and why.
            </p>
            <p className="price">
              <strong>$1,495 flat fee.</strong>
              <br />
              One engagement. Permanent peace of mind.
            </p>
          </div>

          <aside className="side">
            <h4>The Business Value</h4>
            <ul>
              <li>
                <strong>Reassure your clients and insurers.</strong>
                <br />
                Prove your firm takes data protection seriously — with measurable,
                documented controls.
              </li>
              <li>
                <strong>Reduce exposure and uncertainty.</strong>
                <br />
                No more “who can see what” confusion. You’ll know — and be able
                to show — exactly how access is governed.
              </li>
              <li>
                <strong>Preserve your reputation.</strong>
                <br />
                Stay compliant with insurer expectations, renewals, and client due
                diligence.
              </li>
              <li>
                <strong>Operate with confidence.</strong>
                <br />
                A stable, governed Microsoft 365 means less noise, fewer surprises,
                and more trust in every exchange.
              </li>
            </ul>
          </aside>
        </div>

        <div className="divider" />

        <h4>What You Get</h4>
        <div className="steps">
          <article className="step">
            <div className="badge">1️⃣</div>
            <h5>Reset &amp; Rebuild</h5>
            <p>
              We secure the foundation — identity, access, and email — eliminating
              the drift that builds up over years.
            </p>
          </article>

          <article className="step">
            <div className="badge">2️⃣</div>
            <h5>Proof You Can Hand Off</h5>
            <p>
              You leave with clear documentation: who can access what, which
              protections are in place, and a signed Secure Report for insurers
              and clients.
            </p>
          </article>

          <article className="step">
            <div className="badge">3️⃣</div>
            <h5>Renewed Confidence</h5>
            <p>
              Everything works like it should.
              <br />
              Your systems are clean, compliant, and aligned to professional
              standards — ready for audits, renewals, or anything that comes next.
            </p>
          </article>
        </div>
      </section>

      {/* ----- Support / Prove / Custom Preview cards (read-only content, design only) ----- */}
      <section className="grid">
        <article className="card">
          <h3>🤝 Support — Microsoft 365 Helpdesk &amp; Advisory</h3>
          <p className="tag">Because your firm shouldn’t have to wait for answers.</p>
          <p><strong>Microsoft 365 for Law &amp; CPA Firms</strong></p>
          <p>
            Your team depends on Microsoft 365 every hour of every day.
            When something breaks, stalls, or confuses, you need more than a ticket number — you need someone who knows your system, understands your staff, and responds fast.
          </p>
          <p>
            Support gives your firm a dedicated Microsoft 365 helpdesk and advisor in one predictable monthly plan.
          </p>
          <p className="price"><strong>$995 per month.</strong><br/>Fast response. Clear accountability.</p>
        </article>

        <article className="card">
          <h3>📊 Prove — Audit-Ready Microsoft 365 Evidence</h3>
          <p className="tag">When insurers or clients ask for proof, you shouldn’t have to scramble.</p>
          <p><strong>Microsoft 365 for Law &amp; CPA Firms</strong></p>
          <p>
            Every year, firms face renewal forms, questionnaires, and client due-diligence requests that all ask the same thing: Show us proof your Microsoft 365 is secure.
          </p>
          <p>
            Prove delivers that documentation — clear, verified, and formatted for auditors and insurers. No stress, no tech talk — just organized evidence you can send immediately.
          </p>
          <p className="price"><strong>$495 one-time.</strong><br/>Fast turnaround. Ready to share.</p>
        </article>

        <article className="card">
          <h3>⚙️ Custom — Bring Us Your Microsoft 365 Idea</h3>
          <p className="tag">If it touches Microsoft 365, we can design it, build it, or automate it.</p>
          <p><strong>Microsoft 365 for Law &amp; CPA Firms</strong></p>
          <p>
            Every firm works differently. The challenge is making Microsoft 365 work that way too. Custom is where you bring your ideas — the “what ifs,” the “can this be done,” the workflows you wish existed.
          </p>
          <p>
            We take those ideas and turn them into secure, governed systems built entirely inside Microsoft 365. From quick automations to full-scale firm integrations — if it helps your people work better, we’ll design it.
          </p>
          <p className="price"><strong>From $495+.</strong><br/>Scoped upfront. Fixed per deliverable.</p>
        </article>
      </section>

      <style jsx>{`
        :global(html) { scroll-behavior: smooth; }
        .wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem 1.25rem 4rem;
        }
        /* HERO */
        .hero { margin-bottom: 2.5rem; }
        .kicker {
          color: #9b8df2;
          font-weight: 600;
          letter-spacing: .02em;
          margin-bottom: .25rem;
        }
        .hero h1 {
          font-size: 2.15rem;
          margin: 0 0 .25rem 0;
          font-weight: 800;
        }
        .lede { opacity: .92; margin: .35rem 0; }
        .sublede { opacity: .9; margin-top: 1rem; }

        .pill-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: .6rem;
          margin: 1rem 0 0;
        }
        .pill {
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 10px;
          padding: .6rem .8rem;
          display: block;
        }

        .founder { margin-top: 1.25rem; }
        .founder-name { font-weight: 700; }
        .founder-title { opacity: .85; font-size: .95rem; }
        blockquote { margin: .5rem 0 0; opacity: .9; }

        /* CARDS */
        .card {
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 16px;
          padding: 1.2rem 1.2rem 1.1rem;
        }
        .card + .card { margin-top: 1rem; }
        .card.-accent {
          background: linear-gradient(180deg, rgba(155,141,242,.10), rgba(255,255,255,.02));
          border-color: rgba(155,141,242,.25);
          padding: 1.35rem;
        }
        .card h2 { margin: 0 0 .35rem 0; font-size: 1.6rem; }
        .tag { opacity: .85; margin: 0 0 .9rem 0; font-style: italic; }
        .price { margin-top: .7rem; }

        .two-col {
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          gap: 1.25rem;
        }
        .side {
          background: rgba(0,0,0,.2);
          border: 1px dashed rgba(255,255,255,.15);
          border-radius: 12px;
          padding: .9rem;
        }
        .side h4 { margin: 0 0 .5rem 0; }
        .side ul { margin: 0; padding-left: 1rem; }
        .side li { margin: .55rem 0; }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,.06), rgba(255,255,255,.18), rgba(255,255,255,.06));
          margin: 1.1rem 0 1rem;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: .9rem;
        }
        .step {
          background: rgba(255,255,255,.02);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 12px;
          padding: .9rem;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px; height: 28px;
          border-radius: 8px;
          background: #9b8df2;
          color: #000;
          font-weight: 800;
          margin-bottom: .35rem;
        }
        .step h5 { margin: 0 0 .35rem 0; font-size: 1.05rem; }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 1.25rem;
        }

        /* RESPONSIVE */
        @media (max-width: 980px) {
          .two-col { grid-template-columns: 1fr; }
          .steps { grid-template-columns: 1fr; }
          .grid { grid-template-columns: 1fr; }
          .hero h1 { font-size: 1.9rem; }
        }
        @media (max-width: 640px) {
          .pill-grid { grid-template-columns: 1fr; }
          .pill { font-size: .95rem; }
        }
      `}</style>
    </section>
  );
}
