import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Grid, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EventIcon from "@mui/icons-material/Event";
import FaviIcon from "../assets/favicon.ico";

export default function ButtonAppBar() {
  return (
    <AppBar position="static " sx={{ height: "60px" }}>
      <Toolbar>
        <Grid container>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Grid
              item
              xs={3}
              md={2}
              lg={1.8}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "110px",
                marginLeft: "0.8rem",
              }}
            >
              <img
                src={FaviIcon}
                alt="faviIcon"
                style={{
                  height: "50px",
                  width: "50px",
                  display: "inline-flex",
                  paddingRight: "0.5rem",
                }}
              />
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ fontWeight: "700" }}>League</Typography>
                <Typography sx={{ fontWeight: "700" }}>Web UI</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* second part */}
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Grid item xs={6} md={3} lg={2}>
              <Typography sx={{ display: "flex" }}>
                <EventIcon
                  sx={{
                    display: "inline-flex",
                    verticalAlign: "middle",
                    height: "25px",
                    width: "25px",
                    marginRight: "0.3rem",
                  }}
                />
                <a
                  href="url"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  Schedule
                </a>
              </Typography>
            </Grid>
            <Grid item xs={6} md={3} lg={2.2}>
              <Typography sx={{ display: "flex" }}>
                <EmojiEventsIcon
                  sx={{
                    display: "inline-flex",
                    verticalAlign: "middle",
                    height: "25px",
                    width: "25px",
                    marginRight: "0.3rem",
                  }}
                />
                <a
                  href="url"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  LeaderBoard
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
