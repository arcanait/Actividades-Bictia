//modulos internos
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
//Schema
const esquemaAuto = new mongoose.Schema({
    nombre: String,
    marca: String,
    modelo: String,
    precio: Number,
    color: String,
    fechaDeCreacion: {
        type:Date,
        default: Date.now,
    }
})
// Agregar JWT:
esquemaAuto.methods.generateJWT = function () {
    return jwt.sign({
        _id: this.id,
        nombre: this.nombre,
        marca: this.marca,
    }, "secretKey")
}
//exportación
const Auto = mongoose.model("auto", esquemaAuto);
module.exports.Auto = Auto;

module.exports.esquemaAuto = esquemaAuto;