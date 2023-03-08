import { Grid, ThemeProvider, Typography } from "@mui/material";
import theme from "../theme";
import React from "react";
import SecheduleTable from "../components/scheduleTable";
import Footer from "../components/footer";

function SechdulePage() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{ justifyContent: "center", minHeight: "calc(94.5vh)" }}
      >
        <Grid item xs={11} sx={{ marginTop: "60px" }}>
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
