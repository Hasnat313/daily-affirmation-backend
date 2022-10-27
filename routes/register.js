const express = require("express"),
router=express.Router(),
controller=require("../controllers/registerController")

router.get("/", controller.getUser)
router.post("/" , controller.postUser)


module.exports=router