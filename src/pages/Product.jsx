import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../contexts/CartContext";

export default function Product() {
  const { id } = useParams();
  const p = products.find((x) => x.id === id);
  const { addToCart } = useCart();
  if (!p) return <div>Product not found</div>;
  return (
    <div>
      <h1>{p.title}</h1>
      <p style={{ color: "#666" }}>${p.price.toFixed(2)}</p>
      <p>{p.description}</p>
      <button className="button" onClick={() => addToCart(p)}>
        Add to cart
      </button>
    </div>
  );
}
