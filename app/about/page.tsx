/* ========= ABOUT (refined, minimal) ========= */
.page-about .about-card{
  text-align:left;
  padding:2.5rem 2.25rem 2.75rem;
  max-width:72ch;
  margin:0 auto 1.25rem auto;
  background:linear-gradient(180deg, rgba(14,14,14,.92), rgba(10,10,10,.88));
  border:1px solid rgba(255,255,255,.10);
  border-radius:1.1rem;
  box-shadow:0 10px 22px rgba(0,0,0,.32), inset 0 1px 0 rgba(255,255,255,.04);
}

.page-about .about-title{
  font-size:1.95rem;
  line-height:1.25;
  font-weight:800;
  margin-bottom:1.25rem;
  background:linear-gradient(90deg, rgba(255,255,255,.96), rgba(195,195,255,.90));
  -webkit-background-clip:text; -webkit-text-fill-color:transparent;
}

.page-about .about-text{
  font-size:1.08rem;
  line-height:1.72;
  opacity:.92;
  margin:1rem 0;
}

/* Slim credo card */
.page-about .about-credo{
  padding:1.6rem 1.8rem 1.9rem;
  max-width:72ch;
  margin:0 auto;
  background:linear-gradient(180deg, rgba(12,12,12,.9), rgba(9,9,9,.86));
  border:1px solid rgba(255,255,255,.08);
  border-radius:1rem;
  box-shadow:0 8px 18px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.035);
}

.page-about .credo-list{ margin-top:.35rem; }
.page-about .credo-list li{
  margin:.45rem 0;
  line-height:1.6;
  opacity:.95;
}

.page-about .credo-foot{
  margin-top:1rem;
  font-size:.97rem;
  opacity:.85;
  border-top:1px solid rgba(255,255,255,.08);
  padding-top:.85rem;
}

/* Responsive */
@media (max-width:900px){
  .page-about .about-card{ padding:1.9rem 1.4rem 2.2rem; }
  .page-about .about-title{ font-size:1.6rem; }
  .page-about .about-text{ font-size:1.02rem; }
  .page-about .about-credo{ padding:1.25rem 1.35rem 1.5rem; }
}
