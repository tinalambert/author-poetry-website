import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppTheme from "../theme/AppTheme";
import AppAppBar from "../components/AppAppBar";
// import Hero from "./homeComponents/Hero";
import Hero from "./homeComponents/HeroHome";
import LogoCollection from "./homeComponents/LogoCollection";
import Highlights from "./homeComponents/Highlights";
import Pricing from "./homeComponents/Pricing";
import Features from "./homeComponents/Features";
import Testimonials from "./homeComponents/Testimonials";
import FAQ from "./homeComponents/FAQ";
import Footer from "./homeComponents/Footer";
import ProductCategories from "./homeComponents/ProductCategories";

export default function MarketingPage(props) {
  return (
    <>
      <AppTheme {...props}>
        <CssBaseline enableColorScheme />
        <AppAppBar />
        <Hero />
        <div>
          {/* <LogoCollection /> */}
          <Features />
          <Divider />
          <ProductCategories />
          <Divider />
          {/* <Testimonials />
          <Divider /> */}
          <Highlights />
          <Divider />
          {/* <Pricing /> */}
          <Divider />
          <FAQ />
          <Divider />
          <Footer />
        </div>
      </AppTheme>
    </>
  );
}
