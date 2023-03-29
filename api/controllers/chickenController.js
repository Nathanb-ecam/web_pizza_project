let Chicken = require('../models/chickenModel');


exports.listChicken = function (req,res){
    Chicken.findAll({ attributes: ['chicken_id','chicken_name', 'price']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchChicken = function(req,res){
    Chicken.findOne({ where: { chicken_id: req.params.chicken_id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
}

exports.createChicken = async function(req,res){
    let chicken = Chicken.build({ chicken_name: req.body.chicken_name, price: req.body.price  })
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
    Chicken.destroy({ where: { chicken_id: req.params.chicken_id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
}