//Require carrega um módulo
const jwt = require("jsonwebtoken");

//Require carrega um módulo
const authConfig = require("../../config/auth");

//Require carrega um módulo
const User = require("../models/Usuario");

class SessionController {
    async store(req, res) {
        //Só vai usar email e senha para logar
        const { email, senha } = req.body;

        //FindOne pois só vai existir 1 usuário por email
        const usuario = await User.findOne({
            where: { email },
        });

        if (!usuario || !(await usuario.checarSenha(senha))) {
            return res.status(400).json({ error: "Usuário ou senha inválidos" });
        }

        const { id, nome, admin } = usuario;

        return res.status(200).json({
            usuario: {
                id,
                nome,
                admin,
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            }),
        });
    }
}

//Exportando o módulo
module.exports = new SessionController();