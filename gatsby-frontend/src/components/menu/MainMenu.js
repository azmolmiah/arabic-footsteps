import React, { Fragment, useState } from "react"
import { graphql, StaticQuery, Link } from "gatsby"

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
  logo: {
    padding: "1rem 0",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "auto",
      margin: "auto",
    },
  },
  topNavBtn: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
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
            <Link to="/home">
              <img
                src="./img/arabicfootstepslogowhite.png"
                alt="arabicfootstepslogowhite"
                className={classes.logo}
              />
            </Link>
          </Container>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={6} lg={5}>
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
                    {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                      item => (
                        <ListItem button key={item.title}>
                          <Link to={item.object_slug}>
                            <ListItemText primary={item.title} />
                          </Link>
                        </ListItem>
                      )
                    )}
                  </div>
                )}
              />
            </List>
          </Grid>
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
            <Grid>
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
            <Grid>
              <Link to="/home">
                <img
                  className={classes.logo}
                  src="./img/arabicfootstepslogowhite.png"
                  alt="logo"
                />
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
