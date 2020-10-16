//Require carrega um módulo
const { Sequelize, Model } = require("sequelize");
const bcrypt = require("bcryptjs");

class Usuario extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
                endereco_id: Sequelize.INTEGER,
                matricula: Sequelize.STRING,
                //Virtual pois é um campo que não existe
                senha: Sequelize.VIRTUAL,
                senha_hash: Sequelize.STRING,
                //?Checar se período é string ou integer?
                //Integer
                periodo: Sequelize.STRING,
                email: Sequelize.STRING,
                telefone: Sequelize.STRING,
                admin: Sequelize.BOOLEAN,
            },
            {
                sequelize,
                tableName: "usuarios",
            }
        );

        this.addHook('beforeSave', async (usuario) => {
            if (usuario.senha) {
                usuario.senha_hash = await bcrypt.hash(usuario.senha, 8);
            }
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Endereco, {
            as: 'endereco',
            foreignKey: 'endereco_id',
        });
    }

    checarSenha(senha) {
        //Coloco a senha e a senha do meu model
        //Estou comparando a senha que estou entrando com a senha hash
        return bcrypt.compare(senha, this.senha_hash);
    }
}

//Exportando o módulo
module.exports = Usuario;