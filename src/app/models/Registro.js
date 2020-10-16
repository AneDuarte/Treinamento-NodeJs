//Require carrega um módulo
const { Sequelize, Model } = require('sequelize');
//const Populacao = require('./Populacao');

class Registro extends Model {
    //static define um método estático para uma classe
    static init(sequelize) {
        super.init(
            {
                usuario_id: Sequelize.INTEGER,
                populacao_id: Sequelize.INTEGER,
                registro: Sequelize.STRING,
            },
            {
                sequelize,
                tableName: "registros"
            }
        );

        return this;
    }

    static associate(models) {
        //hasMany?
        this.belongsTo(models.Usuario, {
            as: "usuarios",
            foreignKey: "usuario_id",
        });
        this.belongsTo(models.Populacao, {
            as: "populacoes",
            foreignKey: "populacao_id",
        });
    }
}

module.exports = Registro;