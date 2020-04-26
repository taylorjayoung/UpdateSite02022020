import React, { Fragment, useState } from "react";
import emailjs from "emailjs-com";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
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
    display: "none"
  }
}));

export default function ContactForm() {
  const classes = useStyles();
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [projectRequest, setProjectRequest] = useState("");
  const [open, setOpen] = useState(false);
  const [errOpen, setErrOpen] = useState(false);
  const [vertical, setVertical] = useState("top");
  const [horizontal, setHorizontal] = useState("center");

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
      <div class="homeWrapper">
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
        <div id="contactme">
          <h1
            style={{
              position: "relative",
              left: "2vw",
              top: "2vw",
              fontFamily: "Oswald",
              color: "#03ff8e",
              fontSize: "60px",
            }}
          >
            Contact Me
          </h1>
          <form
            className="form-style-4"
            id="contactForm"
            autoComplete="off"
            onSubmit={handleSubmit}
            style={{ position: "relative", left: "2vw" }}
          >
            <input
              placeholder="Name"
              className="text-input"
              id="from_name"
              onChange={(e) => {
                setFromName(e.target.value);
              }}
              required
              value={fromName}
            />
            <br></br>

            <input
              placeholder="Email"
              className="text-input"
              id="from_email"
              onChange={(e) => {
                setFromEmail(e.target.value);
              }}
              required
              value={fromEmail}
            />
            <br></br>

            <textarea
              className="text-input"
              id="project_request"
              onChange={(e) => {
                setProjectRequest(e.target.value);
              }}
              required
              value={projectRequest}
              placeholder="I'm all ears!"
            />
            <br></br>
            <Button
              type="submit"
              className="btn btn--submit"
              id="submitButton"
              onSubmit={handleSubmit}
            >
              SEND
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
