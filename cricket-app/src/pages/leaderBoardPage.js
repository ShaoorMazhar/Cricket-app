import React from "react";
import LeaderBoardTable from "../components/leaderboardTable";
import { Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "../components/footer";
import theme from "../../src/theme";
import ButtonAppBar from "../components/header";

function LeaderBoardPage() {
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
              League Standings
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <LeaderBoardTable />
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}

export default LeaderBoardPage;
