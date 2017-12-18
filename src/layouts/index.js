import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import './reset.css'
import './index.scss'
// import styled, { injectGlobal } from 'styled-components'
import styled from 'styled-components'

// injectGlobal``

import logoPng from '../images/logo_nuevo.png'

const Logo = styled.div`
  text-align: center;
  cursor: pointer;
  padding: 2em 0;
  img {
    height: auto;
  }
`

const Menu = styled.nav`
  width: 99%;
  white-space: nowrap;
  margin: 0 auto;
  max-width: 983px;
  ul {
    display: flex;
    flex-direction: row;
    margin-left: 0;
    justify-content: space-between;
    padding-left: 3rem;
    padding-right: 3rem;
    @media (max-width: 480px) {
      & {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
    li.item {
      list-style-type: none;
      margin: 0;
      padding: 0;
      cursor: pointer;
      display: inline-block;
      p {
        text-align: center;
        /* color: #bcbec0; */
        /* Cambiado por problemas de contraste, accesibilidad */
        color: #73767c;
        font-size: 2em;
        font-family: oswald, Helvetica, Arial, sans-serif, sans;
        margin: 1rem 0;
        a {
          text-decoration: none;
          /* color: #bcbec0; */
          /* Cambiado por problemas de contraste, accesibilidad */
          color: #73767c;
          &.active {
            color: black;
          }
        }
      }
      &:hover p a {
        color: red;
      }
      &.active {
        p a, &:hover p a {
          color: black;
        }
      }
      &.off {
        p a {
          color: #bcbec0
        }
        &:hover p a {
          color: red
        }
      }
    }
  }
`

/**
 * @constructor
 * Site header.
 */
export const Header = () => (
  <header>
    <Logo><Link to="/" exact><img src={logoPng} alt="Logo" /></Link></Logo>
    <Menu role="navigation">
      <ul>
        <li className="item"><p><Link to="/" activeClassName="active" exact>Trabajo</Link></p></li>
        <li className="item"><p><Link to="/la-agencia/" activeClassName="active">La agencia</Link></p></li>
        <li className="item"><p><Link to="/contacto/" activeClassName="active">Contacto</Link></p></li>
      </ul>
    </Menu>
  </header>
)

const Pie = styled.footer`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  p {
    font-size: .8em;
    color: #808285;
    a {
      color: #808285;
    }
    @media (max-width: 641px) {
      & {
        font-size: .7em;
        white-space: normal;
      }
    }
  }
`

/**
 * @constructor
 * Site footer.
 */
export const Footer = () => (
  <Pie>
    <p>&copy; 2017 - <Link to="/aviso-legal/" className="aviso_legal">Aviso legal</Link> - Empresa adherida a <a href="http://www.autocontrol.es/" rel="noopener" target="_blank">Autocontrol</a> - Productora asociada: <a href="https://patitopro.es/" rel="noopener" target="_blank">Patito</a></p>
  </Pie>
)

const Contenido = styled.div`
  max-width: 1255px;
  width: 100%;
  margin: 0 auto;
`

const Principal = styled.main`
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  padding: 1rem;
  margin-bottom: 1rem;
`

/**
 * @typedef {Object} props
 * @property {Function} children - Child pages.
 * @ignore
 */
/**
 *
 * @param {props}
 * @constructor
 * Main site template.
 */
const TemplateWrapper = ({ children }) => (
  <Contenido>
    <Helmet title="Santa Compañía Creativa" />
    <Header />
    <Principal>
      {children()}
    </Principal>
    <Footer />
  </Contenido>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
