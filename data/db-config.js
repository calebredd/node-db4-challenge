const knex=require('../knexfile'),
config=knex.development;

modules.export=knex.config;