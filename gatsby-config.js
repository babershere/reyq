module.exports = {
  siteMetadata: {
    title: 'Rey Q',
    author: 'Rey',
    description: 'Personal Portfolio of Rey Qureshi',
  },
  pathPrefix: "/reyq/public",
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/rq.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
