const fs = require("fs");
require('colors');
const crearArchivo = async (base = 5, hasta = 10, listar = false) => {
  try {
    
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }

    if (listar) {
      console.log("================");
      console.log(`  Tabla del ${base}  `);
      console.log("================");
      console.log(consola);
    }

    /*fs.writeFile(`tabla-${base}.txt`, salida, (error) => {
      if (error) throw error;
      console.log(`tabla del ${base} creado`);
    });*/

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    //response ? resolve(response) : reject("error");
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo: crearArchivo,
};
