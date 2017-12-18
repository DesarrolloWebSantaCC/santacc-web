import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import imgCerrarBoton from '../../images/cerrarboton.png'

// import './cerrar-boton.scss'

const StyledCerrarBoton = styled.div`
  width: 100%;
  text-align: center;
  cursor: pointer;
  img {
    margin: 1px auto 0 auto;
    width: 100%;
    max-width: 64px;
  }
`

/**
 *
 * @constructor
 * Shows the close button.
 */
const CerrarBoton = () => <StyledCerrarBoton><Link to="/"><img src={imgCerrarBoton} alt="Cerrar" /></Link></StyledCerrarBoton>

export default CerrarBoton
