const secret = require('./db_credentials.json');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    secret.db_name,
    secret.username,
    secret.password, {
    dialect: 'mysql',
    host: secret.host_name,
    port:63336
}
);
module.exports = sequelize;
