let Pizza = require('../models/pizzaModel');



exports.listPizzas = function (req,res){
    Pizza.findAll({ attributes: ['id','name', 'price']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchPizza = function(req,res){
    Pizza.findOne({ where: { id: req.params.id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
}

exports.createPizza = async function(req,res){
    let pizza = Pizza.build({ name: req.body.name,price:req.body.price })
    // save object in DB
    await pizza.save()
        .then(data => {
            res.json(data);
    })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}


exports.deletePizza = function (req,res){
    Pizza.destroy({ where: { id: req.params.id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
}


