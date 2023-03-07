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
  typography: {
    synxSectionH1: {
      paddingLeft: "1rem",
      color: "#949494",
      fontSize: "0.70rem",
      fontWeight: "500",
      fontFamily: "DM Sans",
    },
    synxBtnSection: {
      "&:hover": {
        color: "#A79EE5",
      },
      paddingLeft: "1rem",
      fontSize: "0.8rem",
      fontWeight: "500",
      fontFamily: "DM Sans",
    },
    imageIconsTypography: {
      "&:hover": {
        color: "#A79EE5",
      },
      paddingLeft: "1rem",
      fontSize: "0.8rem",
      fontWeight: "500",
      fontFamily: "DM Sans",
      lineHeight: "30px",
      display: "flex",
    },
    toolSectionH1: {
      paddingLeft: "1rem",
      color: "#949494",
      fontSize: "0.70rem",
      fontWeight: "500",
      fontFamily: "DM Sans",
    },
    toolBtnSection: {
      "&:hover": {
        color: "#A79EE5",
      },
      paddingLeft: "1rem",
      fontSize: "0.8rem",
      fontWeight: "500",
      fontFamily: "DM Sans",
    },
    generalSectionH1: {
      paddingLeft: "1rem",
      color: "#949494",
      fontSize: "0.70rem",
      fontWeight: "500",
      fontFamily: "DM Sans",
    },
    generalBtnSection: {
      "&:hover": {
        color: "#A79EE5",
      },
      paddingLeft: "1rem",
      fontSize: "0.8rem",
      fontWeight: "500",
      fontFamily: "DM Sans",
    },
  },
});

export default theme;
