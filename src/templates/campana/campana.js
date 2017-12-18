import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Material from '../../components/material'
import MaterialFlechas from '../../components/material-flechas'
import PopupImagen from '../../components/popup-imagen'
import CerrarBoton from '../../components/cerrar-boton'

// import './campana.scss'

const StyledCampana = styled.div`
  white-space: nowrap;
  width: 100%;
  position: relative;
  .contenedorMateriales {
    position: relative;
    width: calc(100% - 120px - 2rem);
    margin: 0 auto;
  }
  .material-enter {
    opacity: 0.01;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .material-enter.material-enter-active {
    position: relative;
    transition: opacity .4s ease-in;
    opacity: 1;
  }
  .material-leave {
    opacity: 1;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .material-leave.material-leave-active {
    transition: opacity .5s ease-in;
    opacity: 0.01;
  }
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
 * Page of the campaign, with navigable materials carousel.
 */
class CampanaTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }
  constructor (props) {
    super(props)
    this.state = {
      showPopup: false,
      current: 0
    }
    const { data } = this.props
    const post = data.wordpressWpTrabajos
    this.cliente = post.acf.cliente.name
    this.piezas = post.acf.piezas.map((pieza, index) => ({ ...pieza, index }))
  }
  showMaterial = (i) => {
    this.setState({ current: i })
  }
  showPopup = (mode) => () => this.setState({ showPopup: mode })
  render () {
    return (
      <StyledCampana>
        <CerrarBoton />
        <MaterialFlechas current={this.state.current} total={this.piezas.length} showMaterial={this.showMaterial} />
        <div className="contenedorMateriales">
          <ReactCSSTransitionGroup transitionName="material" transitionEnterTimeout={400} transitionLeaveTimeout={500}>
            { this.piezas.filter(pieza => pieza.index === this.state.current).map((pieza, i) => <Material pieza={pieza} showPopup={this.showPopup} cliente={this.cliente} key={i} />) }
          </ReactCSSTransitionGroup>
        </div>
        { this.state.showPopup ? <PopupImagen sizes={this.piezas[this.state.current].imagen_de_la_pieza.localFile.childImageSharp.orig} cerrar={this.showPopup(false)} /> : null }
      </StyledCampana>
    )
  }
}

export default CampanaTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressWpTrabajos(id: { eq: $id }) {
      id
      title
      slug
      status
      template
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
            localFile {
              childImageSharp {
                # Specify the image processing steps right in the query
                # Makes it trivial to update as your page's design changes.
                sizes(
                    maxWidth: 1100
                    quality: 70
                    traceSVG: {
                      color: "#27daf3"
                      turnPolicy: TURNPOLICY_MINORITY
                      blackOnWhite: false
                    }
                  ) {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
                orig: sizes(
                    maxWidth: 1920
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
          tipo_de_pieza
          campana
          descripcion
        }
      }
    }
  }
`
