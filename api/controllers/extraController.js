let Extra = require('../models/extraModel');

let extras = [new Extra("frites",2),new Extra("fromage",3),new Extra("salade",5)]

exports.extraDetails = function (req,res){
    let extra_id  =req.params.extra_id;
    if (extra_id >=0 && extra_id < extras.length){
        res.json({extra_id:extras[extra_id]});
    }
    else{
        res.status(404).json({"message":"id out or range"});
    }
    
    
}

exports.extraList = function (req,res){
    res.json({"extras":extras});
}


exports.deleteExtra = function (req,res){
    let id = req.params.extra_id;
    
    if (id >=0 && id < extras.length){
        let extraToRemove = extras[id];
        extras.splice(id,1);
        res.json({id:extraToRemove});
    }
    else{
        res.status(404).json({"message":"id out or range"});
    }
}

exports.createExtra = function (req,res){
    let name = req.body.name;
    let price = req.body.price;
    if (name==undefined || price == undefined){
        res.status(404).json({"error":"invalid body format", "valid_keys":["name","price"]});
    }
    else{
        let extra = new Extra(name,price);
        extras.push(extra);
        res.json({id:extra});
    }
}
