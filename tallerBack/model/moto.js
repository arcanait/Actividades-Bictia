//modulos internos
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
//Schema
const esquemaMoto = new mongoose.Schema({
    nombre: String,
    marca: String,
    modelo: String,
    cilindraje: Number,
    precio: Number,
    color: String,
    fechaDeCreacion: {
        type:Date,
        default: Date.now,
    }
})
// Agregar JWT:
esquemaMoto.methods.generateJWT = function () {
    return jwt.sign({
        _id: this.id,
        nombre: this.nombre,
        marca: this.marca,
    }, "secretKey")
}
//exportación
const Moto = mongoose.model("moto", esquemaMoto);
module.exports.Moto = Moto;

module.exports.esquemaAuto = esquemaMoto;