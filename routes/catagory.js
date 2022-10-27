const express = require("express"),
router=express.Router(),
controller=require("../controllers/catagoryController")

router.get("/", controller.getCatagory)
router.post("/" , controller.postCatagory)
router.delete("/" , controller.deleteCatagory)


module.exports=router