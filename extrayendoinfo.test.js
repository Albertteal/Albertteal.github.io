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
  await page.goto('https://servicios.dae.ipn.mx/vcred/?h=41388f8616a528c6bac158748e1d07352e3b5111763b3dec1361f6b193c4', {
    waitUntil: 'networkidle0',
  });
  await page.waitForSelector('#wrapper > div.nombre');

   nombre = await page.$eval('#wrapper > div.nombre', (div) => div.textContent);
   boleta = await page.$eval('#wrapper > div.boleta', (div) => div.textContent);

  console.log(nombre, boleta);

  await browser.close();

  return { nombre, boleta };
}

module.exports = extraerInformacion;