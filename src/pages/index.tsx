import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { loremIpsum } from "lorem-ipsum"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Welcome to my blog, if you got here because it is written on the resume I gave you, please don't tell anybody about it. Otherwise feel free to read about anything</p>
    <h3>Notes</h3>
    <p><Link to="/why-is-this-website-is-made-using-gatsby">Why is this website written in Gatsby</Link> - It's actually made with Gatsby, it's not like I need to, I just want to!</p>
    <h3>TODO:</h3>
    <ul>
      <li><b>[For students]</b> Here is the cheapest way to make a website for school projects</li>
      <li><b>[Ongoing for life]</b> My Journey to Japanese Fluency</li>
        <ul>
          <li>
            Isekai RPG Let's Play Series
            <br/>
            This is actually me playing a NES RPG in Japanese and doing the translation with the best of my abilities live streamed on twitch, I'll make a writeup here and maybe upload a whole video on youtube
          </li>
        </ul>
        <li>Notes from a 1 of a hundred can't do anything productive introvert</li>
        <li>From virgin to chad in front of a camera</li>
    </ul>
    <p>Everything is planned to have a video accompaniment, but I don't have time to make one as of yet</p>
    <p>Now that I have uploaded this to the internet, nothing written here will probably get done</p>
  </Layout>
)

export default IndexPage