import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          webdev: file(relativePath: { eq: "arabicfootstepslogowhite.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                base64
                ...GatsbyImageSharpFluid
              }
            }
          }
          design: file(relativePath: { eq: "main.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                base64
                ...GatsbyImageSharpFluid
              }
            }
          }
          writing: file(relativePath: { eq: "welcome.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                base64
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <>
          {" "}
          {
            <BackgroundImage
              tag="section"
              fluid={data.design.childImageSharp.fluid}
              style={{
                background: "cover center center",
                padding: "3% 0",
                boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.7)",
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              <Container maxWidth="md" className="header-text">
                <Box textAlign="center">
                  <Img
                    className="headerLogo"
                    fluid={data.writing.childImageSharp.fluid}
                    alt=""
                    style={{
                      maxWidth: "500px",
                      height: "auto",
                      margin: "0 auto 2rem auto",
                    }}
                  />
                </Box>
                <Box textAlign="center" mb={4}>
                  <Button size="large" variant="contained">
                    <a href="#cards">Discover more</a>
                  </Button>
                </Box>
              </Container>
            </BackgroundImage>
          }{" "}
        </>
      )}
    />
  )
}

export default Header
