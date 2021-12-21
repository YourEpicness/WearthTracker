const Sequelize = require("sequelize");

const { sequelize } = require("../database");

const User = sequelize.define("user", {
  userId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userEmail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userPassword: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userFirstName: Sequelize.STRING,
  userLastName: Sequelize.STRING,
  userImageUrl: Sequelize.STRING,
  userRole: Sequelize.STRING,
});

const Transaction = sequelize.define("transaction", {
  transactionId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  transactionVendor: Sequelize.STRING,
  transactionDate: Sequelize.DATE,
  transactionType: Sequelize.STRING,
  transactionAmount: Sequelize.DOUBLE,
  transactionCategory: Sequelize.STRING,
});

const Account = sequelize.define("account", {
  accountId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  accountName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  accountLinkedBank: Sequelize.STRING,
  accountCreationDate: Sequelize.DATE,
});

module.exports = { User, Transaction, Account };
