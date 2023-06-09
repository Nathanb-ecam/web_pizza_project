let Chicken = require('../models/chickenModel');


exports.listChicken = function (req,res){
    Chicken.findAll({ attributes: ['id','name', 'price','desc']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchChicken = function(req,res){
    const id = req.params.id;
    if(!isNaN(id)){
        Chicken.findOne({ where: { id: id } })
            .then(data=>res.json(data))
            .catch(err=>res.status(500).json({message:err.message})) 
    }else{
        res.status(400).json( {message:"Parameter 'id' must be a number"})
    }

}

exports.searchChickenByName = function(req,res){
    const name =req.params.name;
    if(isNaN(name)){
        Chicken.findOne({ where: { name:name } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
    }
    else{
        res.status(400).json( {message:"Parameter 'name' must be a string"})

    }
}

exports.createChicken = async function(req,res){
    const {name,price, desc} = req.body;
    // console.log(name,price,desc)
    if(name=== null || name === undefined || price=== null || price ===undefined){
        res.status(400).json({message:"Please provide all fields required : name and price"})
    }else{
        let chicken = Chicken.build({ name: name, price: price,desc:desc  })
        // save object in DB
        await chicken.save()
            .then(data => {
                res.json(data);
        })
            .catch(err => {
                res.status(500).json({ message: err.message })
        })
    }
    
}


exports.deleteChicken = function (req,res){
    const id = req.params.id;
    if(!isNaN(id)){
        Chicken.destroy({ where: { id: id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }
    
}