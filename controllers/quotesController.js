
const  quotesModel=require("../models/quotes")
const mongoose = require("mongoose");
exports.getQuotes=(req,res)=>{
    const titleId = req.body.titleId;
    quotesModel.
    find({
        tilteID: titleId
    }).
    populate("titleID").
    exec(function (err, foundResult) {
        res.json(foundResult)
    })
}
exports.postQuotes=(req,res)=>{
    const quoteDiscription = req.body.quoteDiscription;
    const titleID = req.body.titleId;

    const newQuote = new quotesModel({
        _id: mongoose.Types.ObjectId(),
        quoteDiscription:quoteDiscription,
        titleID:titleID

    })

    newQuote.save(function(err){
        if(!err){
            res.json(newQuote)
        }
    });
}
exports.deleteQuotes=(req,res)=>{
    const quoteId = req.body.quoteId;
    quotesModel.deleteOne({
        _id: quoteId
    }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.send(err)
        }

    })

}
