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

const getEmpleadoById = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id);

    if (empleado) {
      resolve(empleado);
      return;
    }
    reject(`El empleado con id ${id} no existe`);
  });
};

const getSuledoById = (id) => {
  return new Promise((resolve, reject) => {
    const sueldo = sueldos.find((s) => s.id === id);

    if (sueldo) {
      resolve(sueldo);
      return;
    }
    reject(`El empleado: ${nombreEmpleado} no tiene sueldo.`);
  });
};

const id = 3;
let nombreEmpleado;

getEmpleadoById(id)
  .then((empleado) => {
    nombreEmpleado = empleado.nombre;
    return getSuledoById(id);
  })
  .then((sueldo) => {
    console.log(
      `El empleado: ${nombreEmpleado}, tiene un sueldo de: ${sueldo.monto}`
    );
  })
  .catch((err) => console.log(err));
