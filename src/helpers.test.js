import Enzyme from 'enzyme'
import { isYoutubeUrl, isVimeoUrl } from './helpers'

const vimeoURL = 'https://vimeo.com/53331803'
const youtubeURL = 'https://www.youtube.com/watch?v=BGqFuwVVUS0'

it('Confirma que la URL es de Vimeo', () => {
  expect(isVimeoUrl(vimeoURL)).toBeTruthy()
})
it('Confirma que la URL NO es de Vimeo', () => {
  expect(isVimeoUrl(youtubeURL)).toBeFalsy()
})
it('Confirma que la URL es de Youtube', () => {
  expect(isYoutubeUrl(youtubeURL)).toBeTruthy()
})
it('Confirma que la URL NO es de Youtube', () => {
  expect(isYoutubeUrl(vimeoURL)).toBeFalsy()
})
