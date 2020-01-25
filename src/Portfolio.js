import React, { Component, Fragment } from "react";
import GTLogo from "./goldteethusalogo.png";
import Melius2 from "./Melius_Logo2.png";
import Melius1 from "./Melius1.png";
import FLLogo from "./FLLogo.png";
import MySiteLogo from "./MySiteLogo.png"
import Melius1Gif from "./Melius1gf.gif";
import Melius2Gif from "./melius2gf.gif";
import GTGif from "./gtusagf.gif";
import MySiteGif from "./MyNewSiteGF.gif"
import "./Portfolio.css";

class Portfolio extends Component {
  state = {};

  handleClick = e => {
    e.preventDefault();
    let mainContent = document.getElementsByClassName("mainContent");
    if (e.target.id === "MySite") {
      mainContent[0].innerHTML = `<h1
      class="workPageTitle"
     
    >
      Portfolio Site (React)
    </h1>
    <div class="flContainer">
      <div>
        <img src=${MySiteLogo} class="mainContentLogos" />
      </div>
      <div>
      <a href="https://github.com/SlickJacket/MyNewSite01252020" class="workLinks">Github</a>
      <br></br>
      <a href="https://youtu.be/RwweLZNLDOk" class="workLinks">Video Demo</a>
      </div>
    </div>

    <ul class="workPagePs">
    <li>Utilized EmailJS to handle all emails</li>
    <li>Created gifs of video demos for work section</li>
    <li>Javascript was used to conditionally display work projects</li>
    <li>Styling and logo made using CSS</li>
    </ul>`;
    }
    if (e.target.id === "GTUSA") {
      mainContent[0].innerHTML = `<h1
      class="workPageTitle"
     
    >
      Gold Teeth USA (Shopify)
    </h1>
    <div class="flContainer">
      <div>
        <img src=${GTLogo} class="mainContentLogos" />
      </div>
      <div>
      <a href="http://www.goldteethusa.com/index.php" class="workLinks">ORIGINAL SITE</a>
      <br></br>
      <a href="https://gold-teeth-usa.myshopify.com/password" class="workLinks">SITE IN PROGRESS (pass= egold)</a>
      </div>
    </div>

    <ul class="workPagePs">
    <li>Built off Vantage template using HTML, CSS, Javascript, and Liquid.</li>
    <li>Migrated client’s data from Magento to Shopify</li>
    <li>Set up POS system in client’s new shop</li>
    <li>Manipulated over 500 photos of client’s products to display each variant.</li>
    <li>Created a template in photoshop for client’s Wholesale Catalog</li>
    <li>Connected Quickbooks to client’s new Shopify site</li>
    </ul>`;
    }
    if (e.target.id === "Melius2") {
      mainContent[0].innerHTML = `<h1
      class="workPageTitle"
     
    >
      Melius 2.0 (Rails & React)
    </h1>
    <div class="flContainer">
      <div>
        <img src=${Melius2} class="mainContentLogos" />
      </div>
      <div>
      <a href="https://github.com/SlickJacket/myMelius" class="workLinks">Github (API)</a>
      <br></br>
      <a href="https://github.com/SlickJacket/MyMeliusFrontEnd" class="workLinks">Github (Client)</a>
      <br></br>
      <a href="https://youtu.be/WJUS8hHy9BY" class="workLinks">Video Demo</a>
      </div>
    </div>

    <ul class="workPagePs">
    <li>Built out Rails API and incorporated a strong authorization</li>
    <li>Using AWS’s S3 service, I was able to embed an upload image feature</li>
    <li>Working along with the image upload feature I use the React-Image-Crop NPM to calculate the pixels and coordinates of the cropped image before converting the blog file back into base64 so it could be uploaded to my S3 bucket.</li>
    <li>Stored data with PostgreSQL </li>
    <li>React played a huge role in making this app possible as the npms available we helpful in bringing the image uploading feature to life. </li>
    <li>Designed the logo with photoshop</li>
    <li>And of course CSS, all of this is vanilla CSS</li>
    </ul>`;
    }
    if (e.target.id === "Melius1") {
      mainContent[0].innerHTML = `<h1
      class="workPageTitle"
     
    >
      Melius 1.0 (Rails)
    </h1>
    <div class="flContainer">
      <div>
        <img src=${Melius1} class="mainContentLogos" />
      </div>
      <div>
        <a href="https://github.com/dwang0816/melius" class="workLinks">Github</a>
        <br></br>
        <a href="https://youtu.be/VRxiqjngGfo" class="workLinks">Video Demo</a>
      </div>
    </div>

    <ul class="workPagePs">
    <li>Quickly creating the mission statement and project idea with pair programming partner.</li>
    <li>Working together to achieve our goal within the 4 days allotted </li>
    <li>Utilized Rails to implement both the models/controllers and views, strictly sticking with the MVC model</li>
    <li>Crutched onto Gravatar as an intermediary for user profile photos to save space and time.</li>
    <li>Stored data with SQLite for efficiency and simplicity </li>
    <li>Designed the logo with CSS</li>
    <li>Styled with Bootstrap</li>
    </ul>`;
    }
  };
  render() {
    return (
      <Fragment>
        <div className="workContent">
          <div className="mainContent">
            <h1 className="workPageTitle">Experience</h1>
            <div className="flContainer">
              <div>
                <img src={FLLogo} className="FLLogo" />
              </div>
              <div>
                <h4>Brooklyn, NY</h4>
                <h4>06/2019 - 10/2019</h4>
              </div>
            </div>

            <p className="workPagePs">
              Graduate of The Flatiron School, October 2019, I have had to
              opportunity to study under some of New York's best software
              engineering instructors. My studies there have consisted of Git,
              Ruby, Rails, Sinatra, Sqlite, PostgreSQL, Javascript, React,
              Redux, as well as honed my already existing HTML and CSS
              knowledge.
            </p>
          </div>
          <div id="workPageLine"></div>
          <div className="projectsContainer">
          <div className="gifss">
              <img src={MySiteLogo} id="MySite" onClick={this.handleClick} />
              <img src={MySiteGif} id="gif" />
            </div>
            <div className="gifss">
              <img
                src={GTLogo}
                className="logos"
                id="GTUSA"
                onClick={this.handleClick}
              />
              <img src={GTGif} id="gif" />
            </div>
            <div className="gifss">
              <img src={Melius2} id="Melius2" onClick={this.handleClick} />
              <img src={Melius2Gif} id="gif" />
            </div>
            <div className="gifss">
              <img src={Melius1} id="Melius1" onClick={this.handleClick} />
              <img src={Melius1Gif} id="gif" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Portfolio;
