import puppeteer from 'puppeteer'

const APP = 'http://localhost:9000/'

function calcUnusedCssPercentage (stylesheets, ruleUsage) {
  let usedLength = 0
  let totalLength = 0
  stylesheets.forEach(stylesheet => {
    totalLength += stylesheet.length
    usedLength += calcUsedLength(ruleUsage, stylesheet)
  })
  return 100 - Math.round(usedLength / totalLength * 100)
}

function calcUsedLength (ruleUsage, stylesheet) {
  const stylesheetRuleUsages = ruleUsage.filter(y => y.styleSheetId === stylesheet.styleSheetId)
  return stylesheetRuleUsages.reduce((sum, x) => sum + x.endOffset - x.startOffset, 0)
}

let page
let browser
const width = 1280
const height = 980

async function init (page, url) {
  const client = page._client
  await client.send('Page.enable')
  await client.send('DOM.enable')
  await client.send('CSS.enable')

  //Start tracking CSS coverage
  await client.send('CSS.startRuleUsageTracking');

  //Add this event to be notified whenever a stylesheet is added
  //(payload contains the stylesheet size which is needed to calculate the percentage)
  const stylesheets = []
  client.on('CSS.styleSheetAdded', stylesheet => {
    stylesheets.push(stylesheet.header)
  })

  //Trigger the user interaction with the page to hit more CSS rules
  //(in our case this means trigger clicking on each fo the tabs)
  await page.goto(url)
  await page.click('nav li:first-child + li a')
  await page.click('nav li:first-child + li + li a')

  //Stop tracking CSS and get `ruleUsage` data object
  const { ruleUsage } = await client.send('CSS.stopRuleUsageTracking')

  //You can see how `calcUnusedCssPercentage` is implemented here:
  //https://github.com/cowchimp/unused-css-calculator/blob/902d85f36123f5b7a40c0003212c68e49b649b1d/index.js#L23
  //(not shown here for brevity and because it's just in-memory math operations)
  const unusedCSS = calcUnusedCssPercentage(stylesheets, ruleUsage)

  console.log(`${unusedCSS}% of your CSS is unused`)

  return unusedCSS
}

beforeAll(async done => {
  window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
  browser = await puppeteer.launch({
    /* headless: false, */
    /* slowMo: 80, */
    args: [`--window-size=${width},${height}`]
  })
  page = await browser.newPage()
  page.on('error', err => {
    console.log('Puppeteer error', err)
  })
  await page.setViewport({ width, height })
  await page.goto(APP)
  done()
})
afterAll(() => {
  browser.close()
})

function caught (err) {
  console.log('Caught err:')
  console.error(err)
}

describe('Sección Global', () => {
  test('CSS coverage', async done => {
    expect.assertions(1)
    let unused
    try {
      unused = await init(page, APP)
    } catch(e) {
      caught(e)
      return done()
    }
    expect(unused).toBeGreaterThan(1)
    done()
  }, 30000)
})
