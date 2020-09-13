console.log("ENV", process.env)
console.log("ENV GOOGLE", process.env.GOOGLE_MAP_API_KEY)

module.exports = {
  siteMetadata: {
    title: `Chyba Ty Tattoo`,
    description: `Chyba Ty Tattoo`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-scroll-reveal`,
    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-anchor-links',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { 
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chyba Ty Tattoo`,
        short_name: `Chyba Ty`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#D3D3D3`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\inline\.svg/ // See below to configure properly
        }
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Unica One', 'Exo 2', 'Montserrat']
        }
      }
    }
  ],
}
