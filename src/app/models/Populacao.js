//Require carrega um módulo
const { Sequelize, Model } = require('sequelize');

class Populacao extends Model {
    //static define um método estático para uma classe
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
                rg: Sequelize.STRING,
                cpf:Sequelize.STRING,
                endereco_id: Sequelize.INTEGER,
                email: Sequelize.STRING,
                estado_civil_id: Sequelize.INTEGER,
            },
            {
                sequelize,
                tableName: "populacao",
            }
        );

        return this;
    }

    static associate(models) {
        //Muitos para um
        this.belongsTo(models.Endereco, {
            as: "endereco",
            //Isso tá certo? Essa FK é dele mesmo
            foreignKey: "endereco_id",
        });
        this.belongsTo(models.EstadoCivil, {
            as: "estado_civil",
            foreignKey: "estado_civil_id",
        });
        this.hasMany(models.Registro, {
            as: "registro",
            foreignKey: "populacao_id",
        });
    }
}

//Exportando o módulo
module.exports = Populacao;