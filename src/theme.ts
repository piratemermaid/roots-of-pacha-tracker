import { createTheme } from "@mui/material";

const theme = createTheme({
  spacing: 8,

  palette: {
    mode: "light",
    primary: {
      main: "#7dc599",
    },
    secondary: {
      main: "#b98a61",
    },
  },

  typography: {
    h1: { fontSize: "30px", color: "#7dc599" },
    h2: {
      fontSize: "20px",
      fontWeight: 500,
      textTransform: "uppercase",
      fontFamily: "Garamond",
      color: "#b98a61",
    },
  },
});

export default theme;
