import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { ReactComponent as Html5Icon } from "../assets/media/html5.svg";
import { ReactComponent as JsxIcon } from "../assets/media/react-2.svg";
import { ReactComponent as CssIcon } from "../assets/media/css3.svg";
import { ReactComponent as SassIcon } from "../assets/media/sass-1.svg";
import { ReactComponent as BootstrapIcon } from "../assets/media/bootstrap-4.svg";
import { ReactComponent as MaterialUIIcon } from "../assets/media/material-ui-1.svg";
import { ReactComponent as JsIcon } from "../assets/media/javascript-1.svg";
import { ReactComponent as ReduxIcon } from "../assets/media/redux.svg";
import { ReactComponent as JqueryIcon } from "../assets/media/jquery-1.svg";
import { ReactComponent as NodeIcon } from "../assets/media/node-js-logo.svg";
import { ReactComponent as RubyIcon } from "../assets/media/ruby.svg";
import { ReactComponent as RailsIcon } from "../assets/media/rails.svg";
import { ReactComponent as SqliteIcon } from "../assets/media/sqlite.svg";
import { ReactComponent as PGIcon } from "../assets/media/postgresql.svg";
import { ReactComponent as ShopifyIcon } from "../assets/media/shopify.svg";
import { ReactComponent as GithubIcon } from "../assets/media/github-icon.svg";
import { ReactComponent as HerokuIcon } from "../assets/media/heroku.svg";
import { ReactComponent as PhotoshopIcon } from "../assets/media/photoshop-cc.svg";
import { ReactComponent as LightroomIcon } from "../assets/media/lightroom-cc.svg";
import { ReactComponent as PremiereIcon } from "../assets/media/premiere-cc.svg";
import { ReactComponent as AEIcon } from "../assets/media/after-effects-cc.svg";
import { ReactComponent as CSharpIcon } from "../assets/media/c--4.svg";
import { ReactComponent as UnityIcon } from "../assets/media/unity-69.svg";
import { ReactComponent as DotNetIcon } from "../assets/media/dot-net-core-7.svg";
import { ReactComponent as S3Icon } from "../assets/media/aws-s3.svg";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Anton",
    color: theme.palette.primary.main,
    marginLeft: "15px",
    marginTop: "5px",
  },
  pageTitle: {
    fontFamily: "Bowlby One SC",
  },
  p: {
    color: "white",
    fontFamily: "Roboto Condensed",
    fontWeight: "400",
    fontSize: "1.2rem",
  },
  skillsPaper: {
    padding: "15px",
    backgroundColor: "#F5F5F5",
    borderRadius: "5px",
  },
  divider: {
    backgroundColor: theme.palette.common.purple,
    margin: "1.1em",
  },
  dividerItem: {
    position: "relative",
    marginLeft: "10px",
  },
  htmlIcons: {
    width: "50%",
    height: "50%",
    margin: "auto",
  },
  cssIcons: {
    width: "60%",
    height: "60%",
    margin: "20px",
  },
  jsIcons: {
    width: "60%",
    height: "60%",
    margin: "20px",
  },
  jqueryIcon: {
    textAlign: "center",
    position: "relative",
    right: "30px",
  },
  backendIcons: {
    width: "60%",
    height: "60%",
    margin: "20px",
  },
  paperDivider: {
    margin: "1.1em",
  },
  iconText: {
    textAlign: "center",
    fontFamily: "Anton",
    color: theme.palette.primary.light,
    fontSize: "1.2rem",
  },
  iconItem: {
    textAlign: "center",
  },
}));

export default function Skills() {
  const classes = useStyles();

  return (
   
      <Grid container className="page">
        <Grid item xs={12}>
          <Grid
            container
            direction="column"
            spacing={4}
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item xs={12} md={9}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Typography
                    variant="h1"
                    color="secondary"
                    className={classes.pageTitle}
                  >
                    Skills
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="body1" className={classes.p}>
                    Trained and practice both Front and Back End, I can take a
                    project from concept to deployment. Always eager to learn
                    new technologies, and never miss a chance to read up on all
                    of the latest trends. Focusing on honing more Javascript at
                    the moment due to it's powerful and versatile nature.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.dividerItem}>
                <Divider className={classes.divider} />
              </Grid>
            </Grid>

            <Grid item xs={10} md={6}>
              <Grid
                container
                direction="row"
                spacing={3}
                justify="space-evenly"
                alignItems="baseline"
                className={classes.skillsContainer}
              >
                <Grid item xs={12}>
                  <Paper square elevation={3} className={classes.skillsPaper}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography variant="h3" className={classes.title}>
                          HTML
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Divider className={classes.paperDivider} />
                      </Grid>
                      <Grid item xs={12}>
                        <Grid
                          container
                          justify="flex-start"
                          alignItems="center"
                        >
                          <Grid item xs={3}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <Html5Icon className={classes.htmlIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  HTML5
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <JsxIcon className={classes.htmlIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  JSX
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper square elevation={3} className={classes.skillsPaper}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography variant="h3" className={classes.title}>
                          CSS
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Divider className={classes.paperDivider} />
                      </Grid>
                      <Grid item xs={12}>
                        <Grid
                          container
                          alignItems="center"
                          justify="flex-start"
                          wrap="wrap"
                        >
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <CssIcon className={classes.cssIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  CSS3
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <SassIcon className={classes.cssIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  Sass
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <BootstrapIcon className={classes.cssIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  Bootstrap
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <MaterialUIIcon className={classes.cssIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  Material UI
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper square elevation={3} className={classes.skillsPaper}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography variant="h3" className={classes.title}>
                          Javascript
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Divider className={classes.paperDivider} />
                      </Grid>
                      <Grid item xs={12}>
                        <Grid
                          container
                          alignItems="center"
                          justify="space-between"
                        >
                          <Grid item xs={3}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <JsIcon className={classes.jsIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  Vanilla JS
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <JsxIcon className={classes.jsIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  React
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <ReduxIcon className={classes.jsIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  Redux
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={5}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <NodeIcon className={classes.jsIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  Node
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={5} className={classes.jqueryIcon}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <JqueryIcon className={classes.jsIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  JQuery
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper square elevation={3} className={classes.skillsPaper}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography variant="h3" className={classes.title}>
                          Backend
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Divider className={classes.paperDivider} />
                      </Grid>
                      <Grid item xs={12}>
                        <Grid
                          container
                          alignItems="center"
                          justify="flex-start"
                        >
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <RubyIcon className={classes.backendIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  Ruby
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <RailsIcon className={classes.backendIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  Rails
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <CSharpIcon className={classes.backendIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  C#
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <DotNetIcon className={classes.backendIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  .NET Core
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <SqliteIcon className={classes.backendIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  SQLite
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <PGIcon className={classes.backendIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  PostgreSQL
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper square elevation={3} className={classes.skillsPaper}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography variant="h3" className={classes.title}>
                          CMS
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Divider className={classes.paperDivider} />
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container alignItems="center">
                          <Grid item xs={3}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <ShopifyIcon className={classes.backendIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  Shopify
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper square elevation={3} className={classes.skillsPaper}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography variant="h3" className={classes.title}>
                          Other
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Divider className={classes.paperDivider} />
                      </Grid>
                      <Grid item xs={12}>
                        <Grid
                          container
                          alignItems="center"
                          justify="flex-start"
                        >
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <GithubIcon className={classes.backendIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  Git
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <HerokuIcon className={classes.backendIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  Heroku
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <UnityIcon className={classes.backendIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  Unity
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <S3Icon className={classes.backendIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  AWS S3
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <PhotoshopIcon
                                  className={classes.backendIcons}
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  Photoshop
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <LightroomIcon
                                  className={classes.backendIcons}
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  Lightroom
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <PremiereIcon
                                  className={classes.backendIcons}
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  Premiere Pro
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}>
                            <Grid container direction="column">
                              <Grid item xs={12} className={classes.iconItem}>
                                <AEIcon className={classes.backendIcons} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={classes.iconText}>
                                  After Effects
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

  );
}
