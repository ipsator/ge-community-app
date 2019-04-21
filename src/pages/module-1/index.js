import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ModuleOne = () => (
  <Layout title="Module 1 - Intro">
    <SEO title="Module 1 - Intro" />
    {/* <h1>Module 1 Intro</h1> */}
    <h2>स्वास्थ्य कार्यकर्ता की भूमिका</h2>
    <ul>
      <li>
        एक स्वास्थ्य कार्यकर्ता द्धारा समाज को स्वास्थ्य के प्रति जागरूकता के
        लिये क्यों प्रोत्साहित करना चाहियें।
      </li>
      <li>एक स्वास्थ्य कार्यकर्ता की क्या भूमिका होनी चाहिये।</li>
      <li>
        एक स्वास्थ्य कार्यकर्ता क्या क्या कर सकती है। और उसकी सीमाऐ क्या है।
      </li>
    </ul>
    <h2>माँ और बच्चे की सेहत क्यों ज़रुरी</h2>
    <ul>
      <li>
        किसी भी समाज के लिये माँ बच्चे की सेहत एक अति महत्वपूर्ण लक्ष्य है
        क्योकि उनका स्वस्थ्य ही आने वाली पीढी के स्वस्थ्य को निर्धारित करता है।
      </li>
      <li>
        चित्र मे दिखाए गये हालात महिलाओ, बच्चों और उनके परिवारो के स्वास्थ्य और
        उत्तम जीवन जीने मे बाधक या जीवन को प्रभावित करते है।
      </li>
    </ul>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default ModuleOne
