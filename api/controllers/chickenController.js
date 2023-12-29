let Chicken = require('../models/chickenModel');


exports.listChicken = function (req,res){
    Chicken.findAll({ attributes: ['id','name', 'price','desc','image_path']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchChicken = function(req,res){
    const id = req.params.id;
    if(!isNaN(id)){
        Chicken.findOne({ where: { id: id } })
            .then(data=>res.json(data))
            .catch(err=>res.status(500).json({message:err.message})) 
    }else{
        res.status(400).json( {message:"Parameter 'id' must be a number"})
    }

}

exports.searchChickenByName = function(req,res){
    const name =req.params.name;
    if(isNaN(name)){
        Chicken.findOne({ where: { name:name } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
    }
    else{
        res.status(400).json( {message:"Parameter 'name' must be a string"})

    }
}

exports.createChicken = async function(req,res){
    const {name,price, desc} = req.body;

    if (!name || !price) {
        return res.status(400).json({ message: 'Please provide name and price for the chicken.' });
      }
    
      // Check if a file was uploaded
      if (!req.file) {
        return res.status(400).json({ message: 'Please upload an image for the chicken.' });
      }
    // console.log(name,price,desc)
    const imagePath = req.file.path; // Get the file path from multer

    try {
        // Create a new drink instance with image_path
        const chicken = await Chicken.create({
        name: name,
        price: price,
        desc: desc,
        image_path: imagePath,
        });
        res.json(chicken);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    
}


exports.deleteChicken = function (req,res){
    const id = req.params.id;
    if(!isNaN(id)){
        Chicken.destroy({ where: { id: id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }
    
}