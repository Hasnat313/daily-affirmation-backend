const catagory=require("../models/catagory")
const mongoose = require("mongoose");

exports.getCatagory=(req,res)=>{

    const catagoryAreaId = req.body.catagoryAreaId;
    catagory.
    find({
        catagoryArea: catagoryAreaId
    }).
    populate("catagoryArea").
    exec(function (err, foundResult) {
        res.json(foundResult)

    });

}

exports.postCatagory=(req,res)=>{
    const catagoryName = req.body.catagoryName;
    const catagoryAreaId = req.body.catagoryAreaId;


    const newCatagory = new catagory({
        _id: mongoose.Types.ObjectId(),
        catagoryName: catagoryName,
        catagoryArea: catagoryAreaId
    })
    newCatagory.save(function(err){
        if(!err){
            res.json(newCatagory)
        }
    });
    
}
exports.deleteCatagory=(req,res)=>{
    const catagoryId = req.body.catagoryId;
        catagory.deleteOne({
            _id: catagoryId
        }, function (err, foundResult) {
            try {
                res.json(foundResult)
                
            } catch (err) {
                res.json(err)
            }

        })
    
}
