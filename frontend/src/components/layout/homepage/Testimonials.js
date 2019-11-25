import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#e0e0e0",
    fontSize: "2rem",
    padding: "3rem"
  },
  text: {
    marginBottom: '1.5rem'
  },
  quote: {
    fontSize: "5rem",
    color: "#253a52"
  }
}));

const Testimonials = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Grid container justify="center" alignItems="center">
          <Box>
            <FormatQuoteIcon className={classes.quote} />
          </Box>
          <Box textAlign="center" className={classes.text}>
            
              Since going to ArabicFootSteps, I now have the confidence to read
              and speak the Arabic language.
            
          </Box>
          <Box>
          <Link to="/testimonials">
            <Button variant="outlined" color="primary">
              read more reviews
            </Button>
            </Link>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default Testimonials;
