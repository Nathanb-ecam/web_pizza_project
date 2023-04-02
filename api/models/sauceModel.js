const Sequelize = require('sequelize')
const sequelize = require('../db.js')


const Sauce = sequelize.define('sauce', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            name: { type: Sequelize.STRING, allowNull: false },
            price: { type: Sequelize.FLOAT, allowNull: false }
})

module.exports = Sauce;