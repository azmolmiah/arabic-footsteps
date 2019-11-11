import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
  root: {
    background: 'url("/img/main.jpeg") no-repeat center center ',
    backgroundSize: 'cover',
    padding: '10% 0',
    boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.7)',
    color: 'white',
    fontSize: '1.5rem',
    textTransform: 'uppercase'
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth='md'>
        <h1>Understand Arabic</h1>
        <Button size='large' variant='contained' className={classes.Button}>
          <EventAvailableIcon /> Book a class today
        </Button>
      </Container>
    </div>
  );
};

export default Header;
