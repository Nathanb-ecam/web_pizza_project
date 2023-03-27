let Sauce = require('../models/sauceModel');

let sauces = [new Sauce("Mayo",0.1),new Sauce("Andalouse",0.5),new Sauce("Ketchup",1.1)]

exports.sauceDetails = function (req,res){
    let sauce_id  =req.params.sauce_id;
    if (sauce_id >=0 && sauce_id < sauces.length){
        res.json({sauce_id:sauces[sauce_id]});
    }
    else{
        res.status(404).json({"message":"id out or range"});
    }
    
    
}

exports.sauceList = function (req,res){
    res.json({"sauces":sauces});
}


exports.deleteSauce = function (req,res){
    let id = req.params.sauce_id;
    
    if (id >=0 && id < sauces.length){
        let sauceToRemove = sauces[id];
        sauces.splice(id,1);
        res.json({id:sauceToRemove});
    }
    else{
        res.status(404).json({"message":"id out or range"});
    }
}

exports.createSauce = function (req,res){
    let name = req.body.name;
    let price = req.body.price;
    if (name==undefined || price == undefined){
        res.status(404).json({"error":"invalid body format", "valid_keys":["name","price"]});
    }
    else{
        let sauce = new Sauce(name,price);
        sauces.push(sauce);
        res.json({id:sauce});
    }
}
