import React, { Component, Fragment } from "react";
import GTLogo from "./goldteethusalogo.png";
import Melius2 from "./Melius_Logo2.png";
import Melius1 from "./Melius1.png";
import "./Portfolio.css";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div id="projectsContainer">
          <h1 style={{ position: "relative", bottom: "3vw", left: "5vw" }}>
            TECHNICAL SKILLS:
          </h1>
          <div id="skillsContainer">
              <h2>HTML</h2>
              <h2>CSS</h2>
              <h2>Javascript</h2>
              <h2>Ruby</h2>
              <h2>Rails</h2>
              <h2>ReactJS</h2>
              <h2>NodeJS</h2>
              <h2>Redux</h2>
              <h2>SQLite/ PostgreSQL</h2>
              <h2>Photoshop</h2>
              <h2>Bootstrap</h2>
              <h2>AWS S3</h2>
              <h2>Shopify(.Liquid)</h2>
          </div>
          <h1 style={{ position: "relative", left: "5vw" }}>
            WORK EXPERIENCE:
          </h1>
          <div id="projectCard" style={{borderBottom: ".2vw solid rgba(99, 99, 99, 0.214)"}}>
            <img
              src={GTLogo}
              alt="gold teeth usa logo"
              id="logos"
              style={{ paddingBottom: "1vw" }}
            />
            <h1 className="projectTitles">GOLD TEETH USA</h1>
            <p className="projectContent">
              Built off Vantage template using HTML, CSS, Javascript, and
              Liquid. Migrated client’s data from Magento to Shopify Manipulated
              over 500 photos of client’s products to display each variant.
              Created a template in photoshop for client’s Wholesale Catalog Set
              up POS system in client’s new shop Connected Quickbooks to
              client’s new Shopify site
            </p>
            <div>
              <iframe
                id="video"
                title="Gold Teeth USA"
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/9Zgq5GOBogE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <h1 style={{ position: "relative", left: "5vw" }}>
            LARGE PROJECTS:
          </h1>
          <div id="projectCard" style={{ height: "40vw" }}>
            <img
              src={Melius2}
              alt="Melius 2 Logo"
              id="logos"
              style={{ top: "2.5vw" }}
            />
            <h1 className="projectTitles" style={{ marginTop: "7vw" }}>
              MELIUS 2.0 (FullStack)
            </h1>
            <p className="projectContent">
              Built out Rails API and incorporated a strong authorization Using
              AWS’s S3 service, I was able to embed an upload image feature.
              Working along with the image upload feature I use the
              React-Image-Crop NPM to calculate the pixels and coordinates of
              the cropped image before converting the blog file back into base64
              so it could be uploaded to my S3 bucket. Stored data with
              PostgreSQL React played a huge role in making this app possible as
              the npms available we helpful in bringing the image uploading
              feature to life. And of course CSS, all of this is vanilla CSS
              Designed the logo with photoshop
            </p>
            <div>
              <iframe
                id="video"
                title="Melius 2.0"
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/WJUS8hHy9BY"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={{ bottom: "40vw" }}
              ></iframe>
            </div>
          </div>
          <div
            id="projectCard"
            style={{
              height: "30vw",
              borderBottom: ".2vw solid rgba(99, 99, 99, 0.214)"
            }}
          >
            <img
              src={Melius1}
              alt="Melius logo"
              id="logos"
              style={{ paddingBottom: "2vw", paddingTop: "2vw" }}
            />
            <h1 className="projectTitles">MELIUS 1.0 (Rails)</h1>
            <p className="projectContent">
              Quickly creating the mission statement and project idea with pair
              programming partner. Working together to achieve our goal within
              the 4 days allotted Utilized Rails to implement both the
              models/controllers and views, strictly sticking with the MVC model
              Crutched onto Gravatar as an intermediary for user profile photos
              to save space and time. Stored data with SQLite for efficiency and
              simplicity
            </p>
            <div style={{ height: "1vw" }}>
              <iframe
                id="video"
                title="Melius 1.0 Rails Only"
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/qH0dGQpbeqI"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Portfolio;
