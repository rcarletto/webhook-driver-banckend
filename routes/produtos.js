const express = require('express');
const router = express.Router();


// retorna todos os produtos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "usando o get na rota de produtos"
    });

});

// insere um produto
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "produto criado"
    });
});

// get por id produto
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;

    if (id === 'especial')  
        res.status(200).send({
            mensagem: "vc descobriu o id secreto!",
            id: id
        })
    else   res.status(200).send({
        mensagem: "retorna id por produto",
        id: id
    });

});

// atualiza um produto
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "produto atualizado"
    });
});

// deleta produto
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "produto deletado"
    });
});

module.exports = router;