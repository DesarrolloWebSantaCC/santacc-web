import puppeteer from 'puppeteer'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
expect.extend({ toMatchImageSnapshot })

const APP = 'http://localhost:9000'

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

describe('Sección trabajos', () => {
  test('Se muestra el trabajo', async done => {
    expect.assertions(1)
    await page.waitForSelector('.trabajo:first-child .capa_trabajos').catch(caught)
    await page.hover('.trabajo:first-child .capa_trabajos').catch(caught)
    await page.waitFor(800)
    expect(await page.evaluate(() => (
      getComputedStyle(document.querySelector('.trabajo:first-child .capa_trabajos')).opacity
    )).catch(caught)).toBe('1')
    done()
  })
  test('Navega al trabajo en menos de 600ms de hacer click', async done => {
    expect.assertions(1)
    await page.waitForSelector('.trabajo:first-child').catch(caught)
    await page.click('.trabajo:first-child').catch(caught)
    await page.waitFor(600).catch(caught)
    expect(await page.evaluate(() => (
      window.location.href
    )).catch(caught)).toBe('http://localhost:9000/trabajos/addalia')
    done()
  }, 30000)
  test('Carga más trabajos', async done => {
    expect.assertions(2)
    await page.goto(APP).catch(caught)
    await page.waitForSelector('.trabajo').catch(caught)
    expect(await page.evaluate(() => (
      document.querySelectorAll('.trabajo').length
    )).catch(caught)).toBe(12)
    await page.click('.masboton')
    expect(await page.evaluate(() => (
      document.querySelectorAll('.trabajo').length
    )).catch(caught)).toBeGreaterThan(12)
    done()
  }, 30000)
  testIf('[Snapshot] trabajos', async done => {
    expect.assertions(1)
    await page.goto(APP).catch(caught)
    await page.waitFor(1000).catch(caught)
    const screenshot = await page.screenshot({ fullPage: true }).catch(caught)
    expect(screenshot).toMatchImageSnapshot()
    done()
  }, 30000)
  testIf('[Snapshot] trabajos hover', async done => {
    expect.assertions(1)
    await page.goto(APP).catch(caught)
    await page.waitForSelector('.trabajo').catch(caught)
    await page.hover('.trabajo:first-child .capa_trabajos').catch(caught)
    await page.waitFor(2000).catch(caught)
    const screenshot = await page.screenshot({ fullPage: true }).catch(caught)
    expect(screenshot).toMatchImageSnapshot()
    done()
  }, 30000)
})
