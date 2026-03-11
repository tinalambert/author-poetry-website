import CssBaseline from "@mui/material/CssBaseline";
import AppAppBar from "../components/AppAppBar";
import AppTheme from "../theme/AppTheme";
import PlaygroundParticles from "../components/PlaygroundParticles";
// import useSound from "use-sound";
// import relaxingMusic from "../music/The_Deepest_Ocean.mp3";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

export default function Playground(props) {
  //   const [play] = useSound(relaxingMusic);
  return (
    // <div style={{backgroundColor: "black", minHeight: "80vh"}}>
    <div>
      <CssBaseline enableColorScheme />
      <AppTheme {...props}>
        <AppAppBar />
        {/* <h1 style={{ color: "gray" }}>Ready for bed?</h1>
      <p style={{ color: "gray" }}>
        Shhhhh...drift off to sleep in this interactive stary night sky
      </p> */}
        {/* <SleepyParticles onClick={play} id="tsparticles"/> */}
        {/* <Button onClick={play} id="tsparticles"> */}
        <Container
          maxWidth="lg"
          component="main"
          sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
        >
          {<PlaygroundParticles />}
        </Container>
        {/* </Button> */};
        {/* <p style={{color: "darkGray"}}>
     Track: The Deepest Ocean
     Music by https://www.fiftysounds.com 
     </p> */}
      </AppTheme>
    </div>
  );
}
