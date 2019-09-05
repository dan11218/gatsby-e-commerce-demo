/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */

    siteMetadata: {
        title: `Gatsbilla 🦖`,
    },
    plugins: [
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
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                /*
                 * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
                 * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
                 */

                // Setting the baseurl to be the below pulls data from the blog, this takes 10 minutes
                // baseUrl: `usabilla.com/blog`,
                // protocol: `https`,

                // The below URL comes from the Gatsby wordpress source tutorial/

                // baseUrl: `gatsbilla.wordpress.com` <-- this should be the slug once WP has updated.
                baseUrl: `gatsbilla.wordpress.com`,
                protocol: `https`,
                // The protocol. This can be http or https.

                // Indicates whether the site is hosted on wordpress.com.
                // If false, then the assumption is made that the site is self hosted.
                // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
                // If your site is hosted on wordpress.org, then set this to false.
                hostingWPCOM: true,
                // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
                // This feature is untested for sites hosted on WordPress.com
                useACF: false,
                includedRoutes: [
                    "**/posts",
                    "**/pages",
                    "**/media",
                    "**/categories",
                    "**/tags",
                    "**/taxonomies",
                    "**/users",
                ]
            },
        },

    ]
};



