//modulos internos
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
//schema
const esquemaUsuario = new mongoose.Schema({
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
esquemaUsuario.methods.generateJWT = function () {
    return jwt.sign({
        _id: this._id,
        nombre: this.nombre,
        correo: this.correo,
    }, "secretKey");
}
//creamos los exports
const Usuario = mongoose.model("usuario", esquemaUsuario);
module.exports.Usuario = Usuario;

module.exports.esquemaUsuario = esquemaUsuario;