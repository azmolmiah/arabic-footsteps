import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#253a52",
    padding: "5% 0 0 0",
    color: "white"
  },
  btmStrip: {
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    padding: "1% 0"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <h1>Arabic Footsteps</h1>
        <p>
          During the last 10 years between 2009 till 2019, our tuition has been
          on offer in classroom's, in Nelson and around the UK. However, for the
          first time, we are now opening up classes to the public at large via
          online platforms such as Skype and Zoom.
        </p>
        <Grid container>
          <Grid item xs={12} lg={3}>
            <List>
              {["Home", "About", "History", "Contact Us"].map((text, index) => (
                <ListItem button key={index}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              <Divider />
            </List>
          </Grid>
          <Grid item xs={12} lg={3}>
            <List>
              {["Pricing", "FAQs", "Testimonials", "Places"].map(
                (text, index) => (
                  <ListItem button key={index}>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
              <Divider />
            </List>
          </Grid>
          <Grid item xs={12} lg={3}>
            <List>
              {["Online Arabic", "Classroom Arabic", "Books", "Exercise"].map(
                (text, index) => (
                  <ListItem button key={index}>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
              <Divider />
            </List>
          </Grid>
          <Grid item xs={12} lg={3}>
            <List>
              {["Online Arabic", "Classroom Arabic", "Books", "Exercise"].map(
                (text, index) => (
                  <ListItem button key={index}>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
              <Divider />
            </List>
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
