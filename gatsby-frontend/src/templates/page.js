import React from "react"
import Layout from "../components/layout"
import Container from "@material-ui/core/Container"

export default ({ pageContext }) => (
  <Layout>
    <Container maxWidth="md">
      <h1>{pageContext.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Container>
  </Layout>
)
