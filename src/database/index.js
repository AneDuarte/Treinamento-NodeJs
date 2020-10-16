const Sequelize = require("sequelize");

const databaseConfig = require("../config/database");

const Endereco = require("../app/models/Endereco");
const Usuario = require("../app/models/Usuario");
const EstadoCivil = require("../app/models/EstadoCivil");
const Populacao = require("../app/models//Populacao");
const Registro = require("../app/models/Registro");

const models = [Endereco, Usuario, EstadoCivil, Populacao, Registro];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

//Exportar o módulo
module.exports = new Database();
