const Sequelize = require('sequelize')
const sequelize = require('../db.js')


const Pizza = sequelize.define('pizza', {
            pizza_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            name: { type: Sequelize.STRING, allowNull: false },
            price: { type: Sequelize.INTEGER, allowNull: false }
            
})

module.exports = Pizza;

