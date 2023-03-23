let Formula = require('../models/formulaModel');

let formulas = [
    new Formula("The box",12,"One pizza and a drink", 1,1,0,0),
    new Formula("Box for two",18,"One pizza, 1 chicken, a sauce and two drinks",2,1,1,1),
    new Formula("Chicken meal",16,"2 chicken's ,two sauces and two drinks",2,0,2,2)
]

exports.formulaDetails = function (req,res){
    let id  =req.params.formula_id;
    if (id >=0 && id < formulas.length){
        res.json({id:formulas[id]});
    }
    else{

        
        res.status(404).json({"message":"id out or range"});
    }
}

exports.listFormulas = function (req,res){
    res.json({"formulas":formulas});
}


exports.deleteFormula = function (req,res){
    let id = req.params.formula_id;
    
    if (id >=0 && id < formulas.length){
        let menuToRemove = formulas[id];
        formulas.splice(id,1);
        res.json({id:menuToRemove});
    }
    else{
        res.status(404).json({"message":"id out or range"});
    }
}

exports.createFormula = function (req,res){
    let id = formulas.length;
    let name = req.body.name;
    let price = req.body.price;
    let desc = req.body.desc;
    let drink_quantity = req.body.drink_quantity;
    let pizza_quantity = req.body.pizza_quantity;
    let chicken_quantity = req.body.chicken_quantity;
    let sauce_quantity = req.body.sauce_quantity;
    if (name==undefined || price == undefined){
        res.status(404).json({"error":"invalid body format", "valid_keys":["name","price"]});
    }
    else{
        let formula = new Formula(name,price,desc,drink_quantity,pizza_quantity,chicken_quantity,sauce_quantity);
        formulas.push(formula);
        res.json({id:formula});
    }
}
