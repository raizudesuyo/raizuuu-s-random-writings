/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import GlobalFonts from '../fonts/fonts';

import Header from "./header"
import { GlobalStyle } from "../styled/Global";
import { SmallNote } from "../styled/Shared";

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
      <GlobalFonts />
      <GlobalStyle />
      
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          backgroundColor: "#FFC247"
        }}
      >
        <main
          style={{
            paddingLeft: '15pt',
            paddingRight: '15pt',
            paddingBottom: '20pt'
          }}
        >
          {children}
        </main>
        <footer>
          <SmallNote><a href="/">Back to Main Page</a></SmallNote>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
