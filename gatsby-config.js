module.exports = {
  siteMetadata: {
    title: `Raizuuu's Random Writings`,
    description: `Raizuuu's not so personal writings available to the public, he thinks this might become useful to somebody, also he wants to run some ads because he is a greedy mofo.`,
    author: `raizuuu`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              title: 'raizuuu\'s random writings', // website title
              separator: '|', // default
              author: 'raizuuu',
              fontColor: '#000000', // defaults to white (#ffffff)
              backround: '#FFC247',
              titleFontSize: 96, // default
              subtitleFontSize: 60, // default
              fontStyle: 'monospace', // default
              fontFile: require.resolve('./src/fonts/FreePixel.ttf'), // will override fontStyle - path to custom TTF font
              useFrontmatterSlug: false // default, if true it will use the slug defined in the post frontmatter
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts/`,
        name: 'posts'
      }
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.md', '.mdx'],
        defaultLayouts: {
          default: require.resolve("./src/components/layout.tsx"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],  
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
