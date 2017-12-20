import Enzyme from 'enzyme'
import React from 'react'
import TemplateWrapper, { Header, Footer } from './index'

import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

const testIf = process.env.MODE && process.env.MODE === 'skipsnapshots' ? test.skip : test

testIf('Mostrar el HTML del componente', () => {
  const wrapper = shallow(
    <TemplateWrapper children={() => null} />
  )
  expect(wrapper).toMatchSnapshot()
})
testIf('Mostrar el HTML del Header', () => {
  const wrapper = shallow(
    <Header />
  )
  expect(wrapper).toMatchSnapshot()
})
testIf('Mostrar el HTML del Footer', () => {
  const wrapper = shallow(
    <Footer />
  )
  expect(wrapper).toMatchSnapshot()
})
