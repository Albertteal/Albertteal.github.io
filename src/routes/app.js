const express = require('express');
const mysql2 = require('mysql2');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));



const database = mysql2.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '7131',
    database: 'pase_de_lista'

});

database.connect((err)=>{
    if(err) throw err
    console.log('BD conectada');
})

const consultarTablas = 'SHOW TABLES;';
const AgregarDatos = `INSERT INTO alumno(NOMBRE, APELIIDO, BOLETA) VALUES('Albert', 'Nunez', 2020351093);`;
const getQuery = `SELECT * FROM alumno;`;

database.query(getQuery, (err, res)=>{
    if (err) throw err;
     console.log('Respuesta SQL get:', res);
 });
// database.query(AgregarDatos, (err, res)=>{
//     if (err) throw err;
//     console.log('Respuesta SQL:', res);
// })

app.listen(3000, ()=>{
    console.log('Servidor encendido')
})







