import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    h1: {
      fontSize: "1.5rem",
      fontFamily: "Open Sans, sans-serif",
      fontWeight: "bold",
      color: "#182C62",
    },
    h2: {
      fontSize: "16px",
      fontWeight: "bold",
      fontFamily: "Open Sans, sans-serif",
      color: "#4B5C68",
    },
  },
});

export default theme;
