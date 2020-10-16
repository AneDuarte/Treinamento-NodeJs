//Require carrega um módulo
const { Sequelize, Model } =  require('sequelize');

class EstadoCivil extends Model {
    //static define um método estático para uma classe
    //As associações entre metodos nunca mudam
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
            },
            {
                sequelize,
                tableName: "estado_civil"
            }
        );

        return this;
    }

    //Não sei o que eu fiz aqui, só copiei do meu Endereco.js
    //Procurar saber o que tá acontecendo
    static associate(models) {
        //hasMany? Várias pessoas com o mesmo estado civil
        //Linkar com a população?
        //ponto acessa metodos
        this.hasMany(models.Populacao, {
            as: "populacao",
            foreignKey: "estado_civil_id",
        });
    }
}

//Exportando o módulo
module.exports = EstadoCivil;