const Sequelize = require('sequelize')
const sequelize = require('../db.js')


const Chicken = sequelize.define('chicken', {
            chicken_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            chicken_name: { type: Sequelize.STRING, allowNull: false },
            price: { type: Sequelize.INTEGER, allowNull: false }
})

module.exports = Chicken;