const personaje = {
  nombre: {
    primero: "Manuel",
    segundo: "Alejandro",
  },
  apellido: "Vera",
  profesion: "Programador",
  getDescipcion() {
    return `${nombre} ${apellido} es ${profesion}`;
  },
};

const {
  nombre: { primero, segundo },
  apellido,
  profesion,
} = personaje;

const imprimirPersonaje = ({
  nombre: { primero, segundo },
  apellido,
  profesion,
  edad = 31,
}) => {
  console.log(segundo, apellido, profesion, edad);
};

imprimirPersonaje(personaje);

const personajes = ["Goku", "Diablo", "Valeera"];

const [, , p3] = personajes;

console.log(p3);
