module.exports = {
  siteMetadata: {
    title: `Daniel Balloch`,
    description: `Front end web developer skilled in prototyping, UI/UX, responsive design and eccomerce solutions. Call 022 0780868 or email
    danielkingballoch@gmail.com for inquiries.`,
    author: `@danielballoch`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${__dirname}/src/pages/projects`,
          name: 'projects',
        },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
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
        icon: `src/images/tinyhead.jpg`, // This path is relative to the root of the site.
      },
    
    },
    {
        resolve: `gatsby-plugin-emotion`,
        options: {
          // Accepts all options defined by `babel-plugin-emotion` plugin.
        },
    },
    {
        resolve: `gatsby-plugin-transition-link`,
        options: {
            layout: require.resolve(`./src/components/layout.js`)
        }
    }
    

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
