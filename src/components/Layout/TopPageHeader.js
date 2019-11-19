import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#253a52",
    padding: "1.5rem",
    color: "white"
  }
}));

const TopPageHeader = ({ text }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.header}>
        <Container maxWidth="md">
          <h1>{text}</h1>
        </Container>
      </div>
    </Fragment>
  );
};

TopPageHeader.propTypes = {
  text: PropTypes.string.isRequired
};

export default TopPageHeader;
