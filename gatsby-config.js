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
          resolve: `gatsby-plugin-google-analytics`,
          options: {
            trackingId: "UA-139973494-1",
            // Puts tracking script in the head instead of the body
            // head: false,
            // // Setting this parameter is optional
            // anonymize: true,
            // // Setting this parameter is also optional
            // respectDNT: true,
            // // Avoids sending pageview hits from custom paths
            // exclude: ["/preview/**", "/do-not-track/me/too/"],
            // // Enables Google Optimize using your container Id
            // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
            // // Enables Google Optimize Experiment ID
            // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
            // // Set Variation ID. 0 for original 1,2,3....
            // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
            // // Any additional create only fields (optional)
            // sampleRate: 5,
            // siteSpeedSampleRate: 10,
            // cookieDomain: "mtsm.io",
          },
        }
    ],

}