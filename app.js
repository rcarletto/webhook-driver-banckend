const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");

const rotaProdutos = require("./routes/produtos");
const rotaMensagens = require("./routes/mensagens");

app.use(express.json());
const corsOptions = { methods: "GET,PUT,PATCH,POST,DELETE" };
app.use(cors(corsOptions));

app.use(morgan("dev"));
app.use("/produtos", rotaProdutos);
app.use("/mensagens", rotaMensagens);

//rota invalida
app.use((req, res, next) => {
  const erro = new Error("invalid path");
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: error.message,
    },
  });
});

module.exports = app;
