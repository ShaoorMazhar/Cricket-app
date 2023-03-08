import { Grid, ThemeProvider } from "@mui/material";
import theme from "../theme";
import React from "react";
import Footer from "../components/footer";
import ButtonAppBar from "../components/header";
import errorImage from "../assets/404.png";

function ErrorPage() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{ justifyContent: "center", minHeight: "calc(94.5vh)" }}
      >
        <ButtonAppBar />
        <Grid container item xs={12} sx={{ justifyContent: "center" }}>
          <Grid item xs={8} sx={{ display: "flex", justifyContent: "center" }}>
            <img src={errorImage} alt="404" />
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}

export default ErrorPage;
