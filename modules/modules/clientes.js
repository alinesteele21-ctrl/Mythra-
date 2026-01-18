const express = require("express");
const router = express.Router();

// Simulação de banco (depois ligamos no PostgreSQL)
let clientes = [];

// Criar cliente
router.post("/clientes", (req, res) => {
  const { nome, email, telefone, empresa } = req.body;

  const novoCliente = {
    id: Date.now(),
    nome,
    email,
    telefone,
    empresa,
    criadoEm: new Date()
  };

  clientes.push(novoCliente);

  res.status(201).json({
    mensagem: "Cliente cadastrado com sucesso",
    cliente: novoCliente
  });
});

// Listar clientes
router.get("/clientes", (req, res) => {
  res.json(clientes);
});

// Buscar cliente por ID
router.get("/clientes/:id", (req, res) => {
  const cliente = clientes.find(c => c.id == req.params.id);

  if (!cliente) {
    return res.status(404).json({ mensagem: "Cliente não encontrado" });
  }

  res.json(cliente);
});

// Atualizar cliente
router.put("/clientes/:id", (req, res) => {
  const cliente = clientes.find(c => c.id == req.params.id);

  if (!cliente) {
    return res.status(404).json({ mensagem: "Cliente não encontrado" });
  }

  Object.assign(cliente, req.body);

  res.json({
    mensagem: "Cliente atualizado com sucesso",
    cliente
  });
});

// Excluir cliente
router.delete("/clientes/:id", (req, res) => {
  clientes = clientes.filter(c => c.id != req.params.id);

  res.json({ mensagem: "Cliente removido com sucesso" });
});

module.exports = router;
