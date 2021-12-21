async function getAllUsers(req, res) {
  return res.status(200).json({ msg: "works" });
}

module.exports = { getAllUsers };
