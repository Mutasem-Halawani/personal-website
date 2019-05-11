module.exports = {
    siteMetadata: {
      title: "Motasem's Personal Website",
      author: "Motasem Halawani",
      description: "Motasem Halawani Personal Website"
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
        },
        {
          resolve: 'gatsby-plugin-gtag',
          options: {
            // your google analytics tracking id
            trackingId: 'UA-139973494-1',
            // Puts tracking script in the head instead of the body
            head: false,
            // enable ip anonymization
            anonymize: true,
          },
        },
    ],

}