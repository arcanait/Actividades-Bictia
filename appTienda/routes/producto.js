const express = require("express");
const router = express.Router();
//modulos internos
const { Producto } = require("../model/productos");
const { Tendero } = require("../model/tendero");
const auth = require("../middleware/auth");

router.post('/', auth, async(req, res) => {
    const tendero = await Tendero.findById( req.tendero._id );
    if(!tendero) res.status(400).send("El tendero no existe");
    const producto = new Producto({
        idTendero: tendero._id,
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        precio: req.body.precio,
        fechaRegistro: req.body.fechaRegistro
    })

    const result = await producto.save();
    res.status(200).send(result)
})

module.exports = router