import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Container from "@material-ui/core/Container"

const TopPageHeader = ({ text }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          design: file(relativePath: { eq: "main.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
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
              fluid={data.design.childImageSharp.fluid}
              style={{
                background: "cover no-repeat center center",
                boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.6)",
                padding: "2rem",
                color: "white",
              }}
            >
              <Container maxWidth="md">
                <h1>{text}</h1>
              </Container>
            </BackgroundImage>
          }{" "}
        </>
      )}
    />
  )
}

export default TopPageHeader
