/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
      title: 'Ly Ogunlaja | Technology and experiences',
      author: 'Ly Ogunlaja'
  },
  plugins: [
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: 'G-X0QLFMRYDM',
          // this option places the tracking script into the head of the DOM
          head: true,
          anonymize: true,
        },
      },
      'gatsby-plugin-react-helmet',
      {
          resolve: 'gatsby-source-contentful',
          options: {
              spaceId: '9sdwt5q8qc65',
              accessToken: '322K9HOMUnkOuTkYpUhUD5JLn2LnTqSTNci6e_IeRbU'
          }
      },
      {
        resolve: `gatsby-plugin-canonical-urls`,
        options: {
          siteUrl: `https://www.ly-doc.com`,
          stripQueryString: true,
        },
      },
      'gatsby-plugin-sass',
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'src',
              path: `${__dirname}/src/`
          }
      },
      'gatsby-plugin-sharp',
      {
          resolve: 'gatsby-transformer-remark',
          options: {
              plugins: [
                  'gatsby-remark-relative-images',
                  {
                      resolve: 'gatsby-remark-images',
                      options: {
                          maxWidth: 750,
                          linkImagesToOriginal: false
                      }
                  }
              ]
          }
      }
  ]
}