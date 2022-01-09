const mongoose = require('mongoose');
const listasService = require('../services/listas.service');

const getListas = async (req, res) => {
    const listas = await listasService.getListas();
    res.send(listas);
}

const getListaById = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).send({ message: 'Id Invalido, porfavor verifique as informações.' })
        return;
    }

const lista = await listasService.getListaById(id);
    if (!lista) {
        res.status(404).send({ message: 'Lista não encontrada.' });
        return;
    }
    res.send(lista);
}

const createLista = async (req, res) => {
    const lista = req.body;

    await listasService.createLista(lista)
        .then(() => {
            res.send({ message: 'Lista criada com sucesso.' })
        })
        .catch(err => {
            res.status(500).send({ message: `Erro no servidor: ${err}` });
        })
}

const editLista = async (req, res) => {
    const id = req.params.id;

    const listaEdit = req.body;

    await listasService.editLista(id, listaEdit)
        .then(() => res.send({ message: 'Lista editada com sucesso.' }))
        .catch(err => res.status(500).send({ message: `Erro no servidor: ${err}` }))
}

const deleteLista = async (req, res) => {
    const id = req.params.id;

    await listasService.deleteLista(id)
        .then(() => res.send({ message: 'Lista excluida com sucesso.'}))
        .catch(err => res.status(500).send({ message: `Erro no servidor: ${err}` }))
}

module.exports = {
    getListas,
    getListaById,
    createLista,
    editLista,
    deleteLista
}

