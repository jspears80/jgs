'use client';
import React from 'react';

export default function AboutPage() {
  return (
    <section className="section container page-about">
      {/* ===== Intro ===== */}
      <div className="card full">
        <span className="eyebrow">About</span>
        <h1 className="hero">The Price of Security — and Why We’re Fixing the Gap</h1>
        <p className="lead" style={{ maxWidth: '75ch' }}>
          For years, professional firms have been trapped between two bad options.
        </p>
        <p style={{ maxWidth: '75ch' }}>
          On one side are large enterprise consultants — firms that speak in frameworks, charge five-figure retainers, and treat
          small practices like an afterthought. On the other side are generic MSPs — providers who keep systems online but rarely
          fix the real weaknesses that lead to compromise, lost trust, and sleepless nights.
        </p>
        <p style={{ maxWidth: '75ch' }}>
          Somewhere in between those two extremes are the people like you — law and accounting firms with 10 to 25 professionals,
          who rely completely on Microsoft 365 to do their work. You handle confidential information, court filings, and financial
          data every day. You can’t afford downtime or uncertainty. But you also shouldn’t have to pay enterprise prices just to feel secure.
        </p>
      </div>

      {/* ===== The Gap ===== */}
      <div className="card">
        <h2 className="title-xl">The Gap</h2>
        <p style={{ maxWidth: '75ch' }}>Most security services are priced for someone else’s reality:</p>
        <ul className="list-tight" style={{ marginTop: '.25rem', maxWidth: '75ch' }}>
          <li>Hourly consultants bill unpredictably and disappear after a few fixes.</li>
          <li>MSPs add “security bundles” that monitor problems instead of solving them.</li>
          <li>Enterprise firms charge for 60-page reports that never get implemented.</li>
        </ul>
        <p style={{ marginTop: '.75rem', maxWidth: '75ch' }}>
          What’s missing is affordable, senior-level security work that produces measurable results — not more dashboards,
          not more promises, and not more jargon.
        </p>
      </div>

      {/* ===== How JGS Changes the Equation ===== */}
      <div className="card">
        <h2 className="title-xl">How JGS Cloud Compliance Changes the Equation</h2>
        <p style={{ maxWidth: '75ch' }}>
          We built JGS Cloud Compliance to bridge that price-to-performance gap. Our model is simple: flat-fee projects that secure
          your environment, and retainers that keep it that way.
        </p>

        <table>
          <thead>
            <tr>
              <th style={{ width: '38%' }}>Category</th>
              <th>What It Does</th>
              <th style={{ width: '18%' }}>Flat Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>🛠 Microsoft 365 Security Retrofit</td>
              <td>Closes internal access gaps, enforces MFA, restores visibility</td>
              <td><strong>$1,995</strong></td>
            </tr>
            <tr>
              <td>📧 Email Security Retrofit</td>
              <td>Authenticates messages, stops impostors, ensures reliable delivery</td>
              <td><strong>$995</strong></td>
            </tr>
            <tr>
              <td>🔁 Backup &amp; Recovery Retrofit</td>
              <td>Tests your recovery process and proves you can restore quickly</td>
              <td><strong>$995</strong></td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: '.75rem', maxWidth: '75ch' }}>
          Once those projects are complete, our <strong>Resolution &amp; Assurance Advisory</strong> plans provide ongoing access
          to a senior consultant for rapid response, technical validation, and documented closure — starting at <strong>$495 / month</strong>.
        </p>
        <p style={{ maxWidth: '75ch' }}>
          No hourly surprises. No stacked fees. Just clear pricing for real security work that leadership can understand and rely on.
        </p>
      </div>

      {/* ===== Why Flat-Fee Matters ===== */}
      <div className="card">
        <h2 className="title-xl">Why Flat-Fee Matters</h2>
        <p style={{ maxWidth: '75ch' }}>
          Flat pricing forces discipline — on us. We scope the problem, fix it, and prove it works. You know exactly what you’re paying
          for, and we know exactly what we have to deliver.
        </p>
        <p style={{ maxWidth: '75ch' }}>
          That transparency is what small professional firms have been missing in cybersecurity. It’s how trust is built — and how good
          relationships stay that way.
        </p>
      </div>

      {/* ===== In Plain English ===== */}
      <div className="card">
        <h2 className="title-xl">In Plain English</h2>
        <p style={{ maxWidth: '75ch' }}>
          You shouldn’t have to choose between being overcharged or under-protected. Your firm deserves the same security discipline big
          enterprises have, delivered at a price and pace that make sense for the way you actually work.
        </p>
        <p style={{ maxWidth: '75ch' }}>
          That’s the space JGS Cloud Compliance was created to fill. <strong>We secure it. We support it.</strong> So you can stay focused
          on your clients — not your IT.
        </p>
      </div>
    </section>
  );
}
