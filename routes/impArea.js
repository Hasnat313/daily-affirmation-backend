const express = require("express"),
router=express.Router(),
impArea=require("../controllers/impAreaController")

router.get("/", impArea.getImpArea)
router.post("/" , impArea.postImpArea)
router.delete("/" , impArea.deleteImpArea)
router.put("/" , impArea.putImpArea)

module.exports=router

