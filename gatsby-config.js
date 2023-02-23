module.exports = {
  siteMetadata: {
    title: `Headless Test Site`,
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://dev-headless-test-site.pantheonsite.io/`,
      },
    },
    `gatsby-plugin-sass`,
  ],
};