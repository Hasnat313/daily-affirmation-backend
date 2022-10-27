const mongoose = require("mongoose");

const themeSchema= mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    color1:String,
    color2:String,
    color3:String,
    imgPath:String
})


const themeModel=mongoose.model("themes",themeSchema,"themes");
module.exports=themeModel;