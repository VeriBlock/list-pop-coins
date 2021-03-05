module.exports = {
  siteMetadata: {
    title: "List of POP-enabled coins",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
      {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "coins",
        path: `${__dirname}/coins/`,
      },
      __key: "coins",
    },
    `gatsby-transformer-remark`
  ],
};
