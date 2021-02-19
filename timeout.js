console.log("Inicio de script");

setTimeout(() => {
  console.log("Primer timeout");
}, 5000);

setTimeout(() => {
  console.log("Segundo timeout");
}, 0);

setTimeout(() => {
  console.log("Tercer timeout");
}, 0);

console.log("Fin de script");
