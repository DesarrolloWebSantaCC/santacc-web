import Enzyme from 'enzyme'
import React from 'react'
import Trabajo from './index'

import Adapter from 'enzyme-adapter-react-15'

Enzyme.configure({ adapter: new Adapter() })

it('Mostrar el HTML del componente', () => {
  const mockedTrabajo = {
    cliente: 'Cliente',
    campana: 'Campaña',
    tipo: [{ name: 'vacío' }],
    slug: 'campana',
    sizes: {}
  }
  const wrapper = shallow(
    <Trabajo {...mockedTrabajo} />
  )
  expect(wrapper).toMatchSnapshot()
})
it('Mostrar el HTML del componente, tipo de trabajo no vacío', () => {
  const mockedTrabajo = {
    cliente: 'Cliente',
    campana: 'Campaña',
    tipo: [
      { name: 'gráfica' },
      { name: 'web' }
    ],
    slug: 'campana',
    sizes: {}
  }
  const wrapper = shallow(
    <Trabajo {...mockedTrabajo} />
  )
  expect(wrapper).toMatchSnapshot()
})
