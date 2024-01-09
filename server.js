require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const PORT = process.env.PORT || 3000;
const userRoutes = require("./routes/userRoutes");

const app = express();

async function startServer() {
  try {
    await connectDB();

    app.use(express.json());

    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send("Something went wrong!");
    });

    app.use("/users", userRoutes);

    app.listen(PORT, (err) => {
      if (err) {
        console.error(`Server failed to start : ${err}`);
      } else {
        console.log(`Server is running on http://localhost:${PORT}  `);
      }
    });
  } catch (error) {
    console.error("Something went wrong.");
  }
}

startServer();
