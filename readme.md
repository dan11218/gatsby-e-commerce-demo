Gatsby on usabilla.com
===


##1. environment setup
This branch is the development branch of a rebuild of usabilla.com in Gatsby

Make sure you have `npm`, `nvm` and `node` installed, which can be done using `brew`.

Install Gatsby CLI tools: 
`npm i -g gatsby-cli`

Gatsby requires node version 8 or higher, check your version with `node -v`. If it's <8, use `nvm use 8` to use version 8.

Test by running `gatsby --version` or `gatsby info`

If there are no errors, you can run `gatsby develop`. 

The website is now running on `localhost:8000`.

##2. Additionally Installed Plugins    

### node-sass gatsby-plugin-sass
https://www.gatsbyjs.org/packages/gatsby-plugin-sass/

You can simply create `.scss` module files and import those into your `.js` modules, and these will automatically be compiled into `.css`

###Gatsby-transformer-remark

This makes it possbile to read from markdown

###gatsby-plugin-typography react-typography typography typography-theme-fairy-gates

Handles standard typography css

### gatsby-source-wordpress
Handles pulling data from wordpress

Docs: https://www.gatsbyjs.org/packages/gatsby-source-wordpress/?=wordpress

TODO (possibly):

#### gatsby-plugin-react-helmet react-helmet
A react SEO head component

#### gatsby-plugin-offline
Add service workers for better offline functionality of the web app

#### gatsby-plugin-manifest
Add a webmanifest that tells the browser what type of app this is, serves favicon, and manages the look and feel of the icon on your mobile





## 3. Using GraphQL

https://www.howtographql.com

Go to `localhost:8000/__graphql` for a graphQL IDE (GraphiQL)

