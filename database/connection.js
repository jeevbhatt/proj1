//database connection file
const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
console.log("Database connection string:", process.env.dbs);
const sequelize = new Sequelize(process.env.dbs);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connect vayo.");
  })
  .catch((error) => {
    console.error("Error vayo", error);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
