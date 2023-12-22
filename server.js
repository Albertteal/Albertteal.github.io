import puppeteer from "puppeteer"


async function openWebpage(){
    const browser = await puppeteer.launch({
        headless: false
    })
    const page = await browser.newPage()
    await page.goto('https://servicios.dae.ipn.mx/vcred/?h=5d7213f96deaedc96c19290932eadcc9fc6465ef22d0242905414e19c555d0b9')
    
    
  const result = await page.evaluate(() => {
        const boleta = document.querySelector("#wrapper > div.boleta").innerHTML
        const nombre = document.querySelector("#wrapper > div.nombre").innerHTML
        return {boleta: boleta, nombre: nombre}
  })
    console.log(result)
    
    
  

    await browser.close();
   
    
}
openWebpage();

