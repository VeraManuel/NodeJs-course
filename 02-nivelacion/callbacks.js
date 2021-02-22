// Callback:  funcion que se pasa como parametro en otra funcion

// const saludar = () => {
//   console.log("Hola Mundo");
// };

// setTimeout(saludar, 2000);

const getUsuarioById = (id, callback) => {
  const user = {
    id,
    nombre: "Manuel",
  };

  setTimeout(() => {
    callback(user);
  }, 1000);
};

getUsuarioById(7, ({ nombre, id }) => {
  console.log(`Nombre: ${nombre.toUpperCase()} - Id: ${id}`);
});
