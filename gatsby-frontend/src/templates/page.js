import React from "react"
import Layout from "../components/layout"
import Container from "@material-ui/core/Container"
import PageTopHeader from "../components/pageTopHeader"

export default ({ pageContext }) => (
  <Layout>
    <PageTopHeader text={pageContext.title} />
    <Container maxWidth="md">
      <p dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Container>
  </Layout>
)
