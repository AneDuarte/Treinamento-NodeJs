//Require carrega um módulo
const EstadoCivil = require("../models/EstadoCivil");

class EstadoCivilController {
    async store(req, res) {
        const { nome } = req.body;

        const estado_civil = await EstadoCivil.create({
            nome,
        });

        return res.status(200).json(estado_civil);
    }

    async index(req, res) {
        const estado_civil = await EstadoCivil.findAll()

        return res.status(200).json(estado_civil);
    }

    //show vai ser necessário para estado civil?
    /*async show(req, res) {
        const { id } = req.params;
    }*/

    async update(req, res) {
        const { id } = req.params;

        const estado_civil = await EstadoCivil.findByPk(id);

        //Precisa de if? Se for para marcar a opção.
        //casado, solteiro, viúvo, divorciado, união estável. "outro"?
        const Uestado_civil = await estado_civil.update({nome});
        return res.status(200).json(Uestado_civil);
    }
}

//Exportando o módulo
module.exports = new EstadoCivilController();