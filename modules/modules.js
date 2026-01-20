const express = require("express");
const router = express.Router();

const administrativo = require("./administrativo");
const clientes = require("./clientes");

router.use("/admin", administrativo);
router.use("/api", clientes);

module.exports = router;


