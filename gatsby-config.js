module.exports = {
  siteMetadata: {
    siteUrl: `https://laurenwilkinson.co.uk`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-umami',
      options: {
        websiteId: 'd5500dbf-4905-476e-aae6-adb16ff37add',
        srcUrl: 'https://cloud.umami.is/script.js',
      },
    },
  ],
}
