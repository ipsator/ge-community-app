import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="App" keywords={[`ge`, `application`, `community`]} />
    <h1>नमस्ते</h1>
    <p>आपका स्वागत है आपकी नई GE मेरी सखी साइट पर।</p>
    <p>नीचे नवीनतम संस्करण MeriSakhi-Production-v9-20190513.apk डाउनलोड करें।</p>
    <br />
    <Link
      style={{
        padding: 20,
        background: "rebeccapurple",
        borderRadius: 4,
        color: "white",
        textDecoration: "none",
      }}
      to="/build/MeriSakhi-Production-v9-20190513.apk"
    >
      Download App
    </Link>
  </Layout>
)

export default IndexPage
