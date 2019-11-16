import React from "react";

import NavTopHalf from "./navbar/NavTopHalf";
import NavBtmHalf from "./navbar/NavBtmHalf";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  navBtm: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavTopHalf />
      <NavBtmHalf />
    </div>
  );
};

export default NavBar;
