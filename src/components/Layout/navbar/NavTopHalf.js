import React, { Fragment, useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import RoomIcon from '@material-ui/icons/Room';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  bg: {
    backgroundColor: '#253a52'
  },
  list: {
    width: 250
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
    <Container>
      <div
        role='presentation'
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Container>
  );

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
