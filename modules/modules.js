const express = require("express");
const router = express.Router();

// Importando módulos
const clientes = require("./clientes");
const administrativo = require("./administrativo");
const financeiro = require("./financeiro");
const rh = require("./rh");

// Registrando rotas
router.use(clientes);
router.use(administrativo);
router.use(financeiro);
router.use(rh);

module.exports = router;

