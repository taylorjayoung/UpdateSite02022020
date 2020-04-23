import React, { Component, Fragment } from "react";
import "./App.css";
import Main from "./Main.js";
import Header from "./components/header/Header";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./Theme";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <Fragment>
        <Header/>
        <Main />
      </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
