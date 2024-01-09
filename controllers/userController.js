const User = require("../models/userModel");

function getUsers(req, res) {
  res.send("success !");
}
async function createUser(req, res) {
  try {
    const { email, name, phoneNumber, role } = req.body;
    const newUser = new User({
      email,
      name,
      phoneNumber,
      role,
    });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    console.error("Error saving user: ", error.message);
  }
}

module.exports = {
  getUsers,
  createUser,
};
