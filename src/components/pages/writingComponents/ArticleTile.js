import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import wallpaper from '../../assets/images/wallpaper1.jpg'; // with import
import Typography from "@material-ui/core/Typography";
import "../../../App.css";

const useStyles = makeStyles((theme) => ({
  root: {border: "1px solid #c803ffd7"},
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

export default function ArticleTile(props) {
    const classes = useStyles();

    console.log(props.header)


    const {description} = props.article
    const {title} = props.article.header

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
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description.slice(0, 10)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Read More
          </Button>
        </CardActions>
      </Card>
    );
}
