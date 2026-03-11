import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppTheme from "../theme/AppTheme";
import AppAppBar from "../components/AppAppBar";
import Hero from "./homeComponents/Hero";
import LogoCollection from "./homeComponents/LogoCollection";
import Highlights from "./homeComponents/Highlights";
import Pricing from "./homeComponents/Pricing";
import Features from "./homeComponents/Features";
import Testimonials from "./homeComponents/Testimonials";
import FAQ from "./homeComponents/FAQ";
import Footer from "./homeComponents/Footer";

export default function MarketingPage(props) {
  return (
    <>
      <h1>Welcome — Author Store</h1>
      <AppTheme {...props}>
        <CssBaseline enableColorScheme />
        <AppAppBar />
        <Hero />
        <div>
          <LogoCollection />
          <Features />
          <Divider />
          <Testimonials />
          <Divider />
          <Highlights />
          <Divider />
          <Pricing />
          <Divider />
          <FAQ />
          <Divider />
          <Footer />
        </div>
      </AppTheme>
    </>
  );
}
