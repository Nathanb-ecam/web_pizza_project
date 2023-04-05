let Extra = require('../models/extraModel');


exports.listExtra = function (req,res){
    Extra.findAll({ attributes: ['id','name', 'price','desc']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchExtra = function(req,res){
    Extra.findOne({ where: { id: req.params.id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
}

exports.createExtra = async function(req,res){
    let extra = Extra.build({ name: req.body.name, price: req.body.price ,desc:req.body.desc })
    // save object in DB
    await extra.save()
        .then(data => {
            res.json(data);
    })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}


exports.deleteExtra = function (req,res){
    Extra.destroy({ where: { id: req.params.id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
}