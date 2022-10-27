const titleModel=require("../models/title")
const mongoose = require("mongoose");

exports.getTitle=(req,res)=>{
    const catagoryId = req.body.catagoryId;

    titleModel.
    find({
        titleCatagory: catagoryId
    }).
    populate("titleCatagory").
    exec(function (err, foundResult) {
        res.json(foundResult)
    })
}
exports.postTitle=(req,res)=>{
    const titleName = req.body.titleName;
    const catagoryID = req.body.catagoryId;

    const newTitle = new titleModel({
        _id: mongoose.Types.ObjectId(),
        titleName: titleName,
        titleCatagory: catagoryID

    })
    newTitle.save(function(err){
        if(!err){
            res.json(newTitle);
        }
    });
    
}
exports.deleteTitle=(req,res)=>{
    const titleId = req.body.titleId;
    titleModel.deleteOne({
        _id: titleId
    }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }

    })

}
