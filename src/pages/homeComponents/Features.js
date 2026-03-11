// import * as React from "react";
import React, { useState } from "react";
import PropTypes, { func } from "prop-types";
import Card from "@mui/material/Card";

import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Button, TextField, Box, Typography, CardContent } from "@mui/material";

export default function Features() {
  // State to store the text that should be displayed in the box
  const [displayText, setDisplayText] = useState("");

  // Handler function to update the text based on which button is clicked
  const handleButtonClick = (text) => {
    setDisplayText(text);
  };

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Select a Button to Display Text
        </Typography>

        {/* Buttons */}
        <Box sx={{ mb: 2 }}>
          <Button
            variant="contained"
            onClick={() => setDisplayText("Hello, World!")}
            sx={{ mr: 1 }}
          >
            Button A
          </Button>
          <Button
            variant="contained"
            onClick={() => setDisplayText("MUI is great!")}
            sx={{ mr: 1 }}
          >
            Button B
          </Button>
          <Button
            variant="contained"
            onClick={() => setDisplayText("React development is fun.")}
          >
            Button C
          </Button>
          {/* Text Box (TextField) */}
          <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {displayText}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
