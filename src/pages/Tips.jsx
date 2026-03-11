import React from "react";

export default function Tips() {
  const tipLink = import.meta.env.VITE_TIP_LINK || "#";
  return (
    <div>
      <h1>Support / Tips</h1>
      <p>If you enjoy my work, a tip helps.</p>
      <p>
        <a href={tipLink} target="_blank" rel="noreferrer" className="button">
          Give a tip
        </a>
      </p>
      <p style={{ marginTop: 12 }}>
        Tip link is configurable via `VITE_TIP_LINK` (Payment Link / Stripe /
        PayPal).
      </p>
    </div>
  );
}
