let OrderExtra = require('../models/orderExtraModel');


exports.listOrderExtra = function (req,res){
    OrderExtra.findAll({ attributes: ['idOrderExtra','idOrder','idExtraDrink','idExtraPizza','idExtraChicken','idExtraSauce']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchOrderExtra = function(req,res){
    const id = req.params.id;
    if(!isNaN(id)){
        OrderExtra.findOne({ where: { idOrderExtra: id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }
     
}

exports.createOrderExtra = async function(req,res){
    let orderextra = OrderExtra.build({ idOrder: req.body.idOrder,idExtraDrink:req.body.idExtraDrink,idExtraPizza:req.body.idExtraPizza,idExtraChicken:req.body.idExtraChicken,idExtraSauce:req.body.idExtraSauce })
    // save object in DB
    await orderextra.save()
        .then(data => {
            res.json(data);
    })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}


exports.deleteOrderExtra = function (req,res){
    const id = req.params.id;
    if(!isNaN(id)){
        OrderExtra.destroy({ where: { idOrderExtra: req.params.id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }
    
}