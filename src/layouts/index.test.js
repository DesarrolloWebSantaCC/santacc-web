import Enzyme from 'enzyme'
import React from 'react'
import TemplateWrapper, { Header, Footer } from './index'

import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

it('Mostrar el HTML del componente', () => {
  const wrapper = shallow(
    <TemplateWrapper children={() => null} />
  )
  expect(wrapper).toMatchSnapshot()
})
it('Mostrar el HTML del Header', () => {
  const wrapper = shallow(
    <Header />
  )
  expect(wrapper).toMatchSnapshot()
})
it('Mostrar el HTML del Footer', () => {
  const wrapper = shallow(
    <Footer />
  )
  expect(wrapper).toMatchSnapshot()
})
