const express = require("express");
const mongoose = require("mongoose");
//Modulos INTERNOS
const auto = require('./routes/auto');
const moto = require('./routes/moto');

//App
const app = express();
app.use(express.json())
app.use("/api/auto/", auto);
app.use("/api/moto/", moto);
//Puerto para ejecutar nuestro servidor
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Ejecutando en el puerto" + port)
})
//Conexion con DB
mongoose.connect("mongodb://localhost/AutoApp", 
{useNewUrlParser: true, 
    useFindAndModify: false, 
    useCreateIndex: true, 
    useUnifiedTopology: true
})
.then(()=> console.log("Conexión a mongoDB: Online"))
.catch(() => console.log("Conexión a mongoDB: offline"));