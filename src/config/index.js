const app = require('./app');
const database = require('./database');

const main = () => {
    app.listen(3000, ()=>{
    database.connect((err)=>{
        if(err) throw err
        console.log('Base de datos conectada');
    })
        console.log('servidor escuchando puerto 3000');
    });
};

main();