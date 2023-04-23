let Sauce = require('../models/sauceModel');


exports.listSauce = function (req,res){
    Sauce.findAll({ attributes: ['id','name', 'price','image','desc']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchSauce = function(req,res){
    Sauce.findOne({ where: { id: req.params.id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
}

exports.createSauce = async function(req,res){
    let sauce = Sauce.build({ name: req.body.name, price: req.body.price ,image:req.body.image,desc:req.body.desc })
    // save object in DB
    await sauce.save()
        .then(data => {
            res.json(data);
    })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}


exports.deleteSauce = function (req,res){
    Sauce.destroy({ where: { id: req.params.id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
}