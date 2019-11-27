import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Icon from "@material-ui/core/Icon"

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#253a52",
    paddingTop: "1rem",
    color: "white",
  },
  btmStrip: {
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    padding: "1% 0",
    marginTop: "1rem",
    textAlign: "center",
  },
}))

const FooterMenu = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container justify="space-between">
          <Grid item xs={12} lg={5}>
            <h1>Arabic Footsteps</h1>
            During the last 10 years between 2009 till 2019, our tuition has
            been on offer in classroom's, in Nelson and around the UK. However,
            for the first time, we are now opening up classes to the public at
            large via online platforms such as Skype and Zoom.
          </Grid>
          <Grid item xs={12} lg={3}>
            <List>
              <StaticQuery
                query={graphql`
                  {
                    allWordpressWpApiMenusMenusItems(
                      filter: { name: { eq: "Footer menu" } }
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
          <Grid item xs={12} lg={3}></Grid>
        </Grid>
      </Container>

      <div className={classes.btmStrip}>
        <Container maxWidth="md">
          <Grid container justify="center">
            <h5>All rights reserved {new Date().getFullYear()}</h5>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default FooterMenu
