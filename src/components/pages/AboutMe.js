import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import profilePhoto from "../assets/media/profile.png";

class AboutMe extends Component {
  state = {};

  handleMenuDrop = (e) => {
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
        <div class="homeWrapper aboutWrapper">
          <div id="aboutMeDiv">
            <img src={profilePhoto} alt="Bobby BuffaloBoy" id="profilePhoto" />
            <div id="aboutMeContent">
              <div className="quoteContent">
                <h2 id="quote">“I am, above all, what excites me.”</h2>
                <h1 id="nameOfQuote">-Sylvan Tompkins</h1>
              </div>
              <p id="aboutMyContent">
                What makes this quote so powerful, is the force of connection I
                have to it. If I find something interesting, I will immediately
                form an obsession, then, that obsession grows exponentially.
                Whether that be learning how to brew my own moonshine, to
                performing in a metal band, designing and hand carving rings,
                learning the entire adobe suite, to becoming a Fullstack
                developer.
              </p>
              <p id="aboutMyContent">
                Yes, you can focus all your life on one thing, but I believe
                it's the accumulation of several fields of study that grants one
                the skill to see what others do not. Also, I believe it’s just a
                much more fulfilling life. You only live once, so have fun and
                make the best out of it.
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AboutMe;
