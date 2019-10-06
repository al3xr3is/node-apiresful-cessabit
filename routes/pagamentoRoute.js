'use strict';
const express = require('express');
const routes = express.Router();

const pagamentoController = require('../controller/pagamentoController');

routes.get('/', pagamentoController.listar);
routes.get('/:id', pagamentoController.filtrar);
routes.post('/', pagamentoController.criar);
routes.put('/:id', pagamentoController.atualizar);
routes.delete('/:id', pagamentoController.excluir);

module.exports = routes;