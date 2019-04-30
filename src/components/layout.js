/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ title, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={title || data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 2.45rem`,
            paddingTop: 0,
            minHeight: `100%`,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              position: `fixed`,
              bottom: 0,
              background: "white",
              width: `calc( 100% - 2.175rem )`,
              textAlign: `center`,
              fontSize: `0.8rem`,
              color: `#777`,
              padding: `0.5rem 0`,
              fontFamily: `sans-serif`,
            }}
          >
            © {new Date().getFullYear()}, Built by GE Healthcare
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
