const express = require('express');
const mysql2 = require('mysql2');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


//http
app.get('/:name/:id', (req, res) =>{
    const { name, id }= req.params;


    res.send(`${name}: ${id}`);
});

app.post('/', (req, res) =>{  //mandamos info desde el body que se supone es mas seguro
    const { email, password} = req.body;
    res.send(`${email}: ${password}`);
});

app.put('/', (req, res) =>{
    res.send('Peticion put');
});

app.delete('/', (req, res) =>{
    res.send('Peticion delete');
});


//db 
const connection = mysql2.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '7131',
    database: 'prueba'

})

connection.connect((err)=>{
    if(err) throw err
    console.log('BD conectada');
});

//mostar trablas

// const querySQL = 'SHOW TABLES;';

// connection.query(querySQL, (err, res)=>{
//     if(err) throw err
//     console.log('respuesta sql', res);
// })

//agregar registro

const insertQuery = `INSERT INTO User(firt_name, age) VALUES('Juan', 30);`;

 connection.query(insertQuery, (err, res)=>{
    if(err) throw err
    console.log('respuesta de insert', res);
})

const getQuery = `SELECT * FROM User`;

connection.query(getQuery, (err, res)=>{
    if(err) throw err
    console.log('respuesta de get', res);
})


app.listen(3000, ()=>{
    console.log('servidor encendido');
});
