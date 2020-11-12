const express = require("express");
const router = express.Router();
//modulos internos
const { Tablero } = require("../model/tablero");
const { Usuario } = require("../model/usuario");
const auth = require("../middleware/auth");
const cargarArchivo = require("../middleware/file");
//listar actividades
router.get('/lista', auth, async(req, res) => {
    const usuario = await Usuario.findById( req.usuario._id );
    if(!usuario) res.status(400).send("El usuario no existe");
    const tablero = await Tablero.find({ idUsuario: req.usuario._id })
    res.send(tablero);
})

router.post('/cargarArchivo', cargarArchivo.single("sticker"), auth, async( req, res) => {
    const url = req.protocol + "://" + req.get("host");
    const usuario = await Usuario.findById(req.usuario._id);
    if ( !usuario ) res.status(400).send("El usuario no existe en BD");
    let rutaImagen = null;
    if (req.file.filename) {
        rutaImagen = url + "/public/" + req.file.filename;        
    } else {
        rutaImagen = null
    }

    const tablero = new Tablero({
        idUsuario: usuario._id,
        nombre: req.body.nombre,
        sticker: rutaImagen,
    })
    const result = await tablero.save();
    res.status(200).send(result);
})
module.exports = router