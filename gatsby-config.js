module.exports = {
  siteMetadata: {
    title: `Daniel Balloch`,
    description: `Front end web developer skilled in prototyping, UI/UX, responsive design and eccomerce solutions. Call 022 0780868 or email
    danielkingballoch@gmail.com for inquiries.`,
    author: `@danielballoch`,
  },
  plugins: [
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-177747070-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "danielballoch.com",
      },
    },
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
    {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${__dirname}/src/blog`,
          name: 'posts',
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
    },
    
    

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
