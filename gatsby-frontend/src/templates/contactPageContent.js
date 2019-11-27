import React from "react"
import Layout from "../components/layout"
import PageTopHeader from "../components/pageTopHeader"
import ContactForm from "../components/contact/ContactForm"

export default ({ pageContext }) => (
  <Layout>
    <PageTopHeader text={pageContext.title} />
    <ContactForm />
  </Layout>
)
