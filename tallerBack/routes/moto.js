const express = require("express");
const router = express.Router();
// importacion de modulos
const { Moto } = require("../model/moto");
//uso de router
router.post("/", async (req, res) => {
    let flag = true
    let moto = await Moto.findOne({ marca: req.body.marca })
    if(moto) {
        res.status(400).send("Esa marca de moto ya existe, introduzca otro por favor.")
        flag = false
    }
    moto = await Moto.findOne({ modelo: req.body.modelo })
    if(moto){
        res.status(400).send("Ese modelo de moto ya existe, introduzca otro por favor.")
        flag = false
    }

    moto = new Moto({
        nombre: req.body.nombre,
        marca: req.body.marca,
        modelo: req.body.modelo,
        cilindraje: req.body.cilindraje,
        precio: req.body.precio,
        color: req.body.color,
        fechaDeCreacion: req.body.fechaDeCreacion
    });
    if(flag){
        const result = await moto.save();
        const jwt = moto.generateJWT();
        res.status(200).send({ jwt })
    }
})

module.exports = router;