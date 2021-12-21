const express = require("express");

const { getAllTransactions } = require("./transactions.controller");
const transactionsRouter = express.Router();

transactionsRouter.get("/", getAllTransactions);
transactionsRouter.post("/");
transactionsRouter.delete("/:id");

module.exports = transactionsRouter;
