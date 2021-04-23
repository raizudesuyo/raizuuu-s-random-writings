import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { SmallNote } from './StyledText/SmallNote'

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <SmallNote>Personal Blog, Notes, Tutorials and Porfolio available to the public eye.</SmallNote>
    </div>
  </header>
)

export default Header
