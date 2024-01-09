const mysql2 = require('mysql2');

//db 
const database = mysql2.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '7131',
    database: 'pase_de_lista'

});

module.exports = database;