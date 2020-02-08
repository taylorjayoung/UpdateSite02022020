import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Contact from "./ContactForm";
import Home from "./Home";
import Portfolio from "./Portfolio";
import profilePhoto from "./profile.png";
import github from "./Github.png";
import ig from "./instagram.png";
import linkedin from "./linkedin.png";

class Main extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div id="navBar">
            <Link to="/">
              <h1 id="name">BOBBY BUFFALOBOY</h1>
            </Link>

            <Link to="/" className="navLinks">
              Home.js
            </Link>
            <Link to="/portfolio" className="navLinks">
              Portfolio.js
            </Link>
            <Link to="/contact" className="navLinks">
              Contact.js
            </Link>

            <a
              href="https://github.com/SlickJacket"
              style={{
                position: "absolute",
                left: "85vw",
                top: "4vw",
                zIndex: "100000000"
              }}
            >
              <img src={github} alt="github account" id="navSocialLinks" />
            </a>
            <a
              href="https://www.instagram.com/bobbybuffaloboy/"
              style={{
                position: "absolute",
                left: "88.5vw",
                top: "4vw",
                zIndex: "100000000"
              }}
            >
              <img src={ig} alt="instagram account" id="navSocialLinks" />
            </a>
            <a
              href="https://www.linkedin.com/in/bobby-buffaloboy-4ba4ba79/"
              style={{
                position: "absolute",
                left: "92vw",
                top: "4vw",
                zIndex: "100000000"
              }}
            >
              <img src={linkedin} alt="linkedin account" id="navSocialLinks" />
            </a>

            <Link to="/">
              <span id="profileBorder"></span>
            </Link>
            <img src={profilePhoto} alt="Bobby BuffaloBoy" id="profilePhoto" />
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Main;
