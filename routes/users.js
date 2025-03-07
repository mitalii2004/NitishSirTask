var express = require('express');
var router = express.Router();
const controller = require("../controllers/userController");
const {session} = require("../helpers/commonHelper")

// router.get("/users", controller.users);
// router.get("/product", controller.product);
// router.get("/contactUs", controller.contactUs);

module.exports = router;
