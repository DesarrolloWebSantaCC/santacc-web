import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// import './trabajos.scss'

import Trabajo from '../../components/trabajo/trabajo'
import BotonArriba from '../../components/boton-arriba/boton-arriba'
import MasBoton from '../../components/mas-boton/mas-boton'

/**
 * This component contains the TrabajosTemplate component.
 * @returns {component} the TrabajosTemplate component.
 */

const Page = styled.div`
  @extend %page; 
  text-align: center;
`

/**
 * @typedef {Object} props
 * @property {Object} data - Content data to be rendered in the view.
 * @ignore
 */
/**
 *
 * @param {props}
 * @constructor
 * Page with list of works.
 */

class TrabajosTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }
  constructor (props) {
    super(props)
    this.state = {
      abierto: false
    }
  }
  showMore = () => {
    this.setState({ abierto: true })
  }
  render () {
    const { data } = this.props
    const posts = data.allWordpressWpTrabajos.edges
    const trabajos = posts.sort((a, b) => a.node.menu_order - b.node.menu_order).slice(0, this.state.abierto ? posts.length : 12)
    return (
      <Page>
        {
          trabajos.map((trabajo, i) => <Trabajo cliente={trabajo.node.acf.cliente.name} campana={trabajo.node.acf.campana} tipo={trabajo.node.acf.tipo} slug={trabajo.node.slug} sizes={trabajo.node.acf.imagen.localFile.childImageSharp.sizes} key={i} />)
        }
        {
          this.state.abierto === true ? <BotonArriba /> : <MasBoton showMore={this.showMore} />
        }
      </Page>
    )
  }
}

export default TrabajosTemplate

export const pageQuery = graphql`
  query MyQuery {
    allWordpressWpTrabajos {
      edges {
        node {
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
              localFile {
                childImageSharp {
                  # Specify the image processing steps right in the query
                  # Makes it trivial to update as your page's design changes.
                  sizes(
                      maxWidth: 604
                      quality: 70
                      traceSVG: {
                        color: "#27daf3"
                        turnPolicy: TURNPOLICY_MINORITY
                        blackOnWhite: false
                      }
                    ) {
                    ...GatsbyImageSharpSizes_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
