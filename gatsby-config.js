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
    //prismic
    {
        resolve: 'gatsby-source-prismic',
        options: {
          // The name of your prismic.io repository. This is required.
          // Example: 'gatsby-source-prismic-test-site' if your prismic.io address
          // is 'gatsby-source-prismic-test-site.prismic.io'.
          repositoryName: 'pascoes',
    
          // Set a link resolver function used to process links in your content.
          // Fields with rich text formatting or links to internal content use this
          // function to generate the correct link URL.
          // The document node, field key (i.e. API ID), and field value are
          // provided to the function, as seen below. This allows you to use
          // different link resolver logic for each field if necessary.
          // See: https://prismic.io/docs/javascript/query-the-api/link-resolving
          linkResolver: ({ node, key, value }) => (doc) => {
            `/${doc.uid}`
          },
    
          // Set a list of links to fetch and be made available in your link
          // resolver function.
          // See: https://prismic.io/docs/javascript/query-the-api/fetch-linked-document-fields
          fetchLinks: [
            // Your list of links
          ],
    
          // Set an HTML serializer function used to process formatted content.
          // Fields with rich text formatting use this function to generate the
          // correct HTML.
          // The document node, field key (i.e. API ID), and field value are
          // provided to the function, as seen below. This allows you to use
          // different HTML serializer logic for each field if necessary.
          // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
          htmlSerializer: ({ node, key, value }) => (
            type,
            element,
            content,
            children,
          ) => {
            prismicHtmlSerializer
          },
    
          // Provide an object of Prismic custom type JSON schemas to load into
          // Gatsby. This is required.
          schemas: {
            blogpage: require('./src/prismic-schemas/blog_page.json'),
            blogpost: require('./src/prismic-schemas/blog_post.json'),
          },
    
          // Set a default language when fetching documents. The default value is
          // '*' which will fetch all languages.
          // See: https://prismic.io/docs/javascript/query-the-api/query-by-language
          lang: '*',
    
          // Add the Prismic Toolbar script to the site. Defaults to false.
          // Set to "legacy" if your repository requires the older toolbar script.
          // See: https://prismic.io/docs/rest-api/beyond-the-api/the-preview-feature
          prismicToolbar: true,
    
          // Set a function to determine if images are downloaded locally and made
          // available for gatsby-transformer-sharp for use with gatsby-image.
          // The document node, field key (i.e. API ID), and field value are
          // provided to the function, as seen below. This allows you to use
          // different logic for each field if necessary.
          // This defaults to always return false.
          shouldDownloadImage: ({ node, key, value }) => {
            // Return true to download the image or false to skip.
          },
    
          // Provide a default set of Imgix image transformations applied to
          // Imgix-backed gatsby-image fields. These options will override the
          // defaults set by Prismic.
          // See: https://docs.imgix.com/apis/url
          imageImgixParams: {
            auto: 'compress,format',
            fit: 'max',
            q: 50,
          },
    
          // Provide a default set of Imgix image transformations applied to
          // the placeholder images of Imgix-backed gatsby-image fields. These
          // parameters will be applied over those provided in the above
          // `imageImgixParams` option.
          // See: https://docs.imgix.com/apis/url
          imagePlaceholderImgixParams: {
            w: 100,
            blur: 15,
            q: 50,
          },
    
          // Set the prefix for the filename where type paths for your schemas are
          // stored. The filename will include the MD5 hash of your schemas after
          // the prefix.
          // This defaults to 'prismic-typepaths---${repositoryName}'.
          typePathsFilenamePrefix:
            'prismic-typepaths---danielballoch',
        },
      },

    
    

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
