const express = require("express")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))

// mongoose.connect("mongodb+srv://UsamaKhan:king1234567@cluster0.kcd9l.mongodb.net/AffirmationProjectDB")
mongoose.connect("mongodb://127.0.0.1:27017/AffirmationProjectDB")
 
const {Schema} = mongoose;

app.use("/impArea", require("./routes/impArea.js"))
app.use("/catagory", require("./routes/catagory.js"))
app.use("/title", require("./routes/title.js"))
app.use("/quotes", require("./routes/quotes.js"))
app.use("/themes", require("./routes/themes.js"))
app.use("/language", require("./routes/language.js"))
app.use("/register", require("./routes/register.js"))
app.use("/favourite", require("./routes/favourite"))
app.use("/adminLogin", require("./routes/admin"))


app.listen(3000, function () {
    console.log("server started on port 3000")
})