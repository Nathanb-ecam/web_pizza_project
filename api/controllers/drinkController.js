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
    const id = req.params.id;
    if(!isNaN(id)){
        Drink.findOne({ where: { id: id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }

}

exports.searchDrinkByName = function(req,res){
    const name = req.params.name;
    if(isNaN(name)){
        Drink.findOne({ where: { name: name } })
            .then(data=>res.json(data))
            .catch(err=>res.status(500).json({message:err.message})) 
    }else{
        res.status(400).json({message:"Parameter 'name' must be a string"})
    }

}

exports.createDrink = async function(req,res){
    const {name,price, desc} = req.body;
    // console.log(name,price,desc)
    if(name=== null || name === undefined || price=== null || price ===undefined){
        res.status(400).json({message:"Please provide all fields required : name and price"})
    }else{
        let drink = Drink.build({ name: name,price:price,desc:desc })
        // save object in DB
        await drink.save()
            .then(data => {
                res.json(data);
        })
            .catch(err => {
                res.status(500).json({ message: err.message })
        })
    }

}


exports.deleteDrink = function (req,res){
    const id = req.params.id;
    if(!isNaN(id)){
        Drink.destroy({ where: { id: id } })
            .then(data=>res.json(data))
            .catch(err=>res.status(500).json({message:err.message}))
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }

}

exports.updateDrink = function(req,res){
    const id = req.params.id;
    const updatedValues = req.body;
    if(!isNaN(id)){
        Drink.update(updatedValues, { where: { id: id } })
        .then(data => res.json(data)) 
        .catch(err=>res.status(500).json( {message:err.message}))
    }else{
        res.status(400).json( {message:"Parameter 'id' must be a number"})
    }

}

