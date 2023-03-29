const Sequelize = require('sequelize')
const sequelize = require('../db.js')


const Extra = sequelize.define('extra', {
            extra_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            extra_name: { type: Sequelize.STRING, allowNull: false },
            price: { type: Sequelize.INTEGER, allowNull: false }
})

module.exports = Extra;