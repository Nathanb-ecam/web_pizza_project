let Pizza = require('../models/pizzaModel');



exports.listPizzas = function (req,res){
    Pizza.findAll({ attributes: ['pizza_id','pizza_name', 'price']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchPizza = function(req,res){
    Pizza.findOne({ where: { pizza_id: req.params.pizza_id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
}

exports.createPizza = async function(req,res){
    let pizza = Pizza.build({ pizza_name: req.body.pizza_name,price:req.body.price })
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
    Pizza.destroy({ where: { pizza_id: req.params.pizza_id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
}


