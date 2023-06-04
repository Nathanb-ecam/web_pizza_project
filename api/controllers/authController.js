const jwt = require("jsonwebtoken")
let userController = require('./userController');
let api_secret = require('../api_secret_key.json');

exports.generateToken = async function (req, res, next) {
    await userController.searchUserByCredentials(req,res);
    // console.log("req.data",req.data)
    if (req.data){
        const jwtKey = api_secret.my_secret_key;
        const jwtExpirySeconds = 3000;
        let payload = { name: req.data.name,password:req.data.password };
        let token = jwt.sign(payload, jwtKey, {
            algorithm: "HS256",
            expiresIn: jwtExpirySeconds,
        })  
        //res.cookie("token", token, { httpOnly: true, secure:true,maxAge: jwtExpirySeconds * 1000 });
        res.json({"token" : token, "maxAge": jwtExpirySeconds * 1000 ,"isAdmin":req.data.isAdmin,"user_id":req.data.user_id});
    }
    else{
        res.status(404).json({message:"User not valid"})
        console.log("");
    }

}


exports.isAuthorized = async function (req, res, next) {
    if (typeof req.headers.authorization !== "undefined") {
        // retrieve the authorization header and parse out the JWT using the split function
        let token = req.headers.authorization.split(" ")[1];
        // Here we validate that the JSON Web Token is valid
        jwt.verify(token, api_secret.my_secret_key, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "Not Authorized" });
        }
        //req.user = payload; // allow to use the user id in the controller
        return next(); }); 
    }
    else{
        res.status(404).json({"error":"Not authorized"})
        console.log("problem in isAuthorized"); 
    }
}