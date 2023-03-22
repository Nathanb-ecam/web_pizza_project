let Drink = require('../models/drinkModel');

let drinks = [new Drink("Coca cola",2),new Drink("Water",1),new Drink("Sprite",2)]

exports.drinkDetails = function (req,res){
    let id  =req.params.drink_id;
    if (id >=0 && id < drinks.length){
        res.json({id:drinks[id]});
    }
    else{
        res.status(404).json({"message":"id out or range"});
    }
}

exports.drinkList = function (req,res){
    res.json({"drinks":drinks});
}


exports.deleteDrink = function (req,res){
    let id = req.params.drink_id;
    
    if (id >=0 && id < drinks.length){
        let drinkToRemove = drinks[id];
        drinks.splice(id,1);
        res.json({id:drinkToRemove});
    }
    else{
        res.status(404).json({"message":"id out or range"});
    }
}

exports.createDrink = function (req,res){
    let id = drinks.length;
    let name = req.body.drink_name;
    let price = req.body.price;
    if (name==undefined || price == undefined){
        res.status(404).json({"error":"invalid body format", "valid_keys":["drink_name","price"]});
    }
    else{
        let drink = new Drink(name,price);
        drinks.push(drink);
        res.json({id:drink});
    }
}
