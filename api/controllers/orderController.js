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
    const id = req.params.id;
    if(!isNaN(id)){
        Order.findOne({ where: { order_id: id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }

}

exports.createOrder = async function(req,res){
    const user_id = req.params.user_id;
    // console.log(name,price,desc)
    if(!isNaN(user_id)){
        let order = Order.build({ user_id: user_id })
        // save object in DB
        await order.save()
            .then(data => {
                res.json(data.order_id);
        })
            .catch(err => {
                res.status(500).json({ message: err.message })
        })
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }

    
}


exports.deleteOrder = function (req,res){
    const id = req.params.id;
    if(!isNaN(id)){
        Order.destroy({ where: { order_id: id  } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }
    
}