import React from "react"
import Layout from "../components/layout"
import Header from "../components/homepage/Header"
import FeatureItems from "../components/homepage/FeatureItems"

export default ({ pageContext }) => (
  <Layout>
    <Header />
    <FeatureItems />
  </Layout>
)
