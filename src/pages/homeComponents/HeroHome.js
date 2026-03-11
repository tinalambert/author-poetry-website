// import Button from "../components/Button";
// import Typography from "../components/Typography";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HeroHomeLayout from "./HeroHomeLayout";
import headerImg from "../../images/typewriterHeader.jpg";

export default function Hero() {
  return (
    <HeroHomeLayout
      sxBackground={{
        // backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
        backgroundImage: `url(${headerImg})`,
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={headerImg}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Custom Typewriter Poems
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="body1"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Typewriter poems for love, loss, legacy, or whatever your heart needs.
        Please tell me, in as much detail as possible, what your poem should be
        about. It can be as simple as your current mood or as complex as a
        far-fetched fairy tale. I’ll whip up your one-of-a-kind poem on my
        vintage typewriter and mail it to you.🥰
      </Typography>
      <Button
        color="primary"
        variant="contained"
        size="large"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Order Now
      </Button>
      {/* <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography> */}
    </HeroHomeLayout>
  );
}
