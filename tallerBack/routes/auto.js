const express = require("express");
const router = express.Router();
// importacion de modulos
const { Auto } = require("../model/auto");
//uso de router
router.post("/", async (req, res) => {
    let auto = await Auto.findOne({ modelo: req.body.modelo })

    if(auto) res.status(400).send("Ese modelo de auto ya existe, introduzca otro por favor.");

    auto = new Auto({
        nombre: req.body.nombre,
        marca: req.body.marca,
        modelo: req.body.modelo,
        precio: req.body.precio,
        color: req.body.color,
        fechaDeCreacion: req.body.fechaDeCreacion
    });

    const result = await auto.save();
    const jwt = auto.generateJWT();
    res.status(200).send({ jwt })
})

module.exports = router;