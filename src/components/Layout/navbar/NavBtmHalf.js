import React from "react";
import { Link } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  }
}));

const NavBtmHalf = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Box py={2}>
              <Link to="/home">
                <img src="/img/logo.png" alt="" />
              </Link>
            </Box>
          </Grid>
          <Grid item>
            <Link to="/bookings">
              <Button size="large" variant="contained" color="inherit">
                <EventAvailableIcon /> Book a class today
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default NavBtmHalf;
