const express = require("express");

const {
  getAllTransactions,
  addTransaction,
  editTransaction,
  deleteTransaction,
  getTransactionById,
} = require("./transactions.controller");
const transactionsRouter = express.Router();

transactionsRouter.get("/", getAllTransactions);
transactionsRouter.get("/:transactionId", getTransactionById);
transactionsRouter.post("/", addTransaction);
transactionsRouter.put("/:transactionId", editTransaction);
transactionsRouter.delete("/:transactionId", deleteTransaction);

module.exports = transactionsRouter;
