import React from "react"
import Layout from "../components/layout"
import Header from "../components/homepage/Header"
import FeatureItems from "../components/homepage/FeatureItems"
import Testimonial from "../components/homepage/Testimonials"

export default ({ pageContext }) => (
  <Layout>
    <Header />
    <FeatureItems />
    <Testimonial />
  </Layout>
)
