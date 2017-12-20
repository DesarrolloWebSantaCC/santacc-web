import Enzyme from 'enzyme'
import React from 'react'
import HTML from './html'

import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

const testIf = process.env.MODE && process.env.MODE === 'skipsnapshots' ? test.skip : test

testIf('Mostrar el HTML del componente', () => {
  const wrapper = shallow(
    <HTML body="" headComponents={null} preBodyComponents={null} postBodyComponents={null} />
  )
  expect(wrapper).toMatchSnapshot()
})
testIf('Mostrar el HTML del componente, producción', () => {
  const env = process.env.NODE_ENV
  process.env.NODE_ENV = 'production'
  const wrapper = shallow(
    <HTML body="" headComponents={null} preBodyComponents={null} postBodyComponents={null} />
  )
  expect(wrapper).toMatchSnapshot()
  process.env.NODE_ENV = env
})
