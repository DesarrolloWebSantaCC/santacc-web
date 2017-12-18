import React from 'react'
import styled from 'styled-components'

// import './nice-work.scss'

const StyledNiceWork = styled.div`
  font-family:oswald,Helvetica,Arial,sans-serif,sans;
  font-weight:bold;
  color:#000;
  font-size:1.2rem;
  position:absolute;
  right:0;
  top: 50%;
  transform: translateY(-50%);
  span {
    font-family:oswald,Helvetica,Arial,sans-serif,sans;
    color:rgb(39, 218, 243);
    font-size: 1.5rem;
    font-weight: normal;
    text-transform: uppercase;
  }
  @media (max-width: 481px) {
    & {
      position: relative;
      top: 0;
      transform: none;
      padding-top: 1rem;
    }
  }
`

/**
 *
 * @constructor
 * Nice work banner (static).
 */
const NiceWork = () => <StyledNiceWork>Nice work, good people <span>That's Santa</span></StyledNiceWork>

export default NiceWork
