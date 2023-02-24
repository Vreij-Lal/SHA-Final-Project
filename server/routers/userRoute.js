//getting user controller
const userController = require("../controllers/userController");

//getting express
const express = require("express");

//getting express router
const router = express.Router();

//defining routes
router.get("/:id", userController.getAllUsers);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

//exporting routes
module.exports = router;
