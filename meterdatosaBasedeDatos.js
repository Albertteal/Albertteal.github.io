import mysql from 'mysql2'
const mysql = require("mysql");

const datos = require("./datos.json");

const boleta = datos.boleta;
const nombre = datos.nombre;

console.log(boleta); // "2021350343"
console.log(nombre); // "ERICK FLORES FLORES"



const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mi_base_de_datos",
});

