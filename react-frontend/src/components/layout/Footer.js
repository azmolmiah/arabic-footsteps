import React from "react";

import NavLinks from "./NavLinks";
import SocialMedia from "./SocialMedia";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#253a52",
    paddingTop: "1rem",
    color: "white"
  },
  btmStrip: {
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    padding: "1% 0",
    marginTop: "1rem",
    textAlign: "center"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container justify="space-between">
          <Grid item xs={12} lg={5}>
            <h1>Arabic Footsteps</h1>
            During the last 10 years between 2009 till 2019, our tuition has
            been on offer in classroom's, in Nelson and around the UK. However,
            for the first time, we are now opening up classes to the public at
            large via online platforms such as Skype and Zoom.
          </Grid>
          <Grid item xs={12} lg={3}>
            <NavLinks />
          </Grid>
          <Grid item xs={12} lg={3}>
            <SocialMedia />
          </Grid>
        </Grid>
      </Container>

      <div className={classes.btmStrip}>
        <Container maxWidth="md">
          <Grid container justify="center">
            <h5>
              All rights reserved {new Date().getFullYear()}
              {" | "}Privacy Policy{" | "}Disclaimer{" | "}Complaints{" | "}
              Sitemap
            </h5>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
