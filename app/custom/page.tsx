'use client';
import React from 'react';

export default function CustomSolutionsPage() {
  return (
    <section className="section container page-services">
      <div className="page home-grid">
        <div>
          <span className="eyebrow">Consulting • Microsoft 365</span>
          <h1 className="hero">⚙️ Custom Solutions — from $495+</h1>
          <h2>Make Microsoft 365 fit your firm</h2>

          <p className="lead">
            Your tools should work the way your team does. JGS Custom Solutions extend Microsoft 365 beyond security —
            automating workflows, improving efficiency, and ensuring governance at every step.
          </p>

          <div style={{ display: 'flex', gap: '.75rem', margin: '1rem 0', flexWrap: 'wrap' }}>
            <a className="btn primary" href="https://outlook.office.com/book/JGSConsulting@cloudjgs.com/?ismsaljsauthenabled" target="_blank" rel="noopener">
              🔒 Book Consultation
            </a>
            <a className="btn" href="/services">📘 Back to Services</a>
          </div>

          <div className="proofgrid">
            <div><strong>🧩 Built for your workflow</strong> — Microsoft 365 shaped around how your firm actually works.</div>
            <div><strong>🔁 Automate routine tasks</strong> — Cut clicks and context switching with governed flows.</div>
            <div><strong>📂 Govern as you go</strong> — Labeling, retention, and access discipline baked in.</div>
            <div><strong>📈 Measurable efficiency</strong> — Time saved, steps removed, proof documented.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
