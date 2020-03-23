/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    pathPrefix: `/usabilla-demo`,
}


module.exports = {
    /* Your site config here */

    siteMetadata: {
        title: `Gatsbilla 🦖`,
    },
    plugins: [
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
              id: "GTM-MGQ4ZD4",
        
              // Include GTM in development.
              // Defaults to false meaning GTM will only be loaded in production.
              includeInDevelopment: true,
        
              // datalayer to be set before GTM is loaded
              // should be an object or a function that is executed in the browser
              // Defaults to null
              defaultDataLayer: { platform: "gatsby" },
        
              // Specify optional GTM environment details.
            //   gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
            //   gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
            //   dataLayerName: "YOUR_DATA_LAYER_NAME",
            },
        },
        
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-emotion`,
        `gatsby-transformer-remark`,

        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        // {
        //     resolve: `gatsby-source-wordpress`,
        //     options: {
        //         /*
        //          * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
        //          * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
        //          */
        //
        //         // Setting the baseurl to be the below pulls data from the blog, this takes 10 minutes
        //         // baseUrl: `usabilla.com/blog`,
        //         // protocol: `https`,
        //
        //         // The below URL comes from the Gatsby wordpress source tutorial/
        //
        //         // baseUrl: `gatsbilla.wordpress.com` <-- this should be the slug once WP has updated.
        //         baseUrl: `yoni-dev-usabilla-blog.webslice.eu/blog`,
        //         protocol: `http`,
        //         // The protocol. This can be http or https.
        //
        //         // Indicates whether the site is hosted on wordpress.com.
        //         // If false, then the assumption is made that the site is self hosted.
        //         // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        //         // If your site is hosted on wordpress.org, then set this to false.
        //         hostingWPCOM: false,
        //         // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
        //         // This feature is untested for sites hosted on WordPress.com
        //         useACF: true,
        //         includedRoutes: [
        //             "**/pages",
        //             "**/categories",
        //             "**/tags",
        //             "**/taxonomies",
        //             "**/users",
        //         ],
        //         excludeRoutes: [
        //             "**/posts",
        //             "**/media",
        //         ]
        //     },
        // },

    ]
};



