//Require carrega um módulo
const Usuario = require('../models/Usuario');
const Endereco = require("../models/Endereco");

//Require carrega um módulo
const Yup = require("yup");

class UsuarioController {
    async store(req, res) {
        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            matricula: Yup.number().required().min(10000000).max(99999999),
            senha: Yup.string().required().min(6),
            periodo: Yup.number().required(),
            endereco_id: Yup.number().required(),
            email: Yup.string().email().required(),
            telefone: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(404).json({ error: "Erro de validação" });
        }

        const { 
            nome,
            matricula, 
            senha,
            periodo,
            endereco_id,
            email,
            telefone,
        } = req.body;

        const usuario = await Usuario.create({
            nome,
            matricula, 
            senha,
            periodo,
            endereco_id,
            email,
            telefone,
        });

        return res.status(200).json(usuario);
    }

    async show(req, res) {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id, {
            attributes: ["nome", "email", "matricula"],
            include: [
                {
                    model: Endereco,
                    as: "endereco",
                    attributes: ["nome", "numero", "bairro"],
                },
            ],
        });

        if (!usuario) {
            return res.status(404).json({ error: "Usuário não encontrado "});
        }

        return res.status(200).json(usuario);
    }

    async index(req, res) {
        const usuarios = await Usuario.findAll({
            attributes: ["nome","email","matricula"],
            include: [
                {
                    model: Endereco,
                    as: "endereco",
                    attributes: ["nome", "numero", "bairro"],
                },
            ],
        });

        return res.status(200).json(usuarios);
    }
}

//Exportando o módulo
module.exports = new UsuarioController();
