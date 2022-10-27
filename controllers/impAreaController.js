
var improvementAreaModel=require("../models/impArea")
const mongoose = require("mongoose");
exports.getImpArea= (req,res)=>{
    improvementAreaModel.find({}, function (err, foundResult) {
        try {
            res.json(foundResult);
        } catch (err) {
            res.json(err)
        }
    })
}

exports.postImpArea=(req,res)=>{
    const impAreaName = req.body.impAreaName;
        const newArea = new improvementAreaModel({
            _id: mongoose.Types.ObjectId(),
            ImprovementFieldName: impAreaName
        })
        newArea.save(function (err) {
            try {
                res.json(newArea)
            } catch (err) {
               res.json(err)
            }
        });
}

exports.deleteImpArea=(req,res)=>{
    const impAreaID = req.body.impAreaID;
        improvementAreaModel.deleteOne({
            _id: impAreaID
        }, function (err, foundResult) {
            try {
                res.json(foundResult);
            } catch (err) {
                res.json(err)
            }

        })
}

exports.putImpArea=(req,res)=>{
    const impAreaID = req.body.impAreaID;
        const newName = req.body.nameToUpdate;
        improvementAreaModel.updateOne({
            _id: impAreaID
        }, {
            ImprovementFieldName: newName
        }, {
            upsert: true
        }, function (err, foundResult) {
            try {
                res.json(foundResult)
            } catch (err) {
                res.send(err)
            }
        })

}

