const Sequelize = require('sequelize')
const sequelize = require('../db.js')


const Extra = sequelize.define('extra', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            name: { type: Sequelize.STRING, allowNull: false },
            price: { type: Sequelize.FLOAT, allowNull: false }
})

module.exports = Extra;