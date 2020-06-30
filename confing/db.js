const mongoose = require('mongoose');
const dbUrl = require('./properties').DB

module.exports = () =>{
    mongoose.connect(dbUrl, { useNewUrlParser: true})
        .then(() => console.log('mogo db conectado a '+dbUrl))
        .catch(err => console.log('la conección tiene un error en ' +err +' '+ dbUrl));
    
    process.on('SIGINT', () =>{
        mongoose.connection.close(() => {
            console.log('mongo está desconectado');
            process.exit(0);
        });
    });
}