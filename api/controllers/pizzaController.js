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
    const id = req.params.id;
    if(!isNaN(id)){
        Pizza.findOne({ where: { id: id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }
     
}

exports.searchPizzaByName = function(req,res){
    const name = req.params.name;
    if(isNaN(name)){
        Pizza.findOne({ where: { name: name } })
            .then(data=>res.json(data))
            .catch(err=>res.status(500).json({message:err.message})) 
    }else{
        res.status(400).json({message:"Parameter must be a name of type string"})
    }

}

exports.createPizza = async function(req,res){
    const {name,price, desc} = req.body;
    console.log(name,price,desc)
    if(name=== null || name === undefined || price=== null || price ===undefined){
        res.status(400).json({message:"Please provide all fields required : name and price"})
    }else{
        let pizza = Pizza.build({ name: name,price:price,desc:desc })
        // save object in DB
        await pizza.save()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ message: err.message }))
    }

}


exports.deletePizza = function (req,res){
    const id = req.params.id;
    if(!isNaN(id)){
        Pizza.destroy({ where: { id: id } })
            .then(data=>res.json(data))
            .catch(err=>res.status(500).json({message:err.message}))
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }

}

exports.deletePizzaDependencies = function (req,res){
    const id = req.params.id;
    if(id){
        OrderExtra.destroy({where: {idExtraPizza: id}})
        ElementOrder.destroy({where: {},include: [{model: Menu,where: {idPizza: id}}]})
        Menu.destroy({where: {idPizza: id}})
        Pizza.destroy({where: {id: id}})
        res.json(1);
    }
    else{
        res.status(400).json( {message:"Parameter 'id' must be a number"})
    }
        
}



exports.updatePizza = function(req,res){
    const id = req.params.id;
    const updatedValues = req.body;
    if(!isNaN(id)){
        Pizza.update(updatedValues, { where: { id: id } })
            .then(data => res.json(data)) 
            .catch(err=>res.status(500).json( {message:err.message}))  
    }else{
        res.status(400).json( {message:"Parameter 'id' must be a number"})
    }

}


