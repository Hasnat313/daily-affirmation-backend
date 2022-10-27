
const mongoose = require("mongoose");

const catagorySchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    catagoryName: String,
    catagoryArea: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "improvementAreas"
    }
})

const catagory = mongoose.model("catagory", catagorySchema)
module.exports=catagory;