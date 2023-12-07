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
  await page.goto('https://servicios.dae.ipn.mx/vcred/?h=5d7213f96deaedc96c19290932eadcc9fc6465ef22d0242905414e19c555d0b9', {
    waitUntil: 'networkidle0',
  });
 

   nombre = await page.$eval('#wrapper > div.nombre', (div) => div.textContent);
   boleta = await page.$eval('#wrapper > div.boleta', (div) => div.textContent);

  //console.log(nombre, boleta);
  

  await browser.close();
  return { nombre, boleta };

}

module.exports = extraerInformacion;