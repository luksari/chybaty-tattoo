module.exports = {
  siteMetadata: {
    title: `Chyba Ty Tattoo`,
    description: `Chyba Ty Tattoo | Styl | Nagrania | Ubrania`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chyba Ty Tattoo`,
        short_name: `Chyba Ty`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
       options: {
         threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
         once: true, // Defines if animation needs to be launched once
       }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Unica One', 'Exo 2']
        }
      }
    }
  ],
}
