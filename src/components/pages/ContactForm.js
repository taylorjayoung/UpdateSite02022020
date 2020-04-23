import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

class ContactForm extends Component {
  state = {
    from_name: "",
    from_email: "",
    project_request: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    let templateParams = {
      from_name: this.state.from_name,
      from_email: this.state.from_email,
      project_request: this.state.project_request
    };

    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID;
    const userId = process.env.REACT_APP_EMAILJS_USERID;

    emailjs.send("gmail", templateId, templateParams, userId).then(
      response => {
        this.setState({ from_email: "", from_name: "", project_request: "" });
        alert("Message Sent!");
        console.log("SUCCESS!", response.status, response.text);
      },
      err => {
        alert("Something Went Wrong 😭");
        console.log("FAILED...", err);
      }
    );
  };

  handleMenuDrop = e => {
    e.preventDefault();

    let menu = document.getElementById("mobile-flex-nav");
    let hammy = document.getElementById("hamburger");

    if (menu.style.display === "flex") {
      menu.style.display = "none";
      hammy.style.color = "#fffafa";
    } else {
      menu.style.display = "flex";
      hammy.style.color = "#fffafa46";
    }
  };

  render() {
    return (
      <Fragment>
        <div class="homeWrapper">
          
          <div id="contactme">
            <h1
              style={{
                position: "relative",
                left: "2vw",
                top: "2vw",
                fontFamily: "Oswald",
                color: "#03ff8e",
                fontSize: "60px"
              }}
            >
              Contact Me
            </h1>
            <form
              className="form-style-4"
              id="contactForm"
              autoComplete="off"
              onSubmit={this.handleSubmit}
              style={{ position: "relative", left: "2vw" }}
            >
              <input
                placeholder="Name"
                className="text-input"
                id="from_name"
                name="from_name"
                onChange={this.handleChange}
                required
                value={this.state.from_name}
              />
              <br></br>

              <input
                placeholder="Email"
                className="text-input"
                id="from_email"
                name="from_email"
                onChange={this.handleChange}
                required
                value={this.state.from_email}
              />
              <br></br>

              <textarea
                className="text-input"
                id="project_request"
                name="project_request"
                onChange={this.handleChange}
                required
                value={this.state.project_request}
                placeholder="I'm all ears!"
              />
              <br></br>
              <input
                type="submit"
                value="SEND"
                className="btn btn--submit"
                id="submitButton"
              />
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ContactForm;
