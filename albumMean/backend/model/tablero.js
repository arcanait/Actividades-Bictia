//Modulos internos
const mongoose = require("mongoose");
//Esquema
const esquemaTablero = new mongoose.Schema({
    idUsuario: String,
    nombre: String,
    sticker: String,
    fecha:{
        type:Date,
        default: Date.now,
    },
})
//crear exports
const Tablero = mongoose.model("tablero", esquemaTablero);
module.exports.Tablero = Tablero;