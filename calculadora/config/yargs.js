const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "base del multiplicar"
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "numeros a multiplicar"
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "muestra la lista del multiplicar"
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

  module.exports = argv;