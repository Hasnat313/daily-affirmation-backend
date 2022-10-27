const express = require("express"),
router=express.Router(),
controller=require("../controllers/languageController")

router.get("/", controller.getLanguage)
router.post("/" , controller.postLanguage)
router.delete("/" , controller.deleteLanguage)


module.exports=router