const express = require("express"),
router=express.Router(),
controller=require("../controllers/titleController")

router.get("/", controller.getTitle)
router.post("/" , controller.postTitle)
router.delete("/" , controller.deleteTitle)


module.exports=router