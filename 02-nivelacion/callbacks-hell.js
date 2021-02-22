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
    sueldo: 1500,
  },
  {
    id: 2,
    sueldo: 2000,
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

const id = 1;

getEmpleadoById(id, (error, empleado) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`El empleado: ${empleado.nombre}...`);
});

// funcion que busque salario por id, consumir esa funcion y modifical el log del empleado y si el di no existe
// en los sueldo colocar que no gana sueldo
