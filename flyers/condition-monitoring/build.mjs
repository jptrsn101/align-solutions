// Export the condition monitoring flyer to a print-ready PDF.
//
// 1. Chrome renders index.html at A4 + 3mm bleed (216 x 303mm) to an RGB PDF.
// 2. Ghostscript converts it to CMYK with prepress settings (fonts embedded,
//    no image downsampling below 300dpi):
//      gs -o condition-monitoring-flyer-print.pdf -sDEVICE=pdfwrite \
//         -sColorConversionStrategy=CMYK -sProcessColorModel=DeviceCMYK \
//         -dPDFSETTINGS=/prepress condition-monitoring-flyer-rgb.pdf
// 3. set-boxes.py writes TrimBox (A4, 3mm in) and BleedBox (full page).
//
// Usage: node build.mjs  (needs puppeteer or puppeteer-core and system Chrome)
import { fileURLToPath } from 'url';
import path from 'path';

const here = path.dirname(fileURLToPath(import.meta.url));
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
// Fail loudly if the content no longer fits inside the safe area
const overflow = await page.evaluate(() => {
  const s = document.querySelector('.safe');
  return Math.max(0, s.scrollHeight - s.clientHeight, ...[...s.children].map(c => c.getBoundingClientRect().bottom - s.getBoundingClientRect().bottom));
});
if (overflow > 0) { console.error(`Content overflows the safe area by ${overflow.toFixed(1)}px`); process.exit(1); }
await page.pdf({
  path: path.join(here, 'condition-monitoring-flyer-rgb.pdf'),
  width: '216mm', height: '303mm', printBackground: true, preferCSSPageSize: true,
});
// Screen proof at 300dpi-equivalent scale, for checking the layout
await page.setViewport({ width: 816, height: 1145, deviceScaleFactor: 3 });
await page.screenshot({ path: path.join(here, 'proof.png') });
await browser.close();
console.log('rendered');
