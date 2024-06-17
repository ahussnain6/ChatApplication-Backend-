const express = require("express");
const {sendmsg,getMsg,editmsg,delmsg} = require("../controllers/Message.js"); 
const router = express.Router();
router.route("/msg").post(sendmsg);
router.route("/getmsg").get(getMsg);
router.route("/delmsg/:id").delete(delmsg);
router.route("/editmsg/:id").put(editmsg);
module.exports = router;