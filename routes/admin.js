const express = require("express"),
router=express.Router(),
controller=require("../controllers/adminController")


router.post("/" ,controller.postAdmin);



module.exports=router
