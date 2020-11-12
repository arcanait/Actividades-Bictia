//modulos internos
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
//schema
const esquemaProducto = new mongoose.Schema({
    nombre: {
        type: String,
    },
    tipo: {
        type: String,
    },
    precio: {
        type: Number,    
    },
    fechaRegistro: {
        type: Date,
        default: Date.now,
    }
})
//Generamos el JWT
esquemaProducto.methods.generateJWT = function () {
    return jwt.sign({
        _id: this._id,
        nombre: this.nombre,
        tipo: this.tipo,
    }, "secretKey");
}
//creamos los exports
const Producto = mongoose.model("producto", esquemaProducto);
module.exports.Producto = Producto;

module.exports.esquemaProducto = esquemaProducto;