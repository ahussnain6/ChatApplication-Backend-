const express = require("express");
const {getUsers,getprofiles} = require("../controllers/Misc.js");
const router = express.Router();
router.route("/users").get(getUsers);
router.route("/profileget").get(getprofiles);
module.exports = router;