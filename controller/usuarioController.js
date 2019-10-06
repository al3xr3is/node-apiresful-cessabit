'use strict';
const { USUARIOs } = require('../models');

    function listar(req, res) {
        USUARIOs.findAll().then((resultado) => {
            res.json(resultado);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    }

    function filtrar(req, res) {
        USUARIOs.findOne({
            where: {
                email: req.params.email
            }
        }).then((resultado) => {
            res.json(resultado);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    }

    function criar(req, res) {
        USUARIOs.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            datacadastro: req.body.datacadastro,
            id_empreendimento: req.body.id_empreendimento
        }).then((resultado) => {
            res.json(resultado);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    }

    function atualizar(req, res) {
        USUARIOs.update({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            datacadastro: req.body.datacadastro,
            id_empreendimento: req.body.id_empreendimento
        },
        {
            where: {
                email: req.params.email
            }
        }).then((resultado) => {
            res.json(resultado);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    }

    function excluir(req, res) {
        USUARIOs.destroy({
            where: {
                email: req.params.email
            }
        }).then((resultado) => {
           res.sendStatus(200);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    }

module.exports = { listar, filtrar, criar, atualizar, excluir }