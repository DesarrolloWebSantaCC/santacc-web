import Enzyme, { shallow, render, mount } from 'enzyme'
import graphql from 'graphql-mock'

// Make Enzyme functions available in all test files without importing
global.shallow = shallow
global.render = render
global.mount = mount

global.graphql = graphql

