const knex = require('knex');
// require('dotenv').config();

const env = process.env.DB_ENV || 'development';

const knexConfig = require('../knexfile.js');

module.exports = knex(knexConfig[env]);
