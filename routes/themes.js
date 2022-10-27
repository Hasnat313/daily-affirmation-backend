const express = require("express"),
router=express.Router(),
controller=require("../controllers/themesController")

router.get("/", controller.getThemes)
router.post("/" , controller.postThemes)
router.put("/" , controller.putThemes)
router.delete("/" , controller.deleteThemes)


module.exports=router