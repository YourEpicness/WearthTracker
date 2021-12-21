const express = require("express");

const transactionsRouter = require("./transactions/transactions.router");
const usersRouter = require("./users/users.router");
const accountsRouter = require("./accounts/accounts.router");

const api = express.Router();

api.use("/transactions", transactionsRouter);
api.use("/users", usersRouter);
api.use("/accounts", accountsRouter);

module.exports = api;
