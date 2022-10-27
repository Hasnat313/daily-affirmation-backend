const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    email: String,
    password: String,
})

const adminModel = mongoose.model("admin", adminSchema)
module.exports=adminModel;