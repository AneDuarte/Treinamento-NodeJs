'use strict';

//Exporta o módulo
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("registros", {

      //Refereciar um id
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      //Referenciar um usuario
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          //Model vai ser referenciado pelo nome da tabela
          model: "usuarios",
          key: "id",
        },  
      },
      //Referenciar a população
      populacao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          //Model vai ser referenciado pelo nome da tabela
          model: "populacao",
          key: "id",
        },
      },
      registro: {
        //?type é text ou string?
        type: Sequelize.STRING,
        allowNull:false,
      },
      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("registros");
  },
};
