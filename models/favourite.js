const mongoose = require("mongoose");
const  favouritsSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    titleID: {
        type: mongoose.Types.ObjectId,
        ref: "titleModel"
    }
})
const favouriteModel=mongoose.model("favourite", favouritsSchema)
module.exports=favouriteModel;