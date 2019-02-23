module.exports = {
    siteMetadata: {
      title: "Motasem's Personal Webiste",
      author: "Motasem Halawani",
      description: ""
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            }
        }
    ],
}