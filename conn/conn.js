const mongoose = require('mongoose');

const Conn = (url,user,pass,data) => {
    mongoose.connect(`${url}/${data}`, {
        user: user,
        pass: pass,
        useNewUrlParser: true
        }).then(() => {
            console.log('MONGO DB CONECTADO COM SUCESSO');
        }).catch(err => {
            console.log('ERRO AO CONECTAR COM O MONGO DB: ' + err);
        })
}

module.exports = Conn;