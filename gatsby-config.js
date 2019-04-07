module.exports = {
    siteMetadata: {
      title: "Motasem's Personal Webiste",
      author: "Motasem Halawani",
      description: ""
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            }
        },
        {
            resolve: 'gatsby-plugin-html-attributes',
            options: {
              lang: 'en'
            }
          }
    ],
}