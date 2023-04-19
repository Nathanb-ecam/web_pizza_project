const Sequelize = require('sequelize')
const sequelize = require('../db.js')


const Order = sequelize.define('order', {
            order_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            idClient: { type: Sequelize.INTEGER, allowNull: false, foreignKey:true}
            
})

module.exports = Order;