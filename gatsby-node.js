const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for Wordpress pages (route : /{slug})
// Will create pages for Wordpress posts (route : /post/{slug})
exports.createPages = async ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  await new Promise((resolve, reject) => {
    graphql(
      `
      {
        allWordpressWpTrabajos {
          edges {
            node {
              id
              title
              slug
              status
              template
              menu_order
              acf {
                cliente {
                  name
                }
                campana
                tipo {
                  name
                }
                descripcion
                imagen {
                  source_url
                }
                piezas {
                  url
                  imagen_de_la_pieza {
                    source_url
                  }
                  tipo_de_pieza
                  campana
                  descripcion
                }
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }
      const trabajos = result.data.allWordpressWpTrabajos.edges
      const postTemplate = path.resolve(`./src/templates/campana/campana.js`)
      // We want to create a detailed page for each
      // post node. We'll just use the Wordpress Slug for the slug.
      // The Post ID is prefixed with 'POST_'
      _.each(trabajos, edge => {
        createPage({
          path: `trabajos/${edge.node.slug}`,
          component: slash(postTemplate),
          context: {
            id: edge.node.id
          }
        })
      })
      const pageTemplate = path.resolve(`./src/templates/trabajos/trabajos.js`)
      createPage({
        path: `/`,
        component: slash(pageTemplate)
      })
      resolve()
    })
      .catch(console.log)
  })
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { deletePage } = boundActionCreators
  return new Promise((resolve, reject) => {
    if (page.path.endsWith(`.test/`)) {
      deletePage(page)
    }
    resolve()
  })
}
