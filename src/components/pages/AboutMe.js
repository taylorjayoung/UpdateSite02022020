import React, { Fragment, useState, useEffect } from "react";
import profilePhoto from "../assets/media/profile.png";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "../../App.css";

const useStyles = makeStyles((theme) => ({
  profilePhoto: {
    width: "100%"
  },
  paragraphs: {
    fontFamily: "Roboto Condensed",
    color: "white",
    fontWeight: "400",
    fontSize: "1.2rem",
  },
  quote: {
    textAlign: "center",
    color: "white",
  },
  author: {
    textAlign: "right",
  },
  divider: {
    backgroundColor: "white",
    margin: "1.1em",
  },
}));

export default function AboutMe(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [containerDirection, setContainerDirection] = useState("row");
  const [containerWrap, setContainerWrap] = useState("wrap");
  const [containerJustify, setContainerJustify] = useState("space-evenly")
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (matches) {
      setContainerDirection("column-reverse");
      setContainerWrap("nowrap");
      setContainerJustify("center")
    } else {
      setContainerDirection("row");
      setContainerWrap("wrap");
      setContainerJustify("space-evenly")
    }
  });

  return (
    <Grid
      container
      justify={containerJustify}
      alignItems="center"
      direction={containerDirection}
      wrap={containerWrap}
    >
      <Grid item xs={12} lg={5}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={11}>
            <Grid container direction="column" spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h3" className={classes.quote}>
                  “I am, above all, what excites me.”
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  color="secondary"
                  className={classes.author}
                >
                  -Sylvan Tompkins
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid item xs={11}>
          <Typography className={classes.paragraphs}>
            What makes this quote so powerful, is the force of connection I have
            to it. If I find something interesting, I will immediately form an
            obsession, then, that obsession grows exponentially. Whether that be
            learning how to brew my own moonshine, to performing in a metal
            band, designing and hand carving rings, learning the entire adobe
            suite, to becoming a Fullstack developer.
          </Typography>
          <Typography className={classes.paragraphs}>
            Yes, you can focus all your life on one thing, but I believe it's
            the accumulation of several fields of study that grants one the
            skill to see what others do not. Also, I believe it’s just a much
            more fulfilling life. You only live once, so have fun, make the best
            out of it and most importantly, Make It Count!.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={7} sm={5} lg={5}>
        <img
          src={profilePhoto}
          alt="Bobby BuffaloBoy"
          className={classes.profilePhoto}
        />
      </Grid>
    </Grid>
  );
}
