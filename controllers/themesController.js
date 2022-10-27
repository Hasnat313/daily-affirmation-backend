
const themeModel=require("../models/themes")
const mongoose = require("mongoose");
exports.getThemes=(req,res)=>{
    themeModel.find((err,data)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(data);
        }
    })
}
exports.postThemes=(req,res)=>{
    const postImgPath =req.body.imgPath;
        const postColor1=req.body.color1;
        const postColor2=req.body.color2;
        const postColor3=req.body.color3;
        const newTheme = new themeModel({
            _id:new mongoose.Types.ObjectId(),
            color1:postColor1,
            color2:postColor2,
            color3:postColor3,
            imgPath:postImgPath

        })
        newTheme.save(function(err){
            if(err){
                res.json(err);
            }
            else{
                res.json(`your data ${postColor1} ${postColor2} ${postColor3} is added`);
            }
        })
}
exports.putThemes=(req,res)=>{
    const id= req.body.id;
        const updateImgPath=req.body.imgPath;
        const postColor1=req.body.color1;
        const postColor2=req.body.color2;
        const postColor3=req.body.color3;
        themeModel.updateOne({_id:id},{imgPath:updateImgPath,color1:postColor1,color2:postColor2
        ,color3:postColor3},{upsert:true},(err)=>{
            if(!err){
                res.json(`your data ${postColor1} ${postColor2} ${postColor3} is updated`);
            }
        })
}
exports.deleteThemes=(req,res)=>{
    const id= req.body.id;
        themeModel.deleteOne({_id:id},(err)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(` ${id} Deleted`);
            }
        })

}