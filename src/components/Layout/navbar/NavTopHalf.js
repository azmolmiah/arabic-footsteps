import React, { Fragment, useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import RoomIcon from '@material-ui/icons/Room';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  bg: {
    backgroundColor: '#253a52'
  },
  list: {
    width: 250
  },
  logo: {
    padding: '1rem 0'
  }
}));

const NavTopHalf = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    top: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const fullList = side => (
    <div
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <AppBar position='static' className={classes.bg}>
        <Toolbar>
          <Container maxWidth='md'>
            <Grid
              container
              direction='row'
              justify='space-between'
              alignItems='center'
            >
              <Grid item>
                <img
                  src='./img/arabicfootstepslogowhite.png'
                  alt='arabicfootstepslogowhite'
                  className={classes.logo}
                />
              </Grid>
              <Grid item>
                <Button variant='contained'>
                  <EventAvailableIcon /> Book a class today
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>

      <Container maxWidth='md'>
        <Grid container>
          <Grid item xs={12} lg={3}>
            <List>
              {['Home', 'About', 'History', 'Contact Us'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} lg={3}>
            <List>
              {['Pricing', 'FAQs', 'Testimonials', 'Places'].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
          </Grid>
          <Grid item xs={12} lg={3}>
            <List>
              {['Online Arabic', 'Classroom Arabic', 'Books', 'Exercise'].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
          </Grid>
          <Grid item xs={12} lg={3}>
            <List>
              {['Online Arabic', 'Classroom Arabic', 'Books', 'Exercise'].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );

  return (
    <Fragment>
      <AppBar position='static' className={classes.bg}>
        <Container maxWidth='md'>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
              onClick={toggleDrawer('top', true)}
            >
              <MenuIcon />
            </IconButton>
            <RoomIcon />
            <h5>Study in Class?</h5>
          </Toolbar>
          <SwipeableDrawer
            anchor='top'
            open={state.top}
            onClose={toggleDrawer('top', false)}
            onOpen={toggleDrawer('top', true)}
          >
            {fullList('top')}
          </SwipeableDrawer>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default NavTopHalf;
