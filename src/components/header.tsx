import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { SmallNote, Title, TitleContainer } from "../styled/Shared"

const Header = ({ siteTitle }) => (
  <header>
    <TitleContainer
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `1rem 0`,
      }}
    >
      <Title style={{ margin: 0, fontSize: '70px', }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Title>
      <SmallNote>Personal Blog, Notes, Tutorials and Porfolio.</SmallNote>
    </TitleContainer>
  </header>
)

export default Header
