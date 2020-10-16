"use strict";

//Exportar o módulo
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("usuarios", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      matricula: {
        type: Sequelize.STRING,
        allowNull: false,
        //A matrícula vai ser logada como única (intransferível)
        unique: true,
      },
      periodo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      //Referenciar um endereço
      endereco_id: {
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
        allowNull: false,
        //O email vai ser logado como único (intransferível)
        unique: true,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      senha_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("usuarios");
  },
};