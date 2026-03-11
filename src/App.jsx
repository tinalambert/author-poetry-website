import React from "react";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Product from "./pages/Product";
import About from "./pages/About";
import Tips from "./pages/Tips";
import CartPage from "./pages/CartPage";
import Success from "./pages/Success";
import Canceled from "./pages/Canceled";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import AppAppBar from "./components/AppAppBar";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import Playground from "./pages/Playground";

export default function App() {
  return (
    <div>
      {/* <Header /> */}
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/poetry" element={<Books />} />
          <Route path="/blog" element={<Blog />} />
          {/* Temporary routes for poetry and blog until those pages are built */}

          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/success" element={<Success />} />
          <Route path="/canceled" element={<Canceled />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/signup" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </div>
    </div>
  );
}
