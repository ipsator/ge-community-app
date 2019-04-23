import React from "react"
// import { Link } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"
import Slides from "./slide"

const Article = ({ data }) => (
  <Layout>
    <SEO title={data.title} />
    <Slides data={data.slides} />
  </Layout>
)

export default Article
