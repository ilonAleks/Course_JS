const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const chalk = require("chalk");
const initDatabase = require("./startUp/initDatabase.js");
const routes = require("./routes");

//Database Name => bdjvdco8iyfwhyv
//User => uozlwyp6j4id6dfclrsa
//Password => Eoz2HlWFQoisokpIgY5n

const app = express();

app.use("/api", routes);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = config.get("port") ?? 8080;

async function start() {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connection.once("open", () => {
      initDatabase();
    });
    await mongoose.connect(config.get("mongoUri"));
    console.log(chalk.green("MongoDB connected"));
    app.listen(PORT, () => {
      console.log(chalk.green("Server has been started"));
    });
  } catch (error) {
    console.log(chalk.red(error.message));
    process.exit(1);
  }
}

start();
