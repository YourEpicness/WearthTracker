const { Account } = require("../../models/model.sql");

async function getAllAccounts(req, res) {
  try {
    const accounts = await Account.findAll();
    return res.status(200).json(accounts);
  } catch (err) {
    console.error(err);
  }
}

async function getAccountById(req, res) {
  const accountId = req.params.accountId;
  try {
    const account = await Account.findByPk(accountId);
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    return res.status(200).json(account);
  } catch (err) {
    console.error(err);
  }
}

async function addAccount(req, res) {
  try {
    await Account.create({});
    return res.status(201);
  } catch (err) {
    console.error(err);
  }
}

async function editAccount(req, res) {
  const accountId = req.params.accountId;
  try {
  } catch (err) {
    console.error(err);
  }
}

async function deleteAccount(req, res) {
  const accountId = req.params.accountId;
  try {
    const account = await Account.findByPk(accountId);
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    await account.destroy();
    return res.status(200).json({ message: "Account deleted" });
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  getAllAccounts,
  getAccountById,
  addAccount,
  editAccount,
  deleteAccount,
};
