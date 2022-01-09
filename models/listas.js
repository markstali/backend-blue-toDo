const mongoose = require('mongoose');

const listasModel = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    prioridade: { type: String, required: true },
    status: { type: String, required: true },
    prazo: { type: Date, required: true },
    criado: { type: Date, default: Date.now }
})

const Lista = mongoose.model('Lista', listasModel);

module.exports = Lista;
