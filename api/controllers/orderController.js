let Order = require('../models/orderModel');


exports.listOrder = function (req,res){
    Order.findAll({ attributes: ['order_id','user_id']} )
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchOrder = function(req,res){
    Order.findOne({ where: { order_id: req.params.id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
}

exports.createOrder = async function(req,res){
    let order = Order.build({ user_id: req.params.user_id })
    // save object in DB
    await order.save()
        .then(data => {
            res.json(data.order_id);
    })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}


exports.deleteOrder = function (req,res){
    Order.destroy({ where: { order_id: req.params.id  } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
}