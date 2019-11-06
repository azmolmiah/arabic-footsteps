import React, { Fragment } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import RoomIcon from '@material-ui/icons/Room';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },

  bg: {
    backgroundColor: '#253a52'
  }
}));

const NavTopHalf = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar position='static' className={classes.bg}>
        <Container>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <MenuIcon />
            </IconButton>
            <RoomIcon />
            <h5>Study in Class?</h5>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default NavTopHalf;
