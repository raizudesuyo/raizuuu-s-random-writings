import * as React from "react"
import _ from 'lodash'
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { SubTitle, Title } from "../styled/Shared"
import { SubNote, ArticleEntryContainer, ArticleEntry, ArticleEntriesContainer, ArticleEntriesContainerHeadline } from "../styled/Components/ArticleList"

const IndexPage = () => {
  const posts: PostQueryData = useStaticQuery(graphql`
    query MyQuery {
      allMdx(sort: {fields: frontmatter___last_modified_date, order: DESC}) {
        nodes {
          frontmatter {
            title
            subtitle
            written_date,
            tags
          }
          slug
        }
      }
    }  
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <SubTitle>Why is this here?</SubTitle>
      <p>This is an outlet of the person whoever is posting on this site. I might or might not be meant to be read by anyone, however if you're here already, you are very welcome.</p>
      <ArticleEntriesContainer>
        <ArticleEntriesContainerHeadline>Posts</ArticleEntriesContainerHeadline>
        { posts.allMdx.nodes.map((post) => {
          return (
            <ArticleEntryContainer>
              <ArticleEntry><Link to={post.slug}>{post.frontmatter.title}</Link> - {post.frontmatter.subtitle}</ArticleEntry>
              <SubNote>Written: {new Date(post.frontmatter.written_date).toLocaleDateString()}, Tags: { _.join(post.frontmatter.tags, ', ') }</SubNote>
            </ArticleEntryContainer>
            )
        }) }
      </ArticleEntriesContainer>
    </Layout>
  )
}

interface PostQueryData {
  allMdx: {
    nodes: [{
      frontmatter: {
        title: string;
        subtitle: string;
        written_date: string;
        tags: [string];
        published: boolean;
      }
      slug: string
    }]
  }
}

export default IndexPage