import React from "react";
import AppBar from "@mui/material/AppBar";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "../theme";

function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{
          height: "40px",
          backgroundColor: "#F6F7F7",
          paddingRight: "40px",
          textAlign: "end",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2">API Version:1.0</Typography>
      </AppBar>
    </ThemeProvider>
  );
}

export default Footer;
