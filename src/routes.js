const express = require("express");

const InfoController = require('./app/controllers/InfoController');
const EnderecoController = require("./app/controllers/EnderecoController");
const UsuarioController = require("./app/controllers/UsuarioController");
const SessionController = require("./app/controllers/SessionController");
const PopulacaoController = require("./app/controllers/PopulacaoController");
const EstadoCivilController = require("./app/controllers/EstadoCivilController");
const RegistroController = require("./app/controllers/RegistroController");

const authMiddleware = require("./app/middlewares/auth");
//const auth = require("./config/auth");

const routes = express.Router();

routes.get("/", InfoController.index);

//Route Sessão
routes.post("/sessions", SessionController.store);

routes.post("/usuarios", UsuarioController.store);

//Quando coloco isso, tudo que vem por baixo entra na autenticação
routes.use(authMiddleware);

//Routes Endereço
routes.post("/enderecos", EnderecoController.store);
routes.get("/enderecos/:id", EnderecoController.show);
routes.put("/enderecos/:id", EnderecoController.update);
routes.get("/enderecos", EnderecoController.index);

//Routes Usuários

routes.get("/usuarios/:id", UsuarioController.show);
routes.get("/usuarios/", UsuarioController.index);

//Routes População
routes.post("/populacao", PopulacaoController.store);
routes.get("/populacao/:id", PopulacaoController.show);
routes.get("/populacao", PopulacaoController.index);

//Routes Estado Civil
routes.post("/estado_civil", EstadoCivilController.store);
routes.get("/estado_civil", EstadoCivilController.index);
routes.put("/estado_civil/:id", EstadoCivilController.update);

//Route Registro
routes.post("/registros", RegistroController.store);
routes.get("/registros", RegistroController.index);
routes.get("/registros/:id", RegistroController.show);

//Exportar o módulo
module.exports = routes;