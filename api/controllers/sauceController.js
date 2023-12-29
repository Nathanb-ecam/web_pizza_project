let Sauce = require('../models/sauceModel');


exports.listSauce = function (req,res){
    Sauce.findAll({ attributes: ['id','name', 'price','desc','image_path']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchSauce = function(req,res){
    const id = req.params.id;
    if(!isNaN(id)){
        Sauce.findOne({ where: { id: id } })
            .then(data=>res.json(data))
            .catch(err=>res.status(500).json({message:err.message})) 
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }

}

exports.searchSauceByName = function(req,res){
    const name = req.params.name;
    if(isNaN(name)){
        Sauce.findOne({ where: { name: name } })
            .then(data=>res.json(data))
            .catch(err=>res.status(500).json({message:err.message})) 
    }else{
        res.status(400).json({message:"Parameter must be a name of type string"})
    }

}

exports.createSauce = async function(req,res){
    const {name,price, desc} = req.body;

    if (!name || !price) {
        return res.status(400).json({ message: 'Please provide name and price for the Sauce.' });
      }
    
      // Check if a file was uploaded
      if (!req.file) {
        return res.status(400).json({ message: 'Please upload an image for the sauce.' });
      }
    // console.log(name,price,desc)
    const imagePath = req.file.path; // Get the file path from multer

    try {
        // Create a new drink instance with image_path
        const sauce = await Sauce.create({
        name: name,
        price: price,
        desc: desc,
        image_path: imagePath,
        });
        res.json(sauce);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}


exports.deleteSauce = function (req,res){
    const id = req.params.id;
    if(!isNaN(id)){
        Sauce.destroy({ where: { id: id } })
            .then(data=>res.json(data))
            .catch(err=>res.status(500).json({message:err.message}))
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }

}