
const mongoose = require("mongoose");
const genderSchema=mongoose.Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    desc:String
})

const genderModel=mongoose.model("gender",genderSchema,"gender");
module.exports=genderModel;