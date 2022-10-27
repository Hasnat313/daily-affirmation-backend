const userModel = require("../models/register");
const mongoose = require("mongoose");
const genderModel = require("../models/gender");
exports.getUser = (req, res) => {
  const userId = req.body.id;

  userModel
    .find({ _id: userId })
    .populate("improvementAreas")
    .populate("category")
    .exec((err, data) => {
      res.json(data);
    });
};
exports.postUser = (req, res) => {
  const namePost = req.body.name;
  const genderPost = req.body.gender;
  const improvementAreaID = req.body.impAreaID;
  const categoryID = req.body.catagoryID;
  console.log(namePost, genderPost);
  const newUser = new userModel({
    _id: new mongoose.Types.ObjectId(),
    name: namePost,
    improvementAreas: improvementAreaID,
    category: categoryID,
  });
  newUser.save((err) => {
    const selectGender = new genderModel({
      _id: newUser._id,
      desc: genderPost,
    });

    selectGender.save((err) => res.json("Saved Succesfully"));
  });
};
