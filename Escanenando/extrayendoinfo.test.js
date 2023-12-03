const puppeteer = require('puppeteer');

describe('Extrayendo informacion', () => {  



	it('Extraer el nombre', async () => { 
		const browser = await puppeteer.launch({  
			headless: false,   
            defaultViewport: null 
		});

		const page = await browser.newPage(); 
		await page.goto('https://servicios.dae.ipn.mx/vcred/?  h=41388f8616a528c6bac158748e1d07352e3b5111763b3dec1361f6b193c4', {waitUntil: 'networkidle0'});
        await page.waitForSelector('#wrapper > div.nombre')

        
        const nombre = await page.$eval('#wrapper > div.nombre', (div)=>div.textContent )  //corre el documento query selector
        console.log(nombre)
        // const nombre = await page.waitForSelector('#wrapper > div.nombre')
        // const boleta = await page.waitForSelector('#wrapper > div.boleta')
        const boleta = await page.$eval('#wrapper > div.boleta', (div)=>div.textContent )
        console.log(boleta)
        // console.log(boleta)

		await browser.close()
	}, 30000);
});