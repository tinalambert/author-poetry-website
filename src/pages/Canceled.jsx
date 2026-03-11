import React from "react";
import { Link } from "react-router-dom";

export default function Canceled() {
  return (
    <div>
      <h1>Payment Canceled</h1>
      <p>Your payment was canceled — you can retry or continue browsing.</p>
      <p>
        <Link to="/cart">Return to cart</Link> · <Link to="/">Home</Link>
      </p>
    </div>
  );
}
