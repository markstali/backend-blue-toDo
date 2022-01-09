const express =  require('express');
const listasController = require('../controllers/listas.controller');

const router = express.Router();

router.get('/', listasController.getListas);

router.get('/:id', listasController.getListaById);

router.post('/add', listasController.createLista);

router.put('/edit/:id', listasController.editLista);

router.delete('/delete/:id', listasController.deleteLista);

module.exports = router;
