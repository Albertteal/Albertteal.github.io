// extrayendoinfo.test.js
var nombre;
var boleta;
const puppeteer = require('puppeteer');

async function extraerInformacion() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();
  await page.goto('https://www.dae.ipn.mx/vcred/?h=e24d1d454ff2a75f71c29e72e0fd5fb275b5b5cdd521264d32dd541d1a3f', {
    waitUntil: 'networkidle0',
  });
 

   nombre = await page.$eval('#wrapper > div.nombre', (div) => div.textContent);
   boleta = await page.$eval('#wrapper > div.boleta', (div) => div.textContent);

  //console.log(nombre, boleta);

  await browser.close();

  return { nombre, boleta };
}

module.exports = extraerInformacion;