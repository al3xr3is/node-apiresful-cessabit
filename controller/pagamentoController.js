'use strict';
const { PAGAMENTOs } = require('../models');
const { TAXAs } = require('../models');
const { USUARIOs} = require('../models');

    function listar(req, res) {
        PAGAMENTOs.findAll().then((resultado) => {
            res.json(resultado);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    }

    function balancoAnual(req, res) {
        PAGAMENTOs.findAll({
            include: [{model: TAXAs}, {model: USUARIOs}]
        }).then((resultado) => {
            res.json(resultado);
        }).catch((err) => {
            console.log(err)
        })
    }

    function filtrar(req, res) {
        PAGAMENTOs.findOne({
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
        PAGAMENTOs.create({
            token: req.body.token,
            dataemissao: req.body.dataemissao,
            datavencimento: req.body.datavencimento,
            datapagamento: req.body.datapagamento,
            statuspagamento: req.body.statuspagamento,
            id_usuario: req.body.id_usuario,
            id_taxa: req.body.id_taxa
        }).then((resultado) => {
            res.json(resultado);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    }

    function atualizar(req, res) {
        PAGAMENTOs.update({
            token: req.body.token,
            dataemissao: req.body.dataemissao,
            datavencimento: req.body.datavencimento,
            datapagamento: req.body.datapagamento,
            statuspagamento: req.body.statuspagamento,
            id_usuario: req.body.id_usuario,
            id_taxa: req.body.id_taxa
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
        PAGAMENTOs.destroy({
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

module.exports = { listar, balancoAnual, filtrar, criar, atualizar, excluir }