import React from "react";
import { Switch, Route } from "react-router-dom";
import "../../App.css";
import Contact from "./ContactForm";
import Home from "./Home";
import Portfolio from "./portfolio/Portfolio";
import Skills from "./Skills";
import { makeStyles } from "@material-ui/styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../App.css";
import Grid from "@material-ui/core/Grid";

import AboutMe from "./AboutMe";

const permDrawerWidth = 70;

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: `calc(100% - ${permDrawerWidth}px)`,
    marginLeft: `${permDrawerWidth}px`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0,
    },
  },
}));

export default function Main() {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={450} classNames="fade">
            <Switch location={location}>
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
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
    </Grid>
  );
}
