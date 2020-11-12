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

router.post('/', auth, async(req, res) => {
    const usuario = await Usuario.findById( req.usuario._id );
    if(!usuario) res.status(400).send("El usuario no eiste");
    const tablero = new Tablero({
        idUsuario: usuario._id,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        estado: req.body.estado
    })

    const result = await tablero.save();
    res.status(200).send(result)
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
        descripcion: req.body.descripcion,
        sticker: rutaImagen,
        estado: req.body.estado
    })
    const result = await tablero.save();
    res.status(200).send(result);
})



//Actualizar actividad
router.put('/', auth, async(req, res) => {
    const usuario = await Usuario.findById( req.usuario._id);
    if(!usuario) res.status(401).send("El usuario no existe en DB");
    const tablero = await Tablero.findByIdAndUpdate(
        req.body._id,
        {
            idUsuario: req.usuario._id,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            estado: req.body.estado
        },
        {
            new: true
        }
    )
    if(!tablero) res.status(400).send("No hay actividad asignada a este usuario")
    res.status(200).send(tablero)
})
//delete
router.delete('/:_id', auth, async(req, res) => {
    const usuario = await Usuario.findById(req.usuario._id);
    if(!usuario) res.status(400).send("El usuario no existe en DB");
    const tablero = await Tablero.findByIdAndDelete( req.params._id);
    if(tablero) res.status(400).send("No se encontró actividad para eliminar");
    res.status(200).send({ message: "Actividad eliminada"})
})

module.exports = router