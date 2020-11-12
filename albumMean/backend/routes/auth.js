// Modulos de Node
const express = require('express');
const router = express.Router();
//Modulos internos
const { Usuario } = require("../model/usuario");
//Ruta
router.post('/', async (req, res) => {
    const usuario = await Usuario.findOne({ correo: req.body.correo });
    if (!usuario) res.status(400).send("Correo o Contraseña no válidos");
    if (usuario.pass !== req.body.pass) return res.status(400).send('Correo o Contraseña no válidos')
    const jwtToken = usuario.generateJWT();
    res.status(200).send({ jwtToken });
})

module.exports = router;