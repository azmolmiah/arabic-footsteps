import React from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {}
}));

const BriefAbout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display='flex' flexDirection='row'>
        <Box justifyContent='center'>
          <h3>Madinah Arabic Tuiton</h3>
        </Box>
        <Divider orientation='vertical' />
        <Box justifyContent='center'>
          <h3>Madinah Arabic Tuiton</h3>
        </Box>
      </Box>
    </div>
  );
};

export default BriefAbout;
