const express = require("express");
const router = express.Router();
//Modulos creados
const { Tendero } = require("../model/tendero");
//Ruta
router.post("/", async (req, res) => {
    let tendero = await Tendero.findOne({ correo: req.body.correo })
    //Si el correo ya está en la DB
    if(tendero) res.status(400).send("El tendero ya existe.")
    //Si el correo no existe en la DB
    tendero = new Tendero({
        nombre: req.body.nombre,
        correo: req.body.correo,
        pass: req.body.pass,
        fechaRegistro: req.body.fechaRegistro,
    });
    //Guardamos el tendero que se va a crar con el JWT
    const result = await tendero.save();
    const jwtToken = tendero.generateJWT();
    res.status(200).send({ jwtToken })
})
//Exports
module.exports = router;