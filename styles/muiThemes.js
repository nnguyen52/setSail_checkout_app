import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    red: {
      main: "rgb(235, 87, 87)",
    },
    white: {
      side: "#f9fafb",
    },
    blue: {
      main: "rgb(31, 41, 55)",
      side: "#535477",
      banner: "rgb(56,65,81)",
      checkoutFont: "rgb(75, 85, 99)",
    },
    green: {
      main: "#059669",
    },
    black: {
      modalBackground: "rgba(0,0,0, .5)",
    },
  },
});
export default theme;
