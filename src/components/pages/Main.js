import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "../../App.css";
import Contact from "./ContactForm";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

import AboutMe from "./AboutMe";

class Main extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Fragment>
          <Route
            exact
            path={"/"}
            render={(routerProps) => <Home {...routerProps} />}
          />
          <Route
            exact
            path={"/about"}
            render={(routerProps) => <AboutMe {...routerProps} />}
          />
          <Route
            exact
            path={"/skills"}
            render={(routerProps) => <Skills {...routerProps} />}
          />
          <Route
            exact
            path={"/portfolio"}
            render={(routerProps) => <Portfolio {...routerProps} />}
          />
          <Route
            exact
            path={"/contact"}
            render={(routerProps) => <Contact {...routerProps} />}
          />
        </Fragment>
      </Switch>
    );
  }
}

export default Main;
