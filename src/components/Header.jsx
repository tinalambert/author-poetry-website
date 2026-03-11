import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function Header() {
  const { cart } = useCart();
  const count = cart.reduce((s, i) => s + i.qty, 0);
  return (
    <header className="header">
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Link to="/" className="link" style={{ fontWeight: 700, fontSize: 18 }}>
          Author Store
        </Link>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link to="/books" className="link">
            Books
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/tips" className="link">
            Tips
          </Link>
          <Link to="/admin" className="link">
            Admin
          </Link>
          <Link to="/marketing" className="link">
            Marketing
          </Link>
        </nav>
      </div>
      <div>
        <Link to="/cart" className="link">
          Cart ({count})
        </Link>
      </div>
    </header>
  );
}
