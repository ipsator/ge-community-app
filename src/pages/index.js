import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ge`, `application`, `community`]} />
    <h1>नमस्ते</h1>
    <p>आपका स्वागत है आपकी नई GE मेरी सखी साइट पर।</p>
  </Layout>
)

export default IndexPage
