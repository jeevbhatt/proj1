//database connection file
const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(process.env.dben);

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
