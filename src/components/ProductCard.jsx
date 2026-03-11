import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function ProductCard({ p }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  return (
    <div className="card">
      <h3>{p.title}</h3>
      <p style={{ color: "#666" }}>${p.price.toFixed(2)}</p>
      <p style={{ minHeight: 40 }}>{p.description}</p>
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <button className="button" onClick={() => addToCart(p)}>
          Add to cart
        </button>
        <button
          onClick={() => navigate(`/product/${p.id}`)}
          style={{ padding: "8px 12px" }}
        >
          View
        </button>
      </div>
    </div>
  );
}
