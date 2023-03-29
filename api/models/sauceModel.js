const Sequelize = require('sequelize')
const sequelize = require('../db.js')


const Sauce = sequelize.define('sauce', {
            sauce_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            sauce_name: { type: Sequelize.STRING, allowNull: false },
            price: { type: Sequelize.FLOAT, allowNull: false }
})

module.exports = Sauce;