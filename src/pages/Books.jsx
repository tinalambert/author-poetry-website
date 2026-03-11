import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import AppAppBar from "../components/AppAppBar";
import AppTheme from "../theme/AppTheme";
import ProductCard2 from "../components/ProductCard2";
import { Grid, Box, Stack, Container } from "@mui/material";

export default function Books(props) {
  return (
    <AppTheme {...props}>
      <AppAppBar />

      <h1>Books & Offerings</h1>

      <Box
        sx={{
          // flexBasis: "calc(33% - 16px)",
          flexGrow: 1,
          padding: 2,
          width: "100%",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            // alignItems: "center",
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          {/* <Stack
          direction="row"
          spacing={2}
          useFlexGap
          sx={{ pt: 2, width: { xs: "100%", sm: "350px" } }}
        > */}
          {/* <div>
          <h1>Books & Offerings</h1>
          <div className="grid" style={{ marginTop: 16 }}>
            {products.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div> */}
          <Grid
            container
            spacing={2}
            columns={12}
            sx={{
              marginBottom: 4,
              padding: 2,
              borderRadius: 2,
              boxShadow:
                "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
              ...(theme) =>
                theme.applyStyles("dark", {
                  boxShadow:
                    "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
                }),
            }}
          >
            {products.map((p) => (
              <Grid item size={{ xs: 12, md: 4 }} key={p.id}>
                <ProductCard2 key={p.id} p={p} />
              </Grid>
            ))}
          </Grid>
          {/* </div> */}
          {/* </Stack> */}
        </Container>
      </Box>
    </AppTheme>
  );
}
