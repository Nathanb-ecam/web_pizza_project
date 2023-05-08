let Drink = require('../models/drinkModel');



exports.listDrinks = function (req,res){
    Drink.findAll({ attributes: ['id','name', 'price','desc']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchDrink = function(req,res){
    Drink.findOne({ where: { id: req.params.id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
}
exports.searchDrinkByName = function(req,res){
    Drink.findOne({ where: { name: req.params.name } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
}

exports.createDrink = async function(req,res){
    let drink = Drink.build({ name: req.body.name,price:req.body.price,desc:req.body.desc })
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
    Drink.destroy({ where: { id: req.params.id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
}

exports.updateDrink = function(req,res){
    let updateValues = { name: req.body.name,price:req.body.price,desc:req.body.desc };
    Drink.update(updateValues, { where: { id: req.params.id } })
        .then(data => res.json(data)) 
        .catch(err=>res.status(500).json( {message:err.message}))
}

