//require carrega um módulo
const Populacao = require("../models/Populacao");
//carrega os módulos conectados
const Endereco = require("../models/Endereco");
const EstadoCivil = require("../models/EstadoCivil");

class PopulacaoController {
    async store(req, res) {
        const{ nome, rg, cpf, endereco_id, email, estado_civil_id } = req.body;
        
        //boto try?
        const populacao = await Populacao.create({
            nome,
            rg, 
            cpf,
            endereco_id,
            email,
            estado_civil_id,
        });

        return res.status(200).json(populacao);
    }

    async show(req, res) {
        const { id } = req.params;

        const populacao = await Populacao.findByPk(id, {
            //Isso tá certo?
            attributes: ["nome", "rg", "cpf", "endereco_id", "email", "estado_civil_id"],
            include: [
                {
                    model: Endereco,
                    as: "endereco",
                    //É pra colocar todos??
                    attributes: ["nome", "numero", "bairro", "cidade", "uf", "cep"],
                },
                {
                    model: EstadoCivil,
                    as: "estado_civil",
                    attributes: ["nome"],
                },
            ],
        });

        //Tratar os erros
        if (!populacao) {
            //Conferir se é 404, qualquer coisa corrigir em endereço
            return res.status(404).json({
                //Pessoa não encontrada ou População não encontrada
                error: "Pessoa não encontrada",
            });
        }

        return res.status(200).json(populacao);
    }
    async index(req, res) {
        const populacoes = await Populacao.findAll({
            attributes: ["nome", "rg", "cpf", "endereco_id", "email", "estado_civil_id"],
            include: [
                {
                    model: Endereco,
                    as: "endereco",
                    //Precisa colocar todos?
                    attributes: ["nome", "numero", "bairro", "cidade", "uf", "cep"],
                },
                {
                    model: EstadoCivil,
                    as: "estado_civil",
                    attributes: ["nome"],
                },
            ],
        });

        //Tratar erros
        if (!populacoes) {
            //Conferir se é 404, corrigir em endereço
            return res.status(404).json({
                error: "População não encontrada"
            });
        }

        return res.status(200).json(populacoes);
    }
    //Precisa do async update?
}

//Exportando o módulo
module.exports = new PopulacaoController();