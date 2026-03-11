import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Success() {
  const query = useQuery();
  const sessionId = query.get("session_id");
  const { clearCart } = useCart();
  const [loading, setLoading] = useState(Boolean(sessionId));
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    clearCart();
  }, []);

  useEffect(() => {
    if (!sessionId) return;
    setLoading(true);
    fetch(
      (import.meta.env.VITE_CHECKOUT_SERVER || "http://localhost:4242") +
        `/session/${sessionId}`,
    )
      .then((r) => r.json())
      .then((data) => {
        setSession(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [sessionId]);

  return (
    <div>
      <h1>Thank you — Payment received</h1>
      {!sessionId && <p>No session id provided.</p>}
      {loading && <p>Loading order details…</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {session && (
        <div>
          <p>
            <strong>Order:</strong> {session.id}
          </p>
          <p>
            <strong>Amount:</strong> ${(session.amount_total / 100).toFixed(2)}{" "}
            {session.currency}
          </p>
          {session.customer_details?.email && (
            <p>
              <strong>Email:</strong> {session.customer_details.email}
            </p>
          )}
          <h3>Items</h3>
          <ul>
            {(session.line_items?.data || []).map((li) => (
              <li key={li.id}>
                {li.description} — {li.quantity} × $
                {(li.price?.unit_amount || li.amount_subtotal) / 100}
              </li>
            ))}
          </ul>
        </div>
      )}
      <p style={{ marginTop: 16 }}>
        <Link to="/">Return home</Link>
      </p>
    </div>
  );
}
