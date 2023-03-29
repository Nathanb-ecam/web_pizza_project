const Sequelize = require('sequelize')
const sequelize = require('../db.js')


const Pizza = sequelize.define('pizza', {
            pizza_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            pizza_name: { type: Sequelize.STRING, allowNull: false },
            price: { type: Sequelize.FLOAT, allowNull: false }
            
})

module.exports = Pizza;

