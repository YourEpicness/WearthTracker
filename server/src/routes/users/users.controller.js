const { User } = require("../../models/model.sql");
async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    return res.status(200).json({ data: users });
  } catch (err) {
    console.error(err);
  }
}

async function registerUser(req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  try {
    await User.create({
      userFirstName: firstName,
      userLastName: lastName,
      userEmail: email,
      userPassword: password,
    });
    console.log("User created successfully");
    res.status(201).json({
      message: `User ${firstName} ${lastName} has registered successfully`,
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports = { getAllUsers, registerUser };
