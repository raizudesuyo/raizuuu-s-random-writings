import * as React from "react"
import _ from 'lodash'
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { SubTitle, Title } from "../styled/Shared"
import { SubNote, ArticleEntryContainer, ArticleEntry, ArticleEntriesContainer, ArticleEntriesContainerHeadline } from "../styled/Components/ArticleList"

const IndexPage = () => {
  const files: AllFileData = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        sort: {fields: childrenMdx___frontmatter___last_modified_date, order: DESC}
        filter: {childrenMdx: {elemMatch: {frontmatter: {published: {eq: true}}}}}
      ) {
        nodes {
          id
          childMdx {
            id
            slug
            frontmatter {
              title
              subtitle
              written_date
              tags
            }
          }
          ext
          relativeDirectory
        }
        totalCount
      }
    }
  `)

  const mainTypes = _.uniqBy(files.allFile.nodes, 'relativeDirectory').map((file) => file.relativeDirectory);

  return (
    <Layout>
      <SEO title="Home" />
      <SubTitle>Why is this here?</SubTitle>
      <p>This is an outlet of the person whoever is posting on this site. I might or might not be meant to be read by anyone, however if you're here already, you are very welcome.</p>
      <ArticleEntriesContainer>
        { 
          mainTypes.map((postType) => 
            (<>
              <ArticleEntriesContainerHeadline>{_.capitalize(postType)}</ArticleEntriesContainerHeadline>
              {
                _.filter(files.allFile.nodes, (node) => node.relativeDirectory === postType).map((post) => {
                  const { slug } = post.childMdx;
                  const { written_date, title, subtitle, tags } = post.childMdx.frontmatter;
                  const tagString = _.join(tags, ', ');

                  return (
                    <ArticleEntryContainer>
                      <ArticleEntry><Link to={slug}>{title}</Link> - { subtitle }</ArticleEntry>
                      <SubNote>Written: {new Date(written_date).toLocaleDateString()}, Tags: { tagString }</SubNote>
                    </ArticleEntryContainer>
                  )
                })
              }
            </>)
          )
        }
      </ArticleEntriesContainer>
    </Layout>
  )
}

interface AllFileData {
  allFile: {
    nodes: [{
      id: string,
      relativePath: string
      childMdx: {
        id: string,
        slug: string,
        frontmatter: {
          title: string,
          subtitle: string,
          written_date: string,
          tags: [string]
        }
      },
      ext: string
      relativeDirectory: string
    }],
    totalCount: number
  }
}

export default IndexPage