import React, { Component, Fragment } from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Contact from "./ContactForm";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

import AboutMe from "./AboutMe";

class Main extends Component {
  state = {};
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutMe} />
          <Route path="/skills" component={Skills} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Fragment>
      </HashRouter>
    );
  }
}

export default Main;
