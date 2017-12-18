module.exports = {
  siteMetadata: {
    title: `Santa Compañía Creativa`,
    subtitle: ``,
    siteUrl: `https://santacc.es`
  },
  plugins: [
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Santa Compañía Creativa',
        short_name: 'SantaCC',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'minimal-ui',
        icons: [
          {
            src: `/favicon.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/favicon.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `admin.santacc.es`, // Change to your WordPress backend URL
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: false
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#ffffff`,
        showSpinner: true,
        parent: '#divs_contenidos'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-9919882-7', // Change to your Google Analytics ID
        anonymize: false
      }
    },
    `gatsby-transformer-documentationjs`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `source`,
        path: `./src`
      }
    }
  ]
}
