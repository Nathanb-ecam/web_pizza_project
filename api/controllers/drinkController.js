let Drink = require('../models/drinkModel');



exports.listDrinks = function (req,res){
    Drink.findAll({ attributes: ['id','name', 'price','desc','image_path']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchDrink = function(req,res){
    const id = req.params.id;
    if(!isNaN(id)){
        Drink.findOne({ where: { id: id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }

}

exports.searchDrinkByName = function(req,res){
    const name = req.params.name;
    if(isNaN(name)){
        Drink.findOne({ where: { name: name } })
            .then(data=>res.json(data))
            .catch(err=>res.status(500).json({message:err.message})) 
    }else{
        res.status(400).json({message:"Parameter 'name' must be a string"})
    }

}

exports.createDrink = async function(req,res){
    const {name,price, desc} = req.body;

    if (!name || !price) {
        return res.status(400).json({ message: 'Please provide name and price for the drink.' });
      }
    
      // Check if a file was uploaded
      if (!req.file) {
        return res.status(400).json({ message: 'Please upload an image for the drink.' });
      }
    // console.log(name,price,desc)
    const imagePath = req.file.path; // Get the file path from multer

    try {
        // Create a new drink instance with image_path
        const drink = await Drink.create({
        name: name,
        price: price,
        desc: desc,
        image_path: imagePath,
        });
        res.json(drink);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}


exports.deleteDrink = function (req,res){
    const id = req.params.id;
    if(!isNaN(id)){
        Drink.destroy({ where: { id: id } })
            .then(data=>res.json(data))
            .catch(err=>res.status(500).json({message:err.message}))
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }

}

exports.updateDrink = function(req,res){
    const id = req.params.id;
    const updatedValues = req.body;
    if(!isNaN(id)){
        Drink.update(updatedValues, { where: { id: id } })
        .then(data => res.json(data)) 
        .catch(err=>res.status(500).json( {message:err.message}))
    }else{
        res.status(400).json( {message:"Parameter 'id' must be a number"})
    }

}

