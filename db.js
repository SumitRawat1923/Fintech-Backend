const mongoose = require("mongoose");
const CONNECTION_STRING = process.env.DATABASE_CONNECTION_STRING || "";

const connectDB = async () => {
  try {
    await mongoose.connect(CONNECTION_STRING);
    console.log("Connected to the database !");
  } catch (error) {
    console.error(`Connection to the database is failed : ${error.message}`);
  }
};

module.exports = connectDB;
