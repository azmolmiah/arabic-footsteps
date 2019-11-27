import React, { Fragment, useState } from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Logo from "../Logo"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  bg: {
    backgroundColor: "#253a52",
  },
  list: {
    width: 250,
  },
  topNavBtn: {
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
    },
  },
}))

const MainMenu = () => {
  const classes = useStyles()

  const [state, setState] = useState({
    top: false,
  })

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState({ ...state, [side]: open })
  }

  const fullList = side => (
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <AppBar position="static" className={classes.bg}>
        <Toolbar>
          <Container maxWidth="md">
            <Link to="/home/">
              <Logo alt="arabicfootstepslogowhite" />
            </Link>
          </Container>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md">
        <Grid container>
          <List>
            <StaticQuery
              query={graphql`
                {
                  allWordpressWpApiMenusMenusItems(
                    filter: { name: { eq: "Main menu" } }
                  ) {
                    edges {
                      node {
                        name
                        items {
                          title
                          object_slug
                        }
                      }
                    }
                  }
                }
              `}
              render={props => (
                <div>
                  <Box display="flex" className={classes.topNavBtn}>
                    {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                      item => (
                        <ListItem button key={item.title}>
                          <Link to={`/${item.object_slug}/`}>
                            <ListItemText primary={item.title} />
                          </Link>
                        </ListItem>
                      )
                    )}
                  </Box>
                </div>
              )}
            />
          </List>
        </Grid>
      </Container>
    </div>
  )

  return (
    <Fragment>
      <AppBar position="static" className={classes.bg}>
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={2}>
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer("top", true)}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </Grid>
            <Grid item xs={9} lg={4}>
              <Link to="/home/">
                <Logo alt="arabicfootstepslogowhite" className={classes.logo} />
              </Link>
            </Grid>
          </Grid>

          <SwipeableDrawer
            anchor="top"
            open={state.top}
            onClose={toggleDrawer("top", false)}
            onOpen={toggleDrawer("top", true)}
          >
            {fullList("top")}
          </SwipeableDrawer>
        </Container>
      </AppBar>
    </Fragment>
  )
}

export default MainMenu
