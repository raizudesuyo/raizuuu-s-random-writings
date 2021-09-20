import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { loremIpsum } from "lorem-ipsum"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my blog!</h1>
    <p>If you got here because it is written on the resume I gave you, please don't tell anybody about it. Otherwise feel free to read about anything</p>
    <p><Link to="/why-is-this-website-is-made-using-gatsby">Why is this website written in Gatsby</Link> - It's actually made with Gatsby, it's not like I need to, I just want to!</p>
    <p><Link to="/immortalized-deed">Immortalized Deed</Link> - NFT collection as a token of appreciation!</p>
    <p><Link to="/on-becoming-a-youtuber">On Becoming a Youtuber</Link> - filling a void.</p>
  </Layout>
)

export default IndexPage