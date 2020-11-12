//modulos de node
const multer = require("multer");
//ruta del directorio donde quedaran los archivos
const directorio = "./public";
//DiskStorage
const storage = multer.diskStorage({
    destination:( req, file, cb ) => {
        cb( null, directorio )
    },
    filename: ( req, file, cb) => {
        const filename = Date.now() + "-" + file.originalname.toLowerCase().split(" ").join("-");
        cb( null, filename )
    }
})
// Cargar archivos
const cargarArchivo = multer({
    storage: storage,
    fileFilter: ( req, file, cb ) => {
        if (file.mimetype == 'image/jpg'  ||
            file.mimetype == 'image/jpeg' ||
            file.mimetype == 'image/png'  ||
            file.mimetype == 'image/gif') {
                cb(null, true)
        } else {
            cb(null, false)
            return cb(new Error("Solo se aceptan extenciones .jpg, .jpeg, .png y .gif"))
        }
    }
})
module.exports = cargarArchivo