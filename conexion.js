import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1', 
    user: 'root',
    password: '7131',
    database: 'pase_de_lista'
}) .promise()

const result = await pool.query("SELECT * FROM  alumno")
console.log(result)