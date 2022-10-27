const mongoose = require("mongoose");

const QuotesSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    quoteDiscription: String,
    titleID: {
        type: mongoose.Types.ObjectId,
        ref: "titleModel"

    }
})

const quotesModel = mongoose.model("quote", QuotesSchema)
module.exports=quotesModel;