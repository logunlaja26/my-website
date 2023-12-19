/**
 * Configure your Gatsby site with this file..
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.ly-doc.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL
module.exports = {
  siteMetadata: {
    title: "Technology & experiences",
    author: "Ly Ogunlaja",
    description: `My personal site displaying my work and thougths to you`,
    siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "G-X0QLFMRYDM",
        // this option places the tracking script into the head of the DOM.
        head: true,
        anonymize: true,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "9sdwt5q8qc65",
        accessToken: "322K9HOMUnkOuTkYpUhUD5JLn2LnTqSTNci6e_IeRbU",
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.ly-doc.com`,
        stripQueryString: true,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      sitemap: "https://www.ly-doc.com/sitemap-index.xml",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
  ],
}
