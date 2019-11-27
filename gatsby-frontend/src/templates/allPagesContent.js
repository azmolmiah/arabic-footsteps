import React from "react"
import Layout from "../components/layout"
import PageTopHeader from "../components/pageTopHeader"

export default ({ pageContext }) => (
  <Layout>
    <PageTopHeader text={pageContext.title} />
  </Layout>
)
