let Pizza = require('../models/pizzaModel');
let OrderExtra = require('../models/orderExtraModel');
let ElementOrder = require('../models/elementOrderModel');
let Menu = require('../models/menuModel');



exports.listPizzas = function (req,res){
    Pizza.findAll({ attributes: ['id','name', 'price','desc']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchPizza = function(req,res){
    const {id} = req.params.id;
    if(typeof id ==='number'){
        Pizza.findOne({ where: { id: id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
    }else if (id === 'undefined' || id ==='null'){
        res.status(400).json({message:"Please provide query paramter id"})
    }else{
        res.status(400).json({message:"Parameter must be a number"})
    }
     
}

exports.searchPizzaByName = function(req,res){
    const {name} = req.params.name;
    if(typeof name ==='string'){
        Pizza.findOne({ where: { name: name } })
            .then(data=>res.json(data))
            .catch(err=>res.status(500).json({message:err.message})) 
    }else{
        res.status(400).json({message:"Parameter must be a name of type string"})
    }

}

exports.createPizza = async function(req,res){
    const {name,price, desc} = req.body;
    // if()
    let pizza = Pizza.build({ name: name,price:price,desc:desc })
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

exports.deletePizzaDependencies = function (req,res){
    let id = req.params.id;
    if(id){
        OrderExtra.destroy({where: {idExtraPizza: id}})
        ElementOrder.destroy({where: {},include: [{model: Menu,where: {idPizza: id}}]})
        Menu.destroy({where: {idPizza: id}})
        Pizza.destroy({where: {id: id}})
        res.json(1);
    }
    else{
        res.status(500).json( {message:"error while trying to delete pizza dependencies"})
    }
        
}



exports.updatePizza = function(req,res){
    let updateValues = { name: req.body.name,price:req.body.price,desc:req.body.desc };
    Pizza.update(updateValues, { where: { id: req.params.id } })
        .then(data => res.json(data)) 
        .catch(err=>res.status(500).json( {message:err.message}))
}


