//Require carrega um módulo
const Endereco = require("../models/Endereco");

class EnderecoController {
  async store(req, res) {
    const { nome, numero, bairro, cidade, uf, cep } = req.body;

    const endereco = await Endereco.create({
      nome,
      numero,
      bairro,
      cidade,
      uf,
      cep,
    });

    return res.status(200).json(endereco);
  }

  async index(req, res) {
    const enderecos = await Endereco.findAll()

    return res.status(200).json(enderecos);
  }

  async show(req, res) {
    const { id } = req.params;

    const endereco = await Endereco.findByPk(id);

    if (!endereco) {
      return res.status(404).json({
        error: "Endereço não exite",
      });
    }

    return res.status(200).json(endereco);
  }

  async update(req, res) {
    const { id } = req.params;

    const endereco = await Endereco.findByPk(id);

    if (!endereco) {
      return res.status(404).json({
        error: "Endereço não existe",
      });
    }

    const Uendereco = await endereco.update({
      nome,
      numero,
      bairro,
      cidade,
      uf,
      cep,
    });

    return res.status(200).json(Uendereco);
  }
}

//Exportando o módulo
module.exports = new EnderecoController();