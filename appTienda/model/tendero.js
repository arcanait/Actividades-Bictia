//modulos internos
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
//schema
const esquemaTendero = new mongoose.Schema({
    nombre: {
        type: String,
    },
    correo: {
        type: String,
    },
    pass: {
        type: String,    
    },
    fechaRegistro: {
        type: Date,
        default: Date.now,
    }
})
//Generamos el JWT
esquemaTendero.methods.generateJWT = function () {
    return jwt.sign({
        _id: this._id,
        nombre: this.nombre,
        correo: this.correo,
    }, "secretKey");
}
//creamos los exports
const Tendero = mongoose.model("tendero", esquemaTendero);
module.exports.Tendero = Tendero;

module.exports.esquemaTendero = esquemaTendero;