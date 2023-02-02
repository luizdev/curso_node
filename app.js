const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

crearArchivo(argv.base, argv.hasta, argv.listar).then(nonbreArchivo => console.log(nonbreArchivo, "creado")).catch(err => console.log(err))
