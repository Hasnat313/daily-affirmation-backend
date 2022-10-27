const mongoose = require("mongoose");

const userSchema= mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    improvementAreas:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"improvementAreas"
    }],
    category:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"catagory"
    }]
    
})

const userModel=mongoose.model("user",userSchema,"user");
module.exports=userModel;