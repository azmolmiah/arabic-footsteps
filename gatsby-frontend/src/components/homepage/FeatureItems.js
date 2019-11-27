import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Icon from "@material-ui/core/Icon"

const useStyles = makeStyles(() => ({
  root: { padding: "5% 0" },
  card: {
    "&:hover": {
      backgroundColor: "#E0E0E0",
    },
    boxShadow: "none",
  },
  icon: {
    fontSize: "5rem",
    color: "#253a52",
  },
}))

const FeatureItems = () => {
  const classes = useStyles()
  return (
    <div id="cards" className={classes.root}>
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <StaticQuery
            query={graphql`
              {
                allWordpressWpFeatures {
                  edges {
                    node {
                      id
                      slug
                      title
                      excerpt
                      content
                      acf {
                        feature_icon_name
                      }
                    }
                  }
                }
              }
            `}
            render={props =>
              props.allWordpressWpFeatures.edges.map(featureItem => (
                <Grid item lg={4} key={featureItem.node.id}>
                  <Card className={classes.card}>
                    <Link to={`/features/${featureItem.node.slug}`}>
                      <Box
                        border={0.5}
                        textAlign="center"
                        borderColor="grey.300"
                        m={2}
                      >
                        <Icon className={classes.icon}>
                          {featureItem.node.acf.feature_icon_name}
                        </Icon>
                        <h3>{featureItem.node.title}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: featureItem.node.excerpt,
                          }}
                        />
                      </Box>
                    </Link>
                  </Card>
                </Grid>
              ))
            }
          />
        </Grid>
      </Container>
    </div>
  )
}

export default FeatureItems
