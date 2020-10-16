'use strict';

//Exportar o módulo
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("populacao", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        //?O que é autoIncrement?
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      //?Na parte de rg e do cpf, vai ser obrigatório os dois?
      rg: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ////Refrenciar um endereço
      endereco_id: {
        //?Pq é integer?
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          //Model vai ser referenciado pelo nome da tabela
          model: "enderecos",
          key: "id",
        },
      },
      email: {
        type: Sequelize.STRING,
        //?Email não precisa ser obrigatório?
        allowNull: true,
        unique: true,
      },
      estado_civil_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          //Model vai ser referenciado pelo nome da tabela
          model: "estado_civil",
          key: "id",
        },
      },
      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false},
    });
  },

  down: async (queryInterface, Sequelize) => {
    await QueryInterface.dropTable("populacao");
  },
};
