const express = require('express');
const router = express.Router();


// retorna todos os mensagens
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "usando o get rota de mensagens"
    });

});

// insere um mensagem
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "mensagem criada"
    });
});

// get por id mensagem
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido;

    res.status(200).send({
        mensagem: "detalhes da mensagem",
        id: id
    });

});

// deleta mensagem
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "mensagem deletada"
    });
});

module.exports = router;