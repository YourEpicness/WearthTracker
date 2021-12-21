async function getAllTransactions(req, res) {
  return res.status(200).json({ msg: "works" });
}

module.exports = { getAllTransactions };
