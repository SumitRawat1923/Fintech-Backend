const User = require("../models/userModel");
const validator = require("email-validator");

async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    console.error("GET[users] error:", error.message);
    res.status(500).send({ message: "Server side error." });
  }
}
async function createUser(req, res) {
  try {
    const { email, name, phoneNumber, role } = req.body;
    if (!validator.validate(email))
      return res.status(400).send({ message: "Invalid email." });
    if (name == "" || phoneNumber == "")
      return res.status(400).send({ message: "Invalid request." });
    if (!(role === "expert" || role === "client")) {
      return res
        .status(400)
        .send({ message: "Invalid role: role should be 'expert' or 'client'" });
    }
    const newUser = new User({
      email,
      name,
      phoneNumber,
      role,
    });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    console.error("POST[user] error: ", error.message);
    res.status(500).send({ message: "Server side error." });
  }
}

module.exports = {
  getUsers,
  createUser,
};
