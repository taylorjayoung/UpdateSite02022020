import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

const navbarBlack = "rgb(19, 19, 19)";
const traxGrey = "#262626";
export default createMuiTheme({
  palette: {
    common: {
      grey: `${traxGrey}`,
      gold: "#FFDF00",
      goldDark: "#eacc00",
    },
    primary: {
      main: `${navbarBlack}`,
    },
    secondary: {
      main: `#03ff8e`,
    },
    background: {
      paper: "#fff",
      default: "#b74347",
    },
  },
  typography: {
    tab: {
      fontFamily: "Roboto Condensed",
      fontWeight: "400",
      fontSize: "1.2rem",
      textTransform: "none",
    },
    estimate: {
      fontFamily: "Roboto Condensed",
      fontWeight: "400",
      fontSize: "1rem",
      color: "white",
    },
  },
});
