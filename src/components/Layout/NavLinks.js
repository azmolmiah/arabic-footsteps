import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

const NavLinks = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={6} lg={5}>
          <List>
            {["Home", "About", "Contact"].map((text, index) => (
              <ListItem button key={index}>
                <Link to={text.toLowerCase()}>
                  <ListItemText primary={text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={6} lg={5}>
          <List>
            {["Online", "Pricing", "Testimonials"].map((text, index) => (
              <ListItem button key={index}>
                <Link to={`/${text.toLowerCase()}`}>
                  <ListItemText primary={text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default NavLinks;
