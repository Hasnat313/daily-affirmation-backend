const mongoose = require("mongoose");
const improvementAreas_Schema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    ImprovementFieldName: {
        type: String,
        required: true
    }
})
const improvementAreaModel = mongoose.model("improvementAreas", improvementAreas_Schema);
module.exports=improvementAreaModel;