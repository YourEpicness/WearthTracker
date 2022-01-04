const express = require("express");

const {
  getAllAccounts,
  addAccount,
  editAccount,
  deleteAccount,
  getAccountById,
} = require("./accounts.controller");
const accountsRouter = express.Router({ mergeParams: true });

accountsRouter.get("/", getAllAccounts);
accountsRouter.get("/:accountId", getAccountById);
accountsRouter.post("/", addAccount);
accountsRouter.put("/:accountId", editAccount);
accountsRouter.delete("/:accountId", deleteAccount);

module.exports = accountsRouter;
