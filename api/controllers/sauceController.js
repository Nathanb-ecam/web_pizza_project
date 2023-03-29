let Sauce = require('../models/SauceModel');


exports.listSauce = function (req,res){
    Sauce.findAll({ attributes: ['sauce_id','sauce_name', 'price']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchSauce = function(req,res){
    Sauce.findOne({ where: { sauce_id: req.params.sauce_id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
}

exports.createSauce = async function(req,res){
    let sauce = Sauce.build({ sauce_name: req.body.sauce_name, price: req.body.price  })
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
    Sauce.destroy({ where: { sauce_id: req.params.sauce_id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
}