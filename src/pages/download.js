import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="App" keywords={[`ge`, `application`, `community`]} />
    <h1>नमस्ते</h1>
    <p>आपका स्वागत है आपकी नई GE मेरी सखी साइट पर।</p>
    <p>नीचे नवीनतम संस्करण MeriSakhi-Production-v10-20190530.apk डाउनलोड करें।</p>
    <br />
    <a
      target="_blank"
      style={{
        padding: 20,
        background: "rebeccapurple",
        borderRadius: 4,
        color: "white",
        textDecoration: "none",
      }}
      href="https://github.com/ipsator/ge-community-app/releases/download/v10/MeriSakhi-Production-v10-20190530.apk"
    >
      Download App
    </a>
  </Layout>
)

export default IndexPage
