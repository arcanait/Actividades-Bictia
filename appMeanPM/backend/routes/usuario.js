const express = require("express");
const router = express.Router();
//Modulos creados
const { Usuario } = require("../model/usuario");
//Ruta
router.post("/", async (req, res) => {
    let usuario = await Usuario.findOne({ correo: req.body.correo })
    //Si el correo ya está en la DB
    if(usuario) res.status(400).send("El correo ya existe.")
    //Si el correo no existe en la DB
    usuario = new Usuario({
        nombre: req.body.nombre,
        cedula: req.body.cedula,
        edad: req.body.edad,
        correo: req.body.correo,
        pass: req.body.pass,
        fechaRegistro: req.body.fechaRegistro,
    });
    //Guardamos el usuario que se va a crar con el JWT
    const result = await usuario.save();
    const jwtToken = usuario.generateJWT();
    res.status(200).send({ jwtToken })
})
//Exports
module.exports = router;