import React, { Component, Fragment } from "react";
import Heart from "./heart.png";
import AboutMe from './AboutMe.js'

class Home extends Component {
  state = {
    time: "",
    secondTime: ""
  };

  componentDidMount() {
    let d = new Date();
    this.setState({
      time: d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
    });

    this.setState({
      secondTime:
        d.getHours() +
        ":" +
        d.getMinutes() +
        ":" +
        (d.getSeconds() +6)
    });
  }
  render() {
    return (
      <Fragment>
        <h1 id="myTitle">[{this.state.time}]FULLSTACKDEVELOPER</h1>
        <h1 id="line2">
          {" "}
          <img src={Heart} alt="heart" id="heartPic" /> cd AboutMe
        </h1>
        <h1 id="myTitle">[{this.state.secondTime}]AboutMe</h1>
        <h1 id="line2">
          {" "}
          <img src={Heart} alt="heart" id="heartPic" /> code .
        </h1>
        <AboutMe />
      </Fragment>
    );
  }
}

export default Home;
