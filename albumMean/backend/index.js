const express = require("express");
const mongoose = require("mongoose");
//Modulos INTERNOS
const usuario = require('./routes/usuario');
const auth = require("./routes/auth");
const tablero = require("./routes/tablero");
//App
const app = express();
app.use(express.json())
app.use("/api/usuario/", usuario);
app.use("/api/auth/", auth);
app.use("/api/tablero/", tablero);
//Puerto para ejecutar nuestro servidor
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Ejecutando en el puerto" + port)
})
//Conexion con DB
mongoose.connect("mongodb://localhost/albumMean", 
{useNewUrlParser: true, 
    useFindAndModify: false, 
    useCreateIndex: true, 
    useUnifiedTopology: true
})
.then(()=> console.log("Conexión a mongoDB: Online"))
.catch(() => console.log("Conexión a mongoDB: offline"));