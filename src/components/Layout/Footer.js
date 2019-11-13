import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#253a52",
    padding: "5% 0"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <h1>Footer</h1>
      </Container>
    </div>
  );
};

export default Footer;
