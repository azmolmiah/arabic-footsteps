import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    background: 'url("/img/headerbg_1.jpeg") no-repeat center center',
    backgroundSize: 'cover',
    padding: '10%'
  }
}));

const Header = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default Header;
