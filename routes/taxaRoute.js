const express = require('express');
const routes = express.Router();
const taxaController = require('../controller/taxaController');

routes.get('/', taxaController.listar);
routes.get('/:id', taxaController.filtrar);
routes.post('/', taxaController.criar);
routes.put('/:id', taxaController.atualizar);
routes.delete('/:id', taxaController.excluir);

module.exports = routes;