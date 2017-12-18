import Enzyme from 'enzyme'
import React from 'react'

import AvisoLegalPage from './index'

import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

it('Mostrar el HTML del componente', () => {
  const wrapper = shallow(
    <AvisoLegalPage />
  )
  expect(wrapper).toMatchSnapshot()
})
