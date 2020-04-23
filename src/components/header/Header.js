import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import FaceIcon from "@material-ui/icons/Face";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import logo from "../assets/media/MySiteLogo.png";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const permDrawerWidth = 70;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    height: "100px",
    width: `calc(100% - ${permDrawerWidth}px)`,
    marginLeft: permDrawerWidth,
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "70px",
      position: "fixed",
      top: "-1px"
    },
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1.7em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2em",
    },
  },
  logo: {
    height: "7em",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      height: "4.5em",
    },
  },
  iconContainer: {
    marginRight: "auto",
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
    color: "white",
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    width: "5rem",
    overflow: "hidden",
  },
  drawerList: {
    marginTop: "2rem",
    justifyContent: "center",
  },
  drawerLogo: {
    height: "7em",
  },
  drawerItem: {},
  drawerItemText: {
    ...theme.typography.tab,
    color: "white",
    textAlign: "center",
  },
  permDrawer: {
    width: permDrawerWidth,
    overflow: "hidden",
    flexShrink: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  permDrawerLogo: {
    height: "5em",
    paddingTop: "none",
  },
  permDrawerPaper: {
    width: permDrawerWidth,
    overflow: "hidden",
    backgroundColor: theme.palette.primary.main,
  },
  socialIcons: {
    marginLeft: "7px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "12px",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);

  const listRoutes = () => (
    <Fragment>
      <List className={classes.drawerList} disablePadding>
        {routes.map((route) => (
          <ListItem
            className={"drawerItem"}
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(route.value);
            }}
            component={Link}
            to={route.link}
            selected={value === route.value}
          >
            <ListItemText className={classes.drawerItemText} disableTypography>
              {route.icon}
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Fragment>
  );

  const listSocialRoutes = () => (
    <Fragment>
      <List className={classes.drawerList} disablePadding>
        {socialRoutes.map((route) => (
          <ListItem
            className={"drawerItem"}
            onClick={() => {
              setOpenDrawer(false);
              setValue(route.value);
            }}
            selected={value === route.value}
          >
            <a href={route.link} className={classes.socialIcons}>
              {route.icon}
            </a>
          </ListItem>
        ))}
      </List>
    </Fragment>
  );

  const socialRoutes = [
    {
      link: "https://github.com/SlickJacket",
      icon: <GitHubIcon className={"icons"} />,
    },
    {
      link: "https://www.instagram.com/bobbybuffaloboy/?hl=en",
      icon: <InstagramIcon className={"icons"} />,
    },
    {
      link: "https://www.linkedin.com/in/bobby-buffaloboy-4ba4ba79/",
      icon: <LinkedInIcon className={"icons"} />,
    },
  ];

  const routes = [
    { link: "/", value: 0, icon: <HomeIcon className={"icons"} /> },
    { link: "/about", value: 1, icon: <FaceIcon className={"icons"} /> },
    {
      link: "skills",
      value: 2,
      icon: <AssessmentIcon className={"icons"} />,
    },
    {
      link: "/portfolio",
      value: 3,
      icon: <WorkIcon className={"icons"} />,
    },
    {
      link: "/contact",
      value: 4,
      icon: <EmailIcon className={"icons"} />,
    },
  ];

  useEffect(() => {
    routes.forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.value) {
            setValue(route.value);
          }
          break;
        default:
          break;
      }
    });
  }, [value, routes]);

  const dashboard = (
    <Drawer
      className={classes.permDrawer}
      variant="permanent"
      classes={{
        paper: classes.permDrawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <Button component={Link} to="/" disableRipple onClick={() => setValue(0)}>
        <img alt="Company Logo" src={logo} className={classes.permDrawerLogo} />
      </Button>
      {listRoutes()}
      <Divider />
      {listSocialRoutes()}
    </Drawer>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <Button
          component={Link}
          to="/"
          disableRipple
          onClick={() => setValue(0)}
        >
          <img alt="Company Logo" src={logo} className={classes.drawerLogo} />
        </Button>
        {listRoutes()}
        {listSocialRoutes()}
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.iconContainer}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );
  return (
    <div className={classes.root}>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar} color="primary">
          <ToolBar>
            {matches ? drawer : null}
            <Button
              component={Link}
              to="/"
              disableRipple
              onClick={() => setValue(0)}
            >
              <img alt="Company Logo" src={logo} className={classes.logo} />
            </Button>
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      {matches ? null : dashboard}

      <div className={classes.toolbarMargin} />
    </div>
  );
}
