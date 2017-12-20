import Enzyme from 'enzyme'
import React from 'react'
import CampanaTemplate from './index'

import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

const testIf = process.env.MODE && process.env.MODE === 'skipsnapshots' ? test.skip : test

testIf('Mostrar el HTML del componente.', () => {
  const mockedURL = 'https://santacc.es'
  const props = {
    data: {
      wordpressWpTrabajos: {
        acf: {
          cliente: {
            name: 'Cliente'
          },
          piezas: [{
            url: mockedURL,
            campana: 'Campaña',
            descripcion: 'Descripción',
            tipo_de_pieza: 'Tipo de pieza',
            imagen_de_la_pieza: {
              source_url: mockedURL
            }
          }]
        }
      }
    },
    pathContext: {
      medias: {
        [mockedURL]: {
          hMaterial: mockedURL
        }
      }
    }
  }
  const wrapper = shallow(
    <CampanaTemplate {...props} />
  )
  expect(wrapper).toMatchSnapshot()
})
