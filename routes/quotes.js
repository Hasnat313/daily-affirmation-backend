const express = require("express"),
router=express.Router(),
controller=require("../controllers/quotesController")

router.get("/", controller.getQuotes)
router.post("/" , controller.postQuotes)
router.delete("/" , controller.deleteQuotes)


module.exports=router