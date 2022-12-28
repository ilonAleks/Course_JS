const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const chalk = require("chalk");

// Текущий IP-адрес 138.199.7.187/32

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.set("strictQuery", false);

const PORT = config.get("port") ?? 8080;

// if (process.env.NODE_ENV === "production") {
//   console.log("production");
// } else {
//   console.log("development");
// }

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"));
    app.listen(PORT, () => {
      console.log(chalk.green("Server has been started"));
    });
  } catch (error) {
    console.log(chalk.red(error.message));
    process.exit(1);
  }
}

start();
