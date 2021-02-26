const fs = require("fs");

const multiplicar = (base) => {
  console.log("===========");
  console.log(`tabla del ${base}`);
  console.log("===========");

  let result = "";

  for (let i = 1; i <= 10; i++) {
    result += `${base} * ${i} = ${base * i}\n`;
  }

  console.log(result);
  const nombreArchivo = `tabla-del-${base}`;
  //   fs.writeFileSync(`tablas/tabla-del-${base}`, result);
  fs.writeFile(`tablas/${nombreArchivo}`, result, (err) => {
    if (err) throw err;
    console.log(`El archivo ${nombreArchivo} fue creado`);
  });
};

module.exports = {
  multiplicar,
};
