const path = require('path')

module.exports = {
  folders: [
    /* Static folders to copy to the build */
    'avisolegal',
    'firmas'
  ],
  buildPaths: {
    /* Publish path - The path to the web server doc rootfrom where the HTML will be served */
    publicPath: path.join(path.dirname(__dirname), 'santacc-new', 'httpdocs'),
    /* Build path - Temporary path to the build, where it will be first moved once built */
    newPath: path.join(path.dirname(__dirname), 'santacc-new', 'httpdocs.new'),
    /* Old path - Path name to which the current publish path will be renamed / moved to */
    oldPath: path.join(path.dirname(__dirname), 'santacc-new', 'httpdocs.old')
  }
}
