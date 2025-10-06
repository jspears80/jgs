'use client';
import React from 'react';

export default function AboutPage() {
  return (
    <section className="section container page-about">
      {/* ===== Intro / Manifesto ===== */}
      <div className="card full about-card">
        <span className="eyebrow">About</span>
        <h1 className="hero about-title">The Price of Security — and Why We’re Fixing the Gap</h1>

        <p className="about-text">
          For years, professional firms have been stuck between two bad options.
        </p>
        <p className="about-text">
          On one side are large enterprise consultants — teams that speak in frameworks, charge
          five-figure retainers, and treat small practices like an afterthought. On the other are generic MSPs —
          vendors who keep systems online but rarely fix the root problems that lead to compromise, downtime, and lost trust.
        </p>
        <p className="about-text">
          Somewhere in between are firms like yours — law and accounting offices with 10–25 professionals who
          depend entirely on Microsoft 365 to serve clients, meet deadlines, and stay compliant. You shouldn’t have
          to pay enterprise prices just to feel secure.
        </p>
      </div>

      {/* ===== The Gap ===== */}
      <div className="card">
        <h2 className="title-xl">The Gap</h2>
        <ul className="list-tight" style={{ marginTop: '.25rem', maxWidth: '75ch' }}>
          <li>Hourly consultants charge for time, not outcomes.</li>
          <li>MSPs monitor problems instead of solving them.</li>
          <li>Enterprise firms produce 60-page reports that never get implemented.</li>
        </ul>
        <p style={{ marginTop: '.75rem', maxWidth: '75ch' }}>
          What’s missing is affordable, senior-level expertise that delivers measurable results — not dashboards,
          not promises, and not jargon.
        </p>
      </div>

      {/* ===== How JGS Fixes It ===== */}
      <div className="card">
        <h2 className="title-xl">How JGS Fixes It</h2>
        <p style={{ maxWidth: '75ch' }}>
          JGS Cloud Compliance bridges that gap. We deliver flat-fee projects that secure your Microsoft 365
          environment and advisory retainers that keep it that way.
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
              <td><strong>Microsoft 365 Security Retrofit</strong></td>
              <td>Closes internal access gaps, enforces MFA, restores visibility.</td>
              <td><strong>$1,995</strong></td>
            </tr>
            <tr>
              <td><strong>Email Security Retrofit</strong></td>
              <td>Authenticates mail, stops impostors, ensures reliable delivery.</td>
              <td><strong>$995</strong></td>
            </tr>
            <tr>
              <td><strong>Backup &amp; Recovery Retrofit</strong></td>
              <td>Tests recovery performance and confirms continuity under pressure.</td>
              <td><strong>$995</strong></td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: '.75rem', maxWidth: '75ch' }}>
          After your systems are secure, our <strong>Resolution &amp; Assurance Advisory</strong> provides direct,
          senior-level support — starting at <strong>$495/month</strong> — for guided troubleshooting, validation,
          and documented closure.
        </p>
      </div>

      {/* ===== Why It Works ===== */}
      <div className="card">
        <h2 className="title-xl">Why It Works</h2>
        <p style={{ maxWidth: '75ch' }}>
          Flat pricing forces discipline — on us. We scope the problem, fix it, and confirm it works.
          You know exactly what you’re paying for; we know exactly what we have to deliver. That transparency is what small
          professional firms have been missing in cybersecurity — and it’s why JGS exists.
        </p>
      </div>

      {/* ===== In Plain English ===== */}
      <div className="card">
        <h2 className="title-xl">In Plain English</h2>
        <p style={{ maxWidth: '75ch' }}>
          You shouldn’t have to choose between being overcharged or under-protected. Your firm deserves the same level
          of assurance large enterprises enjoy, delivered at a price and pace that make sense for your reality.
        </p>
        <p style={{ maxWidth: '75ch' }}>
          That’s what we do at JGS Cloud Compliance. <strong>We secure it. We support it.</strong> So you can stay focused
          on your clients — not your IT.
        </p>
      </div>
    </section>
  );
}
