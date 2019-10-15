const env = require("./env");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.dialect,
  operatorsAliases: false,
  pool: { ...env.pool }
});

const db = { Sequelize, sequelize };

// Model Table
db.customer = require("../model/customer.model")(sequelize, Sequelize);

module.exports = db;
