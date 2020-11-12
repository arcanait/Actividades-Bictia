const { request } = require("express");

const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    let jwtToken = req.header("Authorization")
    jwtToken = jwtToken.split(" ")[1];
    if(!jwtToken) res.status(405).send("No hay token para un acceso")
    try{
        const payload = jwt.verify(jwtToken, "secretKey");
        req.tendero = payload;
        next();
    } catch (error) {
        res.status(405).send("Token sin autorizacion")
    }
}
module.exports = auth;