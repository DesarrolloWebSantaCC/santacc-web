import React from 'react'
import PropTypes from 'prop-types'

const Link = ({to, children}) => <a href={to}>{children}</a>

Link.propTypes = {
  to: PropTypes.string.isRequired
}

export default Link
