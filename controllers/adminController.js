
const mongoose = require("mongoose");
const adminModel = require("../models/admin");

exports.postAdmin=(req,res)=>{

    const email = req.body.Email;
    const password = req.body.Password;
    const admin= new adminModel({
        _id:mongoose.Types.ObjectId(),
        email:email,
        password:password

    })
    admin.save(()=>{
        res.json(admin);
    });
}


