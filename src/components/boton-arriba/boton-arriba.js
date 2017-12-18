import React from 'react'
import styled from 'styled-components'

import NiceWork from '../nice-work/nice-work'

import flechaArribaPng from '../../images/flecha_arriba.png'

// import './boton-arriba.scss'

const StyledBotonArriba = styled.div`
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
 *
 * @constructor
 * Shows the "up" button to scroll to the top of the page.
 */
const BotonArriba = () => <StyledBotonArriba><a href="#top"><img src={flechaArribaPng} alt="Volver arriba" title="Volver arriba" /></a><NiceWork /></StyledBotonArriba>

export default BotonArriba
