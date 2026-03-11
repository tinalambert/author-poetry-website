import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const total = cart.reduce((s, i) => s + i.qty * i.price, 0);
  const handleCheckout = async () => {
    if (cart.length === 0) return alert("Your cart is empty.");
    setLoading(true);
    try {
      const server =
        import.meta.env.VITE_CHECKOUT_SERVER || "http://localhost:4242";
      const res = await fetch(`${server}/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.map(({ id, title, price, qty, description }) => ({
            id,
            title,
            price,
            qty,
            description,
          })),
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location = data.url;
        return;
      }
      throw new Error(data.error || "No checkout URL returned");
    } catch (err) {
      alert("Checkout error: " + err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 8,
                borderBottom: "1px solid #eee",
              }}
            >
              <div>
                <strong>{item.title}</strong>
                <div style={{ color: "#666" }}>
                  {item.qty} × ${item.price.toFixed(2)}
                </div>
              </div>
              <div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{ marginRight: 8 }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 12 }}>
            <strong>Total: ${total.toFixed(2)}</strong>
          </div>
          <div style={{ marginTop: 12 }}>
            <button
              className="button"
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? "Redirecting..." : "Checkout"}
            </button>
            <button style={{ marginLeft: 8 }} onClick={clearCart}>
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
