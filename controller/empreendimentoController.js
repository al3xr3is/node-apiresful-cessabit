'use strict';
const { EMPREENDIMENTOs } = require('../models');

    function listar(req, res) {
        EMPREENDIMENTOs.findAll().then((resultado) => {
            res.json(resultado);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    }

    function filtrar(req, res) {
        EMPREENDIMENTOs.findOne({
            where: {
                id: req.params.id
            }
        }).then((resultado) => {
            res.json(resultado);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    }

    function criar(req, res) {
        EMPREENDIMENTOs.create({
            nome: req.body.nome,
            bloco: req.body.bloco,
            apartamento: req.body.apartamento
        }).then((resultado) => {
            res.json(resultado);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    }

    function atualizar(req, res) {
        EMPREENDIMENTOs.update({
            nome: req.body.nome,
            bloco: req.body.bloco,
            apartamento: req.body.apartamento
        },
        {
            where: {
                id: req.params.id
            }
        }).then((resultado) => {
            res.json(resultado);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    }

    function excluir(req, res) {
        EMPREENDIMENTOs.destroy({
            where: {
                id: req.params.id
            }
        }).then((resultado) => {
           res.sendStatus(200) ;
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    }

module.exports = { listar, filtrar, criar, atualizar, excluir }