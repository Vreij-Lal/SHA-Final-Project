//getting user controller
const userController = require("../controllers/userController");

//getting express
const express = require("express");

//getting express router
const router = express.Router();

//defining routes
router.get("/:id", userController.getAllUsers);
router.post("/sendFriendRequest", userController.sendFriendRequest);
router.post("/cancelFriendRequest", userController.cancelFriendRequest);

//exporting routes
module.exports = router;
