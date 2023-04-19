const Sequelize = require('sequelize')
const sequelize = require('../db.js')


const Menu = sequelize.define('menu', {
            menu_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            //menu_name: { type: Sequelize.STRING, allowNull: true },
            idSauce: { type: Sequelize.INTEGER, allowNull: true },
            idChicken: { type: Sequelize.INTEGER, allowNull: true },
            idPizza: { type: Sequelize.INTEGER, allowNull: true },
            idDrink: { type: Sequelize.INTEGER, allowNull: true }
            
})

module.exports = Menu;

