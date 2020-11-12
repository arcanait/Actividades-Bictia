const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.listen(3000, () => {
    console.log('hola desde el puerto 3000')
})