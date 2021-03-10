require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/users", (req, res) => {
  const user = [
    {
      id: 1,
      name: "manuel",
    },
    {
      id: 2,
      name: "Fernando",
    },
  ];

  res.status(200).json(user);
});

app.post("/users", (req, res) => {
  const user = req.body;
  user.id = 15;
  const result = {
    message: "User create",
    user,
  };

  res.status(201).json(result);
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = req.body;
  user.id = id;

  const result = {
    message: "User updated",
    user,
  };
  res.status(200).json(result);
});

app.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = req.body;
  user.id = id;

  const result = {
    message: "User updated",
    user,
  };
  res.status(200).json(result);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const result = {
    message: `User with ${id} deleted`,
  };
  res.status(200).json(result);
});

app.listen(PORT, () => {
  console.log(`App running in PORT ${PORT}`);
});
