import React from 'react'
import NiceWork from '../nice-work/nice-work'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import masBotonJpg from '../../images/masboton.jpg'

// import './mas-boton.scss'

const StyledMasBoton = styled.div`
  width: 100%;
  text-align: center;
  cursor: pointer;
  position: relative;
  img {
    margin: 0 auto;
    width: 100%;
    max-width: 102px;
  }
`

/**
 * @typedef {Object} props
 * @property {Function} showMore - Callback to show more works.
 * @ignore
 */
/**
 *
 * @param {props}
 * @constructor
 * "Show more" button.
 */
const MasBoton = ({ showMore }) => <StyledMasBoton onClick={showMore} className="masboton"><img src={masBotonJpg} alt="Más trabajos" title="Más trabajos" /><NiceWork /></StyledMasBoton>

MasBoton.propTypes = {
  showMore: PropTypes.func.isRequired
}

export default MasBoton
