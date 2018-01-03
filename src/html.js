/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import PropTypes from 'prop-types'
import catchLinks from 'gatsby-plugin-catch-links'
import favicon from './favicon.png'
// import 'preact/devtools'

/**
 * This component contains the HTML document.
 * @returns {component} the HTML document.
 */

module.exports = class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string.isRequired,
    headComponents: PropTypes.node,
    preBodyComponents: PropTypes.node,
    postBodyComponents: PropTypes.node
  }
  constructor (props) {
    super(props)
    if (process.env.NODE_ENV === `production`) {
      try {
        this.stylesStr = require(`!raw-loader!../public/styles.css`)
      } catch (e) {
        console.log(e)
      }
    }
  }
  componentDidMount () {
    const _this = this
    catchLinks(this.props.body, href => { _this.context.router.push(href) })
  }
  render () {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: this.stylesStr }}
        />
      )
    }
    return (
      <html lang="es">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="Santa es una palabra llena de cosas buenas. No somos un grupo de publicistas de grandes agencias que, llegados a un punto de sus carreras, se unen para montárselo por su cuenta con las cuentas de esas grandes agencias." />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
          {css}
        </head>
        <body>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
