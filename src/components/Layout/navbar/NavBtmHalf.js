import React, { Fragment } from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const NavBtmHalf = () => {
  return (
    <Fragment>
      <Container maxWidth='md'>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'
        >
          <Grid item>
            <Box py={4}>
              <img src='/img/logo.png' alt='' />
            </Box>
          </Grid>
          <Grid item>
            <Button variant='contained'>
              <EventAvailableIcon /> Book a class today
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default NavBtmHalf;
