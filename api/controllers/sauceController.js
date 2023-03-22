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