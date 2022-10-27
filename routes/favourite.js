const express = require("express"),
router=express.Router(),
controller=require("../controllers/favouritesController")

router.get("/", controller.getFavourite)
router.post("/" ,controller.postFavourite)
router.delete("/" ,controller.deleteFavourite)


module.exports=router
