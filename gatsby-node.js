const path = require('path');
const artistsData = require('./src/data/artists.json');

exports.createPages = async ({
  actions,
  graphql,
  reporter
}) => {
  const { createPage } = actions;

  const artistTemplate = path.resolve('src/templates/Artist.jsx');

  artistsData.forEach((artist) => {
    const path = `/artists/${artist.name}`;
    createPage({
      path,
      component: artistTemplate,
      context: {
        path,
        ...artist
      }
    })
  }) 
  
}
