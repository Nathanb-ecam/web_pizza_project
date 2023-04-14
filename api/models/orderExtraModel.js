const Sequelize = require('sequelize')
const sequelize = require('../db.js')


const OrderExtra = sequelize.define('orderextra', {
            idOrderExtra: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            idOrder: { type: Sequelize.INTEGER, allowNull: false,foreignKey:true },
            quantityExtra: { type: Sequelize.FLOAT, allowNull: false },
            idExtra: { type: Sequelize.INTEGER, allowNull: false,foreignKey:true  },
})

module.exports = OrderExtra;