let ElementOrder = require('../models/elementOrderModel');


exports.listElementOrder = function (req,res){
    ElementOrder.findAll({ attributes: ['idElementOrder','idOrder', 'idMenu']} )
        .then(data => {
          
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchElementOrder = function(req,res){
    ElementOrder.findOne({ where: { idElementOrder: req.params.id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
}

exports.createElementOrder = async function(req,res){
    let elementOrder = ElementOrder.build({ idOrder: req.body.idOrder, idMenu: req.body.idMenu})
    // save object in DB
    await elementOrder.save()
        .then(data => {
            res.json(data);
    })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}


exports.deleteElementOrder = function (req,res){
    ElementOrder.destroy({ where: { idElementOrder: req.params.id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
}