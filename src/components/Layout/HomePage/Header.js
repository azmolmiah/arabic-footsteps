import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
  root: {
    background: 'url("/img/main.jpeg") no-repeat center center ',
    backgroundSize: "cover",
    padding: "3% 0 6% 0",
    boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.7)",
    color: "white",
    fontSize: "1.5rem",
    borderBottomLeftRadius: "50% 20%",
    borderBottomRightRadius: "50% 20%"
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Box textAlign="center">
          <h1>Welcome to Arabic Footsteps</h1>
        </Box>
        <Box textAlign="center">
          <p>
            During the last 10 years between 2009 till 2019, our tuition has
            been on offer in classroom's, in Nelson and around the UK. However,
            for the first time, we are now opening up classes to the public at
            large via online platforms such as Skype and Zoom.
          </p>
        </Box>
        <Box textAlign="center">
          <Button size="large" variant="contained">
            Discover more
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Header;
