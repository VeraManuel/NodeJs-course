const colors = require("colors");
const fs = require("fs");

const multiplicar = (base, limite, visualizar) => {
  let result = "";
  for (let i = 1; i <= limite; i++) {
    result += `${base} * ${i} = ${base * i}\n`;
  }

  if (visualizar) {
    console.log("============".green);
    console.log(`Tabla del ${base}`);
    console.log("============".green);
    console.log(result);
  }
  const nombreArchivo = `tabla-del-${base}`;
  //   fs.writeFileSync(`tablas/tabla-del-${base}`, result);
  fs.writeFile(`tablas/${nombreArchivo}.txt`, result, (err) => {
    if (err) throw err;
    console.log(`El archivo ${nombreArchivo} fue creado`.rainbow);
  });
};

module.exports = {
  multiplicar,
};
