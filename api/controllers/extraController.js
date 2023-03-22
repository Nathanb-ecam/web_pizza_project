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