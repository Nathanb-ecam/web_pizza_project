let Menu = require('../models/menuModel');

let menus = [
    new Menu("Ketchup","Coca cola","Pizza margarita","4 wings"),
    new Menu("Mayo","Fanta","Pizza jambon","4 nuggets"),
    new Menu("Bbq","Sprite","Pizza hawai","4 wings"),
]

exports.menuDetails = function (req,res){
    let id  =req.params.menu_id;
    if (id >=0 && id < menus.length){
        res.json({id:menus[id]});
    }
    else{

        
        res.status(404).json({"message":"id out or range"});
    }
}

exports.listMenus = function (req,res){
    res.json({"menus":menus});
}


exports.deleteMenu = function (req,res){
    let id = req.params.menu_id;
    
    if (id >=0 && id < menus.length){
        let menuToRemove = menus[id];
        menus.splice(id,1);
        res.json({id:menuToRemove});
    }
    else{
        res.status(404).json({"message":"id out or range"});
    }
}

exports.createMenu = function (req,res){
    let id = menus.length;
    let sauce = req.body.sauce;
    let drink = req.body.drink;
    let pizza = req.body.pizza;
    let chicken = req.body.chicken;
    
    //    res.status(404).json({"error":"invalid body format", "valid_keys":["name","price"]});
    let menu = new Menu(sauce,drink,pizza,chicken);
    menus.push(menu);
    res.json({id:menu});
    
}
