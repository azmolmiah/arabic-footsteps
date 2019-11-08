import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const useStyles = makeStyles(() => ({
  root: {
    background: 'url("/img/headerbg_1.jpeg") no-repeat',
    backgroundSize: 'cover',
    padding: '10%'
  },
  Button: {
    fontSize: '1.5rem'
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth='lg'>
        <Button size='large' variant='contained' className={classes.Button}>
          <EventAvailableIcon /> Book a class today
        </Button>
      </Container>
    </div>
  );
};

export default Header;
