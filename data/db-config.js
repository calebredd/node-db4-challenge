const config = require("../knexfile.js"),
  knex = require("knex");

module.exports = knex(config.development);
