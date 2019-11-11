import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import CastForEducationOutlinedIcon from '@material-ui/icons/CastForEducationOutlined';

const useStyles = makeStyles(() => ({
  root: {
    padding: '1.5rem 0'
  },
  img: {
    width: '100%',
    height: '100%'
  },
  font: {
    fontSize: '2rem'
  },
  icon: {
    fontSize: '3rem',
    color: '#253a52'
  },
  p: {
    fontSize: '1.2rem'
  }
}));

const BriefAbout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth='md'>
        <Grid container justify='center' alignItems='center'>
          <Grid container direction='row' justify='center' alignItems='center'>
            <Grid item lg={9}>
              {/* <Grid container direction='row' justify='space-between'>
                <Grid item lg={6}>
                  <Grid container justify='flex-start' alignItems='center'>
                    <Grid>
                      <RoomOutlinedIcon className={classes.icon} />
                    </Grid>
                    <Grid>
                      <div className={classes.font}>In Class Tuition</div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={6}>
                  <Grid container justify='flex-start' alignItems='center'>
                    <Grid>
                      <CastForEducationOutlinedIcon className={classes.icon} />
                    </Grid>
                    <Grid>
                      <div className={classes.font}>On Screen Tuiton</div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid> */}
              <h3>
                Madinah Arabic Tuiton | Qualified Teachers | Adults {'&'}{' '}
                Children
              </h3>
              <p className={classes.p}>
                Our tuition has been on offer at a localised level in and around
                Nelson, U.K. during the last 10 years between 2009-2019,
                however, now for the first time, we are opening up classes to
                the public at large via online platforms such as Skype {'&'}{' '}
                Zoom.
              </p>
            </Grid>
            <Grid item lg={3}>
              <Grid container justify='flex-end'>
                <img className={classes.img} src='/img/badge.png' alt='badge' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default BriefAbout;
