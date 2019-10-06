'use strict';
const express = require('express');
const app = express();
const rota_empreendimento = require('./routes/empreendimentoRoute');
const rota_usuario = require('./routes/usuarioRoute');
const rota_taxa = require('./routes/taxaRoute');
const rota_pagamento = require('./routes/pagamentoRoute');

//Configurações do express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => { //Configuracao do CORS, necessário para troca de dados server/client
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

//Instanciando as rotas do servidor
app.use('/empreendimentos', rota_empreendimento);
app.use('/usuarios', rota_usuario);
app.use('/taxas', rota_taxa);
app.use('/pagamentos', rota_pagamento);

//Criando conexão ao servidor http
app.listen(5000, () => {
    console.log('servidor conectado');
});