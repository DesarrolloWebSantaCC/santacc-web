import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styled from 'styled-components'


// import './trabajo.scss'

const StyledTrabajo = styled.div`
  position: relative;
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: 49%;
  display: inline-block;
  zoom: 1;
  text-align: left;
  &:nth-child(2n) {
    margin-right: 0;
  }
  &:nth-child(even) {
    margin-right: 0;
  }
  &:nth-child(odd):nth-last-child(1) {
    left: 50%;
    transform: translateX(-50%);
  }
  img {
    width: 100%;
    vertical-align: text-bottom;
  }
  .velo {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(39, 218, 243);
    opacity: .8;
    cursor: pointer;
  }
  .capa_trabajos {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    &:hover {
      opacity: 1;
      transition: all .2s ease-in-out;
    }
  }
  .posicion_textos {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    padding-left: 3rem;
    padding-right: 3rem;
    flex-direction: column;
    justify-content: center;
  }
  .cliente {
    color: #fff;
    font-size: 2.9rem;
    font-weight: bold;
    font-family: oswald,Arial,Helvetica,sans-serif,sans;
    border-bottom: 2px solid #fff;
    text-transform: uppercase;
    padding-bottom: 0.2rem;
    line-height: 0.9;
  }
  .tipo {
    color: #000;
    font-size: 1.6rem;
    font-family: oswald,Arial,Helvetica,sans-serif,sans;
    text-transform: uppercase;
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
  }
  .tipo_caracteristicas {
    font-style: italic;
    font-size: 0.70rem;
    line-height: 1;
    color: #fff;
    font-family: oswald, Arial, Helvetica, sans-serif, sans;
    text-transform: uppercase;
    &::after {
      content: ' ver más';
      color: #000;
      font-weight: bold;
      padding-left: 0.25rem;
      text-transform: none;
    }
  }
  @media (max-width: 641px) {
    & {
      width: 47.8%;
    }
  }
  @media (max-width: 481px) {
    & {
      margin-left: 0;
      margin-right: 0;
      width: 100%;
      display: block;
    }
  }
`

/**
 * @typedef {Object} props
 * @property {String} cliente - Client name.
 * @property {String} campana - Name of the campaign.
 * @property {Array} tipo - Type of types of campaign.
 * @property {String} slug - Campaign slug string.
 * @property {Object} sizes - Sizes data for responsive image handling (gatsby-image).
 * @ignore
 */
/**
 *
 * @param {props}
 * @constructor
 * Image of the campaign with corresponding data. Can be clicked to access the campaign material.
 */
const Trabajo = ({ cliente, campana, tipo, slug, sizes }) => {
  const titulo = `${cliente} - ${campana}`
  const enlace = `/trabajos/${slug}`
  let tipoUnido = ''
  if (tipo[0].name.toLowerCase() !== 'vacío') {
    tipo.forEach(subTipo => (tipoUnido = tipoUnido !== '' ? `${tipoUnido} - ${subTipo.name}` : subTipo.name))
  }
  return (
    <StyledTrabajo className="trabajo"><Img sizes={sizes} alt={titulo} title={titulo} />
      <Link to={enlace}>
        <div className="capa_trabajos">
          <div className="velo" />
          <div className="posicion_textos">
            <div className="cliente">{cliente}</div>
            <div className="tipo">{campana}</div>
            { tipo[0].name.toLowerCase() !== 'vacío' ? <div className="tipo_caracteristicas">{tipoUnido}</div> : null }
          </div>
        </div>
      </Link>
    </StyledTrabajo>
  )
}

Trabajo.propTypes = {
  cliente: PropTypes.string.isRequired,
  campana: PropTypes.string.isRequired,
  tipo: PropTypes.array.isRequired,
  slug: PropTypes.string.isRequired,
  sizes: PropTypes.object.isRequired
}

export default Trabajo
