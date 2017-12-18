import React from 'react'
import styled from 'styled-components'

import laAgenciaJpg from '../../images/la-agencia_1.jpg'
import cuadernoPng from '../../images/texto_santa_web_cuaderno.png'

// import './la-agencia.scss'

const LaAgencia = styled.div`
  text-align: center;
  img {
    margin: 0 auto;
  }
`

const LaAgenciaPage = () => (
  <LaAgencia>
    <img src={laAgenciaJpg} style={{ marginBottom: '2rem' }} alt={`La agencia`} /><br />
    <img src={cuadernoPng} alt={`Quiénes somos`} />
  </LaAgencia>
)

export default LaAgenciaPage
