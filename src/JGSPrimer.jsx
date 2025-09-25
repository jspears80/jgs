// JGSPrimer.jsx — Single‑file drop‑in
// Fix: Ensure react-router-dom resolves properly in Vercel.
// Note: Make sure package.json has "react-router-dom" in dependencies.

import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function JGSGlobalStyles() {
  return (
    <style>{`
      body { margin:0; font-family: ui-sans-serif, system-ui; }
      .container { max-width:1100px; margin:0 auto; padding:2rem; }
      .btn { padding:.6rem 1rem; border-radius:.6rem; border:1px solid #ccc; text-decoration:none; margin-right:.5rem; }
      nav a { text-decoration:none; padding:.5rem; }
    `}</style>
  );
}

function JGSNav(){
  const link = (to,label)=>(<NavLink to={to}>{label}</NavLink>);
  return (
    <header>
      <div className="container" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Link to="/">JGS Cloud Compliance</Link>
        <nav>
          {link("/","Home")}
          {link("/cpa","CPA Firms")}
          {link("/law","Law Firms")}
          {link("/services","Our Services")}
          {link("/support","Support")}
          {link("/proof","Proof")}
          {link("/contact","Contact")}
        </nav>
      </div>
    </header>
  );
}

function JGSHome(){
  return (
    <section className="container">
      <h1>Secure • Simple • Reliable — Microsoft 365 for CPA and law firms.</h1>
      <p>CPAs: tax season without downtime. Lawyers: year‑round confidentiality and collaboration.</p>
      <div>
        <Link className="btn" to="/services">See Services</Link>
        <Link className="btn" to="/cpa">For CPA Firms</Link>
        <Link className="btn" to="/law">For Law Firms</Link>
      </div>
    </section>
  );
}

function JGSContact(){
  return (
    <section className="container">
      <h1>Let’s get started</h1>
      <p>Secure, simple, reliable Microsoft 365 for your firm. Flat fees. Real support.</p>
      <button className="btn">Schedule a Call</button>
      <button className="btn">Get Support Now</button>
    </section>
  );
}

function App(){
  return (
    <Router>
      <JGSGlobalStyles/>
      <JGSNav/>
      <Routes>
        <Route path="/" element={<JGSHome/>}/>
        <Route path="/contact" element={<JGSContact/>}/>
      </Routes>
    </Router>
  );
}

const rootEl=document.getElementById("root")||(()=>{const el=document.createElement("div");el.id="root";document.body.appendChild(el);return el;})();
ReactDOM.createRoot(rootEl).render(<App/>);

// Smoke test for nav links
(function(){
  function waitFor(pred,timeout=3000){return new Promise(r=>{const t=Date.now();const i=setInterval(()=>{if(pred()||Date.now()-t>timeout){clearInterval(i);r();}},50);});}
  waitFor(()=>document.querySelectorAll("header nav a").length>=6).then(()=>{
    const navLinks=document.querySelectorAll("header nav a");
    console.assert(navLinks.length>=6,"Nav should have at least 6 links");
  });
})();
