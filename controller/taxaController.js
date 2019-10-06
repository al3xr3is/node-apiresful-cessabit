'use strict';
const { TAXAs } = require('../models');

    function listar(req, res) {
        TAXAs.findAll().then((resultado) => {
            res.json(resultado);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    }

    function filtrar(req, res) {
        TAXAs.findOne({
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
        TAXAs.create({
            tipo: req.body.tipo,
            valor: req.body.valor,
            descricao: req.body.descricao
        }).then((resultado) => {
            res.json(resultado);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    }

    function atualizar(req, res) {
        TAXAs.update({
            tipo: req.body.tipo,
            valor: req.body.valor,
            descricao: req.body.descricao
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
        TAXAs.destroy({
            where: {
                id: req.params.id
            }
        }).then((resultado) => {
           res.sendStatus(200);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    }

module.exports = { listar, filtrar, criar, atualizar, excluir }