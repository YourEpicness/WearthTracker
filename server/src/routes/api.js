const express = require("express");

const transactionsRouter = require("./transactions/transactions.router");
const usersRouter = require("./users/users.router");

const api = express.Router();

api.use("/transactions", transactionsRouter);
api.use("/users", usersRouter);

module.exports = api;
