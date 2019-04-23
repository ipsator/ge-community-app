import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="मॉड्यूल 1 - Topic 1" />
    <h1>Hi from the second page</h1>
    <p>Welcome to Module 1 - Topic 1</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
