const express = require("express");
const { Sequelize } = require("sequelize");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(cors());
app.use(express.json());

let db = new sqlite3.Database("./db/wearth.db", (err) => {
  if (err) {
    console.error(err.message);
  }

  console.log("Connected to the wearth database");
});
const sequelize = new Sequelize("sqlite:/db/wearth.db");

const authenticateDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Sequelize connection to wearth database established successfully"
    );
  } catch (err) {
    console.error("Unable to connect to the dcatabase:", error);
  }
};

authenticateDB();

app.listen(3005, () => {
  console.log("App listening at http://localhost:3005");
});
