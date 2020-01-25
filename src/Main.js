import React, { Component, Fragment } from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Contact from "./ContactForm";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import github from "./Github.png";
import ig from "./instagram.png";
import linkedin from "./linkedin.png";
import AboutMe from "./AboutMe";


class Main extends Component {
  state = {};
  render() {
    return (
      <HashRouter>
        <Fragment>
          <div id="navBar">

            <h1 id="initialsNav">BB</h1>
            <div id="mainNavIcons">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.3vw"
                  height="2.3vw"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path
                    className="navlinks"
                    d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
                  />
                </svg>
              </Link>
              <Link to="about"><svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.3vw"
                height="2.3vw"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path
                  className="navlinks"
                  d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                />
              </svg></Link>
              <Link to="skills"><svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.3vw"
                height="2.3vw"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path
                  className="navlinks"
                  d="M6.21 13.97l1.2 2.07c.08.13.23.18.37.13l1.49-.6c.31.24.64.44 1.01.59l.22 1.59c.03.14.15.25.3.25h2.4c.15 0 .27-.11.3-.26l.22-1.59c.36-.15.7-.35 1.01-.59l1.49.6c.14.05.29 0 .37-.13l1.2-2.07c.08-.13.04-.29-.07-.39l-1.27-.99c.03-.19.04-.39.04-.58 0-.2-.02-.39-.04-.59l1.27-.99c.11-.09.15-.26.07-.39l-1.2-2.07c-.08-.13-.23-.18-.37-.13l-1.49.6c-.31-.24-.64-.44-1.01-.59l-.22-1.59c-.03-.14-.15-.25-.3-.25h-2.4c-.15 0-.27.11-.3.26l-.22 1.59c-.36.15-.71.34-1.01.58l-1.49-.6c-.14-.05-.29 0-.37.13l-1.2 2.07c-.08.13-.04.29.07.39l1.27.99c-.03.2-.05.39-.05.59 0 .2.02.39.04.59l-1.27.99c-.11.1-.14.26-.06.39zM12 10.29c.94 0 1.71.77 1.71 1.71s-.77 1.71-1.71 1.71-1.71-.77-1.71-1.71.77-1.71 1.71-1.71zM19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm0 16H5V5h14v14z"
                />
              </svg></Link>
              <Link to="portfolio"><svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.3vw"
                height="2.3vw"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path
                  className="navlinks"
                  d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
                />
              </svg></Link>
              <Link to="contact"><svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.3vw"
                height="2.3vw"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path
                  className="navlinks"
                  d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"
                />
              </svg></Link>
            </div>

            <div id="socialIcons">
              <a
                href="https://github.com/SlickJacket"
                style={{
                  zIndex: "100000000"
                }}
              >
                <img src={github} alt="github account" id="navSocialLinks" />
              </a>
              <a
                href="https://www.instagram.com/bobbybuffaloboy/"
                style={{
                  zIndex: "100000000"
                }}
              >
                <img src={ig} alt="instagram account" id="navSocialLinks" />
              </a>
              <a
                href="https://www.linkedin.com/in/bobby-buffaloboy-4ba4ba79/"
                style={{
                  zIndex: "100000000"
                }}
              >
                <img
                  src={linkedin}
                  alt="linkedin account"
                  id="navSocialLinks"
                />
              </a>
            </div>
          </div>
          
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
