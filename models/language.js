const mongoose = require("mongoose");

const languageSchema= mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    language:String,
    
})

const languageModel=mongoose.model("languages",languageSchema,"languages");
module.exports=languageModel;