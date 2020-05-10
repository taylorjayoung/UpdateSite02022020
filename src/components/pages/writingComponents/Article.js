import React, { useState, useEffect, Fragment } from "react";
import profilePhoto from "../../assets/media/profile.png";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Divider from "@material-ui/core/Divider";
import wallpaper from '../../assets/images/wallpaper1.jpg'; // with import

import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "../../../App.css";

const useStyles = makeStyles((theme) => ({
  paragraphs: {
    fontFamily: "Roboto Condensed",
    color: "white",
    fontWeight: "400",
    fontSize: "1.2rem",
  },
  quote: {
    textAlign: "center",
    color: "white",
  },
  author: {
    textAlign: "right",
  }
}));

export default function ArticleBody(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [containerDirection, setContainerDirection] = useState("row");
  const [containerWrap, setContainerWrap] = useState("wrap");
  const [containerJustify, setContainerJustify] = useState("space-evenly");
  const [quoteSize, setQuoteSize] = useState("h3");
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const formatParagraphs = (paragraphs) => {
    return paragraphs.map( p => {
      return(
          <Typography className={classes.paragraphs}>
            {p}
          </Typography>
      )
    })
  }

  const {paragraphs} = props.article.body
  const {author, featuredQuote} = props.article.header

  return (

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="background"
          height="140"
          image={wallpaper}
          title="wallpaper1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            &quot;{featuredQuote}&quot;
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>


  );
}
