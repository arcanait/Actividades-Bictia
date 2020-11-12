// Modulos de Node
const express = require('express');
const router = express.Router();
//Modulos internos
const { Tendero } = require("../model/tendero");
//Ruta
router.post('/', async (req, res) => {
    const tendero = await Tendero.findOne({ correo: req.body.correo });
    if (!tendero) res.status(400).send("Correo o Contraseña no válidos");
    if (tendero.pass !== req.body.pass) return res.status(400).send('Correo o Contraseña no válidos')
    const jwtToken = tendero.generateJWT();
    res.status(200).send({ jwtToken });
})

module.exports = router;