import Enzyme from 'enzyme'
import React from 'react'
import TrabajosTemplate from './index'

import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

const testIf = process.env.MODE && process.env.MODE === 'skipsnapshots' ? test.skip : test

testIf('Mostrar el HTML del componente.', () => {
  const mockedURL = 'https://santacc.es'
  const props = {
    data: {
      allWordpressWpTrabajos: {
        edges: [{
          node: {
            slug: 'trabajo',
            acf: {
              imagen: {
                source_url: mockedURL,
                localFile: {
                  childImageSharp: {
                    sizes: {}
                  }
                }
              },
              cliente: {
                name: 'Cliente'
              },
              campana: 'Campaña',
              tipo: [
                {
                  name: 'gráfica'
                },
                {
                  name: 'web'
                }
              ],
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
        }]
      }
    }
  }
  const wrapper = shallow(
    <TrabajosTemplate {...props} />
  )
  expect(wrapper).toMatchSnapshot()
})
