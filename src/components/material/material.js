import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { isVimeoUrl, isYoutubeUrl } from '../../helpers'

// import './material.scss'

const StyledMaterial = styled.div`
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid #dfdfdf;
  display: inline-block;
  padding: 0;
  vertical-align: top;
  text-align: center;
  .descripcion_trabajo {
    margin-top: 3em;
    padding-left: 0;
    white-space: normal;
    margin-bottom: 3em;
    display: table;
    width: 100%;
    @media (max-width: 641px) {
      & {
        width: auto;
        margin-left: calc(-60px - 1rem);
        margin-right: calc(-60px - 1rem);
      }
    }
  }
  .descripcion_trabajo_cliente {
    display: table-cell;
    width: 25%;
    border-right: 1px solid #808285;
    height: 3em;
    vertical-align: middle;
    text-align: center;
    color: #808285;
    font-weight: bold;
  }
  .descripcion_trabajo_extra {
    display: table-cell;
    width: 25%;
    padding-left: 1em;
    padding-right: 1em;
    text-align: left;
    color: #808285;
    font-size: .9em;
    border-left: 1px solid #808285;
    height: 3em;
    vertical-align: middle;
  }
  .videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  img {
    object-fit: contain !important;
  }
`

/**
 * @typedef {Object} props
 * @property {Object} pieza - Data of the material.
 * @property {String} cliente - Client name.
 * @property {Function} showPopup - Callback to show a popup with the image (if the material is an image).
 * @ignore
 */
/**
 *
 * @param {props}
 * @constructor
 * Image or video of the material with corresponding data.
 */
const Material = ({ pieza, cliente, showPopup }) => {
  let material
  const { campana, descripcion, tipo_de_pieza, url } = pieza
  if (url) {
    if (isVimeoUrl(url)) {
      material = <div className="videoWrapper materiales"><iframe src={`${url}?byline=0&amp;api=1&amp`} frameBorder="0" allowFullScreen="" /></div>
    } else {
      if (isYoutubeUrl(url)) {
        material = <div className="videoWrapper materiales"><iframe src={`${url}?rel=0&amp;showinfo=0`} frameBorder="0" allowFullScreen="" /></div>
      } else {
        material = <a href={url} rel="noopener" target="_blank"><Img alt="Material" sizes={pieza.imagen_de_la_pieza.localFile.childImageSharp.sizes} className="materiales" style={{maxHeight: '80vh'}} /></a>
      }
    }
  } else {
    material = <div style={{ cursor: 'pointer' }} onClick={showPopup(true)}><Img alt="Material" sizes={pieza.imagen_de_la_pieza.localFile.childImageSharp.sizes} className="materiales" style={{maxHeight: '80vh'}} /></div>
  }
  return (
    <StyledMaterial>
      {material}
      <div className="descripcion_trabajo">
        <div className="descripcion_trabajo_cliente">{cliente}</div>
        { campana.length > 0 ? <div className="descripcion_trabajo_extra">Campaña:<br />{campana}</div> : null }
        { tipo_de_pieza.length > 0 ? <div className="descripcion_trabajo_extra">Pieza:<br />{tipo_de_pieza}</div> : null }
        { descripcion.length > 0 ? <div className="descripcion_trabajo_extra">Descripción:<br />{descripcion}</div> : null }
      </div>
    </StyledMaterial>
  )
}

Material.propTypes = {
  pieza: PropTypes.object.isRequired,
  cliente: PropTypes.string.isRequired,
  showPopup: PropTypes.func.isRequired
}

export default Material
