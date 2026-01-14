const express = require('express');
const bodyParser = require('body-parser');

const administrativo = require('./modules/administrativo');
const financeiro = require('./modules/financeiro');
const rh = require('./modules/rh');
const marketing = require('./modules/marketing');
const limpanome = require('./modules/limpanome');
const rating = require('./modules/rating');

const app = express();
app.use(bodyParser.json());

// Rotas
app.use('/adm', administrativo);
app.use('/financeiro', financeiro);
app.use('/rh', rh);
app.use('/marketing', marketing);
app.use('/limpanome', limpanome);
app.use('/rating', rating);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Mythra backend rodando na porta ${PORT}`);
});
