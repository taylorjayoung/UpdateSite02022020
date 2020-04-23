import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Resume from "../assets/downloadable/Resume.docx";

class Home extends Component {
  state = {};

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
          <div className="homeDiv">
            <h1 id="myTitle">BOBBY BUFFALOBOY </h1>
            <h2 id="homeSubtitle">FULLSTACK DEVELOPER</h2>
            <div className="homeButtons">
              <Link
                to={`/contact`}
                activeClassName="active"
                style={{ textDecoration: "none" }}
              >
                <div id="contactButton">CONTACT ME</div>
              </Link>
              <a href={Resume} style={{ textDecoration: "none" }} download>
                <div id="resumeDL">DOWNLOAD RESUME (docx)</div>
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
