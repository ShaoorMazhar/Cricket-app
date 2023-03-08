import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", //black
      light: "#1E1E25", //matblack
    },
    secondary: {
      main: "#F6F7F7", //side Bar Text
      light: "#6C5DD3", //light gray for side bar hover
    },
  },
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
