let Extra = require('../models/ExtraModel');


exports.listExtra = function (req,res){
    Extra.findAll({ attributes: ['extra_id','extra_name', 'price']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchExtra = function(req,res){
    Extra.findOne({ where: { extra_id: req.params.extra_id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
}

exports.createExtra = async function(req,res){
    let extra = Extra.build({ extra_name: req.body.extra_name, price: req.body.price  })
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
    Extra.destroy({ where: { extra_id: req.params.extra_id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
}