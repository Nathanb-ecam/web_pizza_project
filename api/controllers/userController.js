let User = require('../models/userModel');

let users = [
    new User("Nathan","1234",20),
    new User("Yiming","1234",30),
]

exports.userDetails = function (req,res){
    let id  =req.params.user_id;
    if (id >=0 && id < users.length){
        res.json({id:users[id]});
    }
    else{

        
        res.status(404).json({"message":"id out or range"});
    }
}

exports.listUsers = function (req,res){
    res.json({"users":users});
}


exports.deleteUser = function (req,res){
    let id = req.params.user_id;
    
    if (id >=0 && id < users.length){
        let userToRemove = users[id];
        users.splice(id,1);
        res.json({id:userToRemove});
    }
    else{
        res.status(404).json({"message":"id out or range"});
    }
}

// at route /user
exports.createUser = function (req,res){
    let id = users.length;
    let name = req.body.name;
    let password = req.body.password;
    let points = req.body.points;
    
    //    res.status(404).json({"error":"invalid body format", "valid_keys":["name","price"]});
    let user = new User(name,password,points);
    users.push(user);
    res.json({id:user});
    
}

// at route /users
exports.authentifyUser = function(req,res){
    let name = req.body.name;
    let password = req.body.password;

    for (const user of users){
        if (user.name==name&& user.password == password){
            res.json({"Authenticated":true});
            break;
        }
    }
    res.json({"Authenticated":false});
}
