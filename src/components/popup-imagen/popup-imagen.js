import React from 'react'
import Img from 'gatsby-image'

import PropTypes from 'prop-types'
import styled from 'styled-components'

// import './popup-imagen.scss'

import botonCerrarPng from '../../images/boton_salir.png'

const StyledPopupImagen = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  z-index: 5;
  .popup-imagen_velo {
    background-color: rgba(0, 0, 0, .8);
    width: 100%;
    height: 100%;
  }
  .popup-imagen_grande {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 90%;
    max-width: 100%;
    max-height: 100%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 1em;
    overflow-y: auto;
    clear: both;
    padding: 0 5%;
  }
  .popup-imagen_grande_imagen {
    width: 100%;
    height: 100%;
    img {
      display: block;
      margin: 0 auto;
      max-width: 90vh;
      max-height: 90vh;
      object-fit: contain;
      left: 50% !important;
      transform: translateX(-50%);
    }
  }
  .popup-imagen_grande_cerrar {
    text-align: center;
    position: absolute;
    right: 10%;
    top: 0;
    cursor: pointer;
    width: 10.3%;
    z-index: 1;
  }
`

/**
 * @typedef {Object} props
 * @property {Object} sizes - URL collection of sizes for responsive images.
 * @property {Function} cerrar - Callback to close the popup (unmount the component).
 * @ignore
 */
/**
 *
 * @param {props}
 * @constructor
 * Popup dialog to show the image in high res.
 */
const PopupImagen = ({ sizes, cerrar }) => {
  return (
    <StyledPopupImagen>
      <div className="popup-imagen_velo" />
      <div className="popup-imagen_grande">
        <div className="popup-imagen_grande_cerrar" onClick={cerrar}><div className="cerrarboton"><img src={botonCerrarPng} alt="Cerrar" title="Cerrar" /></div></div>
        <div className="popup-imagen_grande_imagen"><Img sizes={sizes} alt="" title="" /></div>
      </div>
    </StyledPopupImagen>
  )
}

PopupImagen.propTypes = {
  sizes: PropTypes.object.isRequired,
  cerrar: PropTypes.func
}

export default PopupImagen
