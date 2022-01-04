const express = require("express");

const transactionsRouter = require("./transactions/transactions.router");
const usersRouter = require("./users/users.router");
const accountsRouter = require("./accounts/accounts.router");

const api = express.Router();

api.use("/users", usersRouter);
api.use("/accounts", accountsRouter);
api.use("/accounts/:id/transactions", transactionsRouter);

module.exports = api;
