//Require carrega um módulo
const { Sequelize, Model } = require('sequelize');

class Endereco extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
                numero: Sequelize.STRING,
                bairro: Sequelize.STRING,
                cidade: Sequelize.STRING,
                uf: Sequelize.STRING,
                cep: Sequelize.STRING,
            },
            {
                sequelize,
                tableName: "enderecos"
            }
        );

        return this;
    }

    static associate(models) {
        //?Endereço tem muitos usuarios
        this.hasMany(models.Usuario, {
            as: "usuarios",
            foreignKey: "endereco_id",
        });
        this.hasMany(models.Populacao, {
            as: "populacao",
            foreignKey: "endereco_id",
        })
    }
}

//Exportando o módulo
module.exports = Endereco;