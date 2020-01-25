import React, { Component, Fragment } from "react";
import AboutMe from "./AboutMe.js";
import { Link } from "react-router-dom";
import backgroundpic from "./america-american-flag-architecture-bridge-450597.jpg";
import Resume from './Resume.docx'

class Home extends Component {
  state = {
    time: ""
  };

  componentDidMount() {
    let d = new Date();
    this.setState({
      time: d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
    });
  }
  render() {
    return (
      <Fragment>
        <div id="homeDiv">
          <h1 id="myTitle" style={{ fontSize: "15vw" }}>
            BOBBY BUFFALOBOY{" "}
          </h1>
          <h2 id="homeSubtitle" style={{fontSize: "2vw", color: "#fffafa"}}>FULLSTACK DEVELOPER</h2>
        </div>
        <img src={backgroundpic} id="backgroundpic" />
        <Link
          to={`/contact`}
          activeClassName="active"
          style={{ textDecoration: "none" }}
        >
          <div id="contactButton">CONTACT ME</div>
        </Link>
        <br></br>
        <a href={Resume} style={{textDecoration: "none"}} download>
          <div id="resumeDL">DOWNLOAD RESUME (docx)</div>
        </a>
      </Fragment>
    );
  }
}

export default Home;
