const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const homeRouter = require('./rotas/home-router')

const port = 3000;

const server = express();

server.use(expressLayouts);
server.set('view engine', 'ejs');

server.use(express.static(path.join(__dirname, 'public')));
server.use(homeRouter.routes);

server.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
})