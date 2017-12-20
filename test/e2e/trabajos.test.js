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
    await page.waitForSelector('.trabajo:first-child .capa_trabajos')
      .then(async () => {
        page.hover('.trabajo:first-child .capa_trabajos')
        await page.waitFor(800)
          .then(async () => {
            expect(await page.evaluate(() => (
              getComputedStyle(document.querySelector('.trabajo:first-child .capa_trabajos')).opacity
            ))).toBe('1')
            done()
          })
          .catch(caught)
      })
      .catch(caught)
  })
  test('Navega al trabajo en menos de 600ms de hacer click', async done => {
    expect.assertions(1)
    await page.waitForSelector('.trabajo:first-child')
    await page.click('.trabajo:first-child')
    await page.waitFor(600)
      .then(async () => {
        expect(await page.evaluate(() => (
          window.location.href
        ))).toBe('http://localhost:9000/trabajos/addalia')
        done()
      })
      .catch(caught)
  }, 20000)
  test('Carga más trabajos', async done => {
    expect.assertions(2)
    await page.goto(APP)
    await page.waitForSelector('.trabajo')
      .then(async () => {
        expect(await page.evaluate(() => (
          document.querySelectorAll('.trabajo').length
        ))).toBe(12)
        await page.click('.masboton')
        expect(await page.evaluate(() => (
          document.querySelectorAll('.trabajo').length
        ))).toBeGreaterThan(12)
        done()
      })
      .catch(caught)
  }, 20000)
  testIf('[Snapshot] trabajos', async done => {
    expect.assertions(1)
    await page.goto(APP)
    await page.waitFor(1000)
      .then(async () => {
        const screenshot = await page.screenshot({ fullPage: true })
        expect(screenshot).toMatchImageSnapshot()
        done()
      })
      .catch(caught)
  }, 30000)
  testIf('[Snapshot] trabajos hover', async done => {
    // await page.goto(APP)
    expect.assertions(1)
    await page.waitForSelector('.trabajo')
      .then(async () => {
        page.hover('.trabajo:first-child .capa_trabajos')
        await page.waitFor(800)
          .then(async () => {
            const screenshot = await page.screenshot({ fullPage: true })
            expect(screenshot).toMatchImageSnapshot()
            done()
          })
          .catch(caught)
      })
      .catch(caught)
  }, 30000)
})
