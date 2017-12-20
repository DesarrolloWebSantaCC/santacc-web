import Enzyme from 'enzyme'
import React from 'react'
import SantaCCGoogleMap from './index'

import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

const testIf = process.env.MODE && process.env.MODE === 'skipsnapshots' ? test.skip : test

testIf('Mostrar el HTML del componente', () => {
  const wrapper = mount(
    <SantaCCGoogleMap googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQ6tkAoMSO8ygMYmhuA9FrOTPVFJYKhqw" loadingElement={<div style={{ height: `100%` }} />} containerElement={<div style={{ height: `400px` }} />} mapElement={<div style={{ height: `100%` }} />} center={{ lat: 40.463454, lng: -3.671860 }} />
  )
  expect(wrapper).toMatchSnapshot()
})
