const path = require('path');
const artistsData = require('./src/data/artists.json');

exports.createPages = async ({
  actions,
}) => {
  const { createPage } = actions;

  const artistTemplate = path.resolve('src/templates/Artist.jsx');

  artistsData.forEach((artist) => {
    const path = `/artists/${artist.slug}`;
    createPage({
      path,
      component: artistTemplate,
      context: {
        ...artist
      }
    })
  }) 
  
}
