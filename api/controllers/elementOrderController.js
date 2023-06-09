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
    const id = req.params.id;
    if(!isNaN(id)){
        ElementOrder.findOne({ where: { idElementOrder: id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }

}

exports.createElementOrder = async function(req,res){
    const {idOrder,idMenu} = req.body;
    // console.log(name,price,desc)
    if(idOrder=== null || idOrder === undefined || idMenu=== null || idMenu ===undefined){
        res.status(400).json({message:"Please provide all fields required : name and price"})
    }else{
        let elementOrder = ElementOrder.build({ idOrder: idOrder, idMenu: idMenu})
        // save object in DB
        await elementOrder.save()
            .then(data => {
                res.json(data);
        })
            .catch(err => {
                res.status(500).json({ message: err.message })
        })
    }
    
}


exports.deleteElementOrder = function (req,res){
    const id = req.params.id;
    if(!isNaN(id)){
        ElementOrder.destroy({ where: { idElementOrder: id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})

    }

}