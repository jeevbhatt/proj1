//database connection file
const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config(); //dotenv file bata environment variable read garna ko lagi
const sequelize = new Sequelize(process.env.dben); //

sequelize //database connection garna ko lagi
  .authenticate()
  .then(() => {
    console.log("Connect vayo.");
  })
  .catch((error) => {
    console.error("Error vayo", error);
  });

const db = {};
db.Sequelize = Sequelize; //sequelize ko instance ho
db.sequelize = sequelize; //sequelize ko instance ho

db.books = require("./models/bookModel")(sequelize, DataTypes); //bookModel.js ko import

//migrate code moving data from one table to another
sequelize.sync({ alter: false }).then(() => {
  //force:true use gare time-time table data loss hunxa
  //alter:true single time true otherwise mostly false loop ma aunxa for update the table
  console.log("Migrate vayo.");
});

module.exports = db;
