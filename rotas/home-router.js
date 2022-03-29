const express = require('express');

const { homePage, jogadores } = require('../controller/homeController');
const rota = express.Router();

rota.get('/', homePage);

rota.get('/jogadores', jogadores)

module.exports = {
    routes: rota
}
