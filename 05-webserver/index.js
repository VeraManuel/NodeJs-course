const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("hola");
});

app.get("/usuarios", (req, res) => {
  res.send("usuario: Manuel");
});

app.post("/", (req, res) => {
  res.send("POST de direccion /");
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
