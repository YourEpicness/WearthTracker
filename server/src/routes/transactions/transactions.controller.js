const { Transaction } = require("../../models/model.sql");

async function getAllTransactions(req, res) {
  try {
    const transactions = await Transaction.findAll();
    return res.status(200).json(transactions);
  } catch (err) {
    console.error(err);
  }
}

async function getTransactionById(req, res) {
  const transactionId = req.params.transactionId;
  try {
    const transaction = await Transaction.findByPk(transactionId);
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    return res.status(200).json(transaction);
  } catch (err) {
    console.error(err);
  }
}

async function addTransaction(req, res) {
  const vendor = req.body.vendor;
  const date = req.body.date;
  const amount = req.body.amount;
  const type = req.body.transactionType;
  const category = req.body.category;

  try {
    await Transaction.create({
      transactionVendor: vendor,
      transactionDate: date,
      transactionAmount: amount,
      transactionType: type,
      transactionCategory: category,
    });
    return res
      .status(201)
      .json({ message: `Transaction from ${vendor} on ${date} recorded` });
  } catch (err) {
    console.error(err);
  }
}

async function editTransaction(req, res) {
  const updatedVendor = req.body.vendor;
  const updatedDate = req.body.date;
  const updatedAmount = req.body.amount;
  const updatedType = req.body.transactionType;
  const updatedCategory = req.body.category;

  const transactionId = req.params.transactionId;
  try {
    const transaction = await Transaction.findByPk(transactionId);
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    transaction.transactionVendor = updatedVendor;
    transaction.transactionAmount = updatedAmount;
    transaction.transactionType = updatedType;
    transaction.transactionCategory = updatedCategory;
    const updatedTransaction = await transaction.save();
    return res.status(200).json({ updatedData: transaction });
  } catch (err) {
    console.error(err);
  }
}

async function deleteTransaction(req, res) {
  const transactionId = req.params.transactionId;
  try {
    const transaction = await Transaction.findByPk(transactionId);
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    await transaction.destroy();
    return res.status(200).json({ message: "Transaction deleted" });
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  getAllTransactions,
  getTransactionById,
  addTransaction,
  editTransaction,
  deleteTransaction,
};
