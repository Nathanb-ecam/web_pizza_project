let Sauce = require('../models/sauceModel');


exports.listSauce = function (req,res){
    Sauce.findAll({ attributes: ['id','name', 'price','desc']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchSauce = function(req,res){
    const id = req.params.id;
    if(!isNaN(id)){
        Sauce.findOne({ where: { id: id } })
            .then(data=>res.json(data))
            .catch(err=>res.status(500).json({message:err.message})) 
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }

}

exports.searchSauceByName = function(req,res){
    const name = req.params.name;
    if(isNaN(name)){
        Sauce.findOne({ where: { name: name } })
            .then(data=>res.json(data))
            .catch(err=>res.status(500).json({message:err.message})) 
    }else{
        res.status(400).json({message:"Parameter must be a name of type string"})
    }

}

exports.createSauce = async function(req,res){
    const {name,price, desc} = req.body;
    if(name=== null || name === undefined || price=== null || price ===undefined){
        res.status(400).json({message:"Please provide all fields required : name and price"})
    }else{
        let sauce = Sauce.build({ name: name, price: price ,desc: desc })
        // save object in DB
        await sauce.save()
            .then(data => {
                res.json(data);
        })
            .catch(err => {
                res.status(500).json({ message: err.message })
        })
    }

}


exports.deleteSauce = function (req,res){
    const id = req.params.id;
    if(!isNaN(id)){
        Sauce.destroy({ where: { id: id } })
            .then(data=>res.json(data))
            .catch(err=>res.status(500).json({message:err.message}))
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }

}