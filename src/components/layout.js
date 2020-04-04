/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, withAssetPrefix } from "gatsby"
import { ThemeProvider } from 'emotion-theming';
import theme from '../../config/theme';

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
      <ThemeProvider theme={theme}>
        <main>{children}</main>
        <footer style={{textAlign: 'center'}}>
          © {new Date().getFullYear()}, 
          {` `}
          <a href="https://www.danbwebdesign.com">Daniel Balloch</a>
        </footer>
        </ThemeProvider>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
