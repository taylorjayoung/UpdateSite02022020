import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Resume from "../assets/downloadable/Resume.docx";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  buttons: {
    color: "#c803ff",
    fontFamily: "Oswald",
    width: "10em",
    fontSize: "1.2rem",
    "&:hover": {
      color: "rgb(22, 22, 22)",
      background: "#c803ff"
    }
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={11}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={10}>
              <h1 id="myTitle">BOBBY BUFFALOBOY </h1>
            </Grid>
            <Grid item xs={11}>
              <h2 id="homeSubtitle">FULLSTACK DEVELOPER</h2>
            </Grid>
            <Grid item xs={12}>
              <Grid container direction="column">
                <Grid item xs={5}>
                  <Link
                    to={`/contact`}
                    activeClassName="active"
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="outlined" className={classes.buttons}>
                      CONTACT ME
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={5}>
                  <a href={Resume} style={{ textDecoration: "none" }} download>
                    <Button variant="outlined" className={classes.buttons}>
                      Resume
                    </Button>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
