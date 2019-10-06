const express = require('express');
const routes = express.Router();
const usuarioController = require('../controller/usuarioController');

routes.get('/', usuarioController.listar);
routes.get('/:email', usuarioController.filtrar);
routes.post('/', usuarioController.criar);
routes.put('/:email', usuarioController.atualizar);
routes.delete('/:email', usuarioController.excluir);

module.exports = routes;