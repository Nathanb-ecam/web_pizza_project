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
