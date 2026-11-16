// Export the condition monitoring flyer in all three colourways.
//
// 1. Chrome renders index.html at A4 + 3mm bleed (216 x 303mm), once per
//    colourway, to <colourway>-rgb.pdf, plus a proof-<colourway>.png.
// 2. finish-pdf.py rewrites every colour as its exact brand CMYK build and
//    sets TrimBox (A4, 3mm in) and BleedBox (full page):
//      python finish-pdf.py cobalt-rgb.pdf condition-monitoring-flyer-cobalt.pdf
//
// Usage: node build.mjs [dir]  (needs puppeteer or puppeteer-core and system Chrome)
import { fileURLToPath } from 'url';
import path from 'path';

const here = process.argv[2] || path.dirname(fileURLToPath(import.meta.url));
const COLOURWAYS = ['cobalt', 'grey', 'white'];

let puppeteer;
try { puppeteer = (await import('puppeteer-core')).default; }
catch { puppeteer = (await import('puppeteer')).default; }

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: 'new',
});
const page = await browser.newPage();
await page.goto('file://' + path.join(here, 'index.html'), { waitUntil: 'networkidle0' });
await page.evaluateHandle('document.fonts.ready');

for (const c of COLOURWAYS) {
  await page.evaluate(name => { document.body.className = 't-' + name; }, c);

  // Fail loudly if the content no longer fits inside the safe area
  const overflow = await page.evaluate(() => {
    const s = document.querySelector('.safe');
    const content = [...s.children].reduce((h, el) => h + el.getBoundingClientRect().height, 0);
    return content - s.clientHeight;
  });
  if (overflow > 0) { console.error(`${c}: content overflows the safe area by ${overflow.toFixed(1)}px`); process.exit(1); }

  await page.pdf({
    path: path.join(here, `${c}-rgb.pdf`),
    width: '216mm', height: '303mm', printBackground: true, preferCSSPageSize: true,
  });
  await page.setViewport({ width: 816, height: 1145, deviceScaleFactor: 2 });
  await page.screenshot({ path: path.join(here, `proof-${c}.png`) });
  console.log('rendered', c);
}
await browser.close();
