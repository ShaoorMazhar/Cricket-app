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

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function LeaderBoardTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Team Name</StyledTableCell>
            <StyledTableCell align="right">MP</StyledTableCell>
            <StyledTableCell align="right">GP</StyledTableCell>
            <StyledTableCell align="right">GA</StyledTableCell>
            <StyledTableCell align="right">Points</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
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
                    Serbia
                  </Box>
                </Grid>
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell
                align="right"
                sx={{
                  color: "#025FEB !important",
                  fontWeight: "bold",
                  paddingRight: "2rem",
                }}
              >
                {row.protein}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
