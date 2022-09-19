const config = {
  username: 'root',
  password: 'root',
  database: 'exercicio_sequelize',
  host: 3006,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};