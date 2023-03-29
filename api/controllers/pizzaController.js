let Pizza = require('../models/pizzaModel');


exports.pizzaDetails = function (req,res){
    let id  =req.params.pizza_id;
    if (id >=0 && id < pizzas.length){
        res.json({id:pizzas[id]});
    }
    else{
        res.status(404).json({"message":"id out or range"});
    }
}

exports.pizzaList = function (req,res){
    res.json({"pizzas":pizzas});
}


exports.deletePizza = function (req,res){
    let id = req.params.pizza_id;
    
    if (id >=0 && id < pizzas.length){
        let pizzaToRemove = pizzas[id];
        pizzas.splice(id,1);
        res.json({id:pizzaToRemove});
    }
    else{
        res.status(404).json({"message":"id out or range"});
    }
}

exports.createPizza = function (req,res){
    let id = pizzas.length;
    let name = req.body.name;
    let price = req.body.price;
    if (name==undefined || price == undefined){
        res.status(404).json({"error":"invalid body format", "valid_keys":["name","price"]});
    }
    else{
        let pizza = new Pizza(name,price);
        pizzas.push(pizza);
        res.json({id:pizza});
    }

}
