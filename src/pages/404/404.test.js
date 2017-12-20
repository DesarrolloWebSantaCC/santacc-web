import Enzyme from 'enzyme'
import React from 'react'

import NotFoundPage from './index'

import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

const testIf = process.env.MODE && process.env.MODE === 'skipsnapshots' ? test.skip : test

testIf('Mostrar el HTML del componente', () => {
  const wrapper = shallow(
    <NotFoundPage />
  )
  expect(wrapper).toMatchSnapshot()
})
