// main.js

const extraerInformacion = require('./extrayendoinfo.test');

(async () => {
  
  const extraccion = await extraerInformacion();

  const boleta = extraccion.boleta;
  const nombre = extraccion.nombre;
  console.log('nombre:', nombre);
  console.log('boleta:', boleta);
  
})();

