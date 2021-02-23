const empleados = [
  {
    id: 1,
    nombre: "Manuel",
  },
  {
    id: 2,
    nombre: "Fernando",
  },
  {
    id: 3,
    nombre: "Marta",
  },
];

const sueldos = [
  {
    id: 1,
    monto: 1500,
  },
  {
    id: 2,
    monto: 2000,
  },
];

const getEmpleadoById = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id);

  if (empleado) {
    callback(null, empleado);
    return;
  }
  callback(new Error("El empleado no existe"));
};

// funcion que busque salario por id, consumir esa funcion y modificar el log del empleado y si el id no existe
// en los sueldo colocar que no gana sueldo o que es pasante

const getSuledoById = (id, callback) => {
  const sueldo = sueldos.find((s) => s.id == id);

  if (sueldo) {
    callback(null, sueldo);
    return;
  }
  callback(new Error("El empleado no tiene sueldo"));
};

const id = 2;

getEmpleadoById(id, (error, empleado) => {
  if (error) {
    console.log(error);
    return;
  }
  getSuledoById(id, (error, sueldo) => {
    if (error && empleado.id) {
      console.log(
        `El empleado: ${empleado.nombre} no tiene sueldo por ser pasante.`
      );
      return;
    }

    console.log(
      `El empleado: ${empleado.nombre} y su sueldo es de ${sueldo.monto}`
    );
  });
});
