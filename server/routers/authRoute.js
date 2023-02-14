//getting user controller
const authController = require("../controllers/authController");

//getting express
const express = require("express");

//getting express router
const router = express.Router();

//defining routes
router.post("/login", authController.login);
router.post("/signup", authController.signup);
router.post("/verify", authController.verify);

//exporting routes
module.exports = router;
