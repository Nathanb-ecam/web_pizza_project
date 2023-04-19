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
            idExtraDrink:{type:Sequelize.INTEGER,allowNull:true,foreignKey:true},
            idExtraPizza:{type:Sequelize.INTEGER,allowNull:true,foreignKey:true},
            idExtraChicken:{type:Sequelize.INTEGER,allowNull:true,foreignKey:true},
            idExtraSauce:{type:Sequelize.INTEGER,allowNull:true,foreignKey:true},
})

module.exports = OrderExtra;