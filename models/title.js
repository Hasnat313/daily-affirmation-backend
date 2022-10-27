const mongoose = require("mongoose");


const titleSchema = new mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    titleName: String,
    titleCatagory: {
        type: mongoose.Types.ObjectId,
        ref: "catagory"
    }

})
const titleModel = mongoose.model("titleModel", titleSchema)
module.exports=titleModel;