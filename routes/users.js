var express = require('express');
var router = express.Router();
const controller = require("../controllers/userController");
const { session } = require("../helpers/commonHelper")
const {otpMiddleware} = require("../middleware/otpVerifyMiddleware")
const {storePreviousPage}= require("../helpers/commonHelper")


router.get("/", controller.dashboard);
router.get("/addUser", controller.addUser)
router.post("/createUser", controller.createUser);
router.get("/users", otpMiddleware,controller.users);
router.get("/product", otpMiddleware,controller.product);
router.get("/contactUs", otpMiddleware,controller.contactUs);

router.get("/otpVerify", controller.otpVerify);
router.post("/otpVerifyDone", controller.otpVerifyDone);

module.exports = router;
