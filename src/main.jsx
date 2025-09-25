import React from "react";
import ReactDOM from "react-dom/client";

function Smoke() {
  return (
    <div style={{padding: 32, fontSize: 24}}>
      ✅ React mounted (smoke test). If you see this, the issue is inside JGSPrimer.jsx.
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Smoke />);
