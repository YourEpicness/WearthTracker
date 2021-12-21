const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sqlite:/db/wearth.db");

const authenticateDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Sequelize connection to wearth database established successfully"
    );
  } catch (err) {
    console.error("Unable to connect to the database:", error);
  }
};

const syncDB = async () => {
  try {
    const res = await sequelize.sync();
  } catch (err) {
    console.error("An error has occurred while syncing", err);
  }
};

module.exports = { sequelize, authenticateDB, syncDB };
