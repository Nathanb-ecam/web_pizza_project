let Chicken = require('../models/chickenModel');


exports.listChicken = function (req,res){
    Chicken.findAll({ attributes: ['id','name', 'price']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchChicken = function(req,res){
    Chicken.findOne({ where: { id: req.params.id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
}

exports.createChicken = async function(req,res){
    let chicken = Chicken.build({ name: req.body.name, price: req.body.price  })
    // save object in DB
    await chicken.save()
        .then(data => {
            res.json(data);
    })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}


exports.deleteChicken = function (req,res){
    Chicken.destroy({ where: { id: req.params.id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
}