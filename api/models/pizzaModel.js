const Sequelize = require('sequelize')
const sequelize = require('../db.js')

// let Menu = require('./menuModel.js')
const Pizza = sequelize.define('pizza', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            name: { type: Sequelize.STRING, allowNull: false },
            price: { type: Sequelize.FLOAT, allowNull: false },
            desc: { type: Sequelize.STRING, allowNull: true },
            image_path:{type:Sequelize.STRING,allowNull:true}
            
})

// Pizza.belongsTo(Menu);

module.exports = Pizza;

