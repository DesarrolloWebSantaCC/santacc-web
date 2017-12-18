import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import imgMaterialesIz from '../../images/materiales_iz.png'
import imgMaterialesDe from '../../images/materiales_de.png'

// import './material-flechas.scss'

const StyledMaterialFlechas = styled.div`
  margin-top: 72px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin-bottom: calc(54px + 6em);
  .material_flecha {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 5%;
    max-width: 63px;
    min-width: 60px;
    cursor: pointer;
    z-index: 2;
    &.flecha_iz img, &.flecha_de img {
      width: 100%;
      max-width: 63px;
    }
    &.flecha_iz {
      left: 0.5rem;
    }
    &.flecha_de {
      right: 0.5rem;
    }
  }
`

/**
 * @typedef {Object} props
 * @property {Number} total - Total number of materials available in the campaign.
 * @property {Number} current - Current material selected (shown).
 * @ignore
 */
/**
 *
 * @param {props}
 * @constructor
 * Arrow interface to allow navigating between the materials.
 */
class MaterialFlechas extends React.Component {
  static propTypes = {
    total: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired
  }
  constructor (props) {
    super(props)
    this.state = {
      current: props.current
    }
  }
  changeMaterial = d => () => { this.setState({ current: this.state.current + d }, () => this.props.showMaterial(this.state.current)) }
  render () {
    const { total } = this.props
    return (
      <StyledMaterialFlechas>
        {(() => {
          if (this.state.current > 0) {
            return <div className="flecha_iz material_flecha" onClick={this.changeMaterial(-1)}><img src={imgMaterialesIz} alt="Izquierda" /></div>
          }
        })()}
        {(() => {
          if (this.state.current < total - 1) {
            return <div className="flecha_de material_flecha" onClick={this.changeMaterial(1)}><img src={imgMaterialesDe} alt="Derecha" /></div>
          }
        })()}
      </StyledMaterialFlechas>
    )
  }
}

export default MaterialFlechas
