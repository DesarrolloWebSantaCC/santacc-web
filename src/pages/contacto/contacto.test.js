import Enzyme from 'enzyme'
import React from 'react'

import ContactoPage from './index'

import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

it('Mostrar el HTML del componente', () => {
  const wrapper = shallow(
    <ContactoPage />
  )
  expect(wrapper).toMatchSnapshot()
})
