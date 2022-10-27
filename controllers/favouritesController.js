const favouriteModel=require("../models/favourite")
const mongoose = require("mongoose");

exports.getFavourite= (req,res)=>{
    favouriteModel.find({}, function(err,foundResult){
        if(!err){
            res.json(foundResult)
        }
        else(
            res.json(err)
        )
      })
}
exports.postFavourite=(req,res)=>{
    const titleId = req.body.titleId;
    const newfavourite = new favouriteModel ({
        _id: mongoose.Types.ObjectId(),
        titleID:titleId
    })
    newfavourite.save(function(err){
        if(!err){
            res.json(newfavourite)
        }
    }); 
}
exports.deleteFavourite=(req,res)=>{
    const id = req.body.favouriteItemId;
        favouriteModel.deleteOne({
            _id: id
        }, function (err, foundResult) {
            try {
                res.json(foundResult)
            } catch (err) {
                res.json(err)
            }

        })
}