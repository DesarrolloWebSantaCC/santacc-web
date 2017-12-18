import React from 'react'
import styled from 'styled-components'
import SantaCCGoogleMap from '../../components/santacc-google-map/index'

import metroJpg from '../../images/metro.jpg'

// import './contacto.scss'

const Contacto = styled.div`
  @extend %page;
    display: flex;
  flex-wrap: wrap;
  height: 100%;
  & > div {
    display: inline-block;
    font-size: 0.9rem;
    line-height: 1.25;
  }
  .contenidos_contacto_texto {
    min-width: 256px;
    width: 47%;
    max-height: 457px;
    box-sizing: border-box;
    vertical-align: top;
    position: relative;
    p {
      color: #808285;
      margin-top: 0;
      .contenidos_contacto_texto_titulo {
        color: #000;
      }
      a {
        color: #000;
        text-decoration: none;
      }
      &.contenidos_contacto_texto_metro {
        color: #000;
        background-image: url(${metroJpg});
        background-repeat: no-repeat;
        background-position: center left;
        padding-left: 51px;
        background-size: contain;
      }
    }
    @media (max-width: 641px) {
      & {
        width: 100%;
        display: block;
      }
    }
  }
  .contenidos_contacto_mapa {
    width: 52%;
    height: 100%;
    @media (max-width: 641px) {
      & {
        width: 100%;
        display: block;
      }
    }
  }
`

const ContactoPage = () => {
  return (
    <Contacto>
      <div className="contenidos_contacto_texto">
        <p><span className="contenidos_contacto_texto_titulo">Santa</span><br />
          <br />
          Torpedero Tucumán, 29<br />
          <br />
          Local Dcha.<br />
          <br />
          28016 - Madrid<br />
          <br />
          Tf: <a href="tel:+34 91 353 39 54">+34 91 353 39 54</a><br />
          <br />
          <a href="mailto:info@santacc.es">info@santacc.es</a></p>
        <p className="contenidos_contacto_texto_metro">Pío XII - Colombia</p>
      </div>
      <div className="contenidos_contacto_mapa">
        <SantaCCGoogleMap googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQ6tkAoMSO8ygMYmhuA9FrOTPVFJYKhqw" loadingElement={<div style={{ height: `100%` }} />} containerElement={<div style={{ height: `400px` }} />} mapElement={<div style={{ height: `100%` }} />} center={{ lat: 40.463454, lng: -3.671860 }} />
      </div>
    </Contacto>
  )
}

export default ContactoPage
