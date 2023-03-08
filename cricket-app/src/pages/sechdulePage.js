import { Grid, ThemeProvider, Typography } from "@mui/material";
import theme from "../theme";
import React from "react";
import SecheduleTable from "../components/scheduleTable";
import Footer from "../components/footer";
import ButtonAppBar from "../components/header";

function SechdulePage() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{ justifyContent: "center", minHeight: "calc(94.5vh)" }}
      >
        <ButtonAppBar />
        <Grid item xs={11}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h1" sx={{ marginBottom: "20px" }}>
              League Scehdule
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <SecheduleTable />
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}

export default SechdulePage;
