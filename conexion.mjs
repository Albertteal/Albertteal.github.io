import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1', 
    user: 'root',
    password: '7131',
    database: 'pase_de_lista'
}) .promise()

async function consultarBoleta(){
    const result = await pool.query("SELECT BOLETA FROM  alumno")
    console.log(result)
}




consultarBoleta();



// const meter = await pool.query("INSERT INTO alumno (boleta, nombre) VALUES ('2021350343', 'ERICK FLORES FLORES');")





