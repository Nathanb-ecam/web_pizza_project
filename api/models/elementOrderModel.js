const Sequelize = require('sequelize')
const sequelize = require('../db.js')


const ElementOrder = sequelize.define('elementorder', {
            idElementOrder: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            idOrder: { type: Sequelize.INTEGER, allowNull: false,foreignKey:true },
            idMenu: { type: Sequelize.INTEGER, allowNull: false, foreignKey:true  },
})

module.exports = ElementOrder;