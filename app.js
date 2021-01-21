const express = require('express');
const app = express();
const morgan = require('morgan');

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');
const rotaMensagens = require('./routes/mensagens');



app.use(morgan('dev'));
app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);
app.use('/mensagens', rotaMensagens);

app.use((req, res, next) => {
    const erro = new Error('invalid path');
    erro.status = 404;
    next(erro);

}); 

app.use((error, req, res, next)  => {
    res.status(error.status || 500);
    return res.send( {
        erro: {
            mensagem: error.message
        }
    });

});

module.exports = app; 