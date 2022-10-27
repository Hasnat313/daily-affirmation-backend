
const languageModel=require("../models/language")
const mongoose = require("mongoose");
exports.getLanguage= (req,res)=>{
    languageModel.find((err,data)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(data);
        }
    })
}
exports.postLanguage= (req,res)=>{
    const languagePost =req.body.languageName;  
    const newLanguage = new languageModel({
        _id:new mongoose.Types.ObjectId(),
        language:languagePost
    })
    newLanguage.save(function(err){
        if(err){
            res.json(err);
        }
        else{
            res.json(`${languagePost} Added`);
        }
    })
}
exports.deleteLanguage= (req,res)=>{
    const id= req.body.id;
    languageModel.deleteOne({_id:id},(err)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(` ${id} Deleted`);
        }
    })
}
