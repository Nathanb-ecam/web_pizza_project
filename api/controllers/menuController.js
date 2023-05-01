let Menu = require('../models/menuModel');
let Pizza = require('../models/pizzaModel');
let Drink = require('../models/drinkModel');
let Chicken = require('../models/chickenModel');
let Sauce = require('../models/sauceModel');

Menu.belongsTo(Pizza,{foreignKey:"idPizza"});
Menu.belongsTo(Chicken,{foreignKey:"idChicken"});
Menu.belongsTo(Drink,{foreignKey:"idDrink"});
Menu.belongsTo(Sauce,{foreignKey:"idSauce"});


exports.listMenus = function (req,res){
    Menu.findAll({ attributes: ['menu_id','idSauce','idChicken','idPizza','idDrink']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.listMenusExplicit = function (req,res){
    Menu.findAll({ 
        include:[
            Pizza,
            Drink,
            Sauce,
            Chicken,
        ],
        attributes: ['menu_id']
    })
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchMenu = function(req,res){
    Menu.findOne({ where: { menu_id: req.params.id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
}



exports.createMenu = async function(req,res){
    let menu = Menu.build({ idSauce:req.body.idSauce,idChicken:req.body.idChicken,idPizza:req.body.idPizza,idDrink:req.body.idDrink})
    // save object in DB
    await menu.save()
        .then(data => {
            res.json(data);
    })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.modifyMenu = async function (req,res){
    try {
        const { idSauce, idChicken, idPizza, idDrink } = req.body;
        
        const menu = await Menu.findOne({ where: {menu_id: req.params.id } });
    
        if (!menu) {
          return res.status(404).json({ message: 'Menu not found' });
        }
    
        await menu.update({ idSauce, idChicken, idPizza, idDrink });
        
        res.status(200).json(menu);
      } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
}


exports.deleteMenu = function (req,res){
    Menu.destroy({ where: { menu_id: req.params.id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
}


