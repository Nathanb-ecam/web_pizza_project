let Pizza = require('../models/pizzaModel');

let pizzas = [new Pizza("Margarita",12),new Pizza("bbq",10),new Pizza("Hawai",11)]

exports.pizzaDetails = function (req,res){
    let pizza_id  =req.params.pizza_id;
    if (pizza_id >=0 && pizza_id < pizzas.length){
        res.json({pizza_id:pizzas[pizza_id]});
    }
    else{
        res.status(404).json({"message":"id out or range"});
    }
    
    
}
