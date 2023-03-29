let Drink = require('../models/drinkModel');



exports.listDrinks = function (req,res){
    Drink.findAll({ attributes: ['drink_id','drink_name', 'price']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchDrink = function(req,res){
    Drink.findOne({ where: { drink_id: req.params.drink_id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
}

exports.createDrink = async function(req,res){
    let drink = Drink.build({ drink_name: req.body.drink_name,price:req.body.price })
    // save object in DB
    await drink.save()
        .then(data => {
            res.json(data);
    })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}


exports.deleteDrink = function (req,res){
    Drink.destroy({ where: { drink_id: req.params.drink_id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
}


