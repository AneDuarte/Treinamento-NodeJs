//Require carrega um módulo
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

//Require carrega um módulo
const authConfig = require("../../config/auth");

//Exportando o módulo
//Next serve para redirecionar para continuar o fluxo
module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: "Token não informado" });
    }

    const [, token] = authHeader.split(" ");

    try {
        //decodifica meu token
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);

        req.userId = decoded.id;

        return next();
    }   catch (err) {
        return res.status(401).json({ error: "Token inválido" });
    }
};