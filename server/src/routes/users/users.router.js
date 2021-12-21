const express = require("express");
const { getAllUsers } = require("./users.controller");
const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);
usersRouter.post("/");
usersRouter.delete("/:id");

module.exports = usersRouter;
