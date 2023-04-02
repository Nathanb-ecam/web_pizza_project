let Menu = require('../models/menuModel');



exports.listMenus = function (req,res){
    Menu.findAll({ attributes: ['menu_id','menu_name', 'idSauce','idChicken','idPizza','idDrink']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchMenu = function(req,res){
    Menu.findOne({ where: { menu_id: req.params.menu_id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
}

exports.createMenu = async function(req,res){
    let menu = Menu.build({ menu_name: req.body.menu_name,idSauce:req.body.idSauce,idChicken:req.body.idChicken,idPizza:req.body.idPizza,idDrink:req.body.idDrink})
    // save object in DB
    await menu.save()
        .then(data => {
            res.json(data);
    })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}


exports.deleteMenu = function (req,res){
    Menu.destroy({ where: { menu_id: req.params.menu_id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
}


