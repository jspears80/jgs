import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";            // keep if you have Tailwind or global styles
import JGSPrimer from "./JGSPrimer.jsx"; // your main component

// Optional: catch runtime errors that would otherwise look like a blank page
window.addEventListener("error", (e) => console.error("Window error:", e.error || e.message));
window.addEventListener("unhandledrejection", (e) => console.error("Unhandled promise:", e.reason));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JGSPrimer />
  </React.StrictMode>
);
