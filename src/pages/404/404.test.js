import Enzyme from 'enzyme'
import React from 'react'

import NotFoundPage from './index'

import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

it('Mostrar el HTML del componente', () => {
  const wrapper = shallow(
    <NotFoundPage />
  )
  expect(wrapper).toMatchSnapshot()
})
