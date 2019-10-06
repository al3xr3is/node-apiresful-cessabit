'use strict';
const express = require('express');
const routes = express.Router();
const empreendimentoController = require('../controller/empreendimentoController');

routes.get('/', empreendimentoController.listar);
routes.get('/:id', empreendimentoController.filtrar);
routes.post('/', empreendimentoController.criar);
routes.put('/:id', empreendimentoController.atualizar);
routes.delete('/:id', empreendimentoController.excluir);

module.exports = routes;