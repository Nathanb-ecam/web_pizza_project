const Sequelize = require('sequelize')
const sequelize = require('../db.js')


const Drink = sequelize.define('drink', {
            drink_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            drink_name: { type: Sequelize.STRING, allowNull: false },
            price: { type: Sequelize.FLOAT, allowNull: false }
            
})

module.exports = Drink;

