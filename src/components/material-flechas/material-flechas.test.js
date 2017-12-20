import Enzyme from 'enzyme'
import React from 'react'

import MaterialFlechas from './index'

import Adapter from 'enzyme-adapter-react-15'

Enzyme.configure({ adapter: new Adapter() })

const testIf = process.env.MODE && process.env.MODE === 'skipsnapshots' ? test.skip : test

testIf(`Mostrar el HTML del componente MaterialFlechas, 
    primer material, un material en total`, () => {
  const mockedShowMaterial = () => {}
  const wrapper = shallow(
    <MaterialFlechas current={0} total={1} showMaterial={mockedShowMaterial} />
  )
  expect(wrapper).toMatchSnapshot()
})
testIf(`Mostrar el HTML del componente MaterialFlechas, 
    primer material, dos materiales en total`, () => {
  const mockedShowMaterial = () => {}
  const wrapper = shallow(
    <MaterialFlechas current={0} total={2} showMaterial={mockedShowMaterial} />
  )
  expect(wrapper).toMatchSnapshot()
})
testIf(`Mostrar el HTML del componente MaterialFlechas, 
    último material, dos materiales en total`, () => {
  const mockedShowMaterial = () => {}
  const wrapper = shallow(
    <MaterialFlechas current={1} total={2} showMaterial={mockedShowMaterial} />
  )
  expect(wrapper).toMatchSnapshot()
})
testIf(`Mostrar el HTML del componente MaterialFlechas, 
    segundo material, tres materiales en total`, () => {
  const mockedShowMaterial = () => {}
  const wrapper = shallow(
    <MaterialFlechas current={1} total={3} showMaterial={mockedShowMaterial} />
  )
  expect(wrapper).toMatchSnapshot()
})
testIf(`Mostrar el HTML del componente MaterialFlechas, 
    segundo material, tres materiales en total, 
    cambiar al tercer material`, () => {
  const mockedShowMaterial = () => {}
  const wrapper = shallow(
    <MaterialFlechas current={1} total={3} showMaterial={mockedShowMaterial} />
  )
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('.flecha_de').get(0)).toBeTruthy()
  expect(wrapper.find('.flecha_iz').get(0)).toBeTruthy()
  wrapper.find('.flecha_de').simulate('click')
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('.flecha_de').get(0)).toBeFalsy()
  expect(wrapper.find('.flecha_iz').get(0)).toBeTruthy()
})
testIf(`Mostrar el HTML del componente MaterialFlechas, 
    tercer material, tres materiales en total, 
    cambiar al primer material`, () => {
  const mockedShowMaterial = () => {}
  const wrapper = shallow(
    <MaterialFlechas current={2} total={3} showMaterial={mockedShowMaterial} />
  )
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('.flecha_iz').get(0)).toBeTruthy()
  wrapper.find('.flecha_iz').simulate('click')
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('.flecha_iz').get(0)).toBeTruthy()
  wrapper.find('.flecha_iz').simulate('click')
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('.flecha_de').get(0)).toBeTruthy()
  expect(wrapper.find('.flecha_iz').get(0)).toBeFalsy()
})
