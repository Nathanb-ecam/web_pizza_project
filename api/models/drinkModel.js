const Sequelize = require('sequelize')
const sequelize = require('../db.js')


const Drink = sequelize.define('drink', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            name: { type: Sequelize.STRING, allowNull: false },
            price: { type: Sequelize.FLOAT, allowNull: false },
            image: { type: Sequelize.BLOB, allowNull: true },
            desc: { type: Sequelize.STRING, allowNull: true }
            
})

module.exports = Drink;

