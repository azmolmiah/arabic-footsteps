import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Icon from "@material-ui/core/Icon"

const FeatureItems = () => {
  return (
    <div id="cards" style={{ padding: "5% 0" }}>
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
                <Grid item lg={6} key={featureItem.node.id}>
                  <Card className="featureCards" style={{ boxShadow: "none" }}>
                    <Link to={`/features/${featureItem.node.slug}`}>
                      <Box
                        border={0.5}
                        textAlign="center"
                        borderColor="grey.300"
                        m={2}
                      >
                        <Icon style={{ fontSize: "5rem", color: "#253a52" }}>
                          {featureItem.node.acf.feature_icon_name}
                        </Icon>
                        <h3>{featureItem.node.title}</h3>
                        <Typography
                          variant="body1"
                          dangerouslySetInnerHTML={{
                            __html: featureItem.node.excerpt,
                          }}
                        ></Typography>
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
