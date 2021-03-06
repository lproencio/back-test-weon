const express = require("express");
const UserController = require("./controllers/UserController");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ message: "welcome to api" });
});

routes.post("/user", UserController.createUser);
routes.get("/user/:id", UserController.getUserById);
routes.get("/users", UserController.getUserAll);
routes.put("/user/:id", UserController.putUser);
routes.delete("/user/:id", UserController.deleteUser);

module.exports = routes;
