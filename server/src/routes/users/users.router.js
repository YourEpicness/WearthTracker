const express = require("express");
const { getAllUsers, registerUser } = require("./users.controller");
const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);
usersRouter.post("/", registerUser);
usersRouter.delete("/:id");

module.exports = usersRouter;
