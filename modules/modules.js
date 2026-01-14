const express = require('express');
const router = express.Router();

// ===================== ADMINISTRATIVO =====================
let tarefas = [];

router.get('/adm/listar', (req, res) => {
    res.json({ tarefas });
});

router.post('/adm/criar', (req, res) => {
    const { tarefa } = req.body;
    tarefas.push(tarefa);
    res.json({ message: `Tarefa "${tarefa}" criada com sucesso! ✅` });
});

router.get('/adm/dashboard', (req, res) => {
    res.json({ totalTarefas: tarefas.length });
});

// ===================== FINANCEIRO =====================
let contas = [];

router.post('/financeiro/criar', (req, res) => {
    const { nome, valor } = req.body;
    contas.push({ nome, valor });
    res.json({ message: `Conta "${nome}" de R$ ${valor.toFixed(2)} adicionada! ✅` });
});

router.get('/financeiro/listar', (req, res) => {
    res.json({ contas });
});

router.get('/financeiro/fluxo', (req, res) => {
    const total = contas.reduce((sum, c) => sum + Number(c.valor), 0);
    res.json({ totalFluxo: total });
});

// ===================== RH =====================
let colaboradores = [];

router.post('/rh/criar', (req, res) => {
    const { nome, cargo, salario } = req.body;
    colaboradores.push({ nome, cargo, salario });
    res.json({ message: `Colaborador "${nome}" cadastrado! ✅` });
});

router.get('/rh/listar', (req, res) => {
    res.json({ colaboradores });
});

router.get('/rh/folha', (req, res) => {
    const total = colaboradores.reduce((sum, c) => sum + Number(c.salario), 0);
    res.json({ totalSalarios: total });
});

// ===================== MARKETING =====================
let posts = [];

router.post('/marketing/criar', (req, res) => {
    const { titulo, data } = req.body;
    posts.push({ titulo, data });
    res.json({ message: `Post "${titulo}" agendado para ${data} ✅` });
});

router.get('/marketing/listar', (req, res) => {
    res.json({ posts });
});

router.get('/marketing/relatorio', (req, res) => {
    res.json({ totalPosts: posts.length });
});

// ===================== LIMPA NOME =====================
let negativados = [];

router.post('/limpanome/adicionar', (req, res) => {
    const { nome, divida } = req.body;
    negativados.push({ nome, divida });
    res.json({ message: `${nome} adicionado(a) com dívida R$ ${divida.toFixed(2)} ✅` });
});

router.get('/limpanome/listar', (req, res) => {
    const totalDividas = negativados.reduce((sum, n) => sum + Number(n.divida), 0);
    res.json({ negativados, totalDividas });
});

// ===================== RATING =====================
let ratings = [];

router.post('/rating/adicionar', (req, res) => {
    const { nome, nota } = req.body;
    ratings.push({ nome, nota });
    res.json({ message: `Rating de ${nome} registrado: ${nota} ✅` });
});

router.get('/rating/listar', (req, res) => {
    const totalNotas = ratings.reduce((sum, r) => sum + Number(r.nota), 0);
    const media = ratings.length ? (totalNotas / ratings.length).toFixed(2) : 0;
    res.json({ ratings, media });
});

module.exports = router;
