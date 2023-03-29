const Sequelize = require('sequelize')
const sequelize = require('../db.js')


const User = sequelize.define('user', {
            user_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            name: { type: Sequelize.STRING, allowNull: false },
            password: { type: Sequelize.STRING, allowNull: false },
            points: { type: Sequelize.INTEGER, allowNull: true }
})

module.exports = User;

