import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.main,
    padding: "20px",
  },
  logoPaper: {
    backgroundColor: "#D8D8D8",
    padding: "10px",
  },
  logo: {
    width: "100%",
  },
  title: {
    color: theme.palette.secondary.main,
  },
  divider: {
    backgroundColor: "white",
    margin: "10px"
  },
  description: {
    color: "white",
  },
}));

export default function Item(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container justify="space-between">
        <Grid item xs={6}>
          <Grid container justify="space-between">
            <Grid item xs={3}>
              <Paper elevation={3} className={classes.logoPaper}>
                <img
                  src={props.item.logo}
                  className={classes.logo}
                  alt="logo"
                />
              </Paper>
              <Button className="CheckButton" style={{ color: "white" }}>
                Check it out!
              </Button>
            </Grid>
            <Grid item xs={8}>
              <Grid container direction="column">
                <Grid item xs={12}>
                  <Typography variant="h4" className={classes.title}>
                    {props.item.title}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Divider className={classes.divider}/>
                </Grid>
                <Grid item xs={12}>
                  {props.item.description.map((des) => (
                    <Typography className={classes.description}>
                      -{des}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          {/* <h2 style={{color: "white"}}>{props.item.name}</h2> */}
          <img src={props.item.gif} alt="gif" />
        </Grid>
      </Grid>
    </Paper>
  );
}
