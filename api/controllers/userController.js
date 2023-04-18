let User = require('../models/userModel');

exports.searchUserByCredentials = async function(req,res){
    // console.log("ByCred",req.body.password)
    let data = await User.findOne({where:{name:req.body.name,password:req.body.password}})
    req.data = data
    }
    

exports.listUsers = function (req,res){
    User.findAll({ attributes: ['user_id','name', 'password','points']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchUser = function(req,res){
    User.findOne({ where: { user_id: req.params.user_id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
}

exports.createUser = async function(req,res){
    let user = User.build({ name: req.body.name, password: req.body.password,points:req.body.points })
    // save object in DB
    await user.save()
        .then(data => {
            res.json(data);
    })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}


exports.deleteUser = function (req,res){
    User.destroy({ where: { user_id: req.params.user_id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
}







// exports.userDetails = function (req,res){
//     let id  =req.params.user_id;
//     if (id >=0 && id < users.length){
//         res.json({id:users[id]});
//     }
//     else{

        
//         res.status(404).json({"message":"id out or range"});
//     }
// }





// // at route /user
// exports.createUser = function (req,res){
//     let id = users.length;
//     let name = req.body.name;
//     let password = req.body.password;
//     let points = req.body.points;
    
//     //    res.status(404).json({"error":"invalid body format", "valid_keys":["name","price"]});
//     let user = new User(name,password,points);
//     users.push(user);
//     res.json({id:user});
    
// }

// // at route /users
// exports.authentifyUser = function(req,res){
//     let found = false;
//     let name = req.body.name;
//     let password = req.body.password;
//     let user = new User(name,password,0);
//     for (const user of users){
//         if (user.name==name&& user.password == password){
//             found=true;
//             res.json(user);
//             break;
//         }
//     }
//     if (!found){
//         res.json({"Authenticated":false});
//     }
// }
