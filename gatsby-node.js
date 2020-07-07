const path = require('path');
const artistsData = require('./src/data/artists.json');

exports.createPages = async ({
  actions,
  graphql,
  reporter
}) => {
  const { createPage } = actions;

  const artistTemplate = path.resolve('src/templates/Artist.jsx');

  const result = await graphql(``)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query', result.errors)
  }

  artistsData.forEach((artist) => {
    createPage({
      path: `artists/${artist.name}`,
      component: artistTemplate,
      context: artist
    })
  }) 
  
}
