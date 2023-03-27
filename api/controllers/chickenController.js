let Chicken = require('../models/chickenModel');

let chickens = [new Chicken("Wings",12),new Chicken("Legs",10),new Chicken("Mixtes",11)]

exports.chickenDetails = function (req,res){
    let chicken_id  =req.params.chicken_id;
    if (chicken_id >=0 && chicken_id < chickens.length){
        res.json({chicken_id:chickens[chicken_id]});
    }
    else{
        res.status(404).json({"message":"id out or range"});
    }
    
    
}

exports.chickenList = function (req,res){
    res.json({"chickens":chickens});
}


exports.deleteChicken = function (req,res){
    let id = req.params.chicken_id;
    
    if (id >=0 && id < chickens.length){
        let chickenToRemove = chickens[id];
        chickens.splice(id,1);
        res.json({id:chickenToRemove});
    }
    else{
        res.status(404).json({"message":"id out or range"});
    }
}

exports.createChicken = function (req,res){
    let name = req.body.name;
    let price = req.body.price;
    if (name==undefined || price == undefined){
        res.status(404).json({"error":"invalid body format", "valid_keys":["name","price"]});
    }
    else{
        let chicken = new Chicken(name,price);
        chickens.push(chicken);
        res.json({id:chicken});
    }
}
