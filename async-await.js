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

const getEmpleadoById = async (id) => {
  try {
    const empleado = empleados.find((e) => e.id === id);

    if (empleado) {
      return empleado;
    }
    throw new Error(`El empleado con id ${id} no existe`);
  } catch (error) {
    throw error;
  }
};

const getSueldoById = async (id) => {
  try {
    const sueldo = sueldos.find((s) => s.id === id);

    if (sueldo) {
      return sueldo;
    }
    throw new Error(`El empleado con id ${id} no tiene sueldo`);
  } catch (error) {
    throw error;
  }
};

const id = 2;

const getDatosCompletosEmpleado = async (id) => {
  try {
    const empleado = await getEmpleadoById(id);
    const sueldo = await getSueldoById(id);
    return {
      id,
      nombre: empleado.nombre,
      sueldo: sueldo.monto,
    };
  } catch (error) {
    throw error;
  }
};

getDatosCompletosEmpleado(id)
  .then((data) =>
    console.log(
      `El empleado con id ${data.id} es: ${data.nombre} y tiene un sueldo de ${data.sueldo}`
    )
  )
  .catch((error) => console.log(error.message));
