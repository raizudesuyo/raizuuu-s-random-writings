import * as React from "react"
import _ from 'lodash'
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { SubTitle, Title } from "../styled/Shared"
import { SubNote, ArticleListContainer, ArticleListEntry} from "../styled/Components/ArticleList"

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


  console.log(posts)


  
  return (
    <Layout>
      <SEO title="Home" />
      <SubTitle>Welcome to my blog!</SubTitle>
      <p>If you got here because it is written on the resume I gave you, please don't tell anybody about my personal details. Otherwise feel free to read about anything</p>
      <>
        { posts.allMdx.nodes.map((post) => {
          return (
            <ArticleListContainer>
              <ArticleListEntry><Link to={post.slug}>{post.frontmatter.title}</Link> - {post.frontmatter.subtitle}</ArticleListEntry>
              <SubNote>Written: {new Date(post.frontmatter.written_date).toLocaleDateString()}, Tags: { _.join(post.frontmatter.tags, ', ') }</SubNote>
            </ArticleListContainer>
            )
        }) }
      </>
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
        tags: [string]
      }
      slug: string
    }]
  }
}

export default IndexPage