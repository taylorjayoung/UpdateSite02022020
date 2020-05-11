import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import ArticleTile from "./writingComponents/ArticleTile"
import "../../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "15px"
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
