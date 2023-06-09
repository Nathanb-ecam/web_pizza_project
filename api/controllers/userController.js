const bcrypt = require('bcryptjs');

let User = require('../models/userModel');



exports.searchUserByCredentials = async function(req,res){
    const {name,password} = req.body;

    await User.findOne({where:{name:name}} )
    .then(async (user) =>{
        if(user){
            const isPasswordMatch = await bcrypt.compare(password,user.password);
            if(isPasswordMatch){
                req.data = user;
            }
        }
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
    }
    

exports.listUsers = function (req,res){
    User.findAll({ attributes: ['user_id','name', 'password','isAdmin','points']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchUser = function(req,res){
    const id = req.params.id;
    if(!isNaN(id)){
        User.findOne({ where: { user_id: req.params.user_id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }
    
}

exports.createUser = async function(req,res){
    const {name,password,isAdmin,points} = req.body;
    const saltRounds = 10; // Number of salt rounds to use for hashing
    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      let user = User.build({ name: name, password: hashedPassword,isAdmin:isAdmin,points:points })
      // save object in DB
      await user.save()
          .then(data => {
              res.json(data);
      })
          .catch(err => {
              res.status(500).json({ message: err.message })
      })
    } catch (err) {

    }

    
    


}


exports.deleteUser = function (req,res){
    const id = req.params.id;
    if(!isNaN(id)){
        User.destroy({ where: { user_id: req.params.id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }
    
}




