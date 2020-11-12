const sumar = require('./modSuma');
const os = require('os');

console.log('version os', os.release());
console.log('Memoria RAM total', os.totalmem());
console.log('Memoria RAM libre: ', os.freemem())
console.log('CPU ', os.cpus())