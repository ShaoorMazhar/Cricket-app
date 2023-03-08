import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", //black
      light: "#1E1E25", //matblack
    },
    secondary: {
      main: "#949494", //side Bar Text
      light: "#6C5DD3", //light gray for side bar hover
    },
  },
  typography: {},
});

export default theme;
