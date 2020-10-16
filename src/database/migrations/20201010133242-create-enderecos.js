'use strict';

//Exportar o módulo
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("enderecos", {
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
            numero: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            bairro: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cidade: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            uf: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cep: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: { type: Sequelize.DATE, allowNull: false},
            updated_at: { type: Sequelize.DATE, allowNull: false},
        });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable("enderecos");
    },
};