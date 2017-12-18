import Enzyme from 'enzyme'
import React from 'react'
import Material from './index'

import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

const vimeoURL = 'https://vimeo.com/53331803'
const youtubeURL = 'https://www.youtube.com/watch?v=BGqFuwVVUS0'

it('Mostrar el HTML del componente Material, con web.', () => {
  const mockedURL = 'https://santacc.es'
  const mockedMaterial = {
    pieza: {
      url: mockedURL,
      campana: 'Campaña',
      descripcion: 'Descripción',
      tipo_de_pieza: 'Tipo de pieza',
      imagen_de_la_pieza: {
        source_url: mockedURL,
        localFile: {
          childImageSharp: {
            sizes: {}
          }
        }
      }
    },
    showPopup: () => {},
    cliente: 'Cliente'
  }
  const wrapper = shallow(
    <Material pieza={mockedMaterial.pieza} showPopup={mockedMaterial.showPopup} cliente={mockedMaterial.cliente} />
  )
  expect(wrapper).toMatchSnapshot()
})
it('Mostrar el HTML del componente Material, con imagen.', () => {
  const mockedURL = 'https://santacc.es'
  const mockedMaterial = {
    pieza: {
      campana: 'Campaña',
      descripcion: 'Descripción',
      tipo_de_pieza: 'Tipo de pieza',
      imagen_de_la_pieza: {
        source_url: mockedURL,
        localFile: {
          childImageSharp: {
            sizes: {}
          }
        }
      }
    },
    showPopup: () => {},
    cliente: 'Cliente'
  }
  const wrapper = shallow(
    <Material pieza={mockedMaterial.pieza} showPopup={mockedMaterial.showPopup} cliente={mockedMaterial.cliente} />
  )
  expect(wrapper).toMatchSnapshot()
})
it('Mostrar el HTML del componente Material, con vídeo Youtube.', () => {
  const mockedURL = youtubeURL
  const mockedMaterial = {
    pieza: {
      url: mockedURL,
      campana: 'Campaña',
      descripcion: 'Descripción',
      tipo_de_pieza: 'Tipo de pieza',
      imagen_de_la_pieza: {
        source_url: mockedURL,
        localFile: {
          childImageSharp: {
            sizes: {}
          }
        }
      }
    },
    showPopup: () => {},
    cliente: 'Cliente'
  }
  const wrapper = shallow(
    <Material pieza={mockedMaterial.pieza} showPopup={mockedMaterial.showPopup} cliente={mockedMaterial.cliente} />
  )
  expect(wrapper).toMatchSnapshot()
})
it('Mostrar el HTML del componente Material, con vídeo Vimeo.', () => {
  const mockedURL = vimeoURL
  const mockedMaterial = {
    pieza: {
      url: mockedURL,
      campana: 'Campaña',
      descripcion: 'Descripción',
      tipo_de_pieza: 'Tipo de pieza',
      imagen_de_la_pieza: {
        source_url: mockedURL,
        localFile: {
          childImageSharp: {
            sizes: {}
          }
        }
      }
    },
    showPopup: () => {},
    cliente: 'Cliente'
  }
  const wrapper = shallow(
    <Material pieza={mockedMaterial.pieza} showPopup={mockedMaterial.showPopup} cliente={mockedMaterial.cliente} />
  )
  expect(wrapper).toMatchSnapshot()
})
it('Mostrar el HTML del componente Material, con imagen, sin campaña, descripción ni tipo de pieza.', () => {
  const mockedURL = 'https://santacc.es'
  const mockedMaterial = {
    pieza: {
      url: mockedURL,
      campana: '',
      descripcion: '',
      tipo_de_pieza: '',
      imagen_de_la_pieza: {
        source_url: mockedURL,
        localFile: {
          childImageSharp: {
            sizes: {}
          }
        }
      }
    },
    showPopup: () => {},
    cliente: 'Cliente'
  }
  const wrapper = shallow(
    <Material pieza={mockedMaterial.pieza} showPopup={mockedMaterial.showPopup} cliente={mockedMaterial.cliente} />
  )
  expect(wrapper).toMatchSnapshot()
})
