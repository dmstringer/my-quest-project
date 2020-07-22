// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'quest_project',
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
  },
  }
};