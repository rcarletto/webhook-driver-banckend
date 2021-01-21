const express = require('express');
const router = express.Router();


// retorna todos os pedidos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "usando o get rota de pedidos"
    });

});

// insere um pedido
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "pedido criado"
    });
});

// get por id pedido
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido;

    res.status(200).send({
        mensagem: "detalhes do pedido",
        id: id
    });

});

// deleta pedido
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "pedido deletado"
    });
});

module.exports = router;