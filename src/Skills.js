import React, { Component, Fragment } from "react";
import "./Skills.css";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <div className="skillsFlexContainer">
          <div className="skillsAbout">
            <h1
              className="skillsPageTitle"
              style={{
                color: "#03ff8e",
                fontFamily: "Oswald",
                fontSize: "6vw"
              }}
            >
              Skills
            </h1>
            <p style={{ color: "#fffafa", fontFamily: "Oswald", fontSize: "1.5vw" }}>
              Trained and practice both Front and Back End, I can take a project
              from concept to deployment. Always eager to learn new
              technologies, and never miss a chance to read up on all of the
              latest trends. Focusing on honing more Javascript at the moment
              due to it's powerful and versatile nature.
            </p>
          </div>
          <ul className="skills">
            <li>ReactJs</li>
            <li> Redux</li>
            <li>Javascript</li>
            <li>NodeJS</li>
            <li>Ruby</li>
            <li>AWS S3</li>
            <li>SQLite</li>
            <li>PostgreSQL</li>
            <li>Rails</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Git</li>
            <li>JSON</li>
            <li>REST</li>
            <li>Photoshop</li>
            <li>Shopify(.Liquid)</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Skills;
