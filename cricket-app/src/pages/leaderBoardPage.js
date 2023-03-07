import React from "react";

import { Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../../src/theme";

function LeaderBoardPage() {
  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <Typography variant="synxBtnSection">TAMOOR</Typography>
      </Grid>
    </ThemeProvider>
  );
}

export default LeaderBoardPage;
