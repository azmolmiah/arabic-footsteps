import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(() => ({
  header: {
    background: 'url("/img/main.jpeg") no-repeat center center ',
    backgroundSize: "cover",
    boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.6)",
    padding: "2rem",
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
