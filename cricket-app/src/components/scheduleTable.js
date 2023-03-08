import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { tableRowClasses } from "@mui/material/TableRow";
import { Box, Grid } from "@mui/material";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.root}`]: {
    height: "40px",
    paddingTop: 0,
    paddingBottom: 0,
  },
  [`&.${tableCellClasses.head}`]: {
    fontSize: "12px",
    backgroundColor: "#E4EDF2",
    color: "#4B5C68",
    fontWeight: "bolder",
    fontFamily: "Open Sans, sans-serif",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "14px",
    color: "#4B5C68",
    fontFamily: "Open Sans, sans-serif",
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  [`&.${tableRowClasses.root}`]: {
    height: "70px",
    fontFamily: "Open Sans, sans-serif",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#F6F7F7",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [
  {
    matchDate: 1651744228685,
    stadium: "Maracanã",
    homeTeam: "Brazil",
    awayTeam: "Serbia",
    matchPlayed: true,
    homeTeamScore: 2,
    awayTeamScore: 1,
  },
  {
    matchDate: 1651744228685,
    stadium: "Maracanã",
    homeTeam: "Brazil",
    awayTeam: "Serbia",
    matchPlayed: true,
    homeTeamScore: 2,
    awayTeamScore: 1,
  },
  {
    matchDate: 1651744228685,
    stadium: "Maracanã",
    homeTeam: "Serbia",
    awayTeam: "Brazil",
    matchPlayed: true,
    homeTeamScore: 2,
    awayTeamScore: 1,
  },
  {
    matchDate: 1651744228685,
    stadium: "Maracanã",
    homeTeam: "Serbia",
    awayTeam: "Brazil",
    matchPlayed: true,
    homeTeamScore: 2,
    awayTeamScore: 1,
  },
  {
    matchDate: 1651744228685,
    stadium: "Stade de Suisse",
    homeTeam: "Switzerland",
    awayTeam: "Serbia",
    matchPlayed: true,
    homeTeamScore: 1,
    awayTeamScore: 2,
  },
  {
    matchDate: 1651744228685,
    stadium: "Stadion Rajko Mitic",
    homeTeam: "Serbia",
    awayTeam: "Cameroon",
    matchPlayed: true,
    homeTeamScore: 2,
    awayTeamScore: 1,
  },
  {
    matchDate: 1651744228685,
    stadium: "Maracanã",
    homeTeam: "Brazil",
    awayTeam: "Switzerland",
    matchPlayed: true,
    homeTeamScore: 2,
    awayTeamScore: 1,
  },
  {
    matchDate: 1651744228685,
    stadium: "Maracanã",
    homeTeam: "Brazil",
    awayTeam: "Cameroon",
    matchPlayed: true,
    homeTeamScore: 2,
    awayTeamScore: 1,
  },
  {
    matchDate: 1651744228685,
    stadium: "Stade de Suisse",
    homeTeam: "Switzerland",
    awayTeam: "Cameroon",
    matchPlayed: true,
    homeTeamScore: 2,
    awayTeamScore: 2,
  },
];
export default function SecheduleTable() {
  return (
    <TableContainer component={Paper} sx={{ height: "463px" }}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell
              sx={{
                display: { xs: "none", md: "revert" },
              }}
            >
              Date/Time
            </StyledTableCell>

            <StyledTableCell
              sx={{
                display: { xs: "none", lg: "revert" },
              }}
              align="left"
            >
              Stadium
            </StyledTableCell>

            <StyledTableCell align="center">Home Team</StyledTableCell>
            <StyledTableCell align="left">Away Team</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row?.name}>
              <StyledTableCell
                component="th"
                scope="row"
                sx={{
                  display: { xs: "none", md: "revert" },
                }}
              >
                <Box component="div">
                  {new Date(row?.matchDate).toLocaleDateString()}
                </Box>
                <Box component="div" sx={{ marginLeft: "1.5rem" }}>
                  {new Date(row?.matchDate)
                    .toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                    .replace("AM", "")
                    .replace("PM", "")}
                </Box>
              </StyledTableCell>

              <StyledTableCell
                align="left"
                sx={{
                  display: { xs: "none", lg: "revert" },
                }}
              >
                {row?.stadium}
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ width: "230px" }}>
                <Grid
                  container
                  sx={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Box
                    component="div"
                    sx={{
                      fontSize: "16px !important",
                      fontWeight: "bolder",
                      marginRight: "1rem",
                      width: "100px",
                    }}
                  >
                    {row?.homeTeam}
                  </Box>
                  <Box component="div" sx={{ marginRight: "2rem" }}>
                    <img
                      style={{ width: "53px", height: "37px" }}
                      src="https://wallpapercave.com/wp/wp2866657.jpg"
                      alt="flag"
                    />
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      fontSize: "16px !important",
                      fontWeight: "bolder",
                    }}
                  >
                    {row?.homeTeamScore}:{row?.awayTeamScore}
                  </Box>
                </Grid>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Grid container sx={{ alignItems: "center" }}>
                  <Box component="div" sx={{ marginRight: "1rem" }}>
                    <img
                      style={{ width: "53px", height: "37px" }}
                      src="https://wallpapercave.com/wp/wp2866657.jpg"
                      alt="flag"
                    />
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      fontSize: "16px !important",
                      fontWeight: "bolder",
                    }}
                  >
                    {row?.awayTeam}
                  </Box>
                </Grid>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
