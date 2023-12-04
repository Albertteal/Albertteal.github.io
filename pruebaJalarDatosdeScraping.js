// main.js

const extraerInformacion = require('./extrayendoinfo.test');

(async () => {
  const extraccion = await extraerInformacion();

  const boleta = extraerInformacion.boleta;
  const nombre = extraerInformacion.nombre;
  console.log('nombre:', nombre);
  console.log('boleta:', boleta);
  
})();

module.exports = extraerInformacion;