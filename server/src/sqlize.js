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

module.exports = { authenticateDB };
