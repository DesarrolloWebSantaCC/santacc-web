import puppeteer from 'puppeteer'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
expect.extend({ toMatchImageSnapshot })

const APP = 'http://localhost:9000/la-agencia/'

let page
let browser
const width = 1280
const height = 980

const testIf = process.env.MODE && process.env.MODE === 'skipsnapshots' ? test.skip : test

beforeAll(async () => {
  window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
  browser = await puppeteer.launch({
    /* headless: false, */
    /* slowMo: 80, */
    args: [`--window-size=${width},${height}`]
  })
  page = await browser.newPage()
  await page.setViewport({ width, height })
  await page.goto(APP)
})
afterAll(() => {
  browser.close()
})

async function ss (done) {
  const screenshot = await page.screenshot({ fullPage: true })
  expect(screenshot).toMatchImageSnapshot()
  done()
}

function caught (err) {
  console.log('Caught err:')
  console.log(err)
}

describe('Sección La agencia', () => {
  testIf('[Snapshot] La agencia', async done => {
    expect.assertions(1)
    const screenshot = await page.screenshot({ fullPage: true }).catch(caught)
    expect(screenshot).toMatchImageSnapshot()
    done()
  }, 30000)
})
