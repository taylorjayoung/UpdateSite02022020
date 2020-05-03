import React, { useState } from "react";
import GTLogo from "../../assets/media/goldteethusalogo.png";
import Melius2 from "../../assets/media/Melius_Logo2.png";
import GoalsLogo from "../../assets/media/weeklyGoals.png";
import Melius1 from "../../assets/media/Melius1.png";
import MySiteLogo from "../../assets/media/MySiteLogo.png";
import Melius1Gif from "../../assets/media/Melius1gf.gif";
import Melius2Gif from "../../assets/media/melius2gf.gif";
import GTGif from "../../assets/media/gtusagf.gif";
import MySiteGif from "../../assets/media/MyNewSite.gif";
import WeeklyGif from "../../assets/media/weeklyBigBig.gif";
import Carousel from "react-material-ui-carousel";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import Item from "./Item";

const useStyles = makeStyles((theme) => ({
  carContainer: {
    padding: "20px",
  },
}));

export default function Portfolio() {
  const classes = useStyles();
  const [items, setItems] = useState([
    {
      logo: MySiteLogo,
      gif: MySiteGif,
      github: [
        {
          name: "React",
          link: "https://github.com/SlickJacket/UpdateSite02022020",
        },
      ],
      demo: "https://www.youtube.com/embed/nzvZYnerdck",
      title: "My personal website",
      description: [
        "Utilized EmailJS to handle all emails.",
        "Created gifs of video demos for work section.",
        "Material UI to have a cleaner, more cohesive, easier to manage theme and style to components and overall site.",
        "Logo designed in photoshop.",
      ],
    },
    {
      logo: GTLogo,
      gif: GTGif,
      github: [
        {
          name: "Visit",
          link: "https://www.goldteethusa.com",
        },
      ],
      demo: "https://www.youtube.com/embed/9Zgq5GOBogE",
      title: "Full Website Redesign using Shopify",
      description: [
        "Built off Vantage template using HTML, CSS, Javascript, and Liquid.",
        "Migrated client’s data from Magento to Shopify.",
        "Set up POS system in client’s new shop.",
        "Manipulated over 500 photos of client’s products to display each variant.",
      ],
    },
    {
      logo: Melius2,
      gif: Melius2Gif,
      github: [
        {
          name: "React",
          link: "https://github.com/SlickJacket/MyMeliusFrontEnd",
        },
        {
          name: "Rails",
          link: "https://github.com/SlickJacket/myMelius",
        },
      ],
      demo: "https://www.youtube.com/embed/WJUS8hHy9BY",
      title: "Second iteration of HR Tool / Social Workplace App",
      description: [
        "Built out Rails API and incorporated a strong authorization.",
        "Using AWS’s S3 service, I was able to embed an upload image feature.",
        "Working along with the image upload feature I use the React-Image-Crop NPM to calculate the pixels and coordinates of the cropped image before converting the blog file back into base64 so it could be uploaded to my S3 bucket.",
        "Stored data with PostgreSQL.",
        "React played a huge role in making this app possible as the npms available we helpful in bringing the image uploading feature to life.",
        "Designed the logo with photoshop.",
        "And of course CSS, all of this is vanilla CSS.",
      ],
    },
    {
      logo: GoalsLogo,
      gif: WeeklyGif,
      github: [
        {
          name: "Js and Rails",
          link: "https://github.com/SlickJacket/Weekly_goals",
        },
      ],
      demo: "https://www.youtube.com/embed/y7Na4NY4l9E",
      title: "Weekly Goals App",
      description: [
        "Built Rails Api to persist user’s goals and Stored data using PostgreSQL.",
        "Created a styled layout using HTML and CSS, logo design using Photoshop",
        "Incorporated Javascript to allow users to click and add goals to the goals container",
      ],
    },
    {
      logo: Melius1,
      gif: Melius1Gif,
      github: [
        {
          name: "Rails",
          link: "https://github.com/dwang0816/melius",
        },
      ],
      demo: "https://www.youtube.com/embed/VRxiqjngGfo",
      title: "Rails HR Tool/ Social Workplace App",
      description: [
        "Utilized Rails to implement both the models/controllers and views, strictly sticking with the MVC model.",
        "Crutched onto Gravatar as an intermediary for user profile photos to save space and time.",
        "Stored data with SQLite for efficiency and simplicity.",
        "Styled with Bootstrap.",
      ],
    },
  ]);

  const renderCarousel = () => {
    return (
      <Carousel autoPlay={false} indicators={false} animation="fade">
        {items.map((item) => (
          <Item item={item} className={classes.carContainer} />
        ))}
      </Carousel>
    );
  };

  return (
    <div className="page">
      <Grid container justify="center" alignItems="center">
        <Grid item xs={11} md={10}>
          {renderCarousel()}
        </Grid>
      </Grid>
    </div>
  );
}
