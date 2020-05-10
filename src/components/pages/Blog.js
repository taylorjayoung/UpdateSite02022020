import React, { useState, useEffect,Fragment } from "react";
import profilePhoto from "../assets/media/profile.png";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ArticleTile from "./writingComponents/ArticleTile"
import "../../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  divider: {
    backgroundColor: theme.palette.common.purple,
    margin: "1.1em",
  },
}));

export default function Blog(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [containerDirection, setContainerDirection] = useState("row");
  const [containerWrap, setContainerWrap] = useState("wrap");
  const [containerJustify, setContainerJustify] = useState("space-evenly");
  const [quoteSize, setQuoteSize] = useState("h3");
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (matches) {
      setContainerDirection("column-reverse");
      setContainerWrap("wrap");
      setContainerJustify("center");
      setQuoteSize("h4");
    } else {
      setContainerDirection("row");
      setContainerWrap("wrap");
      setContainerJustify("space-evenly");
      setQuoteSize("h3");
    }
  });
  const articles = [
    {
      id: 1,
      header: {
        title: "Four left? How many left?",
        author: "Sylvan Tompkins",
        featuredQuote: "I am, above all, what excites me."
      },
      description: [
        'What makes this quote so powerful, is the force of connection I have to it. If I find something interesting, I will immediately form an obsession, then, that obsession grows exponentially. Whether that be learning how to brew my own.'
      ],
      categories: []
    },
    {
      id: 2,
      header: {
        title: "Gradient resurfcacing",
        author: "Sylvan Tompkins",
        featuredQuote: "I am, above all, what excites me."
      },
      description: [
        'What makes this quote so powerful, is the force of connection I have to it. If I find something interesting, I will immediately form an obsession, then, that obsession grows exponentially. Whether that be learning how to brew my own.'
      ],
      categories: []
    },
    {
      id: 1,
      header: {
        title: "Four left? How many left?",
        author: "Sylvan Tompkins",
        featuredQuote: "I am, above all, what excites me."
      },
      description: [
        'What makes this quote so powerful, is the force of connection I have to it. If I find something interesting, I will immediately form an obsession, then, that obsession grows exponentially. Whether that be learning how to brew my own.'
      ],
      categories: []
    },
    {
      id: 2,
      header: {
        title: "Gradient resurfcacing",
        author: "Sylvan Tompkins",
        featuredQuote: "I am, above all, what excites me."
      },
      description: [
        'What makes this quote so powerful, is the force of connection I have to it. If I find something interesting, I will immediately form an obsession, then, that obsession grows exponentially. Whether that be learning how to brew my own.'
      ],
      categories: []
    }
  ]

  const articleComponents = () => {
    return articles.map( article => {
      return (
        <Grid item xs={12} sm={6} lg={4}>
          <ArticleTile article={article}/>
        </Grid>
      )
    })
  }


  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={10} >
          {articleComponents()}
      </Grid>
    </div>
  );
}
