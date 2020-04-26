import React, { useState } from "react";
import emailjs from "emailjs-com";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import "../../App.css";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    [theme.breakpoints.down("sm")]: {
      paddingRight: "50px",
    },
  },
  snackbar: {
    backgroundColor: "transparent",
    color: theme.palette.secondary.main,
    border: "1px solid #03ff8e",
  },
  snackbarMessage: {
    fontFamily: "Roboto Condensed",
    fontSize: "1.2rem",
  },
  errSnackbar: {
    backgroundColor: "transparent",
    color: "red",
    border: "1px solid red",
  },
  nully: {
    display: "none",
  },
  pageTitleItem: {
    textAlign: "right",
  },
  pageTitle: {
    fontFamily: "Bowlby One SC",
    color: theme.palette.common.purple,
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#F5F5F5 ",
  },
  input: {
    color: "white",
    fontSize: "18px",
    "&::placeholder": {
      color: "white !important",
    },
  },
  root: {
    width: "100%",
    margin: "20px",
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderWidth: "1px",
      borderColor: "#f5f5f5",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderWidth: "1px",
      borderColor: "#9c01c7a4",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderWidth: "1px",
      borderColor: theme.palette.common.purple,
    },
  },
  button: {
    textAlign: "right",
  },
  divider: {
    backgroundColor: "#f5f5f5",
    margin: "1.1em",
    height: "3px",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
}));

export default function ContactForm(props) {
  const classes = useStyles();
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [projectRequest, setProjectRequest] = useState("");
  const [open, setOpen] = useState(false);
  const [errOpen, setErrOpen] = useState(false);
  const [vertical] = useState("top");
  const [horizontal] = useState("center");

  const handleClose = () => {
    setOpen(false);
    setErrOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let templateParams = {
      from_name: fromName,
      from_email: fromEmail,
      project_request: projectRequest,
    };

    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID;
    const userId = process.env.REACT_APP_EMAILJS_USERID;

    emailjs.send("gmail", templateId, templateParams, userId).then(
      (response) => {
        setOpen(true);
        setFromName("");
        setFromEmail("");
        setProjectRequest("");
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
  };

  return (
    <div className="page">
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
        open={open}
        onClose={handleClose}
      >
        {open === true && errOpen === false ? (
          <SnackbarContent
            className={classes.snackbar}
            message={
              <Typography className={classes.snackbarMessage}>
                Message sent successfully!
              </Typography>
            }
          ></SnackbarContent>
        ) : errOpen === true && open === false ? (
          <SnackbarContent
            className={classes.errSnackbar}
            message={
              <Typography className={classes.snackbarMessage}>
                Message Did Not Send!
              </Typography>
            }
          ></SnackbarContent>
        ) : (
          <SnackbarContent
            className={classes.nully}
            message={
              <Typography className={classes.snackbarMessage}>
                Something else happened
              </Typography>
            }
          ></SnackbarContent>
        )}
      </Snackbar>
      <Grid container direction="row" className={classes.mainContainer}>
        <Grid item xs={12}>
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12} className={classes.pageTitleItem}>
              <Typography variant="h2" className={classes.pageTitle}>
                Contact Me
              </Typography>
              <Divider className={classes.divider} />
            </Grid>
              
            <Grid item xs={12}>
              <form autoComplete="off" required onSubmit={handleSubmit}>
                <Grid container direction="row" justify="space-between">
                  <Grid item xs={5}>
                    <TextField
                      className={classes.root}
                      variant="outlined"
                      color="secondary"
                      errorText={"failed"}
                      InputProps={{
                        classes: {
                          input: classes.input,
                        },
                      }}
                      label="Name"
                      onChange={(e) => {
                        setFromName(e.target.value);
                      }}
                      required
                      value={fromName}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      className={classes.root}
                      variant="outlined"
                      color="secondary"
                      InputProps={{
                        classes: {
                          input: classes.input,
                        },
                      }}
                      label="Email"
                      onChange={(e) => {
                        setFromEmail(e.target.value);
                      }}
                      required
                      value={fromEmail}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className={classes.root}
                      id="textArea"
                      variant="outlined"
                      color="secondary"
                      InputProps={{
                        classes: {
                          input: classes.input,
                        },
                      }}
                      label="Please leave me a message"
                      onChange={(e) => {
                        setProjectRequest(e.target.value);
                      }}
                      required
                      value={projectRequest}
                      multiline
                      rows={10}
                      rowsMax={20}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.button}>
                    <Button variant="contained" color="secondary" type="submit">
                      SEND
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
