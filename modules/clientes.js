const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res) => {
  res.json({
    status: "ok",
    sistema: "Mythra",
    modulo: "Administrativo",
    mensagem: "Dashboard operacional"
  });
});

module.exports = router;
