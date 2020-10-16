//require carrega um módulo
const Registro = require("../models/Registro");
//carrega módulos conectados
const Populacao = require("../models/Populacao");
const Usuario = require("../models/Usuario");
const EstadoCivil = require("../models/EstadoCivil");

class RegistroController {
    async store(req, res) {
        const{ usuario_id, populacao_id, registro } = req.body;

        try {
            const registros = await Registro.create({
            usuario_id,
            populacao_id,
            registro,
        });
        return res.status(200).json(registros);
        } catch (err) {
            console.log(err);
        }
    }

    async show(req, res) {
        const { id } = req.params;

        const registro = await Registro.findByPk(id, {
            attributes: ["usuario_id", "populacao_id", "registro"],
        });

        //Tratar erros
        if (!registro) {
            return res.status(404).json({
                error: "Registro não encontrado",
            });
        }

        return res.status(200).json(registro);
    }
    async index(req, res) {
        try {
            const registro = await Registro.findAll({
                attributes: ["usuario_id", "populacao_id", "registro"]
            });
    
            //Tratar erros
            if (!registro) {
                return res.status(404).json({
                    error: "Registro não encontrado"
                });
            }
            return res.status(200).json(registro);
        }catch (err) {
            console.log(err);
        }    
    }
    //Precisa de um async update?
}

//Exportando o módulo
module.exports = new RegistroController();