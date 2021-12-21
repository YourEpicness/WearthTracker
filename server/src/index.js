const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const { authenticateDB, sequelize, syncDB } = require("./database");

const app = express();
const api = require("./routes/api");

app.use(cors());
app.use(express.json());

// SQlite Database Stuff
let db = new sqlite3.Database("./db/wearth.db", (err) => {
  if (err) {
    console.error(err.message);
  }

  console.log("Connected to the wearth database");
});

// Sequelize Database Stuff
authenticateDB();
syncDB();

app.use("/api", api);

app.listen(3005, () => {
  console.log("App listening at http://localhost:3005");
});
