const knex = require('knex');
const { Model } = require('objection');
const config = require('../knexfile');
const environment = process.env.NODE_ENV || 'development';
const connectionConfig = config[environment];
// @ts-ignore
const connection = knex(connectionConfig);
Model.knex(connection);

module.exports = connection;
